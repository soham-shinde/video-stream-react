const showModalBtn = document.getElementById('showModalBtn');
const loadingModal = document.getElementById('loadingModal');

showModalBtn.addEventListener('click', function() {
  loadingModal.style.display = 'block';
});

// To hide the modal after a certain time period (for demonstration)
// You can replace this with your actual loading logic
setTimeout(() => {
  loadingModal.style.display = 'none';
}, 3000);
