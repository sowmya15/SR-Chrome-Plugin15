$(document).ready(function(){
	$('#logo').on('click', function(error) 
        { 
        	//Fetching values from encrypted local storage
        	var agent = localStorage.getItem('agent_number');
       
            var target = $('#target').val();
                 
          //Checking all possible error conditions before Placing call

            //var data = {phone_number: customer, agent_number: agent, sr_number: knowlarityNumber, api_key: knowlarityAPIKey, response_format: 'json'};
            var data = {customer: target, agent: agent, response_format: 'json'};
            if (!customer) {
                var notification = new Notification('No target number specified', {
  						body: "Unable to get Destination Number",
  						});
                return;
            }
             
         

            $.ajax({
              type: "GET",
              //url: "http://www.knowlarity.com/vr/api/click2call/",
              url: "https://konnect.knowlarity.com/konnect/makecall/",
              dataType: 'jsonp',
              jsonpCallback: "jsonpCallback",
              crossDomain: true,
              cache: false,
              data: data,
              success: function(response) {
                  if (response.error) {
                     var notification = new Notification('Failure ', {
  						body: "Call failed. Error: " + response.error.message,
  						icon : 'img/danger.png'
						});
                      	setTimeout(function(){
                    		notification.close();
                  			},5000);
                  } else if (response.success) {
                  	 var notification = new Notification('Success!', {
  						body: "Call successfully placed between " + agent + " and " + customer + ".",
  						
						});
                  	 $('#target').val('');
                 
                  } else {
                  	 var notification = new Notification('Status of call', {
  						body: response,
  						
						});
                  	    setTimeout(function(){
                    		notification.close();
                  			},5000);
                  }
              }
              });
            
    });

$('#logout').on('click',function(){
	localStorage.clear();
	window.location.href="login.html";

});
$('#back').on('click',function(){
		window.location.href="details.html";
});
});
