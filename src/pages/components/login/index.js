/* eslint-disable react-hooks/rules-of-hooks */
import { AuthContext } from "@/pages/Authentication/Authentication";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";

const index = () => {
  const { loginUser, user } = useContext(AuthContext);
  const { handleSubmit, register } = useForm();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const onSubmit = (data) => {
    setLoading(true);
    setError("");
    setSuccess("");
    const email = data.email;
    const password = data.password;
    loginUser(email, password)
      .then((data) => {
        setSuccess("user login seccess fully");
      })
      .catch((error) => {
        setError("something is wrong, please try again");
      });
    console.log(data);
    setLoading(false);
  };

  return (
    <div className="max-w-[1000px] mx-auto">
      <div className="hero min-h-screen shadow-xl">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-center text-[#615956]">
              Login now!
            </h1>
            <p className="py-6 text-[#615956]">
              This login page just for admin, if you dont have any admin accound
              then please dont try to login. otherwise you may have beel block
              for this website
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                  {...register("email")}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                  {...register("password")}
                />
              </div>
              <p className="text-center font-serif font-thin text-xl text-green-400">
                {success}
              </p>
              <p className="text-center font-serif font-thin text-xl text-red-400">
                {error}
              </p>
              <div className="form-control mt-6">
                {user ? (
                  <>
                  </>
                ) : (
                  <button className="btn btn-outline text-white text-lg mr-2 uppercase bg-[#615956]">
                    {loading ? "....." : "Login"}
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
