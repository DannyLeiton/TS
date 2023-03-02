import { Router, Request, Response } from 'express'

const router = Router()

router.get('/login', (req: Request, res: Response) => {
  res.send(`
    <form method="POST">
      <div>
        <label>Email</label>
        <input name="email"/>
      </div>
      <div>
        <label>Password:</label>
        <input name="password" type="password" />
      </div>
      <button>Submit</button>
    </form>
  `)
})

router.post('/login', (req: Request, res: Response) => {
  const { email, password } = req.body
  if (email && password){
    res.send(`${email.toUpperCase()} ${password.toUpperCase()}`)
  } else {
    res.send('email and password should be provided')
  }
})

export { router }