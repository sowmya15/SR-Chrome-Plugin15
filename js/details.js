
$(document).ready(function(){

$('#app_type').text(localStorage.getItem('app_type'));
$('#save_agent_number').on('click',function(){

        
  var agent_number = $('#agent_number').val();
            
       if(!agent_number){
         var notification = new Notification("Please Enter Agent Number" , {tag: 'mybrowserplugin'});
         return false;
       }
       else if(agent_number<10){
         var notification = new Notification("Enter Correct Agent Number" , {tag: 'mybrowserplugin'});
         return false;
       }
         localStorage.setItem('agent_number' , agent_number);

         if (!("Notification" in window)) {
             alert("This browser does not support desktop notification");
}

         else if (Notification.permission === "granted") {
              var notification = new Notification("Agent number saved successfully!" , {tag: 'mybrowserplugin'});
               window.location.href = "target.html";
 }
  });    
});