
import { useState } from "react";
import UserForm from "./UserForm";
import { auth , db} from '../Database/firebase'
import './register.css'
import { useNavigate } from "react-router-dom";
function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formErrorEmail, setFormErrorEmail] = useState("");
  const [formErrorPassword, setFormErrorPassword] = useState("");
  const navigate = useNavigate();

  const login = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
       sessionStorage.setItem('email',email)
       navigate('/');
        }
      })
      .catch((error) => console.log(error))
  };
  const loginSubmitHandler = async (e) => {
    e.preventDefault();

    let emailCheck = emailValidate(email);
    if (emailCheck) setFormErrorEmail(emailCheck);
        else setFormErrorEmail("");
    let passwordCheck = passwordValidate(password);
    if (passwordCheck) setFormErrorPassword(passwordCheck);
        else setFormErrorPassword("");

    console.log(formErrorEmail,formErrorPassword)

    if (formErrorEmail==="" && formErrorPassword==="") {
      login();
    }
  };
  const emailValidate = (value) => {
    const emailRegex =
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    if (!emailRegex.test(value)) return "Wrong email";
    return undefined;
  };

  const passwordValidate = (value) => {
    if (!value || value.length < 6)
      return "Password must be more than 6 characters";
    return undefined;
  };

  return (
    <UserForm>
      <div className="formContainer__row">
        <h1>Login</h1>
      </div>
      <div className="formContainer__row">
        <label>Email: </label>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email"
        />
      </div>
      <div className="formContainer__row">
        <label>Passowrd:</label>
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
        />
      </div>
      <div className="formContainer__row">
        <button
        className="Resume-btn"
        style={{fontSize:'20px'}}
          onClick={(e) => {
            loginSubmitHandler(e);
          }}
        >
          Login
        </button>

      </div>
    </UserForm>
  );
}

export default LoginForm;
