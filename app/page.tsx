"use client";
import MyButton from "components/Button";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  return (
    <>
      <h1>Hello, World!</h1>;
      <div className="flex flex-col items-center gap-4">
        <MyButton
          children="Go to /admin Page (middleware Protected)"
          onClick={() => router.push("/admin")}
        />
        <MyButton
          children="Go to /login Page"
          onClick={() => router.push("/login")}
        />
        <MyButton
          children="Go to Other Page With a Button Components"
          onClick={() => router.push("/other")}
        />
      </div>
    </>
  );
}
