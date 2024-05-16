import React from "react";
import { TableIncome } from "../used/table_income";
import { TableExpenditure } from "../used/table_expenditure";

const financialReport = () => {
  return (
    <main className="grid text-center items-center justify-center md:space-y-3 2xl:space-y-5">
      <div className="flex w-full gap-5">
        <div className="w-1/2">
          <TableIncome />
        </div>
        <div className="w-1/2">
          <TableExpenditure />
        </div>
      </div>
    </main>
  );
};

export default financialReport;
