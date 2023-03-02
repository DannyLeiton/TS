import { Router, Request, Response } from 'express'

// We'd rather create our own custom interface to define exactly what a request is.
// Not a perfect solution, but helps dealing with poor type defs.
interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined }
}

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

router.post('/login', (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body
  if (email && password){
    res.send(`${email.toUpperCase()} ${password.toUpperCase()}`)
  } else {
    res.send('email and password should be provided')
  }
})

export { router }