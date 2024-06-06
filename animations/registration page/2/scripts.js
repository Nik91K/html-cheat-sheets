document.getElementById('registerForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  if (password === confirmPassword) {
      alert(`Ласкаво просимо, ${username}! Ви успішно зареєстровані.`);
  } else {
      alert('Паролі не співпадають. Будь ласка, спробуйте ще раз.');
  }
});
