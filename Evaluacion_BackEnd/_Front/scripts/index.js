window.addEventListener('DOMContentLoaded', () => {
  // Tracking input values
  const username = document.querySelector('#inp_username')
  const email = document.querySelector('#inp_email')
  const password = document.querySelector('#inp_password')
  const form = document.querySelector('form')

  // Form handler
  form.addEventListener('submit', (event) => {
    event.preventDefault()

    const data = {
      username: username.value,
      email: email.value,
      password: password.value
    }

    // Fetch & Login
    fetch('http://localhost:3000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then(({ token, refreshToken }) => {
        window.localStorage.setItem('token', token)
        window.localStorage.setItem('refresh', refreshToken)
        window.location.href = './pages/admin.html'
      })
      .catch((error) => console.log(error))
  })
})
