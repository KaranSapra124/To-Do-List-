const TaskBox = document.getElementById("TaskBox");
const Inpt = document.getElementById("Inpt");
const Inpt1 = document.getElementById("Inpt1");
const Btn = document.getElementById("Btn");
let TaskArr = [];

window.addEventListener("load", () => {
  const ParsedArr = JSON.parse(localStorage.getItem("data"));
  DisplayArr(ParsedArr);
});

Btn.addEventListener("click", () => {
  if (localStorage.getItem("data")) {
    const ParsedArr = JSON.parse(localStorage.getItem("data"));
    ParsedArr.push({
      title: Inpt.value,
      date: Inpt1.value,
    });
    localStorage.setItem("data", JSON.stringify(ParsedArr));
    DisplayArr(ParsedArr);
  } else {
    TaskArr.push({
      title: Inpt.value,
      date: Inpt1.value,
    });
    localStorage.setItem("data", JSON.stringify(TaskArr));
    const ParsedArr = JSON.parse(localStorage.getItem("data"));
    DisplayArr(ParsedArr);
  }
});

const DisplayArr = (arr) => {
  //Function to display task
  TaskBox.innerHTML = "";
  arr?.map((elem, index) => {
    return (TaskBox.innerHTML += `
        <div id="task" class="bg-white text-black shadow-md shadow-white flex justify-between items-center  rounded m-2 p-2 text-center">
        <p class="m-2">${elem.title}</p>
        <p class="m-2">${elem.date}</p>
        <i class="fa-solid fa-trash ml-2 cursor-pointer hover:text-red-500" onclick="DeleteTask(${index})"></i>
        <i class="fas fa-pen ml-2 cursor-pointer hover:text-green-500" onclick="UpdateTask(${index})"></i>

        </div>
        `);
  });
};

const DeleteTask = (i) => {
  //Function to delete task
  const FilterArr = TaskArr.filter((elem, index) => {
    return index !== i;
  });
  console.log(FilterArr);
  TaskArr = FilterArr;
  DisplayArr(TaskArr);
};

const UpdateTask = (i) => {
  //   const RemovedElem = TaskArr.splice(i, 1);
  let findElem = TaskArr.find((elem, index) => {
    return index == i;
  });
  let UpdatedVal = prompt("Enter New Value Of Task...", findElem.title);
  let UpdatedDate = prompt("Enter New Date...", findElem.date);
  TaskArr.splice(i, 1, {
    title: UpdatedVal,
    date: UpdatedDate,
  });
  DisplayArr(TaskArr);
};
