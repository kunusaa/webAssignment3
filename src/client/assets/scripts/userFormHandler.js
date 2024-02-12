loginForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  try {
      const response = await fetch('/login', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ username, password })
      });
      
    if (!response.ok) {
        throw new Error('Login failed');
    }

    const data = await response.json();

    if (data.isAdmin) {
        window.location.href = '/admin';
    } else {
        window.location.href = '/main';
    }
  } catch (error) {
      console.error('Error:', error);
  }
});