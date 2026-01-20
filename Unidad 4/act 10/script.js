window.onload = () => {

    const btnAdd = document.getElementById('btn-add');
    const divTodo = document.getElementById('todo');

    btnAdd.addEventListener('click', () => {
        const tarea = prompt('Ingrese la nueva tarea:');
        if (tarea && tarea.trim() !== '') {
            const div = document.createElement('div');
            div.className = 'task';
            div.id = new Date().getMilliseconds();
            div.draggable = true;
            div.textContent = tarea.trim();
            divTodo.appendChild(div);

            //1. dragStart
            div.addEventListener('dragstart', (e) => {
                //console.log('arrastrando tarea ' + div.textContent);
                // Identificar el elemento que se está arrastrando
                e.dataTransfer.setData("text/plain", div.id);
            });
        }
    });

    const columnas = document.getElementsByClassName('columna');
    if(columnas.length > 0) {
        Array.from(columnas).forEach(element => {
            //2. dragOver
            element.addEventListener('dragover', (event) => {
                event.preventDefault();
                element.style.border = "3px solid black";
            });
            
            // 3. drop
            element.addEventListener('drop', (e) => {
                const arrastrada = document.getElementById(e.dataTransfer.getData("text/plain"));
                //console.log('drop sobre ' + element.id);
                //Quitar del original y agregar al nuevo
                element.appendChild(arrastrada);
                element.style.border = "1px solid #ccc";
            });

            // Leave borde color resaltado
            element.addEventListener("dragleave", () => {
                element.style.border = "1px solid #ccc";
            });
        });
    }
}