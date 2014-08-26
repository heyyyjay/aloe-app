function Task(taskData, taskId) {
	this.taskId = taskId;
	this.priority = taskData["priority"];
	this.isComplete = false;
	this.descr = taskData["descr"];
	this.category = taskData["category"];

	this.html = this.createHtml();
}

Task.prototype.createHtml = function() {
	var html = $("<div>", {
		id: this.taskId,
		class: "task uk-width-1-1"
	});

	html.addClass("priority-" + this.priority);
	html.addClass("category-" + this.category);

	var check = $("<form>", {
		class: "uk-form check"
	});
	var box = $("<input>", {
		id: this.taskId + "checkbox",
		type: "checkbox",
		"onclick": "checkOff(" + this.taskId + "Descr)"
	});
	check.append(box);

	html.append($("<div>", {
		id: this.taskId + "Descr",
		text: this.descr
	}));

	return html;
};

function checkOff(id) {
	if( this.isComplete ) {
		$(id).css("text-decoration", "none");
		$(id).css("font-style", "normal");
		this.isComplete = false;

	} else {
		$(id).css("text-decoration", "line-through");
		$(id).css("font-style", "italic");
		this.isComplete = true;
	}
};