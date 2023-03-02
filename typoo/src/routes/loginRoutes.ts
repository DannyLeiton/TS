import { Router, Request, Response, NextFunction } from 'express'

// We'd rather create our own custom interface to define exactly what a request is.
// Not a perfect solution, but helps dealing with poor type defs.
interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined }
}

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session?.loggedIn) {
    next()
    return
  }
  res.status(403)
  res.send('Forbiden access')
}

const router = Router()

router.get('/login', (req: Request, res: Response) => {
  res.send(`
    <form method="POST">
      <div>
          <label>Email:</label>
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

  const emailValidation: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
  const passwordValidation: RegExp = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/ // from 6 to 16 chars, at least 1 num and 1 special char.

  if (email && password && emailValidation.test(email) && passwordValidation.test(password)){
    //res.send(`${email.toUpperCase()} + ${password.toUpperCase()}`)
    // mark this person as logged in if email and password are in the correct format
    req.session = { loggedIn: true }
    // redirect to root route
    res.redirect('/')
  } else {
    res.send('email and password should be provided with the correct format')
  }
})

router.get('/', (req: Request, res: Response) => {
  // req.session
  if (req.session?.loggedIn) {
    res.send(`
      <div>
        <div>You are logged in</div>
        <a href="/logout">Logout</a>
      </div>
    `)
  } else {
    res.send(`
      <div>
        <div>You are not logged in</div>
        <a href="/login">Login</a>
      </div>
    `)
  }
})

router.get('/logout', (req: Request, res: Response) => {
  req.session = undefined
  res.redirect('/')
})

router.get('/protected', requireAuth, (req: Request, res: Response) => {
  res.send('Welcome to protected route, logged in user!')
})

export { router }