$(document).ready(function() {
  var date = new Date();
  var d = date.getDate();
  var m = date.getMonth();
  var y = date.getFullYear();

  var calendar = $('#calendar').fullCalendar({
   editable: true,
   header: {
    left: 'prev,next today',
    center: 'title',
    right: 'month'
   },
   
   events: "http://localhost/fullcalendar/events.php",
   editable: true,
   // Convert the allDay from string to boolean
   eventRender: function(event, element, view) {
    if (event.allDay === 'true') {
     event.allDay = true;
    } else {
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
         allDay: allDay
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
  
 });
