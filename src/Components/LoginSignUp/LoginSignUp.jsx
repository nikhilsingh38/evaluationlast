import React, {  Component  } from "react";
import { connect } from "react-redux";
import { ActionCreators } from "../../Redux/Login/action";
import { getStore } from "../../utils";


export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        firstName: "",
        lastName: "",
        telephone: "",
        age: 28,
        email: "",
        state: "",
        country: "",
        address: "Home",
        address1: "",
        address2: "",
        interests: [],
        subscribenewsletter: false,
      },
      submitted: false,

      username: "",
      password: "",
      errors: {
        username: "Enter User Name!",
        password: "Enter Password!",
      },
      loginStatus: "",
      submitted: false,
    };

    
  }

  inputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    this.validationErrorMessage(event);
  };

  validationErrorMessage = (event) => {
    const { name, value } = event.target;
    let errors = this.state.errors;
    switch (name) {
      case "username":
        errors.username = value.length < 1 ? "Enter User Name" : "";
        break;
      case "password":
        errors.password = value.length < 1 ? "Enter Password" : "";
        break;
      default:
        break;
    }
    this.setState({ errors });
  };

  validateForm = (errors) => {
    let valid = true;
    console.log(errors);
    Object.entries(errors).forEach((item) => {
      console.log(item);
      item && item[1].length > 0 && (valid = false);
    });
    console.log(valid);
    return valid;
  };

  loginForm = async (event) => {
    this.setState({ submitted: true });
    event.preventDefault();
    if (this.validateForm(this.state.errors)) {
      console.info("Valid Form");
      const user = getStore("user");
      if (user) {
        this.props.dispatch(ActionCreators.login(user));
        this.props.history.push("/home");
      } else {
        this.setState({
          loginStatus: "Login Failed! Invalid Username and Password",
        });
      }
    } else {
      console.log("Invalid Form");
    }
  };

  render() {
    const { username, password, errors, submitted, loginStatus } = this.state;

    return (
      <div className="loginSignUp">
        <form className="signUp" onSubmit={(e) => {}}>
          <h1>SignUp</h1>
          <label>name</label>
          <input
            type="text"
            className="name"
            value={firstName}
            name="firstName"
            onChange={(e) => {
              this.inputChange(e);
            }}
            required
          />
          <br />
          <label>password</label>
          <input
            type="text"
            className="password"
            onChange={(event) => {}}
            required
          />
          <br />
          <select value={""} className="location" onChange={(event) => {}}>
            <option value=""></option>
            <option value="bangalore">Bangalore</option>
            <option value="kolkata">Kolkata</option>
            <option value="delhi">Delhi</option>
            <option value="mumbai">Mumbai</option>
          </select>
          <label>Interests</label>
          <br />
          <label>technology</label>
          <input
            type="checkbox"
            className="technology"
            onChange={(event) => {}}
          />
          <br />
          <label>food</label>
          <input type="checkbox" className="food" onChange={(event) => {}} />
          <br />
          <label>movies</label>
          <input type="checkbox" className="movies" onChange={(event) => {}} />
          <br />
          <label>culture</label>
          <input type="checkbox" className="culture" onChange={(event) => {}} />
          <br />
          <label>art</label>
          <input type="checkbox" className="art" onChange={(event) => {}} />
          <br />
          <label>drama</label>
          <input type="checkbox" className="drama" onChange={(event) => {}} />
          <br />
          <label>image</label>
          <input
            type="text"
            className="image"
            onChange={(event) => {}}
            required
          />
          <br />
          <input type="submit" className="submitSignUpForm" />
        </form>
        <form className="login" onSubmit={(e) => {}}>
          <h1>Login</h1>
          <label>name</label>
          <input
            type="text"
            value={username}
            name="username"
            className="name"
            onChange={(e) => {
              this.inputChange(e);
            }}
            required
          />
          <br />
          <label>password</label>
          <input
            type="text"
            value={password}
            className="password"
            name="password"
            onChange={(e) => {
              this.inputChange(e);
            }}
            required
          />
          <br />
          <input
            type="submit"
            onClick={this.loginForm}
            className="submitLoginForm"
          />
        </form>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    profile: state.user.profile,
  };
};

export default connect(mapStateToProps)(Login);
