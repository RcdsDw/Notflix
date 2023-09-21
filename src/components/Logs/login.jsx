import React from "react";
import { useNavigate } from "react-router-dom";
import api from "../../service/api";
import 'bootstrap/dist/css/bootstrap.css';

function Login() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/register");
    }

    return (
        <div class="">
            <form class="w-25">
                <div class="form-floating m-3">
                    <input type="text" name="email" class="form-control" placeholder="Email" required />
                    <label class="form-label">Email </label> 
                </div>
                <div class="form-floating m-3">
                    <input type="password" name="pass" placeholder="Enter Password" class="form-control" required />
                    <label class="form-label">Password </label>   
                </div>
                <div class="d-flex justify-content-center">
                    <input type="submit" class="btn btn-primary m-3"/>
                    <button type="button" onClick={handleClick} class="btn btn-primary m-3">Register</button>
                </div>
            </form>
        </div>
    )
}

export default Login