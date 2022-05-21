import React from 'react';

const Login = (props) => {
    const { email, setEmail, password, setPassword, handleLogin, handleSignup,  hasAccount, setHasAccount, emailError, passwordError } = props;

    return(
        <section className="login">
            <div className="loginContainer">
                <label>email</label>
                <input type="text" autoFocus required value={email} onChange={(e) => setEmail(e.target.value)}/>
                <p className="errorMsg">{emailError}</p>
                <label>password</label>
                <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
                <p className="errorMsg">{passwordError}</p>
                <div className='btnContainer'>
                    {hasAccount ? (
                        <>
                        <button onClick={handleLogin}>sign in</button>
                        <p>Dont have an account? <span onClick={() => setHasAccount(!hasAccount)}>Signup</span></p>
                        </>
                    ):(
                        <>
                        <button onClick={handleSignup}>sign up</button>
                        <p>have an account? <span onClick={() => setHasAccount(!hasAccount)}>sign in</span></p>
                        </>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Login;