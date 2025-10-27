const inputEl = document.querySelector("input");
const addBtn = document.getElementById("addBtn");
const listEl = document.getElementById("listEl");
const task = [];
addBtn.addEventListener("click",()=>{
    const taskText = inputEl.value.trim();

    
    if(taskText === ""){
        alert("VUi lòng nhập dữ liệu !")
        return
    }
    
    const duplicateEL = task.some(function(text){
        return text.toLowerCase()=== taskText.toLowerCase()
    })
    if(duplicateEL){
        alert("Dữ liệu bị trùng , vui lòng nhập lại !")
        return
    }
    task.push(taskText);
    
    
    const liEl = document.createElement("li");
    liEl.className = "bg-[#8758ff] text-white px-4 py-3 rounded-[4px] mb-4 flex justify-between items-center"
    
    const textDiv = document.createElement("div");
    textDiv.className = "textCreate";
    textDiv.textContent = taskText;
    liEl.appendChild(textDiv);
    listEl.appendChild(liEl);
    
    const divBtn = document.createElement("div");
    divBtn.className = "flex gap-4 ";
    liEl.appendChild(divBtn);
    
    const editBtn = document.createElement("button");
    editBtn.className = "cursor-pointer";
    editBtn.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
    divBtn.appendChild(editBtn);

    editBtn.addEventListener("click",(e)=>{
        e.stopPropagation();
         liEl.innerHTML = "";
        liEl.className = "border-none "
        const editContainer = document.createElement("div");
        editContainer.className = "bg-[#1a1a40] py-3 mb-4 flex justify-center items-center "
        liEl.appendChild(editContainer);
        
        const inputEdit = document.createElement("input");
        inputEdit.type = "text";
        inputEdit.value = textDiv.textContent;
        inputEdit.className = "w-[300px] flex-1 bg-[#1a1a40] text-white px-4 py-2 border-[0.8px] border-[#8758ff] outline-none focus:border-purple-400 "
        const addEditBtn = document.createElement("button");
        addEditBtn.textContent = "Add Task";
        addEditBtn.className = "  w-[78.21px] h-[41.6px] text-[13.33px] bg-[#8758ff] text-white py-2 hover:bg-purple-600 cursor-pointer";
        
        editContainer.appendChild(inputEdit);
        editContainer.appendChild(addEditBtn);


        addEditBtn.addEventListener("click", () => {
            const newValue = inputEdit.value.trim();
            if (!newValue) return alert("Vui lòng nhập dữ liệu!");
            const exist = task.some(t => t.toLowerCase() === newValue.toLowerCase());
            if (exist) return alert("Task đã tồn tại!");


            liEl.innerHTML = "";
            textDiv.textContent = newValue;
            liEl.appendChild(textDiv);
            liEl.appendChild(divBtn);
        });  

    });

    
    
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "cursor-pointer";
    deleteBtn.innerHTML =`<i class="fa-solid fa-trash"></i>`;
    divBtn.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    liEl.remove();
    });
})
