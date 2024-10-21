import React, { useState, useContext } from "react";
import classes from "./Signup.module.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { auth } from "../../Utility/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from "firebase/auth";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";
import { ClimbingBoxLoader } from "react-spinners";
function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // console.log(email, password);
  const [{ user }, dispatch] = useContext(DataContext);
  // console.log(user);
  const [Loading, setLoading] = useState({
    signIn: false,
    signUp: false
  });
  const navigate = useNavigate();
  const navStateData = useLocation();
  console.log(navStateData);
  const authHandler = (e) => {
    e.preventDefault();
    // console.log(e.target.name)
    if (e.target.name == "signIn") {
      setLoading({ ...Loading, signIn: true });
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          // console.log(userInfo);
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user
          });
          setLoading({ ...Loading, signIn: false });
          navigate(navStateData?.state?.redirect || "/");
        })
        .catch((err) => {
          setLoading({ ...Loading, signIn: false });
          setError(err.message);
        });
    } else {
      setLoading({ ...Loading, signUp: true });
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          // console.log(userInfo);

          dispatch({
            type: Type.SET_USER,
            user: userInfo.user
          });
          setLoading({ ...Loading, signUp: false });
          navigate(navStateData?.state?.redirect || "/");
        })
        .catch((err) => {
          setLoading({ ...Loading, signUp: false });
          setError(err.message);
        });
    }
  };
  return (
    <section className={classes.login}>
      <Link to={"/"}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/603px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className={classes.login_container}>
        <form action="">
          <h1>Sign In</h1>
          {navStateData?.state?.msg && (
<small 
   style={{
    padding:"5px",
    textAlign:"center",
    color:"red",
    fontWeight:"bold",}}
>
 {navStateData?.state?.msg}
  
</small>
          )
          }
          <div>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="password">password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
            />
          </div>
          <button
            type="submit"
            name="signIn"
            onClick={authHandler}
            className={classes.login_signinbtn}
          >
            {Loading.signIn ? (
              <ClimbingBoxLoader color="blue" size={15} />
            ) : (
              "Sign in"
            )}
            {/* {Loading.signIn ? (
              <ClimbingBoxLoader color="blue" size={15}></ClimbingBoxLoader>
            ) : (
              "Sign in"
            )} */}
          </button>
        </form>
        <p>
          By signing-in you agree to the Amazon fake clone condition of use and
          sale.Please see our Privacy Nptice,our cookies Notice and our
          interest-Based Ads Notice.
        </p>
        <button
          type="submit"
          name="Signup"
          onClick={authHandler}
          className={classes.login_registerbtn}
        >
          {Loading.signUp ? (
            <ClimbingBoxLoader color="blue" size={15}></ClimbingBoxLoader>
          ) : (
            "Create your Amazon Account"
          )}
        </button>
        {error && (
          <small style={{ paddingTop: "5px", color: "red" }}>{error}</small>
        )}
      </div>
    </section>
  );
}

export default Auth;
