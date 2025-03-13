document.addEventListener('DOMContentLoaded', function () {
    const suddenAnnouncementButton = document.getElementById('suddenAnnouncementButton');
    const logoutButton = document.getElementById('logoutButton');

    
    suddenAnnouncementButton.addEventListener('click', function () {
        window.location.href = 'TPAnnouncement.html'; 
    });

   
    logoutButton.addEventListener('click', function () {
        alert('Logged out successfully!');
        window.location.href = 'index.html';
    });
});
