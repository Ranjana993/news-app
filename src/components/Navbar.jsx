/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import img from "../assets/logo.png"

const Header = () => {
  return (
    <nav className="text-black bg-white border-b border-pure-greys-25">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={img} className="h-8 " alt="Flowbite Logo" />
        </Link>
      </div>
    </nav>
  );
}

export default Header;
