let input=document.querySelector("#tarea")
let button=document.querySelector("#btn-agregar")
let ul=document.querySelector("#lista-tareas")

button.addEventListener("click",()=>{
    // let li=document.createElement("li")
    // li.textContent=input.value

    //mas facil de crear codigo de html
    ul.innerHTML = `
        <li>${input.value}<button class="delete">Eliminar</button></li>
    `;
    input.value=""

    let deleteButton = document.querySelector("#delete");
    deleteButton.addEventListener("click", () => {
        ul.removeChild(li);
    });
    li.appendChild(deleteButton);
    ul.appendChild(li)

})



// let eliminarBtn = document.createElement("button");
    // eliminarBtn.textContent = "Eliminar";
    // eliminarBtn.addEventListener("click", () => {
    //     ul.removeChild(li);
    // });
    //li.appendChild(eliminarBtn);
