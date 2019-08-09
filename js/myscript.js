const addTaskButton = $("#addTask");
const taskList = $("#tasks");
const input = $("#input");
var counterAll = 0;
var counterOpen = counterAll;

addTaskButton.click(addTask);

var id = 1;
function addTask(){
	taskList.append(
		`<div class="list" id="task${id}">
			<p>${input.val()}</p>
			<button class="doneButton" id="done${id}"><i class="fas fa-check-square"></i></button>
			<button class="removeButton" id="rmv${id}"><i class="fas fa-times-circle"></i></button>
		</div>`);
	$(`#rmv${id}`).click(removeTask);
	$(`#done${id}`).click(markDone).dblclick(markOpen);
	$(`#task${id}`).addClass("open");
	id +=1;
	displayCounter();
}

function removeTask() {
	console.log("helo from removeTaskbutton");
	$(this).closest('.list').remove();
	displayCounter();
}

function markDone() {
	console.log("helo from markDoneButton");
	$(this).closest('.list').removeClass("open").addClass("done");
	displayCounter();
}

function markOpen() {
	console.log("helo from markOpen");
	$(this).closest('.list').removeClass("done").addClass("open");
	displayCounter();
}

function displayCounter() {
	counterAll = $(".list").length;
	counterOpen = $(".open").length;
	$("#counterAll").text(counterAll);
	$("#counterOpen").text(counterOpen);
}