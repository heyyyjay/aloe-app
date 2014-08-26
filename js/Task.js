function Task(taskData) {
	this.priority = taskData["priority"];
	this.isComplete = false;
	this.descr = taskData["descr"];
	this.category = taskData["category"];

	this.html = this.createHtml();
}

Task.prototype.createHtml = function() {
	var html = $("<div>", { class: "task, uk-width-1-1" });

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
	html.append("MEOWWWW");

	return html;
};