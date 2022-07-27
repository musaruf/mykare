import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import useRegister from "../hooks/useRegister";
import Health from "../../assets/img/health.jpg";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { onSubmit } = useRegister();

  return (
    <section className="Form my-4 mx-3">
      <div className="container">
        <div className="row g-0">
          <div className="col-lg-5">
            <img src={Health} alt="Login page img" className="img-fluid" />
          </div>
          <div className="col-lg-7 px-5 pt-5">
            <h1 className="font-weight-bold py-3">Register</h1>
            <h4>Sign up your account</h4>
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
                    Register
                  </button>
                </div>
              </div>
              <p>
                Already have an account? <Link to="/">Login here</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
