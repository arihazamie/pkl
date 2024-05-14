import Link from "next/link";
import MenuMobile from "./mobile_menu";

const Navbar = () => {
  return (
    <main className="bg-Background text-Headline grid justify-center text-center items-center content-center mt-0">
      <nav className="flex md:py-8 md:space-x-28 space-x-36">
        <div className="font-bold md:text-4xl text-3xl cursor-pointer hover:text-Button">
          SiskaMart
        </div>
        <div className="hidden md:flex md:space-x-10 space-x-2 mt-2">
          <div className="space-x-10 font-bold">
            <Link
              href="/"
              className="hover:underline">
              Home
            </Link>
            <Link
              href="/income"
              className="hover:underline">
              Income
            </Link>
            <Link
              href="/expenditure"
              className="hover:underline">
              Expenditure
            </Link>
            <Link
              href="/financial"
              className="hover:underline">
              Financial
            </Link>
          </div>
          <div>
            <Link
              href="/login"
              className="p-3 py-2 rounded-xl shadow-md font-bold bg-Button text-ButtonText  hover:bg-Button/20 hover:text-Button">
              Login
            </Link>
          </div>
        </div>
        <div className="md:hidden">
          <MenuMobile />
        </div>
      </nav>
    </main>
  );
};

export default Navbar;
