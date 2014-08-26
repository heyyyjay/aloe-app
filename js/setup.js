$(document).ready(function(){
	var appContainer = $("#content");
	var taskManager = new TaskManager();

	appContainer.append(taskManager.html);

	$( "form" ).submit(function( event ) {
		event.preventDefault();

		var taskData = {};
		$.each($( this ).serializeArray(), function( i, v ) {
			taskData[v.name] = v.value;
		});

		if( taskData["descr"] != "" ) {
			var taskId = taskData["priority"] + taskManager.taskGroupIds[taskData["priority"]].length;
			var newTask = new Task( taskData, taskId );
			$("#addTaskError").empty();
			taskManager.addTask(newTask);
		} else if ( $("#addTaskError").is(":empty") ){
			$( "#addTaskError" ).append("<div>** Cannot leave description blank. **</div>");
		}

	});
})