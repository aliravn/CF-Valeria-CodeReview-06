// CONSTANTS AREA
// note: text constants can be storen in json and fetched later when elements are created

const addTaskButton = $("#addTask");
const taskList = $("#tasks");
const input = $("#input");
const emptyMessage = "Cannot add an empty task.\nTo-do list should have some info, right?\nTry again and add some text.";
const doneIcon = `<i class="fas fa-check-circle"></i>`;
const openIcon = `<i class="fas fa-undo-alt"></i>`;
const removeIcon = `<i class="fas fa-times-circle"></i>`;

// counters for tasks to be displayed to user
var counterAll = 0;
var counterOpen = counterAll;

// taskList is made sortable (drag & drop)
taskList.sortable({cursor:"move"});

// Button on "Front page" which hides the instructions and puts input field in focus
$("#startButton").click(function(){
	$("#start-page").hide();
	input.val("").focus();
});

// add event handler onto addTaskButton
// function addTask, that creates html-elements, adds classes, adds event handlers on buttons
// function acts as constructor, creating elements and putting them todether
// created to get rid of HTML inside js code 
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
		$(doneButton)
			.addClass("fasButton doneButton")
			.append(doneIcon)
			.click(toggle);
		$(openButton)
			.addClass("fasButton openButton")
			.append(openIcon)
			.click(toggle)
			.hide();
		$(removeButton)
			.addClass("fasButton removeButton")
			.append(removeIcon)
			.click(removeTask);
		$(p).append(text);
		$(div).append(p, doneButton, openButton, removeButton);
		taskList.prepend(div);
		displayCounter(); 
		showSelected();
		input.val("").focus(); // after each task added clear input field and focus on it
	}
}

// function to add tasks upon click on Enterkey
$("#input").keypress(function(event) {
    if (event.which == 13) {
        addTaskButton.click();
    }
});

function removeTask() {
	$(this).closest('.list').remove();
	displayCounter();
}

//done undone as toggle with an if else function - change class for done/open when button is pressed
function toggle() {
	console.log(this);
	console.log($(this).closest(".list"));
	if ($(this).closest("div.list").hasClass("open")) {
		$(this).closest("div.list").addClass("done").removeClass("open");
		$(this).hide();
		$(this).siblings(".openButton").show();
	} else {
		$(this).closest('.list').removeClass("done").addClass("open");
		$(this).hide();
		$(this).siblings(".doneButton").show();
	}
	displayCounter();
	showSelected();
}




function displayCounter() {
	counterAll = $(".list").length;
	counterOpen = $(".open").length;
	$("#counterAll").text(counterAll);
	$("#counterOpen").text(counterOpen);
}

// Button select triggered by change of selector value
// function for selector button to show/hide elements based on their class
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

