document.addEventListener('DOMContentLoaded', function() {
  // Retrieve stored data from localStorage
  const storedData = localStorage.getItem('userFeedback');
  
  // If data exists, display it on the page
  if (storedData) {
      const feedbackData = JSON.parse(storedData); // Parse the JSON string back to an object
      
      const thankYouMessage = document.getElementById('thank-you-message');
      
      // Make sure the element exists before modifying it
      if (thankYouMessage) {
          thankYouMessage.innerHTML = `
              <h2>Thanks for your feedback, ${feedbackData.name}!</h2>
              <p><strong>Your Email:</strong> ${feedbackData.email}</p>
              <p><strong>Your Comment:</strong> ${feedbackData.comment}</p>
          `;
      }
  } else {
      // If no data is found, display a generic message
      const thankYouMessage = document.getElementById('thank-you-message');
      if (thankYouMessage) {
          thankYouMessage.innerHTML = 'Thanks for your feedback!';
      }
  }
});
