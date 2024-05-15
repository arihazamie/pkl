import Link from "next/link";
import { Button } from "../ui/button";
import { TableIncome } from "./table_income";
import { TableExpenditure } from "./table_expenditure";
import bg from "../../../public/background.webp";

const FinancialReport = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bg.src})` }}
      className="left-0 right-0 bottom-0 top-0 fixed text-Headline -z-50 bg-cover">
      <div className="grid text-center items-center justify-center md:space-y-3 2xl:space-y-5 md:mt-32 2xl:mt-40">
        <div className="md:text-4xl 2xl:text-5xl font-bold">
          Financial Report
        </div>
        <div className="space-x-5">
          <Button className="bg-Button text-ButtonText rounded-xl font-bold">
            2024
          </Button>
          <Button className="bg-Button text-ButtonText rounded-xl font-bold">
            2025
          </Button>
          <Button className="bg-Button text-ButtonText rounded-xl font-bold">
            2026
          </Button>
        </div>
        <div className="flex gap-20">
          <TableIncome />
          <TableExpenditure />
        </div>
        <div className="space-x-5">
          <Link
            href=""
            className="p-3 py-2 rounded-xl shadow-md font-bold bg-Button text-ButtonText  hover:bg-Button/20 hover:text-Button">
            Print
          </Link>
          <Link
            href="/"
            className="p-3 py-2 rounded-xl shadow-md font-bold bg-Button text-ButtonText  hover:bg-Button/20 hover:text-Button">
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FinancialReport;
