import { useEffect, useState } from "react";

type MyButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export function MyButton({ children, className, onClick }: MyButtonProps) {
  className +=
    " py-2 px-4 bg-blue-500 w-[200px] text-white rounded hover:bg-blue-600 text-center transition-colors duration-300";
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}

export function LogoutButton() {
  const [session, setSession] = useState<{ email: string } | null>(null);
  useEffect(() => {
    async function fetchSession() {
      const res = await fetch("/api/session");
      const json = await res.json();
      if (json) setSession({ email: json.userData.email });
    }
    fetchSession();
  }, []);

  async function handleLogout() {
    await fetch("/api/logout", {
      method: "POST",
    });

    window.location.href = "/";
  }
  if (session === null) {
    return null;
  } else {
    return (
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-3 py-1 rounded-md"
      >
        Logout
      </button>
    );
  }
}
