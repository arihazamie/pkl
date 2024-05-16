"use client";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./table";
import fetchData from "@/lib/fetchData";

const FinancialReportDetail = () => {
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpenditure, setTotalExpenditure] = useState(0);
  const pajak = totalIncome * 0.05;
  const labaBersih = totalIncome - totalExpenditure - pajak;

  useEffect(() => {
    fetchData({
      url: "/income",
      onSuccess: (data) => {
        setTotalIncome(
          data.reduce(
            (acc: any, current: { amount: number }) => acc + current.amount,
            0
          )
        );
      },
    });
    fetchData({
      url: "/expenditure",
      onSuccess: (data) => {
        setTotalExpenditure(
          data.reduce(
            (acc: any, current: { amount: number }) => acc + current.amount,
            0
          )
        );
      },
    });
  }, []);

  return (
    <div>
      {totalIncome || totalExpenditure ? (
        <Table className="bg-black/70 font-bold">
          <TableHeader>
            <TableRow>
              <TableHead className="w-36 border font-bold text-center">
                Name
              </TableHead>
              <TableHead className="w-44 font-bold text-center">
                Total
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="text-center">
            <TableRow>
              <TableCell className="border">Income</TableCell>
              <TableCell>Rp. {totalIncome.toLocaleString("id-ID")}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="border">Expenditure</TableCell>
              <TableCell>
                Rp. {totalExpenditure.toLocaleString("id-ID")}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="border">Pajak</TableCell>
              <TableCell>Rp. {pajak.toLocaleString("id-ID")}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="border">Laba Bersih</TableCell>
              <TableCell>Rp. {labaBersih.toLocaleString("id-ID")}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default FinancialReportDetail;
