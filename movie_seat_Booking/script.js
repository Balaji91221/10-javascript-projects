// Get references to HTML elements
const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
const buyButton = document.createElement('button');
buyButton.innerText = 'Buy';
const cancelButton = document.createElement('button');
cancelButton.innerText = 'Cancel';

// Initialize ticket price
let ticketPrice = +movieSelect.value;

// Load saved data from local storage and populate the UI
populateUI();

// Save selected movie index and price to local storage
function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem('selectedMovieIndex', movieIndex);
  localStorage.setItem('selectedMoviePrice', moviePrice);
}

// Update the count of selected seats and the total price
function updateSelectedCount() {
  // Get all selected seats
  const selectedSeats = document.querySelectorAll('.row .seat.selected');

  // Calculate the count and total price
  const selectedSeatsCount = selectedSeats.length;
  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;

  // Save the selected movie data
  setMovieData(movieSelect.selectedIndex, movieSelect.value);

  // Show/hide buy and cancel buttons based on selected seats count
  if (selectedSeatsCount > 0) {
    container.appendChild(buyButton);
    container.appendChild(cancelButton);
  } else {
    container.removeChild(buyButton);
    container.removeChild(cancelButton);
  }
}

// Populate the UI with saved data from local storage
function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

  if (selectedSeats !== null && selectedSeats.length > 0) {
    // Mark selected seats on the UI
    selectedSeats.forEach(seatIndex => {
      seats[seatIndex].classList.add('selected');
    });
  }

  const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

  if (selectedMovieIndex !== null) {
    // Set the selected movie in the dropdown
    movieSelect.selectedIndex = selectedMovieIndex;
  }
}

// Listen for changes in the movie select dropdown
movieSelect.addEventListener('change', () => {
  // Update the ticket price and save the movie data
  ticketPrice = +movieSelect.value;
  updateSelectedCount();
});

// Listen for clicks on the seat container
container.addEventListener('click', e => {
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
  ) {
    // Toggle the "selected" class on the clicked seat
    e.target.classList.toggle('selected');

    // Update the selected seat count and total
    updateSelectedCount();
  }
});

// Set the initial count and total
updateSelectedCount();

// Event listener for the Buy button
buyButton.addEventListener('click', () => {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');

  selectedSeats.forEach(seat => {
    seat.classList.remove('selected');
    seat.classList.add('occupied');
  });

  updateSelectedCount();
  alert('Your Booking is confirmed');
});

// Event listener for the Cancel button
cancelButton.addEventListener('click', () => {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');

  selectedSeats.forEach(seat => {
    seat.classList.remove('selected');
  });

  updateSelectedCount();
  alert('Your Booking is cancelled');
});

// Append the buy and cancel buttons to the container
container.appendChild(buyButton);
container.appendChild(cancelButton);
