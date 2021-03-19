/* 
                var xhttp = new XMLHttpRequest();

                xhttp.onreadystatechange = function(){  
                    if(this.readyState == 4 && this.status == 200){
                        console.log(this.responseText);
                        var responseObject = JSON.parse(this.responseText);
                        length = responseObject.length
                        console.log(length)
                        for(var i=0;i<length;i++){
                            console.log(responseObject[i].name);

                            var Task = responseObject[i].name;
                            document.getElementById("data").innerHTML += `<li> ${Task} </li>`;
                        }
                    }
                }

                xhttp.open("GET","http://localhost:3000/tasks/");
                xhttp.send();
                 */ 
                 
                 
/* 
                xhttp.open("POST","http://localhost:3000/tasks/",true);
                xhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");

                xhttp.send({
                    name:"akshayPatill",
                    status:"yes"
                });  */
    
$(document).ready(function(){

  /* $("button").click(function(){
      $.get("http://localhost:3000/tasks/",function(data,status){
          $("#get").html(data[1].name);
          alert(status);
        }) */
 /*  })  */ 

            $.ajax({
                url:"http://localhost:3000/tasks/",
                type: "GET",
                dataType:"JSON",
                success: function(data){
                        Present_Data(data);
                },
                error: function(){
                    console.log("Error in request !");
                }
            });

            function Present_Data(data){
                console.log(data);
                    
                length = data.length
                console.log(length)
                for(var i=0;i<length;i++){
                    console.log(data[i].name);
                    var Task = data[i].name;
                    var status = data[i].status
                    if (status == undefined){
                        status = ' ';
                    } 
                   

                    document.getElementById("data").innerHTML += `<li> ${Task}</li> `;
                    

                }          
            }


            $("#Add").on('click',function(){

                $.post("http://localhost:3000/tasks/",{
                        name : document.querySelector("#name").value,
                        status: document.querySelector("#status").value
                        },
                        function(data,status){
                        $('#post').html(data);
                         alert(status);
                     });
                
            })
    
    })
        
        
