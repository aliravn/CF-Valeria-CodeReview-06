const addTaskButton = $("#addTask");
const taskList = $("#tasks");
const input = $("#input");

addTaskButton.click(addTask);

var id = 1;
function addTask(){
	taskList.append(
		`<div class="list" id="task${id}">
			<p>${input.val()}</p>
			<button class="doneButton" id="done${id}"><i class="fas fa-check-square"></i></button>
			<button class="removeButton" id="rmv${id}"><i class="fas fa-times-circle"></i></button>
		</div>`);
	console.log(id);
	$(`#rmv${id}`).click(removeTask);
	$(`#done${id}`).click(markDone).dblclick(markNotDone);
	$(`#task${id}`).addClass("open");
	id +=1;
	console.log(id);
}

function removeTask() {
	console.log("helo from removeTaskbutton");
	$(this).closest('.list').remove();
}

function markDone() {
	console.log("helo from markDoneButton");
	$(this).closest('.list').removeClass("open").addClass("done");
}

function markNotDone() {
	console.log("helo from markDoneButton");
	$(this).closest('.list').removeClass("done").addClass("open");
}