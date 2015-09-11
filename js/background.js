

KONNECT_POPUP_ENDPOINT = 'https://konnect.knowlarity.com:8100/update-stream/'+ localStorage.getItem('k_api_key') + '/' +localStorage.getItem('app_type')+ '/' +localStorage.getItem('agent_number');
//alert(KONNECT_POPUP_ENDPOINT);
var n  = new EventSource(KONNECT_POPUP_ENDPOINT);
n.onmessage = function(event) {
    var data = JSON.parse(event.data);
  
  if(data.type == "ORIGINATE") {
                callID = data.uuid;
                callState = data.type;
               //var message = '<b>Call ID: </b>' + callID + '<br>' + '<b>State: </b>' + callState + '<br>' + '<b>From: </b>' + from   
                var message = 'To Knowlarity Number: ' + data.k_number
                var notification = new Notification('Inbound call from | customer:'+ data['caller'], {tag: 'mybrowserplugin'});
                     
           }
               
}