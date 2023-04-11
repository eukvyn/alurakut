import nookies from 'nookies'
import { useRouter } from 'next/router'

const customRequest = (async (request, response) => {
  const router = useRouter()

  if (request.method === 'POST') {
    fetch(`https://api.github.com/users/${request.githubUser}}`)
      .then((res) => {
        return res.json()
      })
      .then((res) => {
        if (res.login === request.githubUser) {
          fetch('https://alurakut.vercel.app/api/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              githubUser: request.githubUser,
            }),
          }).then(async (_res) => {
            const data = await _res.json()
            nookies.set(null, 'USER_TOKEN', data.token, {
              path: '/',
              maxAge: 86400 * 7,
            })
            router.push('/')

            return data
          })
        }

        if (res.message) {
          response.json({
            error: 'Error',
          })

          return res
        }
      })
  }

  response.status(404).json({
    message: 'this endpoint is POST only',
  })

  return
})

export default customRequest()
