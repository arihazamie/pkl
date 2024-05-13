import Link from "next/link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import DatePicker from "./calender";

const Pengeluaran = () => {
  return (
    <div className="bg-Background left-0 right-0 bottom-0 top-24 pt-12 fixed text-Headline">
      <div className="grid text-center items-center justify-center space-y-4">
        <div className="font-bold text-4xl">Pengeluaran</div>
        <div>
          <DatePicker />
        </div>
        <div>
          <Label>Category</Label>
          <Input
            className="rounded-xl"
            placeholder="Category"
          />
        </div>
        <div>
          <Label>Pengeluaran / Day</Label>
          <Input
            className="rounded-xl"
            placeholder="Pengeluaran / Day"
          />
        </div>
        <div>
          <Label>Pengeluaran / Month</Label>
          <Input
            className="rounded-xl"
            placeholder="Pengeluaran / Month"
          />
        </div>
        <div>
          <Label>Pengeluaran / Year</Label>
          <Input
            className="rounded-xl"
            placeholder="Pengeluaran / Year"
          />
        </div>
        <div className="space-x-5 text-ButtonText">
          <Link
            href="x"
            className="p-3 py-2 rounded-xl shadow-md font-bold bg-Button text-ButtonText  hover:bg-Button/20 hover:text-Button">
            Save
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

export default Pengeluaran;
