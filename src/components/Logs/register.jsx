import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterPost } from "../../service/register";
import Grid from '@mui/material/Unstable_Grid2';
import 'bootstrap/dist/css/bootstrap.css';

function Register() {

    const [error, setError] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordRepeat, setPasswordRepeat] = useState("")

    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        if (password === passwordRepeat) {
            let res = await RegisterPost(email, password)
            setError("")
    
            if (!res) {
                setError("Impossible de crée l'utilisateur")
            } else {
                navigate("/login");
            }
        } else {
            setError('Les mots de passe ne sont pas identiques')
        }  
    }

    function handleNavigate() {
        navigate("/login");
    }

    function handleEmail(e) {
        setEmail(e.target.value)
    }

    function handlePassword(e) {
        setPassword(e.target.value)
    }

    function handlePasswordRepeat(e) {
        setPasswordRepeat(e.target.value)
    }
    
    return (
            <div className="d-flex justify-content-center" style={{marginTop: 300 + 'px'}}>
                <form className="w-25">
                    <h1 className="d-flex justify-content-center">Inscription</h1>
                    <div className="form-floating m-3">
                        <input type="text" name="email" className="form-control" placeholder="Email" id="email" value={email} onChange={handleEmail} required/>
                        <label className="form-label">Email </label> 
                    </div>
                    <div className="form-floating m-3">
                        <input type="password" name="pass" placeholder="Enter Password" className="form-control" id="password" value={password} onChange={handlePassword} required/>
                        <label className="form-label">Password </label>   
                    </div>
                    <div className="form-floating m-3">
                        <input type="password" name="pass-repeat" placeholder="Repeat Password" className="form-control" value={passwordRepeat} onChange={handlePasswordRepeat} required/>
                        <label className="form-label">Confirm Password </label>
                    </div>
                    <div className="d-flex justify-content-center">
                        <input type="submit" onClick={handleSubmit} className="btn btn-primary m-3"/>
                        <button type="button" onClick={handleNavigate} className="btn btn-primary m-3">Se Connecter</button>
                    </div>
                </form>
            </div>
    )
}

export default Register