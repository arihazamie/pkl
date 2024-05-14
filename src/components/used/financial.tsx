import Link from "next/link";
import { Button } from "../ui/button";
import { TableIncome } from "./table_income";
import { TableExpenditure } from "./table_expenditure";

const FinancialReport = () => {
  return (
    <div className="bg-Background left-0 right-0 bottom-0 top-24 pt-2 fixed text-Headline">
      <div className="grid text-center items-center justify-center space-y-5">
        <div className="text-5xl font-bold">Financial Report</div>
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
