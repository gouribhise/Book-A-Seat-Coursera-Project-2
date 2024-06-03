 
const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.sold)"); 
const movieSelect = document.getElementById("movie");
const booked=document.getElementById("seats-booked")
const amount=document.getElementById("price")
const ticket=document.getElementById("ticket")
 

function start(){
  const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));

  //show previously selected seats
  if (selectedSeats !== null && selectedSeats.length > 0) 
    {
      seats.forEach((seat, index) => {
        if (selectedSeats.indexOf(index) > -1)
         {
            seat.classList.add("selected");
          }
      });
    }


//update booking info
 
  if(selectedSeats.length>=1)
  {
    const totalAmount=selectedSeats.length*localStorage.getItem("selectedMoviePrice");
    booked.innerHTML=selectedSeats.length
    ticket.innerHTML=localStorage.getItem("selectedMoviePrice")
    amount.innerHTML="RS "+totalAmount
  }else
  {
    booked.innerHTML=0
    ticket.innerHTML=0
    amount.innerHTML=0
  }
 

}

 //correct 
 function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");  
  const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));
  const totalSeats=selectedSeats.length
 
  //get and set the selected seats in localstorage
  localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));

  if(totalSeats>=1)
  {
    const totalAmount=totalSeats*localStorage.getItem("selectedMoviePrice");
    booked.innerHTML=totalSeats
    ticket.innerHTML=localStorage.getItem("selectedMoviePrice")
    amount.innerHTML="RS "+totalAmount
  }
  else
  {
    booked.innerHTML=0
    ticket.innerHTML=0
    amount.innerHTML=0
  }
   
   
  }
 
  //select movie and ticket price

  movieSelect.addEventListener("click",(e)=>{
     localStorage.setItem("selectedMoviePrice", movieSelect.value);
   })

// select seat click event
container.addEventListener("click", (e) => {
  if (
       e.target.classList.contains("seat") &&
      !e.target.classList.contains("sold")
  ) {
      e.target.classList.toggle("selected");
 
  }  
  updateSelectedCount()

  //gives alert message if user click on sold seat
  if(e.target.classList.contains("sold")){
   alert("This seat is already booked! Please book other seat.")
  }
  })

   