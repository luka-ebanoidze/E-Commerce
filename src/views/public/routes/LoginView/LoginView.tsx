import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext, useEffect } from "react";

import axios from "axios";

import { public_axios } from "@src/utils/public_axios";

import { TLocalStorage } from "@src/types/localstorage";

import { AuthContext } from "@src/context/AuthContext";
import { TAuthorizationStage } from "@src/types/auth.types";

import { UserContext } from "@src/context/UserContext";
import { TUserContextRole } from "@src/types/user.types";

type TLoginForm = {
  email: string;
  password: string;
};

export default function LoginView() {
  const { setStatus } = useContext(AuthContext);
  const { setCurrentUser } = useContext(UserContext);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<TLoginForm>();

  async function onSubmit(data: TLoginForm) {
    console.log(123);
    
    try {
      const resp = await axios.post("http://localhost:8080/login", data);

      if (resp.data.AccessToken) {
        navigate("/");

        localStorage.setItem('acces-token', resp.data.AccessToken);
        setStatus(TAuthorizationStage.AUTHORIZED);

        const info = await axios.get("http://localhost:8080/me", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem(
              'acces-token'
            )}`,
          },
        });

        if (
          info.data?.firstName === "admin" &&
          info.data?.lastName === "admin"
        ) {
          setCurrentUser(TUserContextRole.ADMIN);
        }
      }
    } catch (error: any) {
      setError("root", { message: "something went wrong" });
    }

    // try {
    //   console.log(data)
    //   const resp = await public_axios.post('/login', data)
    //   if(resp.data.accessToken) {
    //     localStorage.setItem(TLocalStorage.ACCESSTOKEN, resp.data.accessToken);
    //     setStatus(TAuthorizationStage.AUTHORIZED)
    //   }
    // } catch (error: any) {
    //   setError('root', {message: 'something went wrong'} )
    // }
  }

  return (
    <section className="bg-gray-500 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              action="#"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your email
                </label>
                <input
                  {...register("email", { required: true })}
                  type="text"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                    <span className="font-medium">Oh, snapp!</span> Some error
                    message.
                  </p>
                )}
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <input
                  {...register("password", { required: true })}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                {errors.password && (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                    <span className="font-medium">Oh, snapp!</span> Some error
                    message.
                  </p>
                )}
              </div>
              {errors?.root && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                  <span className="font-medium">Try again</span> Email or
                  Password isnt correct
                </p>
              )}
              <button
                type="submit"
                className="w-full text-white bg-[blue] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <Link
                  to="/Register"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
