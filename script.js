$(document).ready(function() {
    // Function to generate a random user and display the data
    function generateRandomUser() {
      $.ajax({
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: function(data) {
          const user = data.results[0];
          $('#user-picture').attr('src', user.picture.large);
          $('#user-name').text(`${user.name.title} ${user.name.first} ${user.name.last}`);
          $('#user-email').text(`Email: ${user.email}`);
          $('#user-username').text(`Username: ${user.login.username}`);
          $('#user-location').text(`Location: ${user.location.city}, ${user.location.country}`);
        }
      });
    }
  
    // Initial user data on page load
    generateRandomUser();
  
    // Event listener for the "Generate Random Username" button
    $('#generate-btn').on('click', function() {
      generateRandomUser();
    });
  });
  