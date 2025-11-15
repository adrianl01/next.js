"use client";
import { useEffect, useState } from "react";

function Logged() {
  const [session, setSession] = useState<{ email: string } | null>(null);

  useEffect(() => {
    async function fetchSession() {
      const res = await fetch("/api/session");
      const json = await res.json();
      if (json) setSession({ email: json.userData.email });
    }
    fetchSession();
  }, []);

  if (session === null) {
    return (
      <div className="bg-gray-400 rounded-md p-2 text-white">
        You are not logged in.
      </div>
    );
  } else {
    return (
      <div className="bg-green-500 p-2 rounded-md text-white">
        You are logged as {session?.email}
      </div>
    );
  }
}

export default Logged;
