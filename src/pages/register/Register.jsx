import './register.css'

export default function Register() {
  return (
    <div className='login'>
      <div className='loginWrapper'>
        <div className='loginLeft'>
          <h3 className='loginLogo'>CiroSocial</h3>
          <span className='loginDesc'>
            Connect with Ciro and Ciro's firends on CiroSocial.
          </span>
        </div>
        <div className='loginRight'>
          <div className='loginBox'>
            <input type='text' className='loginInput' placeholder='Username' />
            <input type='email' className='loginInput' placeholder='Email' />
            <input
              type='password'
              className='loginInput'
              placeholder='Password'
            />
            <input
              type='password'
              className='loginInput'
              placeholder='Password again'
            />
            <button className='loginButton'>Sign up</button>
            <button className='loginRegisterButton'>
              Log into your Account
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
