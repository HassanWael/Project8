import { useState } from "react";
import UserForm from "./UserForm";
import "./register.css";
import { useNavigate } from "react-router-dom";
import { auth , db} from '../Database/firebase'
function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [formErrorEmail, setFormErrorEmail] = useState("");
  const [formErrorPassword, setFormErrorPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [error,setError] = useState("");
  const navigate = useNavigate();
  
  const register = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          navigate('/')
          sessionStorage.setItem('email',email)
          db.collection('Users').doc(email).set({
            username:username,
            email:email,
            
          })
        }
      })
      .catch((error) => setError(error.message));

   
  }
  const registerSubmitHandler = async (e) => {
    e.preventDefault();

    let emailCheck = emailValidate(email);
    if (emailCheck) setFormErrorEmail(emailCheck);
    else setFormErrorEmail("");
    let passwordCheck = passwordValidate(password);
    if (passwordCheck) setFormErrorPassword(passwordCheck);
    else setFormErrorPassword("");

    let usernameCheck = usernameValidate(username);
    if (usernameCheck) {
      setUsernameError(usernameCheck);
    } else setUsernameError("");
    console.log(formErrorEmail, formErrorPassword, usernameError);

    if (
      formErrorEmail === "" &&
      formErrorPassword === "" &&
      usernameError === ""
    ) {
      register();
    }
  };
  const emailValidate = (value) => {
    const emailRegex =
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    if (!emailRegex.test(value)) return "Wrong email";
    return undefined;
  };

  const usernameValidate = (value) => {
    if (!value || value.length < 4) {
      return "Username should be more than 4 characters";
    } else return undefined;
  };
  const passwordValidate = (value) => {
    if (!value || value.length < 6)
      return "Password must be more than 6 characters";
    return undefined;
  };

  return (
    <UserForm>
      <div className="formContainer__row">
        <h1>Register</h1>
      </div>
      <div className="formContainer__row">
        <small className="errors">{error}</small>
      </div>
      <div className="formContainer__row">
        <label>User Name: </label>
        <input
          name="username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          type="text"
        />
        <small className="errors" htmlFor="username">
          {usernameError}
        </small>
      </div>
      <div className="formContainer__row">
        <label>Email: </label>
        <input
          name="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email"
        />
        <small className="errors" htmlFor="email">
          {formErrorEmail}
        </small>
      </div>
      <div className="formContainer__row">
        <label>Passowrd:</label>
        <input
          name="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
        />
        <small className="errors" htmlFor="password">
          {formErrorPassword}
        </small>
      </div>
      <div className="formContainer__row">
        <button
        className="Resume-btn"
          onClick={(e) => {
            registerSubmitHandler(e);
          }}
        >
          REGISTER
        </button>
      </div>
      <div className="formContainer__row">
       <a onClick={()=>{navigate('/login')}} className="haveAccount" href="">already have an account ? </a>
      </div>
    </UserForm>
  );
}

export default RegisterForm;
