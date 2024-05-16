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
import { useEffect, useState } from "react";
import { ScrollArea } from "../ui/scroll-area";
import fetchData from "@/lib/fetchData";

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
    fetchData({
      url: "/expenditure",
      onSuccess: (data) => setDataExpenditure(data),
      onError: (error: any) => setError(error),
    });
  }, []);

  return (
    <Table className="text-Button">
      <ScrollArea className="h-[26rem] ">
        <TableHeader className="sticky top-0 bg-ButtonText">
          <TableRow>
            <TableHead className="w-24 text-center font-bold">#</TableHead>
            <TableHead className="w-36 text-center font-bold">
              Category
            </TableHead>
            <TableHead className="text-center w-28 font-bold">Date</TableHead>
            <TableHead className="w-48 text-center font-bold">
              Nominal
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="bg-black/75">
          {dataExpenditure.map((data) => (
            <TableRow key={data.id}>
              <TableCell className="text-center">{data.id}</TableCell>
              <TableCell>{data.category}</TableCell>
              <TableCell className="text-center">
                {data.date.toLocaleString().slice(0, 10)}
              </TableCell>
              <TableCell className="">
                Rp. {data.amount.toLocaleString("id-ID")}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter className="sticky bottom-0 bg-ButtonText">
          <TableRow>
            <TableCell
              colSpan={3}
              className="font-bold">
              Total Expenditure
            </TableCell>
            <TableCell className="text-center font-bold">
              Rp. {totalExpenditure.toLocaleString("id-ID")}
            </TableCell>
          </TableRow>
        </TableFooter>
      </ScrollArea>
    </Table>
  );
};
