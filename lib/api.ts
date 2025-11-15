export async function LogIn({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  console.log("Logging in with", { email, password });
  const res = await fetch("/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (res.ok) {
    window.location.href = "/";
  }
}
