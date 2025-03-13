document.addEventListener('DOMContentLoaded', function () {
    const backButton = document.getElementById('backButton');

    // Back Button Functionality
    if (backButton) {
        backButton.addEventListener('click', function () {
            window.location.href = 'TPCalendar.html'; // Redirect back to Calendar
        });
    }
});