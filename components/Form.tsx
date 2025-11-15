"use client";
import { Button } from "./ui/button";
import { LogIn } from "@/lib/api";

function Form() {
  const handler = async (e: React.FormEvent) => {
    e.preventDefault();

    const email = (e.target as HTMLFormElement).email.value;
    const password = (e.target as HTMLFormElement).password.value;

    LogIn({ email, password });
  };

  return (
    <form
      className="flex flex-col gap-1.5 items-center border-4 border-solid rounded-2xl border-black bg-gray-400 p-2.5 w-[300px]"
      onSubmit={handler}
    >
      <div className="border-b-2 border-black w-full text-center">
        <input
          placeholder="email"
          className="text-[15px] w-full hover:shadow-lg transition-shadow focus:outline-none"
          type="text"
          id="email"
          name="email"
        />
      </div>
      <div className="border-b-2 border-black w-full text-center">
        <input
          placeholder="password"
          className="text-[15px] w-full hover:shadow-lg transition-shadow focus:outline-none"
          type="password"
          id="password"
          name="password"
        />
      </div>
      <Button type="submit">Log In</Button>
    </form>
  );
}

export default Form;
