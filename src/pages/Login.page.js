import { Button, TextField } from "@mui/material";
import { useContext, useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/user.context";
//import { useNavigate } from 'react-router-dom';
import "./Login.css";

const Login = () => {
  const nav = useNavigate();
  const navigate = useNavigate();
  const location = useLocation();
  const nav_login = () => {nav('/home')}

  const { user, fetchUser, emailPasswordLogin } = useContext(UserContext);

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const onFormInputChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const redirectNow = () => {
    const redirectTo = location.search.replace("?redirectTo=", "");
    navigate(redirectTo ? redirectTo : "/");
  };

  const loadUser = async () => {
    if (!user) {
      const fetchedUser = await fetchUser();
      if (fetchedUser) {
        redirectNow();
      }
    }
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async () => {
    try {
      const user = await emailPasswordLogin(form.email, form.password);
      if (user) {
        redirectNow();
      }
    } catch (error) {
      if (error.statusCode === 401) {
        alert("Invalid username/password. Try again!");
      } else {
        alert(error);
      }
    }
  };

  return (
<form className="login-form-container">
  <h1>Login</h1>
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
  <button className="pg1-button" id="login" onClick={nav_login}>Login</button>

  <p>
    Don't have an account? <Link to="/signup">Sign up</Link>
  </p>
</form>


  );
};

export default Login;
