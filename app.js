const TaskBox = document.getElementById("TaskBox");
const Inpt = document.getElementById("Inpt")
const Inpt1 = document.getElementById("Inpt1")
const Btn = document.getElementById("Btn")
const TaskArr = [];

Btn.addEventListener("click", () => {
    TaskArr.push({
        title: Inpt.value,
        date: Inpt1.value
    })
    DisplayArr(TaskArr)
})

const DisplayArr = (arr) => { //Function to display task
    TaskBox.innerHTML = ""
    arr?.map((elem, index) => {
        return TaskBox.innerHTML += `
        <div id="task" class="bg-white text-black shadow-md shadow-white flex justify-between items-center  rounded m-2 p-2 text-center">
        <p class="m-2">${elem.title}</p>
        <p class="m-2">${elem.date}</p>
        <i class="fa-solid fa-trash ml-2 cursor-pointer hover:text-red-500" onclick="DeleteTask(${index})"></i>
        </div>
        `
    })
}

const DeleteTask = (i) => { //Function to delete task
    const FilterArr = TaskArr.filter((elem, index) => {
        return index !== i
    })
    DisplayArr(FilterArr);
}