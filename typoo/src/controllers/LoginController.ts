import { NextFunction, Request, Response } from 'express'
import { get, controller, use, BodyValidator, post } from './decorators'

function logger(req: Request, res: Response, next: NextFunction){
  console.log('Request was used')
  next()
}

@controller('/auth')
class LoginController {
  /*@get('/')
  add(a: number, b: number): number {
    return a + b
  }*/


  @get('/login')
  @use(logger)
  getLogin(req: Request, res: Response): void {
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
  }

  @post('/login')
  @BodyValidator('email', 'password')
  postLogin(req: Request, res: Response) {
    const { email, password } = req.body
  
    const emailValidation: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    const passwordValidation: RegExp = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/ // from 6 to 16 chars, at least 1 num and 1 special char.
  
    if (emailValidation.test(email) && passwordValidation.test(password)){
      //res.send(`${email.toUpperCase()} + ${password.toUpperCase()}`)
      // mark this person as logged in if email and password are in the correct format
      req.session = { loggedIn: true }
      // redirect to root route
      res.redirect('/')
    } else {
      res.send('email and password should be provided with the correct format')
    }
  }

  @get('/logout')
  getLogout(req: Request, res: Response) {
    req.session = undefined
    res.redirect('/')
  }
}