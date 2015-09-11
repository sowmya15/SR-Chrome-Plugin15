$(document).ready(function()
{ 
        

     if (localStorage.getItem("k_number") !== null && localStorage.getItem("k_api_key") !== null)
         {

        if(localStorage.getItem("agent_number") !== null )
            {
              window.location.href = 'target.html';
            }
           else if (typeof localStorage.app_type != "undefined")
               { 
              window.location.href = 'details.html';
                }

             }
             
                
	       $('#login_btn').on('click',function(evnt){
                   
                   var username = $('#username').val();
		               var password = $('#password').val(); 
       if(username.length==0)
        {
      
          $('#error').html('<p style="color:red;position:relative;">Please enter  your Userid and password</p>');
                             $('input').click(function(){
               $(this).parent().find('#error').text('');
                            });
          return;
        }
       if(password.length==0)
           {
      
          $('#error1').html('<p style="color:red">Please enter  your  Password</p>');
                             $('input').click(function(){
               $(this).parent().find('#error1').text('');
                            });
          return;
        }

		  var data = {username: username, password: password };
     

	    	 $.ajax({
					url: "https://www.knowlarity.com/vr/api/user/mobilesignin/",
					type: "POST",
					data : data,
					datatype:'json',
					async : false,
					contentType : 'html',
					success : function(response){
						localStorage.setItem('k_api_key' , response["api_key"]);
						localStorage.setItem('k_number',response["sr_number"]);
             if(typeof localStorage.app_type === "undefined")
              {
                window.location = "app.html";

              }
						},
                error:function(response){
                   $('#error').html('<p style="color:red;">Incorrect credentials </p>');
                   $('input').click(function(){
               $(this).parent().find('#error').text('');
                            });
                }
              
                  
             					});

               var r =  $.ajax({
                url : 'https://konnect.knowlarity.com/api/v1/integrations?enable=true&k_number='+ encodeURIComponent(localStorage.getItem('k_number')),
                type:"GET",
                dataType : 'json',
                async : false,
                beforeSend: function(xhr) 
                     {
                     xhr.setRequestHeader("Authorization", "ApiKey SR:204db7bcfafb2deb7506b89eb3b9b715b09905c8");
                     },
              success: function(response){
               
                  //window.location.href = "target.html";
       
            } 

                  });


             

    		     localStorage.setItem('app_type' , r.responseJSON['objects'][0]['app_type']['name'].toLowerCase());
            window.location='details.html';
            return false;
  

         
            });

                 
     });
