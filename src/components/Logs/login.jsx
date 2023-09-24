import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginPost } from "../../service/login";
import 'bootstrap/dist/css/bootstrap.css';

function Login() {

    const [error, setError] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        let res = await LoginPost(email, password)
        setError("")

        if (!res) {
            setError("Impossible de crée l'utilisateur")
        } else {
            navigate("/homepage");
        } 
    }

    function handleNavigate() {
        navigate("/register");
    }

    function handleEmail(e) {
        setEmail(e.target.value)
    }

    function handlePassword(e) {
        setPassword(e.target.value)
    }
    
    return (
        <div className="d-flex justify-content-center" style={{marginTop: 350 + 'px'}}>
            <form className="w-25">
                <h1 className="d-flex justify-content-center">Connexion</h1>
                <div className="form-floating m-3">
                    <input type="text" name="email" className="form-control" placeholder="Email" id="email" value={email} onChange={handleEmail} required/>
                    <label className="form-label">Email </label> 
                </div>
                <div className="form-floating m-3">
                    <input type="password" name="pass" placeholder="Enter Password" className="form-control" id="password" value={password} onChange={handlePassword} required/>
                    <label className="form-label">Password </label>   
                </div>
                <div className="d-flex justify-content-center">
                    <input type="submit" onClick={handleSubmit} className="btn btn-primary m-3"/>
                    <button type="button" onClick={handleNavigate} className="btn btn-primary m-3">S'enregistrer</button>
                </div>
            </form>
        </div>
    )
}

export default Login