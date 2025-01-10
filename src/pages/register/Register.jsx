import "./register.css"

export default function Register() {
  return (
    <div className='login'>
      <div className="loginWrapper">
        <div className="loginLeft">
            <h3 className="loginLogo">Online Connections</h3>
            <span className="loginDesc">Connect with friends and the world around you on Online Connections.</span>
        </div>
        <div className="loginRight">
            <div className="loginBox">
                <input placeholder="User name" className="loginInput" />
                <input placeholder="Email" className="loginInput" />
                <input placeholder="Password" className="loginInput" />
                <input placeholder="Confirm Password" className="loginInput" />
                <button className="loginButton">Sign Up</button>
                <button className="loginRegisterButton">Login to Account</button>
            </div>
        </div>
      </div>
    </div>
  )
}
