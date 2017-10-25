$(document).ready(function () {


  var date = new Date();
  var d = date.getDate();
  var m = date.getMonth();
  var y = date.getFullYear();


  //---------------------------------------------------------
  var fcSources = {
    event: {
                url: 'http://localhost/fullcalendar/event.php',
                type: 'GET',
                color: 'red'
               
            },
    class: {
                url: 'http://localhost/fullcalendar/class.php',
                type: 'GET',
                
            },
    council: {
                url: 'http://localhost/fullcalendar/council.php',
                type: 'GET',
                color:'green'
                
            },
 
};

//------------------------------------------------------------


  var calendar = $('#calendar').fullCalendar({

   editable: true,
   header: {
    left: 'prev,next today',
    center: 'title',
    right: 'month'
   },
   
   eventSources: [ fcSources.event, fcSources.class, fcSources.council],
   editable: true,
   eventLimit: true,







   // Convert the allDay from string to boolean
   eventRender: function(event, element, view) {
      if (event.allDay === 'true') 
      {
          event.allDay = true;
      }  
      else 
      {
       event.allDay = false;
    }
   },
   selectable: true,
   selectHelper: true,
   select: function(start, end, allDay) {
    var title = prompt('Insert title:');
    if (title) {
      start = moment(start).format('YYYY-MM-DD');
      end = moment(end).format('YYYY-MM-DD'); /* w/ dashes if that is what you need */
      alert('start: ' + start + ' end: ' + end);
       $.ajax({
         url: 'http://localhost/fullcalendar/add_events.php',
         data: 'title='+ title+'&start='+ start +'&end='+ end ,
         type: "POST",
         success: function(json) {
         alert('OK');
         }
       });
       calendar.fullCalendar('renderEvent',
       {
         title: title,
         start: start,
         end: end,
         allDay: allDay,
         color:'red'
       },
       true
       );
    }
    calendar.fullCalendar('unselect');
  },
    
   
   eventDrop: function(event, delta) {
   var start = $.fullCalendar.formatDate(event.start, "yyyy-MM-dd HH:mm:ss");
   var end = $.fullCalendar.formatDate(event.end, "yyyy-MM-dd HH:mm:ss");
   $.ajax({
   url: 'http://localhost/fullcalendar/update_events.php',
   data: 'title='+ event.title+'&start='+ start +'&end='+ end +'&id='+ event.id ,
   type: "POST",
   success: function(json) {
    alert("Updated Successfully");
   }
   });
   },
   eventResize: function(event) {
   var start = $.fullCalendar.formatDate(event.start, "yyyy-MM-dd HH:mm:ss");
   var end = $.fullCalendar.formatDate(event.end, "yyyy-MM-dd HH:mm:ss");
   $.ajax({
    url: 'http://localhost/fullcalendar/update_events.php',
    data: 'title='+ event.title+'&start='+ start +'&end='+ end +'&id='+ event.id ,
    type: "POST",
    success: function(json) {
     alert("Updated Successfully");
    }
   });

}
   
  });


$(".event").click(function(){
                
                
                
                $('#calendar').fullCalendar( 'removeEventSource', fcSources.event );
                $('#calendar').fullCalendar( 'removeEventSource', fcSources.class );
                $('#calendar').fullCalendar( 'removeEventSource', fcSources.council);
                $('#calendar').fullCalendar( 'addEventSource', fcSources.event);
                $('#calendar').fullCalendar( 'refetchEvents' );                
                
                
                

         
    });

$(".class").click(function(){
                
                
                
                $('#calendar').fullCalendar( 'removeEventSource', fcSources.event );
                $('#calendar').fullCalendar( 'removeEventSource', fcSources.class );
                $('#calendar').fullCalendar( 'removeEventSource', fcSources.council );
                $('#calendar').fullCalendar( 'addEventSource', fcSources.class);
                $('#calendar').fullCalendar( 'refetchEvents' );                
                

         

         
    });

$(".council").click(function(){
                
                
                
                $('#calendar').fullCalendar( 'removeEventSource', fcSources.event );
                $('#calendar').fullCalendar( 'removeEventSource', fcSources.class );
                $('#calendar').fullCalendar( 'removeEventSource', fcSources.council );
                $('#calendar').fullCalendar( 'addEventSource', fcSources.council);
                $('#calendar').fullCalendar( 'refetchEvents' );                
                

         

         
    });
 
 $(".all").click(function(){
                
                
                
                $('#calendar').fullCalendar( 'removeEventSource', fcSources.event );
                $('#calendar').fullCalendar( 'removeEventSource', fcSources.class );
                $('#calendar').fullCalendar( 'removeEventSource', fcSources.council );
                $('#calendar').fullCalendar( 'addEventSource', fcSources.class);
                $('#calendar').fullCalendar( 'addEventSource', fcSources.event);
                 $('#calendar').fullCalendar( 'addEventSource', fcSources.council);
                $('#calendar').fullCalendar( 'refetchEvents' );                
                

         

         
    });


  
 });
