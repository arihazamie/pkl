import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-Background w-full h-full text-Headline grid justify-center text-center items-center content-center">
      <nav className="flex py-8 space-x-28">
        <div className="font-bold text-3xl cursor-pointer hover:text-Button">
          SiskaMart
        </div>
        <div className="flex space-x-10 mt-2">
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
              className="p-3 py-2 rounded-md bg-Button text-ButtonText shadow-md font-bold hover:bg-Button/20 hover:text-Button">
              Login
            </Link>
          </div>
        </div>
      </nav>
      <div className="my-28">
        <div className="font-bold">
          <div className="text-9xl text-Button">Report</div>
          <div className="flex space-x-10 justify-center text-2xl mt-5">
            <div>Financial</div>
            <div>Expenditure</div>
            <div>Income</div>
          </div>
        </div>
      </div>
      <div className="mt-[6.83rem]">© AriHazamie - DendiRustiandi 2024</div>
    </main>
  );
}
