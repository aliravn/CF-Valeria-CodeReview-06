const addTaskButton = $("#addTask");
const input = $("#input");
const taskList = $("#tasks");

addTaskButton.click(addTask);
function addTask(){
	console.log("hello from addTaskButton");
	console.log(input.val());
	taskList.append(
		`<div class="list">
			<p>${input.val()}</p>
			<i class="fas fa-check-square"></i>
			<i class="fas fa-times-circle"></i>
		</div>`);
}

// function createTask() {
// 	var taskText = document.createTextNode(input.val());

// }
