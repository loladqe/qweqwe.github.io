document.addEventListener('DOMContentLoaded', () => {
    const uploadButton = document.getElementById('upload-button');

    if (uploadButton) {
        uploadButton.addEventListener('click', () => {
            alert('Game upload is in progress! File limit: 20GB.');
        });
    }
});
