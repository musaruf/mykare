import React from "react";
import { Link } from "react-router-dom";
import Health from "../../assets/img/health.jpg";
import { useForm } from "react-hook-form";
import useLogin from "../hooks/useLogin";

const Login = () => {
  // react useForm
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // custom hook
  const { onSubmit } = useLogin();

  return (
    <section className="Form my-4 mx-3">
      <div className="container">
        <div className="row g-0">
          <div className="col-lg-5">
            <img src={Health} alt="Login page img" className="img-fluid" />
          </div>
          <div className="col-lg-7 px-5 pt-5">
            <h1 className="font-weight-bold py-3">Login</h1>
            <h4>Sign into your account</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-row">
                <div className="col-lg-7">
                  <input
                    type="text"
                    placeholder="username"
                    {...register("username", { required: true, minLength: 5 })}
                    className="form-control my-3 p-3"
                  />
                  {errors.username && (
                    <p className="error_msg">Please check the username</p>
                  )}
                </div>
              </div>
              <div className="form-row">
                <div className="col-lg-7">
                  <input
                    type="password"
                    placeholder="password"
                    {...register("password", { required: true, minLength: 5 })}
                    className="form-control my-3 p-3"
                  />
                  {errors?.password && (
                    <p className="error_msg">Please check the password</p>
                  )}
                </div>
              </div>
              <div className="form-row">
                <div className="col-lg-7">
                  <button type="submit" className="btn1 mt-3 mb-5">
                    Login
                  </button>
                </div>
              </div>
              <p>
                Don't have an account? <Link to="/register">Register here</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
