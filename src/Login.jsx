import React, { useEffect, useState } from "react";
import { SessionStore } from "./SessionStore";
import { gapi } from "gapi-script";
import GoogleLogin from "react-google-login";
import { UserStore } from "./UserStore";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const { session, setSession } = SessionStore();
  const { setUser } = UserStore();
  const navegar = useNavigate();
  // By default it starts with "Checking..."
  const [sesion, setSesion] = useState(session);
  const Id_Client = import.meta.env.VITE_ID_CLIENT;
  const startGoogleLogin = async () => {
    console.log("");
  };
  const onSuccessLogin = (res) => {
    console.log("Loggin success");
    const { profileObj } = res;
    console.log(profileObj);
    console.log(profileObj.name);
    console.log(profileObj.email);
    // Asignando nuevo user
    setUser({
      name: profileObj.name,
      email: profileObj.email,
      photo: profileObj.imageUrl,
    });
    // Asignando nueva sesion
    setSession("Logged");
    navegar("/home");

  };
  const onFailureLogin = (res) => {
    console.log("Loggin not Success");
    console.log(res);
  };

  const startGoogleServices = () => {
    const start = async () => {
      gapi.auth2.init({
        clientId: Id_Client,
      });
    };
    gapi.load("client:auth2", start);
  };
  useEffect(() => {
    startGoogleServices();
  });
  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              className="w-8 h-8 mr-2"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              alt="logo"
            />
            Flowbite
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign in
                </button>
                <div className="w-full flex h-fit">
                  <GoogleLogin
                    clientId={Id_Client}
                    onSuccess={onSuccessLogin}
                    onFailure={onFailureLogin}
                    cookiePolicy="single_host_policy"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
