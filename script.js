 
const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.sold)");
const movieSelect = document.getElementById("movie");
const booked=document.getElementById("seats-booked")
const amount=document.getElementById("price")
const ticket=document.getElementById("ticket")
var ticketPrice=movieSelect.value
var count=0

function start(){
  const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));

if (selectedSeats !== null && selectedSeats.length > 0) {
seats.forEach((seat, index) => {
if (selectedSeats.indexOf(index) > -1) {
console.log(seat.classList.add("selected"));
}
});
}

const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");

if (selectedMovieIndex !== null) {
movieSelect.selectedIndex = selectedMovieIndex;
console.log(selectedMovieIndex)
}
//update labels
console.log('seats booked:',selectedSeats.length)
if(selectedSeats.length>=1){
  booked.innerHTML=selectedSeats.length
  ticket.innerHTML=localStorage.getItem("selectedMoviePrice")
  const totalAmount=selectedSeats.length*localStorage.getItem("selectedMoviePrice");
  amount.innerHTML="RS "+totalAmount
}else{
  booked.innerHTML=0
  ticket.innerHTML=0
  
  amount.innerHTML=0
}


//localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));

}

 //correct 
 function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected"); 
  const selectedSeatsCount = selectedSeats.length;
  const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));
  const totalSeats=selectedSeats.length
  console.log('totalSeats:',totalSeats)
  localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));

  if(totalSeats>=1){
    booked.innerHTML=totalSeats
    ticket.innerHTML=localStorage.getItem("selectedMoviePrice")
   const totalAmount=totalSeats*localStorage.getItem("selectedMoviePrice");
   amount.innerHTML="RS "+totalAmount
  }
  else{
    booked.innerHTML=0
   ticket.innerHTML=0
   amount.innerHTML=0
  }
   

   
  }
 
  //update count

  movieSelect.addEventListener("click",(e)=>{
    console.log("current value clicked:",movieSelect.value)
    localStorage.setItem("selectedMoviePrice", movieSelect.value);

  })
// Seat click event
container.addEventListener("click", (e) => {
  if (
  e.target.classList.contains("seat") &&
  !e.target.classList.contains("sold")
  ) {
  e.target.classList.toggle("selected");
 
  
  }  
  updateSelectedCount()
  })