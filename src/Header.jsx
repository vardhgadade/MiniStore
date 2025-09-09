import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

let Header = () => {
  const [btn, setBtn] = useState("Login");

  let operation = () => {
    setBtn(btn === "Login" ? "Logout" : "Login");
  };

  useEffect(() => {
    console.log("hiee");
  }, [btn]);

  const cartItem = useSelector((store) => store.cart?.items || []);

  return (
    <header className="w-full flex items-center justify-between p-4 shadow-md fixed top-0 left-0 bg-white z-50">
      {/* Logo */}
      <div className="logo-container h-[40px] w-[40px] flex items-center justify-center text-2xl">
        🛒
      </div>

      {/* Navigation Items */}
      <nav>
        <ul className="flex items-center gap-6 font-medium">
          <li className="cursor-pointer hover:text-red-500">
            <Link to="/">Home</Link>
          </li>

          <li className="cursor-pointer hover:text-red-500">
            <Link to="/products">Products</Link>
          </li>

          <li className="cursor-pointer hover:text-red-500">
            <Link to="/cart">Cart({cartItem.length})</Link>
          </li>
        </ul>
      </nav>

      {/* Login/Logout Button */}
      <div>
        <button
          type="button"
          onClick={operation}
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5"
        >
          {btn}
        </button>
      </div>
    </header>
  );
};

export default Header;
