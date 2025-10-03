// Arreglo para almacenar las tareas
let tareas = [];

// Referencias al DOM
const taskform = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const warning = document.getElementById('warning');

// Función para agregar una tarea
function agregarTarea() {
    const texto = taskInput.value.trim();
    if (texto === "") {
        warning.textContent = "La tarea no puede estar vacía";
        return;
    };
    warning.textContent = "";

    // Utilización de objetos preconstruidos de Js
    const id = Math.floor(Math.random() * 1500);
    const fecha = new Date().toLocaleDateString();

    // Creación del objeto tarea
    const tarea = {
        id: id,
        fecha: fecha,
        texto: texto
    };
    tareas.push(tarea);
    mostrarTareas();
    taskInput.value = "";
};

// Función para eliminar una tarea
function eliminarTarea() {
    tareas = tareas.filter(tarea => tarea.id !== id);
    mostrarTareas();
};

// Función para mostrar tareas en el DOM
function mostrarTareas() {
    taskList.innerHTML = "";
    tareas.forEach(tarea => {
        const li = document.createElement("li");
        li.textContent = tarea.texto;

        const dateSpan = document.createElement("span");
        dateSpan.className = "date";
        dateSpan.textContent = ` (${tarea.fecha})`;

        li.appendChild(dateSpan);

        // Eliminar tarea
        li.onclick = () => eliminarTarea(tarea.id);

        taskList.appendChild(li);
    });
};

// Evento para el formulario
taskform.addEventListener("submit", function(e) {
    e.preventDefault();
    agregarTarea();
});
