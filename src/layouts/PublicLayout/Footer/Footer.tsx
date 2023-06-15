import MainContainer from "@src/components/MainContainer/MainContainer";
import { GoogleMap } from "./GoogleMap";
import { useNavigate } from "react-router";


export function Footer() {
  const navigate = useNavigate()
  
  return (
    <MainContainer>
      <footer className="bg-[purple] flex justify-around items-center p-5">
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
          <button onClick={()=> {
            navigate('/contactus')
          }}>Contact Us</button>
          <button>About Us</button>
        </div>
        <div className="w-[500px] h-[500px] bg-red-300">
          <GoogleMap />
        </div>
      </footer>
    </MainContainer>
  );
}
