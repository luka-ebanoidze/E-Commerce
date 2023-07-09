import { useTranslation } from "react-i18next";

export default function PaymentView() {
  const { t } = useTranslation();

  return (
    <div className="min-h-[100vh] flex items-center justify-center py-20">
      <div className="w-full my-10 max-w-2xl mx-auto p-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-lg font-medium mb-6">Payment Information</h2>
          <form className="flex flex-col gap-5">
            <div className="col-span-2 sm:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t("label.mail")}
              </label>
              <input
                required
                type="mail"
                name="emailr"
                id="emailr"
                placeholder="company@gmail.com"
                className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-2 sm:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t("label.cardNumber")}
                </label>
                <input
                  required
                  type="number"
                  name="card-number"
                  id="card-number"
                  placeholder="0000 0000 0000 0000"
                  className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t("label.exp")}
                </label>
                <input
                  required
                  type="number"
                  name="expiration-date"
                  id="expiration-date"
                  placeholder="MM / YY"
                  className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  CVC
                </label>
                <input
                  required
                  type="number"
                  name="cvv"
                  id="cvv"
                  placeholder="000"
                  className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t("label.cardH")}
                </label>
                <input
                  required
                  type="text"
                  name="card-holder"
                  id="card-holder"
                  placeholder={t("placeHolder.fullName")}
                  className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
            <hr />
            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-2 sm:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t("label.userName")}
                </label>
                <input
                  required
                  type="text"
                  className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t("label.lastName")}
                </label>
                <input
                  required
                  type="text"
                  className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t("label.phone")}
                </label>
                <input
                  required
                  type="number"
                  className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t("label.address")}
                </label>
                <input
                  required
                  type="text"
                  className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
            <div className="mt-8">
              <button
                type="submit"
                className="w-full boredr-solid border-[3px] border-blue-500 font-medium py-3 rounded-lg focus:outline-none"
              >
                {t("btnText.pay")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
