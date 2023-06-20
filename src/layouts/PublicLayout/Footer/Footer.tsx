import MainContainer from "@src/components/MainContainer/MainContainer";
import { GoogleMap } from "./GoogleMap";
import { useNavigate } from "react-router";

export function Footer() {
  const navigate = useNavigate();

  return (
    <MainContainer>
      <footer className="bg-[purple] flex justify-around items-center p-5 max-md:flex-col gap-10">
        <div className="w-2/4 flex justify-around max-lg:flex-col max-lg:items-center max-lg:gap-10 max-md:w-full">
          <div className="flex flex-col gap-3">
            <div>
              Number : <span>(+995) 568-997-091</span>
            </div>
            <div>
              Email : <span>company@gmail.com</span>
            </div>
            <div>
              Working Hours : <span>9:00 - 18:00</span>
            </div>
          </div>
          <div className="flex gap-3">
            <button
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
  );
}
