import React, { useState } from "react";

export default function ContactUsView() {

  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  function sendText(e: any) {
    e.preventDefault()

    setEmail('')
    setText('')
  }

  return (
    <div className="flex items-center justify-center mt-20 h-[100vh]">
      <form
        className="p-5 rounded-xl bg-white w-1/3 h-[350px] flex flex-col justify-between"
        onSubmit={(e) => {
          sendText(e);
        }}
      >
        <div className="mb-6">
          <label className="block mb-2 text-md font-bold text-gray-900 dark:text-white">
            Your email
          </label>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="email"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-md font-bold text-gray-900 dark:text-white">
            Text
          </label>
          <textarea
            onChange={(e) => {
              setText(e.target.value);
            }}
            value={text}
            placeholder="Text"
            id="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Send
        </button>
      </form>
    </div>
  );
}
