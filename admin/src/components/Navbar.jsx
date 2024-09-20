import { assets } from "../assets/assets";

const Navbar = ({ setToken }) => {
  return (
    <div className="flex items-center justify-between py-2 px-[4%]">
      <img className="w-[max(6%,40px)]" src={assets.logo} alt="" />
      <button
        onClick={() => setToken("")}
        className="bg-black text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
