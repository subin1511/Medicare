import React from 'react';
import './bookAppoint.css'
import Sidebar from '../../components/Sidebar';

/*firebase code */

// Assuming you have Firebase set up and you can retrieve doctor data from it
// Here's a sample data structure
// var doctorsRef = firebase.database().ref('doctors');

var sampleDoctors = [
    { name: 'Dr. John Doe', specialty: 'Cardiology', location: 'New York', rating: 4.5 },
    { name: 'Dr. Jane Smith', specialty: 'Pediatrics', location: 'Los Angeles', rating: 4.8 },
    { name: 'Dr. David Johnson', specialty: 'Dermatology', location: 'Chicago', rating: 4.2 },
    // Add more sample doctors as needed
  ];

// Function to display doctors
function displayDoctors(doctors) {
  var doctorList = document.getElementById('doctorList');
  doctorList.innerHTML = ''; // Clear previous content

  doctors.forEach(function(doctor) {
    var doctorCard = document.createElement('div');
    doctorCard.classList.add('doctor-card');

    var name = document.createElement('h2');
    name.textContent = doctor.name;

    var specialty = document.createElement('p');
    specialty.textContent = 'Specialty: ' + doctor.specialty;

    var location = document.createElement('p');
    location.textContent = 'Location: ' + doctor.location;

    var rating = document.createElement('p');
    rating.textContent = 'Rating: ' + doctor.rating;

    doctorCard.appendChild(name);
    doctorCard.appendChild(specialty);
    doctorCard.appendChild(location);
    doctorCard.appendChild(rating);

    doctorList.appendChild(doctorCard);
  });
}

// Retrieve doctors from Firebase
/*doctorsRef.once('value', function(snapshot) {
  var doctors = snapshot.val();
  var doctorsArray = Object.values(doctors); // Convert object to array
  displayDoctors(doctorsArray);
});
*/



const BookAppoint = () => {
    return (
        <div>
          <Sidebar>
            <h1>list of Doctor</h1>
            <div id="doctorList"></div>
            </Sidebar>
        </div>
    );
};

export default BookAppoint;