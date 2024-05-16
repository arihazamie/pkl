"use client";
import bg from "../../../public/background.webp";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FinancialReport from "../ui/financialReport";
import FinancialReportDetail from "../ui/financialReportDetail";
import { useEffect, useState } from "react";
import Link from "next/link";

const Financial = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    setInterval(() => {
      const storedToken = localStorage.getItem("token");

      if (storedToken) {
        setToken(storedToken);
      }
    });
  }, [token]);

  return (
    <div>
      {token ? (
        <Tabs
          defaultValue="1"
          style={{ backgroundImage: `url(${bg.src})` }}
          className="text-Button -z-50 top-0 left-0 right-0 bottom-0 bg-cover fixed">
          <TabsList className="flex mt-36 justify-center">
            <TabsTrigger value="1">Laporan</TabsTrigger>
            <TabsTrigger value="2">Detail</TabsTrigger>
          </TabsList>
          <div className="flex justify-center">
            <TabsContent value="1">
              <FinancialReport />
            </TabsContent>
            <TabsContent value="2">
              <FinancialReportDetail />
            </TabsContent>
          </div>
        </Tabs>
      ) : (
        <div
          style={{ backgroundImage: `url(${bg.src})` }}
          className="text-Button -z-50 top-0 left-0 right-0 bottom-0 bg-cover fixed">
          <div className="flex justify-center md:mt-52 2xl:mt-64">
            <Link
              href={"/login"}
              className="bg-Button text-ButtonText md:p-2 2xl:p-4 md:text-base 2xl:text-xl rounded-xl font-bold hover:bg-Button/20 hover:text-Button">
              Login Fist
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Financial;
