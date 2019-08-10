const addTaskButton = $("#addTask");
const taskList = $("#tasks");
const input = $("#input");
const emptyMessage = "Cannot add an empty task.\nTo-do list should have some info, right?\nTry again and add some text.";

input.val("").focus();
// $("#headline, #counters").hide();

taskList.sortable({cursor:"move"});

var counterAll = 0;
var counterOpen = counterAll;

$("#startButton").click(function(){
	$("section").hide();
	input.val("").focus();
});

addTaskButton.click(addTask);

var id = 1;
function addTask() {
	if (input.val().length == 0) {
		alert(emptyMessage);
	} else { taskList.append(
		`<div class="list" id="task${id}">
			<p>${input.val()}</p>
			<button class="fasButton doneButton" id="done${id}"><i class="fas fa-check-circle"></i></button>
			<button class="fasButton openButton" id="open${id}"><i class="fas fa-undo-alt"></i></button>
			<button class="fasButton removeButton" id="rmv${id}"><i class="fas fa-times-circle"></i></button>
		</div>`);
	$(`#rmv${id}`).click(removeTask);
	$(`#done${id}`).click(markDone);
	$(`#open${id}`).click(markOpen).hide();
	$(`#task${id}`).addClass("open");
	id +=1;
	displayCounter();
	showSelected();
	input.val("").focus(); // after each task added clear input field and focus on it
	}
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
	showSelected();
}

function markOpen() {
	$(this).closest('.list').removeClass("done").addClass("open");
	$(this).hide();
	$(this).siblings(".doneButton").show();
	displayCounter();
	showSelected();
}

function displayCounter() {
	counterAll = $(".list").length;
	counterOpen = $(".open").length;
	$("#counterAll").text(counterAll);
	$("#counterOpen").text(counterOpen);
	// $("#headline, #counters").show();
}

$('#select').change(showSelected);

function showSelected() {
	if ($("#select").val() == "open") {
		$(".open").show();
		$(".done").hide();
  	}
	if ($("#select").val() == "done") {
		$(".done").show();
		$(".open").hide();
  	}	
  	if ($("#select").val() == "all") {
		taskList.children().show();
  	}
};

$("#input").keypress(function(event) {
    if (event.which == 13) {
        addTaskButton.click();
    }
});