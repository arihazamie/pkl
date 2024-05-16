"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import bg from "../../../public/background.webp";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState<string>("");
  const [name, setName] = useState<string>("");
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_FETCH}/login`,
        {
          email,
          password,
        }
      );

      const { data } = response;
      const {
        owner: { name: userName },
        token: userToken,
      } = data;

      localStorage.setItem("token", userToken);
      localStorage.setItem("name", userName);

      setToken(userToken);
      setName(userName);
    } catch (error: any) {
      setError(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = () => {
    router.push("/");
    router.refresh();
  };

  return (
    <div
      style={{ backgroundImage: `url(${bg.src})` }}
      className="bg-cover fixed top-0 bottom-0 left-0 right-0 -z-50">
      <div className="text-center md:mt-40 2xl:mt-48 border-2 rounded-xl p-10 md:mx-96 2xl:mx-[28rem] bg-black/60 text-Button">
        <h1 className="text-4xl font-bold">Login</h1>
        <form
          onSubmit={handleSubmit}
          className="grid justify-center mt-3 gap-5 text-lg font-bold">
          <div className="grid justify-center">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-black p-1 rounded-[8px]"
            />
          </div>
          <div className="grid justify-center">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="text-black p-1 rounded-[8px]"
            />
          </div>
          <button
            type="submit"
            onClick={() => handleLogin()}
            className="bg-Button text-ButtonText mx-16 p-2 font-bold rounded-[8px] hover:text-Button hover:bg-Button/30"
            disabled={loading}>
            {loading ? "Loading..." : "Login"}
          </button>
        </form>
        {error && <div style={{ color: "red" }}>{error}</div>}
      </div>
    </div>
  );
};

export default LoginForm;
