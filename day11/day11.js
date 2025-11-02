const ul =document.querySelector("ul")
ul.addEventListener("click",(e)=>{
    if(e.target.classList.contains("down")){
        const li = e.target.parentElement;
        const down = li.nextElementSibling;
        if(down){
            ul.insertBefore(down, li);
        }

    }

    if(e.target.classList.contains("up")){
        const li = e.target.parentElement;
        const up = li.previousElementSibling;
        if(up){
            ul.insertBefore(li, up)
        }
    }
    if(e.target.nodeName === "LI"){
        e.stopPropagation();
        removeEl();
        e.target.classList.add("select");
        
    }
})


const removeEl = () =>{
 const itemSelect = document.querySelector("ul li.select");
 if( itemSelect){
    itemSelect.classList.remove("select");
 }
}
document.addEventListener("click", removeEl);


document.addEventListener("keydown", (e) => {
  const selected = document.querySelector("ul li.select");
    if(e.altKey && e.shiftKey){
        const clone = selected.cloneNode(true);
        clone.classList.remove("select");
        if(e.key=== "ArrowDown"){
            const next = selected.nextElementSibling;
            if (next) {
                ul.insertBefore(clone, next);
            } else {
                ul.appendChild(clone);
            }
        }
        if (e.key === "ArrowUp") {
            ul.insertBefore(clone, selected);
        }
    }

    if(e.altKey){
        if(e.key === "ArrowDown"){
            const next = selected.nextElementSibling;
            if(next){
                ul.insertBefore(next, selected);
            }
        }
        if(e.key=== "ArrowUp"){
            const prev = selected.previousElementSibling;
            if(prev){
                ul.insertBefore(selected, prev);
            }
        }
    }

    if (e.key === "Backspace") {
        selected.remove();
    }
});


const contextMenu = document.querySelector(".contextMenu");
const editBtn = document.querySelector(".editBtn");
const deleteBtn = document.querySelector(".deleteBtn");
const box = document.querySelector(".box");
const inputItem = document.querySelector(".inputItem");
const addBtn = document.querySelector(".addBtn");

document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  const liItem = e.target.closest("li");
  removeEl();
  liItem.classList.add("select");

  contextMenu.style.display = "flex";
  contextMenu.style.top = `${e.clientY}px`;
  contextMenu.style.left = `${e.clientX}px`;

  
});

editBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const li = document.querySelector("li.select");
    if (!li) {
        return;
    }
    inputItem.value = li.firstChild.textContent.trim();
    box.style.display = "block";
    contextMenu.style.display = "none";
});

addBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const li = document.querySelector("li.select");
    if (!li){
        return;
    }
    const newName = inputItem.value.trim();
    if (newName) {
        li.firstChild.textContent = newName + " ";
    }
    box.style.display = "none";
    contextMenu.style.display = "none";
    inputItem.value = "";
});




deleteBtn.addEventListener("click", () => {
  const liItem = document.querySelector("ul li.select");
  liItem.remove();
  contextMenu.style.display = "none";
});


document.addEventListener("click", () => {
    contextMenu.style.display = "none";
    box.style.display = "none";
    const selected = document.querySelector("li.select");
    if (selected) {
        selected.classList.remove("select");
    }
});

box.addEventListener("click", (e) => {
    e.stopPropagation();
});

inputItem.addEventListener("click", (e) => {
    e.stopPropagation();
});
   

document.addEventListener("keydown", (e) => {
    const selected = document.querySelector("ul li.select");
    if(e.key === "Escape"){
        contextMenu.style.display = "none";
        box.style.display = "none";
        if(selected){
            selected.classList.remove("select");
        }
        return;
    }
})