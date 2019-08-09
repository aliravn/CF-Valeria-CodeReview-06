const addTaskButton = $("#addTask");
const input = $("#input");
const taskList = $("#tasks");

addTaskButton.click(addTask);
function addTask(){
	// console.log("hello from addTaskButton");
	// console.log(input.val());
	var div = document.createElement("div");
	taskList.append(
		`<div class="list">
			<p>${input.val()}</p>
			<button class="doneButton"><i class="fas fa-check-square"></i></button>
			<button class="removeButton"><i class="fas fa-times-circle"></i></button>
		</div>`);
	$(".removeButton").click(removeTask);
}


function removeTask() {
	console.log("helo from removeTaskbutton");
	$(this).closest('.list').remove();
}
