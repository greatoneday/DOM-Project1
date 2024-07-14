const form = document.querySelector("#form")
const todo = document.querySelector("#todo")
const work = document.querySelector("#work")




form.addEventListener("submit", (e)=>{
    e.preventDefault()
    const li = document.createElement('li');
    li.textContent = work.value //textcontent for the content and value for the input of the text content

    todo.appendChild(li)


    li.addEventListener("click", ()=>{
        li.classList.toggle(`done`)
    })
    li.addEventListener("dblclick", ()=>{
        todo.removeChild(li)
    })

    work.value =""
})

form.addEventListener("reset",(e)=>{
    e.preventDefault()
    todo.innerHTML = ""
})