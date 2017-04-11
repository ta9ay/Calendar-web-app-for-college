$(document).ready(function(){
	$(".listname").click(function(){
        var x=($(this).html()).toLowerCase(); //this assigns the text in the class listname to the variable x
        console.log(x);
        console.log(typeof(x));
        
                $('#calendar').fullCalendar( 'removeEventSource', fcSources.event );
                $('#calendar').fullcalendar( 'removeEventSource', fcSources.class );

         
    });


});


/*$.ajax({
         url: 'http://localhost/fullcalendar/event.php',
         data: {name:x},
         type: "POST",
         success: function(){
            */