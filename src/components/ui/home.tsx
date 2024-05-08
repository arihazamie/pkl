import Link from "next/link";
import MenuMobile from "./menu";

const HomePage = () => {
  return (
    <main className="bg-Background w-full h-full text-Headline grid justify-center text-center items-center content-center top-0 left-0 right-0 bottom-0 fixed">
      <nav className="flex md:py-8 md:space-x-28 space-x-36">
        <div className="font-bold md:text-3xl text-3xl cursor-pointer hover:text-Button">
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
              href="/"
              className="hover:underline">
              Financial Report
            </Link>
          </div>
          <div>
            <Link
              href="/"
              className="p-3 py-2 rounded-xl bg-Button text-ButtonText shadow-md font-bold hover:bg-Button/20 hover:text-Button">
              Login
            </Link>
          </div>
        </div>
        <div className="md:hidden">
          <MenuMobile />
        </div>
      </nav>
      <div className="md:my-28 my-36">
        <div className="font-bold">
          <div className="md:text-9xl text-8xl text-Button">Report</div>
          <div className="flex md:space-x-10 space-x-5 justify-center md:text-2xl text-xl mt-5">
            <div>Financial</div>
            <div>Expenditure</div>
            <div>Income</div>
          </div>
        </div>
      </div>
      <div className="mt-[6.83rem]">© AriHazamie - DendiRustiandi 2024</div>
    </main>
  );
};

export default HomePage;
