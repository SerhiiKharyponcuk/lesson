(() => {
  "use strict";

  const apiUrl = "http://127.0.0.1:3001/students";

  function requestStudents(path = "", options = {}) {
    return fetch(`${apiUrl}${path}`, options).then((response) => {
      if (!response.ok) throw new Error(`Помилка сервера: ${response.status}.`);
      if (response.status === 204) return null;
      return response.json();
    });
  }

  function getStudents() {
    return requestStudents();
  }

  function addStudent(student) {
    return requestStudents("", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student),
    });
  }

  function updateStudent(id, student, method = "PATCH") {
    return requestStudents(`/${encodeURIComponent(id)}`, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student),
    });
  }

  function deleteStudent(id) {
    return requestStudents(`/${encodeURIComponent(id)}`, { method: "DELETE" });
  }

  window.initStudents({
    getStudents,
    addStudent,
    updateStudent,
    deleteStudent,
  });
})();
