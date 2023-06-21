import MainContainer from "@src/components/MainContainer/MainContainer";
import { GoogleMap } from "./GoogleMap";
import { useNavigate } from "react-router";

export function Footer() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="w-full h-[50px] bg-gray-700"></div>
      <div className="w-full bg-gray-400 ">
        <MainContainer>
          <footer className="bg-white flex justify-around items-center p-5 max-md:flex-col gap-5">
            <div className="w-2/4 flex gap-2 items-center justify-around max-xl:flex-col max-xl:items-center max-xl:gap-10 max-md:w-full">
              <div className="flex flex-col gap-3 bg-gray-400 p-5 rounded-xl">
                <div className="text-blue-600 font-bold">
                  Number :{" "}
                  <span className="text-white">(+995) 568-997-091</span>
                </div>
                <div className="text-blue-600 font-bold">
                  Email : <span className="text-white">company@gmail.com</span>
                </div>
                <div className="text-blue-600 font-bold">
                  Working Hours :{" "}
                  <span className="text-white">9:00 - 18:00</span>
                </div>
              </div>
              <div className="flex gap-3">
                <button
                  className="bg-white font-bold px-10 py-4 h-1/3 rounded-full border-solid border-[5px] border-blue-600"
                  onClick={() => {
                    navigate("/contactus");
                  }}
                >
                  Contact Us
                </button>
              </div>
            </div>

            <div className="w-[400px] h-[400px] max-xl:w-[250px] max-xl:h-[250px]">
              <GoogleMap />
            </div>
          </footer>
        </MainContainer>
      </div>
    </div>
  );
}
