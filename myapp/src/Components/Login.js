import React,{useState} from "react";

const Login = (props) => { 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(`Form submit with email :,${email} & password : ${password}`);
        
        props.handleClick(email, password);
    };

    return(
        <div id="login">
        <h3 className="text-center text-white pt-5">Login form</h3>
            <div className="container">
                <div id="login-row" className="row justify-content-center align-items-center">
                    <div id="login-column" className="col-md-6">
                        <div id="login-box" className="col-md-12">
                            <form id="login-form" className="form" onSubmit={handleSubmit}>
                                <h3 className="text-center text-info">Login</h3>
                                <div className="form-group">
                                    <label htmlFor="username" className="text-info">Username:</label><br/>
                                    <input type="text" name="username" id="username" className="form-control" onChange={(e) => setEmail(e.target.value)} value={email}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password" className="text-info">Password:</label><br/>
                                    <input type="password" name="password" id="password" className="form-control" onChange={(e) => setPassword(e.target.value)} value={password}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="remember-me" className="text-info"><span>Remember me</span> <span><input id="remember-me" name="remember-me" type="checkbox"/></span></label><br/>
                                    <input type="submit" name="submit" className="btn btn-info btn-md" value="submit"/>
                                </div>
                               
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    );
};

export default Login;