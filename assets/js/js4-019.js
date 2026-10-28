(() => {
  "use strict";

  const apiUrl = "http://127.0.0.1:3001/students";

  async function requestStudents(path = "", options = {}) {
    try {
      const response = await fetch(`${apiUrl}${path}`, options);
      if (!response.ok) throw new Error(`Помилка сервера: ${response.status}.`);
      if (response.status === 204) return null;
      return await response.json();
    } catch (error) {
      throw error;
    }
  }

  async function getStudents() {
    try {
      return await requestStudents();
    } catch (error) {
      throw error;
    }
  }

  async function addStudent(student) {
    try {
      return await requestStudents("", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(student),
      });
    } catch (error) {
      throw error;
    }
  }

  async function updateStudent(id, student, method = "PATCH") {
    try {
      return await requestStudents(`/${encodeURIComponent(id)}`, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(student),
      });
    } catch (error) {
      throw error;
    }
  }

  async function deleteStudent(id) {
    try {
      return await requestStudents(`/${encodeURIComponent(id)}`, {
        method: "DELETE",
      });
    } catch (error) {
      throw error;
    }
  }

  window.initStudents({
    getStudents,
    addStudent,
    updateStudent,
    deleteStudent,
  });
})();
