let icons=[];
let list=document.querySelector(".taskslist");
let bn=document.querySelector("button");
bn.addEventListener("click",()=>{
    let val=document.querySelector(".taskbar");
    if(val.value=="")
        alert("please enter your task first");
    else{
        let li=document.createElement("li");
        li.innerHTML=`<div class="div-task">
        <input type="checkbox" class="checkb">
        <span>${val.value}</span>
    </div>
    <i class="fa-solid fa-xmark btn"></i>`;
        li.classList.add("task");
        list.appendChild(li);val.value='';
    }
})
list.addEventListener("click", (e) => {
    if (e.target.classList.contains("fa-xmark")) {
        e.target.parentNode.remove();
    }
    if (e.target.classList.contains("checkb")){
        if(e.target.checked){
            e.target.nextElementSibling.style.textDecoration="line-through";
            e.target.parentNode.parentNode.style.backgroundColor="#87EA55";
        }
        else{
            e.target.nextElementSibling.style.textDecoration="none";
            e.target.parentNode.parentNode.style.backgroundColor="#EEE5E9";
        }
    }
});
