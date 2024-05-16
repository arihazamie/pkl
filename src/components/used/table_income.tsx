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
import { ScrollArea } from "@/components/ui/scroll-area";
import fetchData from "@/lib/fetchData";

type DataProps = {
  id: string;
  category: string;
  amount: number;
  date: Date;
};

export const TableIncome = () => {
  const [dataIncome, setDataIncome] = useState<DataProps[]>([]);
  const [error, setError] = useState(null);
  const totalIncome = dataIncome.reduce(
    (acc, current) => acc + current.amount,
    0
  );

  useEffect(() => {
    fetchData({
      url: "/income",
      onSuccess: (data) => setDataIncome(data),
      onError: (error: any) => setError(error),
    });
  }, []);

  return (
    <Table className="text-Button w-full">
      <ScrollArea className="h-[26rem]">
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
        <TableBody className="bg-black/70">
          {dataIncome.map((data) => (
            <TableRow key={data.id}>
              <TableCell className="text-center">{data.id}</TableCell>
              <TableCell className="">{data.category}</TableCell>
              <TableCell className="text-center">
                {data.date.toLocaleString().slice(0, 10)}
              </TableCell>
              <TableCell className="">
                Rp. {data.amount.toLocaleString("id-ID")}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter className="bottom-0 sticky bg-ButtonText">
          <TableRow>
            <TableCell
              colSpan={3}
              className="font-bold">
              Total Income
            </TableCell>
            <TableCell className="text-center font-bold">
              Rp. {totalIncome.toLocaleString("id-ID")}
            </TableCell>
          </TableRow>
        </TableFooter>
      </ScrollArea>
    </Table>
  );
};
