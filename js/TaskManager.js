function TaskManager() {
	this.html = $("<div>", {
		class: "taskManager",
		id: "taskManager"
	});

	this.taskGroups = {
		"high": new Array(),
		"mid": new Array(),
		"low": new Array()
	};
}

TaskManager.prototype = {
	addTask: function(taskData, priority) {
		this.taskGroups[priority].push(new Task(taskData));
	}
};