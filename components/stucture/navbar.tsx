import Image from "next/image";
import { Button } from "../ui/button";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="flex flex-row w-full justify-between">
      <div className="p-5 ">
        <Image src={"/dark-logo-new.png"} alt="logo" width={50} height={50} />
      </div>
      <div className="flex flex-row items-center mr-9 max-sm:hidden">
        <div className="flex flex-row mx-4 max-md:mx-1">
          <span className="numbers">01.</span>
          <p className="nav-elements">About</p>
        </div>

        <div className="flex flex-row mx-4 max-md:mx-2">
          <span className="numbers">02.</span>
          <p className="nav-elements">Work</p>
        </div>
        <div className="flex flex-row mx-4 max-md:mx-2">
          <span className="numbers">03.</span>
          <p className="nav-elements">Skills</p>
        </div>
        <div className="flex flex-row mx-4 max-md:mx-2">
          <span className="numbers">04.</span>
          <p className="nav-elements">Contact</p>
        </div>
        <div className=" mx-4 max-md:mx-2">
          <Button variant={"resume_btn"} className="re_btn">
            Resume
          </Button>
        </div>
      </div>
      <div className="hidden max-sm:flex items-center mr-10">
        <GiHamburgerMenu size={40} />
      </div>
    </div>
  );
};

export default Navbar;
