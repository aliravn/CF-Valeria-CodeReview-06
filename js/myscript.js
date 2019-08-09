const addTaskButton = $("#addTask");
const input = $("#input");
const taskList = $("#tasks");

addTaskButton.click(addTask);
function addTask(){
	console.log("hello from addTaskButton");
	console.log(input.val());
	var taskText = document.createTextNode(input.val());
	var div = document.createElement("div")
	div.append(taskText);  
	taskList.append(div);
}
