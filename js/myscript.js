const addTaskButton = $("#addTask");
const taskList = $("#tasks");
const input = $("#input");
input.focus();
taskList.sortable();

var counterAll = 0;
var counterOpen = counterAll;

addTaskButton.click(addTask);

var id = 1;
function addTask() {
	taskList.append(
		`<div class="list" id="task${id}">
			<p>${input.val()}</p>
			<button class="doneButton" id="done${id}"><i class="fas fa-check-square"></i></button>
			<button class="openButton" id="open${id}"><i class="fas fa-undo-alt"></i></button>
			<button class="removeButton" id="rmv${id}"><i class="fas fa-times-circle"></i></button>
		</div>`);
	$(`#rmv${id}`).click(removeTask);
	$(`#done${id}`).click(markDone);
	$(`#open${id}`).click(markOpen).hide();
	$(`#task${id}`).addClass("open");
	id +=1;
	displayCounter();
	input.val("").focus();
	// input.focus();
}

function removeTask() {
	$(this).closest('.list').remove();
	displayCounter();
}

function markDone() {
	$(this).closest(".list").removeClass("open").addClass("done");
	$(this).hide();
	$(this).siblings(".openButton").show();
	displayCounter();
}

function markOpen() {
	$(this).closest('.list').removeClass("done").addClass("open");
	$(this).hide();
	$(this).siblings(".doneButton").show();
	displayCounter();
}

function displayCounter() {
	counterAll = $(".list").length;
	counterOpen = $(".open").length;
	$("#counterAll").text(counterAll);
	$("#counterOpen").text(counterOpen);
}