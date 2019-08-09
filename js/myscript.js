const addTaskButton = $("#addTask");
const input = $("#input");

addTaskButton.click(addTask);
function addTask(){
	console.log("hello from addTaskButton");
	console.log(input.val());

}
