$(document).ready(function(){
	var appContainer = $("#content");
	var taskManager = new TaskManager();

	appContainer.append(taskManager.html);

})