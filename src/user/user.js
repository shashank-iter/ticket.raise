
$(document).ready(function () {
  
    let count =0;
    let d;
    let time;
  // Function for opening ticket raising modal
  $("#raiseTicket").click(function () {
    $("#raiseTicketModal").removeClass("hidden");
  });

  // Function for closing ticket raising modal
  $("#closeTicketModal").click(function () {
    $("#raiseTicketModal").addClass("hidden");
    
  });
  //Function for creating new ticket
  $("#submitTicket").click(function () {
    count++;
    let Query = document.getElementById("query").value;
    console.log(Query);
     d = new Date();
     time = d.getHours() + ":" + d.getMinutes()+":"+d.getSeconds();
     console.log(time);
    
    $("#ticketlist").append(`<li class="list-none border border-black rounded-md p-3 lg:flex-row my-2 " id="ticket${count}"> Ticket No: ${Math.floor(Math.random() * 100000)}
     <div class="flex flex-row">
            <div class="w-1/2">
                <p class="">From: shashank@showera.com</p>
                <p class="">Time: ${time}</p>
            </div>
            <div class="w-1/2 flex flex-row justify-end">
            <span class="inline-flex rounded-md shadow-sm">
            <a href="#" class="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-blue-700 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" data-rounded="rounded-md" data-primary="blue-600" spellcheck="false" data-ms-editor="true">Pending</a>
        </span>
                
            </div>
        </div>
        <div class="">
            <p class="">Query/Complaint</p>
            <div class="border border-gray-400 p-3 my-2 rounded-md">${Query}</div>
           
        </div>
    </li>`);
   
    
    let ticket = document.getElementById(`ticket${count}`);
    localStorage.setItem(`ticket${count}`, ticket.innerHTML);
    Query.innerText = "";

    $("#raiseTicketModal").addClass("hidden");
    addTicket();
    
  });
//Function for creating a new ticket end

  //Functions for opening the reply section from resolving button
  $('#resolveTicket1').click(function(){
    $('#reply1').toggleClass('hidden'); 
  });
  $('#resolveTicket2').click(function(){
    $('#reply2').toggleClass('hidden'); 
  });
  $('#closeTicket1').click(function(){
    $('#ticket1').addClass('hidden');
    console.log("hello");
  });
  
  $('#closeTicket2').click(function(){
    $('#ticket2').addClass('hidden');
  });
  //Functions for opening the reply section from resolving button

// Function for closing and opening of reply section
  $('#replyButton1').click(function(){
    
    let input1= document.getElementById("input1");
    if(input1.value===""){
    errorTicket();
    return;
    }
    input1.value="";
    replySent();
  });

  $('#replyButton2').click(function(){
    let input2= document.getElementById("input2");
    if(input2.value===""){
    errorTicket();
    return;
    }
    input2.value  ="";
    replySent();
  });
//Function for closing and opening of reply functions end
//Function for sending reply
function replySent(){
  Toastify({
    text: "Reply Sent",
    duration: 3000,
    gravity: "bottom", // `top` or `bottom`
    position: 'right', // `left`, `center` or `right`
    backgroundColor: "linear-gradient(to right,#ff00cc, #333399)",
    stopOnFocus: true, // Prevents dismissing of toast on hover
    onClick: function(){} // Callback after click
}).showToast();}
//Function for sending reply end

//Function for adding ticket
function addTicket(){
  Toastify({
    text: "Ticket Sent",
    duration: 3000,
    gravity: "bottom", // `top` or `bottom`
    position: 'right', // `left`, `center` or `right`
    backgroundColor: "linear-gradient(to right, #ff00cc, #333399)",
    stopOnFocus: true, // Prevents dismissing of toast on hover
    onClick: function(){} // Callback after click
}).showToast();}
//Function for adding ticket end
//Function for replyError
function errorTicket(){
  Toastify({
    text: "Please enter a reply",
    duration: 3000,
    gravity: "bottom", // `top` or `bottom`
    position: 'right', // `left`, `center` or `right`
    backgroundColor: "linear-gradient(to right, #ff00cc, #333399)",
    stopOnFocus: true, // Prevents dismissing of toast on hover
    onClick: function(){} // Callback after click
}).showToast();}


});
