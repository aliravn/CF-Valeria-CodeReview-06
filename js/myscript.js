const addTaskButton = $("#addTask");
const taskList = $("#tasks");
const input = $("#input");

addTaskButton.click(addTask);

function addTask(){
	taskList.append(
		`<div class="list">
			<p>${input.val()}</p>
			<button class="doneButton"><i class="fas fa-check-square"></i></button>
			<button class="removeButton"><i class="fas fa-times-circle"></i></button>
		</div>`);
	$(".removeButton").click(removeTask);
	$(".doneButton").click(markDone).dblclick(markNotDone);
}

function removeTask() {
	console.log("helo from removeTaskbutton");
	$(this).closest('.list').remove();
}

function markDone() {
	console.log("helo from markDoneButton");
	$(this).closest('.list').addClass("done");
}

function markNotDone() {
	console.log("helo from markDoneButton");
	$(this).closest('.list').removeClass("done");
}