"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import axios from "axios";
import { useEffect, useState } from "react";

type DataProps = {
  id: string;
  category: string;
  amount: number;
  date: Date;
};

export const TableExpenditure = () => {
  const [dataExpenditure, setDataExpenditure] = useState<DataProps[]>([]);
  const [error, setError] = useState(null);

  const totalExpenditure = dataExpenditure.reduce(
    (acc, current) => acc + current.amount,
    0
  );

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_FETCH}/expenditure`)
      .then((response) => {
        setDataExpenditure(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  return (
    <Table className="border-2 rounded-2 xl">
      <TableCaption>A list of your recent expenditure.</TableCaption>
      <TableHeader className="border-2 font-bold text-lg">
        <TableRow>
          <TableHead className="w-20 text-center border">#</TableHead>
          <TableHead className="w-32 text-center border">Category</TableHead>
          <TableHead className="text-center w-28">Date</TableHead>
          <TableHead className="w-44 text-center border">Nominal</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {dataExpenditure.map((data) => (
          <TableRow key={data.id}>
            <TableCell className="text-center border">{data.id}</TableCell>
            <TableCell className="border">{data.category}</TableCell>
            <TableCell className="text-center">
              {data.date.toLocaleString().slice(0, 10)}
            </TableCell>
            <TableCell className="border">
              Rp. {data.amount.toLocaleString("id-ID")}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow className="border-2 text-lg">
          <TableCell colSpan={3}>Total Expenditure</TableCell>
          <TableCell className="text-center border-2">
            Rp. {totalExpenditure.toLocaleString("id-ID")}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};
