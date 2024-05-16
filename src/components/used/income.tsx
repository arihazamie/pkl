"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { z } from "zod";
import bg from "../../../public/background.webp";
import Link from "next/link";

const incomeFormSchema = z.object({
  amount: z
    .number()
    .positive()
    .min(2, { message: "Category must be at least 2 characters." }),
  category: z
    .string()
    .min(2, { message: "Category must be at least 2 characters." }),
  date: z
    .string()
    .regex(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})\.(\d{3})Z$/),
});

const AddIncomeForm = () => {
  const [amount, setAmount] = useState<number>();
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const validateFormData = (formData: {
    amount?: number;
    category: string;
    date: string;
  }) => {
    try {
      incomeFormSchema.parse(formData);
      return true;
    } catch (error: any) {
      setError(error.issues[0].message);
      return false;
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const formData = { amount, category, date };

    if (!validateFormData(formData)) return;

    try {
      const response = await axios.post("/api/data/income", formData);
      setMessage(response.data.message);
      setError("");
    } catch (error) {
      setError(`Error creating income record: ${error}`);
    } finally {
      setLoading(false);
      setAmount(0);
      setCategory("");
      setDate("");
    }
  };

  const [token, setToken] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    setInterval(() => {
      const storedToken = localStorage.getItem("token");
      const storedName = localStorage.getItem("name");

      if (storedToken && storedName) {
        setToken(storedToken);
        setName(storedName);
      }
    });
  }, [token, name]);

  return (
    <div
      style={{ backgroundImage: `url(${bg.src})` }}
      className="text-Button bg-cover left-0 right-0 bottom-0 -z-50 top-0 justify-center fixed">
      <div className="text-center md:mt-40 2xl:mt-48 border-2 rounded-xl p-10 md:mx-96 2xl:mx-[28rem] bg-black/60">
        <div className="md:text-4xl 2xl:text-4xl font-bold">Input Income</div>
        <form
          onSubmit={handleSubmit}
          className="grid justify-center mt-3 gap-5 text-lg font-bold">
          <div className="grid justify-center">
            <label htmlFor="amount">Amount:</label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(parseInt(e.target.value))}
              className="text-black p-1 rounded-[8px]"
            />
          </div>

          <div className="grid justify-center">
            <label htmlFor="category">Category:</label>
            <input
              type="text"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="text-black p-1 rounded-[8px]"
            />
          </div>

          <div className="grid justify-center">
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              value={date ? date.slice(0, 10) : ""}
              onChange={(e) => {
                const dateValue = e.target.valueAsDate;
                setDate(dateValue ? dateValue.toISOString() : "");
              }}
              className="text-black p-1 rounded-[8px]"
            />
          </div>

          <div className="mt-2">
            {token ? (
              <button
                type="submit"
                className="bg-Button text-ButtonText p-2 mx-10 font-bold rounded-[8px] hover:text-Button hover:bg-Button/30"
                disabled={loading}>
                {loading ? "Loading..." : "Add Income"}
              </button>
            ) : (
              <Link
                href={"/login"}
                className="bg-Button text-ButtonText p-2 mx-10 font-bold rounded-[8px] hover:text-Button hover:bg-Button/30">
                Login First
              </Link>
            )}
          </div>

          {message && <p>{message}</p>}
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default AddIncomeForm;
