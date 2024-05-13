import DatePicker from "./calender";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import Link from "next/link";

const Pendapatan = () => {
  return (
    <div className="bg-Background left-0 right-0 bottom-0 top-24 pt-12 fixed text-Headline">
      <div className="grid text-center items-center justify-center space-y-5">
        <div className="font-bold text-4xl">Pendapatan</div>
        <div className="space-y-2">
          <div>
            <DatePicker />
          </div>
          <div className="space-y-2">
            <Label className="font-bold">Income / Day</Label>
            <Input
              placeholder="Income"
              className="rounded-xl"
            />
          </div>
          <div className="space-y-2">
            <Label className="font-bold">Tax</Label>
            <Input
              placeholder="Income"
              className="rounded-xl"
            />
          </div>
          <div className="space-y-2">
            <Label className="font-bold">Income / Month</Label>
            <Input
              placeholder="Income"
              className="rounded-xl"
            />
          </div>
          <div className="space-y-2">
            <Label className="font-bold">Income / Year</Label>
            <Input
              placeholder="Income"
              className="rounded-xl"
            />
          </div>
        </div>
        <div className="space-x-5 text-ButtonText">
          <Link
            href=""
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

export default Pendapatan;