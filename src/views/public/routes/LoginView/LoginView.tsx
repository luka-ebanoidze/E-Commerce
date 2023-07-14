import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import jwt_decode from "jwt-decode";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { instance } from "@src/utils/axiosInstance";

import { AuthContext } from "@src/context/AuthContext";
import { TAuthorizationStage } from "@src/types/auth.types";
import { CurrentUserContext } from "@src/providers/CurrentUserProvider/CurrentUserProvider";

type TLoginForm = {
  email: string;
  password: string;
};

export default function LoginView() {
  const navigate = useNavigate()
  const { t } = useTranslation();

  const { setStatus } = useContext(AuthContext);
  const { setCurrentUser } = useContext(CurrentUserContext);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<TLoginForm>();

  async function onSubmit(data: TLoginForm) {
    try {
      const resp = await instance.post(`/auth/signin`, data);

      if (resp.data.accessToken) {
        const decodedToken = jwt_decode(resp.data.accessToken);

        setCurrentUser({
          user_id: (decodedToken as { id: string; role: string }).id,
          user_role: (decodedToken as { id: string; role: string }).role,
        });

        localStorage.setItem("acces-token", resp.data.accessToken);
        setStatus(TAuthorizationStage.AUTHORIZED);
      }
    } catch (error: any) {
      setError("root", { message: "something went wrong" });
    }
  }

  return (
    <section className="bg-gray-200 max-md:py-20">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              {t("auth.signInToAcc")}
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              action="#"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  {t("label.mail")}
                </label>
                <input
                  {...register("email", { required: true })}
                  type="text"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
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
                  {t("label.password")}
                </label>
                <input
                  {...register("password", { required: true })}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
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
              onClick={()=> {navigate(-1)}}
                type="submit"
                className="w-full text-white bg-gray-700 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                {t("btnText.login")}
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                {t("auth.noAcc")}{" "}
                <Link
                  to="/Register"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  {t("btnText.register")}
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
