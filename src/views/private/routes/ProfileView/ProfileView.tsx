import { useState } from "react";

export default function ProfileView() {
  const [clicked, setClicked] = useState(true);

  const [firstPass, setFirstPass] = useState("");
  const [secondPass, setSecondPass] = useState("");

  function change(param: string) {
    console.log(param);
  }

  function submit(e: any) {
    e.preventDefault();

    if (firstPass === secondPass) {
      setFirstPass("");
      setSecondPass("");
      console.log("correct");
    } else {
      console.log("not");
    }
  }

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col h-[300px] justify-around">
        <button
          onClick={() => {
            change("username");
            setClicked(!clicked);
          }}
        >
          Change Username
        </button>
        <button
          onClick={() => {
            change("email");
            setClicked(!clicked);
          }}
        >
          Change Email
        </button>
        <button
          onClick={() => {
            change("password");
            setClicked(!clicked);
          }}
        >
          Change Password
        </button>
      </div>

      {clicked && (
        <form className="w-3/4 bg-gray-300">
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your Password
            </label>
            <input
              onChange={(e) => setFirstPass(e.target.value)}
              value={firstPass}
              type="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Retry password
            </label>
            <input
              onChange={(e) => setSecondPass(e.target.value)}
              value={secondPass}
              type="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              New password
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>

          <button
            onClick={(e) => {
              submit(e);
            }}
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
}
