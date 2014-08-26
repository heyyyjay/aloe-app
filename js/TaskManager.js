function TaskManager() {
	this.html = $("<div>", {
		class: "taskManager",
		id: "taskManager"
	});
	this.taskGroupIds = {
		"high": new Array(),
		"mid": new Array(),
		"low": new Array()
	};
	this.taskGroupHtml = {
		"high": $("<div>", { id: "taskGroup-high" }),
		"mid": $("<div>", { id: "taskGroup-mid" }),
		"low": $("<div>", { id: "taskGroup-low" })
	};

	for(group in this.taskGroupHtml) {
		this.html.append(this.taskGroupHtml[group]);
	}
}

TaskManager.prototype = {
	addTask: function(taskToAdd) {
		this.taskGroupHtml[taskToAdd.priority].append(taskToAdd.html);
		this.taskGroupIds[taskToAdd.priority].push(taskToAdd.taskId);
	}
};