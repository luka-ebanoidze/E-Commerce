import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { instance } from "@src/utils/axiosInstance";

type TRegisterForm = {
  email: string;
  password: string;
  username: string;
  role: string;
};

export default function RegisterView() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
  } = useForm<TRegisterForm>();

  async function onSubmit(data: TRegisterForm) {
    console.log(data);

    try {
      const resp = await instance.post(`/auth/signup`, data);

      if (resp.data) {
        navigate("/login");
      }
    } catch (error: any) {
      setError("Something is wrong");
    }
  }

  return (
    <section className="bg-gray-200 max-md:py-20 ">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              {t("auth.regToAcc")}
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              action="#"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  {t("label.userName")}
                </label>
                <input
                  {...register("username", { required: true })}
                  type="text"
                  name="username"
                  id="username"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder={t("placeHolder.username")}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  {t("label.mail")}
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="name@company.com"
                />
              </div>
              <div>
                <input
                  {...register("role")}
                  value={"USER"}
                  type="text"
                  name="role"
                  id="role"
                  className="hidden"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  {t("label.password")}
                </label>
                <input
                  {...register("password", { required: true })}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  "
                />
              </div>
              {error && <span className="text-[red]">{t("error.wrong2")}</span>}
              <button
                type="submit"
                className="w-full text-white bg-gray-700 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  "
              >
                Create an account
              </button>

              <p className="text-sm font-light text-gray-500 ">
                {t("auth.yesAcc")}{" "}
                <Link
                  to="/Login"
                  className="font-medium text-primary-600 hover:underline "
                >
                  {t("btnText.login")}
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
