createUserForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  try {
      const response = await fetch('/create-user', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ username, password })
      });
      const data = await response.text();
      alert(data);
  } catch (error) {
      console.error('Error:', error);
  }
});

editUserForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const userId = document.getElementById('userId').value;
  const newUsername = document.getElementById('newUsername').value;
  const newPassword = document.getElementById('newPassword').value;

  try {
      const response = await fetch('/edit-user', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ userId, newUsername, newPassword })
      });
      const data = await response.text();
      alert(data);
  } catch (error) {
      console.error('Error:', error);
  }
});

deleteUserForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const userIdToDelete = document.getElementById('userIdToDelete').value;

  try {
      const response = await fetch('/delete-user', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ userIdToDelete })
      });
      const data = await response.text();
      alert(data);
  } catch (error) {
      console.error('Error:', error);
  }
});
