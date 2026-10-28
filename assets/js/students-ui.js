(() => {
  "use strict";

  window.initStudents = function (api) {
    const form = document.querySelector("#add-student-form");
    const tableBody = document.querySelector("#students-table tbody");
    const status = document.querySelector("#students-status");
    const formTitle = document.querySelector("#student-form-title");
    const saveButton = document.querySelector("#save-student");
    const cancelButton = document.querySelector("#cancel-edit");
    const getButton = document.querySelector("#get-students-btn");
    let students = [];
    let editingId = null;
    let busy = false;

    function showMessage(message, type = "info") {
      status.textContent = message;
      status.dataset.type = type;
    }

    function setBusy(value) {
      busy = value;
      for (const button of document.querySelectorAll(
        ".students-homework button",
      )) {
        button.disabled = value;
      }
      document.querySelector("#runJsBtn").disabled = value;
    }

    function resetForm() {
      editingId = null;
      form.reset();
      formTitle.textContent = "Додати нового студента";
      saveButton.textContent = "Додати студента";
      cancelButton.hidden = true;
    }

    function renderStudents() {
      tableBody.replaceChildren();

      for (const student of students) {
        const row = document.createElement("tr");
        const values = [
          student.id,
          student.name,
          student.age,
          student.course,
          student.skills.join(", "),
          student.email,
          student.isEnrolled ? "Записаний" : "Не записаний",
        ];

        for (const value of values) {
          const cell = document.createElement("td");
          cell.textContent = value;
          row.append(cell);
        }

        const actions = document.createElement("td");
        for (const action of ["edit", "delete"]) {
          const button = document.createElement("button");
          button.type = "button";
          button.className = "wsapp-btn";
          button.dataset.id = student.id;
          button.dataset.action = action;
          button.textContent = action === "edit" ? "Оновити" : "Видалити";
          actions.append(button);
        }

        row.append(actions);
        tableBody.append(row);
      }
    }

    async function refreshStudents() {
      if (busy) return;

      try {
        setBusy(true);
        showMessage("Завантажуємо студентів…");
        students = await api.getStudents();
        renderStudents();
        showMessage(`Студентів у списку: ${students.length}.`);
      } catch (error) {
        showMessage(
          "Не вдалося отримати студентів. Запусти сервер командою npm run homework.",
          "error",
        );
      } finally {
        setBusy(false);
      }
    }

    async function saveStudent(event) {
      event.preventDefault();
      if (busy) return;

      try {
        const student = {
          name: form.elements.name.value.trim(),
          age: Number(form.elements.age.value),
          course: form.elements.course.value.trim(),
          skills: form.elements.skills.value
            .split(",")
            .map((skill) => skill.trim())
            .filter(Boolean),
          email: form.elements.email.value.trim(),
          isEnrolled: form.elements.isEnrolled.checked,
        };

        if (!student.name || !student.course || student.skills.length === 0) {
          showMessage("Заповни ім’я, курс і хоча б одну навичку.", "error");
          return;
        }

        setBusy(true);
        const wasEditing = editingId !== null;

        if (wasEditing) {
          const method = document.querySelector("#update-method").value;
          await api.updateStudent(editingId, student, method);
        } else {
          await api.addStudent(student);
        }

        resetForm();
        students = await api.getStudents();
        renderStudents();
        showMessage(
          wasEditing ? "Інформацію студента оновлено." : "Студента додано.",
        );
      } catch (error) {
        showMessage(`Не вдалося зберегти студента. ${error.message}`, "error");
      } finally {
        setBusy(false);
      }
    }

    async function handleTableClick(event) {
      const button = event.target.closest("button[data-action]");
      if (!button || busy) return;
      const student = students.find(
        (item) => String(item.id) === button.dataset.id,
      );
      if (!student) return;

      try {
        if (button.dataset.action === "edit") {
          editingId = student.id;
          form.elements.name.value = student.name;
          form.elements.age.value = student.age;
          form.elements.course.value = student.course;
          form.elements.skills.value = student.skills.join(", ");
          form.elements.email.value = student.email;
          form.elements.isEnrolled.checked = student.isEnrolled;
          formTitle.textContent = `Редагування: ${student.name}`;
          saveButton.textContent = "Зберегти зміни";
          cancelButton.hidden = false;
          form.scrollIntoView({ behavior: "smooth", block: "center" });
          form.elements.name.focus();
          return;
        }

        setBusy(true);
        await api.deleteStudent(student.id);
        if (editingId === student.id) resetForm();
        students = await api.getStudents();
        renderStudents();
        showMessage("Студента видалено.");
      } catch (error) {
        showMessage(`Не вдалося видалити студента. ${error.message}`, "error");
      } finally {
        setBusy(false);
      }
    }

    getButton.addEventListener("click", refreshStudents);
    form.addEventListener("submit", saveStudent);
    tableBody.addEventListener("click", handleTableClick);
    cancelButton.addEventListener("click", resetForm);
    window.runTask = refreshStudents;
  };
})();
