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
import { ScrollArea } from "@radix-ui/react-scroll-area";
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
    <Table className="text-Button">
      <ScrollArea className="h-80">
        <TableHeader className="sticky top-0 bg-ButtonText">
          <TableRow>
            <TableHead className="w-20 text-center font-bold">#</TableHead>
            <TableHead className="w-32 text-center font-bold">
              Category
            </TableHead>
            <TableHead className="text-center w-28 font-bold">Date</TableHead>
            <TableHead className="w-44 text-center font-bold">
              Nominal
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="bg-black/75">
          {dataExpenditure.map((data) => (
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
