document.addEventListener('DOMContentLoaded', function() {
  const feedbackForm = document.getElementById('feedback-form');

  feedbackForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevents the page from reloading

      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const comment = document.getElementById('comment').value;

      // Create an object to store the feedback
      const userFeedback = {
          name: name,
          email: email,
          comment: comment
      };

      // Save the feedback to localStorage
      localStorage.setItem('userFeedback', JSON.stringify(userFeedback));
      
      // This will log the data immediately after storing it to localStorage
      console.log('Stored data:', localStorage.getItem('userFeedback'));  

      // Redirect to the thank you page
      window.location.href = 'thankyou.html';
  });
});
