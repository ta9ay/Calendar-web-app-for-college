$(document).ready(function(){
function createGroup(){
	
	var groupName= prompt('Enter the name of the group');
	console.log(groupName);

	$(".scroll-list").append('<div class="list"><p class="event">'+groupName+'</p><div class="listoptions"><button class="settings"><i class="material-icons">settings</i></button><button class="add"><i class="material-icons">add</i></button></div></div>');

$.ajax({
         url: 'http://localhost/fullcalendar/createCalendar.php',
         data: 'name='+ groupName,
         type: "POST",
         success: function(json) {
         alert('OK');
         }
       });


}


$(".new_group").click(createGroup);




});