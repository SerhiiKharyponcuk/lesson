const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const localDirectory = path.join(root, ".local");
const databaseFile = path.join(localDirectory, "students.json");
const configFile = path.join(localDirectory, "config.json");
const port = Number(process.env.PORT) || 3001;

fs.mkdirSync(localDirectory, { recursive: true });
if (!fs.existsSync(databaseFile)) {
  fs.copyFileSync(path.join(root, "data", "students.json"), databaseFile);
}

function sendJson(response, status, data) {
  response.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
  });
  response.end(data === undefined ? "" : JSON.stringify(data));
}

async function readBody(request) {
  let body = "";
  for await (const chunk of request) {
    body += chunk;
    if (body.length > 100000) throw new Error("Завеликий запит.");
  }
  return JSON.parse(body);
}

function validStudent(student) {
  return (
    typeof student.name === "string" &&
    student.name.trim().length > 0 &&
    Number.isInteger(student.age) &&
    student.age >= 1 &&
    student.age <= 120 &&
    typeof student.course === "string" &&
    student.course.trim().length > 0 &&
    Array.isArray(student.skills) &&
    student.skills.length > 0 &&
    student.skills.every(
      (skill) => typeof skill === "string" && skill.trim().length > 0,
    ) &&
    typeof student.email === "string" &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(student.email) &&
    typeof student.isEnrolled === "boolean"
  );
}

async function handleStudents(request, response, id) {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS",
  );
  response.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (request.method === "OPTIONS") return sendJson(response, 204);

  let body;
  if (["POST", "PATCH", "PUT"].includes(request.method)) {
    try {
      body = await readBody(request);
      if (!body || typeof body !== "object" || Array.isArray(body)) {
        return sendJson(response, 400, {
          message: "Очікується об’єкт студента.",
        });
      }
    } catch (error) {
      return sendJson(response, 400, { message: "Некоректний JSON." });
    }
  }

  const database = JSON.parse(fs.readFileSync(databaseFile, "utf8"));
  const students = database.students;
  const index = students.findIndex((student) => String(student.id) === id);

  if (id && index === -1)
    return sendJson(response, 404, { message: "Студента не знайдено." });
  if (request.method === "GET")
    return sendJson(response, 200, id ? students[index] : students);

  let result;
  if (request.method === "POST" && !id) {
    const nextId = Math.max(0, ...students.map((student) => student.id)) + 1;
    result = { ...body, id: nextId };
    if (!validStudent(result))
      return sendJson(response, 400, { message: "Перевір дані студента." });
    students.push(result);
  } else if (["PATCH", "PUT"].includes(request.method) && id) {
    result =
      request.method === "PATCH"
        ? { ...students[index], ...body }
        : { ...body };
    result.id = students[index].id;
    if (!validStudent(result))
      return sendJson(response, 400, { message: "Перевір дані студента." });
    students[index] = result;
  } else if (request.method === "DELETE" && id) {
    students.splice(index, 1);
  } else {
    return sendJson(response, 405, { message: "Метод не підтримується." });
  }

  const temporaryFile = `${databaseFile}.tmp`;
  fs.writeFileSync(temporaryFile, JSON.stringify(database, null, 2));
  fs.renameSync(temporaryFile, databaseFile);
  return sendJson(
    response,
    request.method === "POST" ? 201 : request.method === "DELETE" ? 204 : 200,
    result,
  );
}

function serveFile(response, pathname) {
  const relativePath =
    pathname === "/" ? "/pages/homework/frontend-4/index.html" : pathname;
  const segments = relativePath.split("/");
  const file = path.resolve(root, `.${relativePath}`);
  const types = {
    ".html": "text/html",
    ".js": "text/javascript",
    ".css": "text/css",
    ".json": "application/json",
    ".svg": "image/svg+xml",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".webp": "image/webp",
    ".ico": "image/x-icon",
  };
  const contentType = types[path.extname(file).toLowerCase()];

  if (
    !file.startsWith(`${root}${path.sep}`) ||
    segments.some((segment) => segment.startsWith(".")) ||
    segments.includes("node_modules") ||
    !contentType
  ) {
    return sendJson(response, 403, { message: "Доступ заборонено." });
  }

  if (!fs.existsSync(file) || !fs.statSync(file).isFile()) {
    return sendJson(response, 404, { message: "Файл не знайдено." });
  }

  response.writeHead(200, { "Content-Type": `${contentType}; charset=utf-8` });
  fs.createReadStream(file).pipe(response);
}

const server = http.createServer(async (request, response) => {
  try {
    const url = new URL(request.url, `http://127.0.0.1:${port}`);
    const pathname = decodeURIComponent(url.pathname);
    if (pathname === "/") {
      response.writeHead(302, {
        Location: "/pages/homework/frontend-4/index.html",
      });
      return response.end();
    }
    const studentRoute = pathname.match(/^\/students(?:\/([^/]+))?\/?$/);

    if (studentRoute)
      return await handleStudents(request, response, studentRoute[1]);
    if (pathname === "/api/config" && request.method === "GET") {
      const config = fs.existsSync(configFile)
        ? JSON.parse(fs.readFileSync(configFile, "utf8"))
        : {};
      return sendJson(response, 200, { pixabayKey: config.pixabayKey || "" });
    }

    if (request.method === "GET") return serveFile(response, pathname);
    return sendJson(response, 405, { message: "Метод не підтримується." });
  } catch (error) {
    sendJson(response, 500, { message: "Помилка локального сервера." });
  }
});

server.listen(port, "127.0.0.1", () => {
  console.log(`Домашні завдання: http://127.0.0.1:${port}`);
});
