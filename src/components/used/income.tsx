"use client";
import { useState } from "react";
import axios from "axios";
import { z } from "zod";

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
  const [amount, setAmount] = useState<number>(0);
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const validateFormData = (formData: {
    amount: number;
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
    const formData = { amount, category, date };

    if (!validateFormData(formData)) return;

    try {
      const response = await axios.post("/api/data/income", formData);
      setMessage(response.data.message);
      setError("");
    } catch (error) {
      setError(`Error creating income record: ${error}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      action={"/financial"}>
      <label htmlFor="amount">Amount:</label>
      <input
        type="number"
        id="amount"
        value={amount}
        onChange={(e) => setAmount(parseInt(e.target.value))}
        className="outline"
      />

      <label htmlFor="category">Category:</label>
      <input
        type="text"
        id="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="outline"
      />

      <label htmlFor="date">Date:</label>
      <input
        type="date"
        id="date"
        value={date ? date.slice(0, 10) : ""}
        onChange={(e) => {
          const dateValue = e.target.valueAsDate;
          setDate(dateValue ? dateValue.toISOString() : "");
        }}
        className="outline"
      />

      <button type="submit">Add Income</button>

      {message && <p>{message}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};

export default AddIncomeForm;
