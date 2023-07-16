import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function ContactUsView() {
  const { t } = useTranslation();

  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  function sendText(e: any) {
    e.preventDefault();

    setEmail("");
    setText("");
  }

  return (
    <div className="flex items-center w-full justify-center mt-20 h-[100vh]">
      <form
        className="p-5 rounded-xl bg-white w-8/12 min-h-[350px] flex flex-col justify-between"
        onSubmit={(e) => {
          sendText(e);
        }}
      >
        <div className="mb-6">
          <label className="block mb-2 text-md font-bold text-gray-900 ">
            {t("label.mail")}
          </label>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder={t("placeHolder.mail")}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-md font-bold text-gray-900 ">
            {t("label.text")}
          </label>
          <textarea
            onChange={(e) => {
              setText(e.target.value);
            }}
            value={text}
            placeholder={t("placeHolder.text")}
            id="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          {t("btnText.send")}
        </button>
      </form>
    </div>
  );
}
