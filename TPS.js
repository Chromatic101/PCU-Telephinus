document.addEventListener('DOMContentLoaded', function () {
    const suddenAnnouncementButton = document.getElementById('suddenAnnouncementButton');
    const logoutButton = document.getElementById('logoutButton');

    // Redirect to Sudden Announcement page (Calendar)
    suddenAnnouncementButton.addEventListener('click', function () {
        window.location.href = 'TPAnnouncement.html';  // Redirect to Announcements page
    });

    // Log out functionality
    logoutButton.addEventListener('click', function () {
        alert('Logged out successfully!');
        window.location.href = 'FirstPage.html'; // Redirect to login page
    });
});