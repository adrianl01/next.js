"use client";
import { LogoutButton, MyButton } from "components/Button";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Logged from "@/components/Logged";

export default function MainPage() {
  const router = useRouter();
  return (
    <>
      {<Logged />}
      <h1>Hello, World!</h1>
      <div className="flex flex-col gap-4">
        <MyButton
          children="Go to /admin Page (middleware Protected)"
          onClick={() => router.push("/admin")}
        />
        <MyButton
          children="Go to /login Page"
          onClick={() => router.push("/login")}
        />
        <MyButton
          children="Go to /other Page With a custom Button Component"
          onClick={() => router.push("/other")}
        />
        <Button
          variant="outline"
          onClick={() => alert("Shadcn UI Button Clicked!")}
        >
          Shadcn UI Button
        </Button>
        <LogoutButton />
      </div>
    </>
  );
}
