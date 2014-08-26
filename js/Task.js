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

	var check = $("<form>", {
		class: "uk-form check"
	});

	var box = $("<input>", {
		id: this.taskId + "checkbox",
		type: "checkbox",
		"onclick": "checkOff(" + this.taskId + "Descr)"
	});
	console.log(this.taskId);
	check.append(box);

	html.append(check);

	switch(this.priority) {
		case "high":
			html.addClass("priority-high");
			break;
		case "mid":
			html.addClass("priority-mid");
			break;
		default:
			html.addClass("priority-low");
			break;
	}
	switch(this.category) {
		case "0":
			html.addClass("category-0");
			break;
		case "1":
			html.addClass("category-1");
			break;
		case "2":
			html.addClass("category-2");
			break;
		case "3":
			html.addClass("category-3");
			break;
		case "4":
			html.addClass("category-4");
			break;
		default:
			html.addClass("category-5");
			break;
	}

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