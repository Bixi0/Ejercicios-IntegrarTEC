window.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('button')
  const p = document.querySelector('p')

  // Get tokens
  let token = window.localStorage.getItem('token')
  const refreshToken = window.localStorage.getItem('refresh')

  // Comprobation of exp time
  const checkExpirationTime = () => {
    const payload = JSON.parse(atob(token.split('.')[1]))
    const expirationTime = payload.exp

    return expirationTime > Date.now() / 1000
  }

  // Role check
  const checkRole = () => {
    const payload = JSON.parse(atob(token.split('.')[1]))
    const role = payload.role

    return role === 'admin'
  }

  // Fetch Button
  button.addEventListener('click', () => {
    const isTokenValid = checkExpirationTime()
    const isAdmin = checkRole()

    if (!isAdmin) {
      p.textContent = 'No sos admin logi tomatela'
      return
    }

    // Expiration check
    if (!isTokenValid) {
      fetch('http://localhost:3000/api/auth/refresh', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ refreshToken })
      })
        .then((response) => response.json())
        .then((data) => {
          const { token, refreshToken } = data
          window.localStorage.setItem('token', token)
          window.localStorage.setItem('refresh', refreshToken)
        })
        .catch((error) => console.log(error))
    } else {
      // Actual fetch
      token = window.localStorage.getItem('token')
      fetch('http://localhost:3000/api/items', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then((response) => response.json())
        .then((data) => {
          p.textContent = JSON.stringify(data)
        })
        .catch((error) => console.log(error))
    }
  })
})
