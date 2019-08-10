const addTaskButton = $("#addTask");
const taskList = $("#tasks");
const input = $("#input");
const emptyMessage = "Cannot add an empty task.\nTo-do list should have some info, right?\nTry again and add some text.";
const doneIcon = `<i class="fas fa-check-circle"></i>`;
const openIcon = `<i class="fas fa-undo-alt"></i>`;
const removeIcon = `<i class="fas fa-times-circle"></i>`;

var counterAll = 0;
var counterOpen = counterAll;

input.val("").focus();
taskList.sortable({cursor:"move"});
// $("#headline, #counters").hide();

$("#startButton").click(function(){
	$("#start-page").hide();
	input.val("").focus();
});

addTaskButton.click(addTask);
function addTask() {
	if (input.val().length == 0) {
		alert(emptyMessage);
	} else { 
		var text = document.createTextNode(input.val());
		var div = document.createElement("div");
		var p = document.createElement("p");
		var doneButton = document.createElement("button");
		var openButton = document.createElement("button");
		var removeButton = document.createElement("button");
		$(div).addClass("list open");
		$(doneButton).addClass("fasButton doneButton");
		$(doneButton).append(doneIcon);
		$(doneButton).click(markDone);
		$(openButton).addClass("fasButton openButton");
		$(openButton).append(openIcon);
		$(openButton).click(markOpen).hide();
		$(removeButton).addClass("fasButton removeButton");
		$(removeButton).append(removeIcon);
		$(removeButton).click(removeTask);
		$(p).append(text);
		$(div).append(p, doneButton, openButton, removeButton);
		taskList.append(div);
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