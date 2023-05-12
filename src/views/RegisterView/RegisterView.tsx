import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import { public_axios } from "@src/utils/public_axios";

const [created, setCreated] = useState<boolean>(false);

type TRegisterForm = {
  username: string;
  email: string;
  password: string;
};

export default function RegisterView() {

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<TRegisterForm>();

  async function onSubmit(data: TRegisterForm) {
    try {
      const resp = await public_axios.post("/auth/signup", data);
      if (resp.data?.id) {
        setCreated(true)
      }
    } catch (error: any) {
      setError("root", { message: error.response.data.errors?.[0].msg });
    }
  }

  return (
    <section className="bg-gray-500 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create and account
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              action="#"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Username
                </label>
                <input
                  {...register("username", { required: true })}
                  type="text"
                  name="username"
                  id="username"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter username"
                />
                {errors.username && (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                    <span className="font-medium">Oh, snapp!</span> Some error
                    message.
                  </p>
                )}
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your email
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
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
                  <span className="font-medium">{errors.root.message}</span>{" "}
                </p>
              )}
              <button
                type="submit"
                className="w-full text-white bg-[blue] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Create an account
              </button>
              {created && (
                <p className="mt-2 text-sm text-green-600 dark:text-green-500">
                  <p className="mt-3">Successfully created</p>
                  <span className="font-medium">
                    <Link to="/login">shesvla</Link>
                  </span>{" "}
                </p>
              )}
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  to="/Login"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
