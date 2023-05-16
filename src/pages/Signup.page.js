import { Button, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/user.context";
//import { useNavigate } from 'react-router-dom';
import "./Signup.css";
 
const Signup = () => {
 const nav = useNavigate();
 const navigate = useNavigate();
 const location = useLocation();
 const nav_signup = () => {nav('/home')}
 
 // As explained in the Login page.
 const { emailPasswordSignup } = useContext(UserContext);
 const [form, setForm] = useState({
   email: "",
   password: ""
 });
 
 // As explained in the Login page.
 const onFormInputChange = (event) => {
   const { name, value } = event.target;
   setForm({ ...form, [name]: value });
 };
 
 
 // As explained in the Login page.
 const redirectNow = () => {
   const redirectTo = location.search.replace("?redirectTo=", "");
   navigate(redirectTo ? redirectTo : "/");
 }
 
 // As explained in the Login page.
 const onSubmit = async () => {
   try {
     const user = await emailPasswordSignup(form.email, form.password);
     if (user) {
       redirectNow();
     }
   } catch (error) {
     alert(error);
   }
 };
 
 return (
  <form className="login-form-container">
    <h1>Signup</h1>
    <TextField
      label="Email"
      type="email"
      variant="outlined"
      name="email"
      value={form.email}
      onChange={onFormInputChange}
      style={{ marginBottom: "1rem" }}
    />
    <TextField
      label="Password"
      type="password"
      variant="outlined"
      name="password"
      value={form.password}
      onChange={onFormInputChange}
      style={{ marginBottom: "1rem" }}
    />

    <button className="pg1-button" id="signup" onClick={nav_signup}>Signup</button>

    <p>
      Have an account already? <Link to="/login">Login</Link>
    </p>
  </form>
  
  
  );
}
 
export default Signup;