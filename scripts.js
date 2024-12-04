// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const uploadButton = document.getElementById('upload-button');
    const fileInput = document.getElementById('file-input');
    const uploadStatus = document.getElementById('upload-status');

    // 업로드 버튼 클릭 이벤트
    uploadButton.addEventListener('click', () => {
        const file = fileInput.files[0];

        if (file) {
            // 파일 정보를 표시 (실제 서버 업로드는 서버 코드가 필요)
            uploadStatus.textContent = `Uploading "${file.name}" (${(file.size / (1024 * 1024)).toFixed(2)} MB)...`;
            setTimeout(() => {
                uploadStatus.textContent = `File "${file.name}" uploaded successfully!`;
            }, 2000); // 모의 업로드 시간
        } else {
            uploadStatus.textContent = "Please select a file to upload.";
        }
    });
});
