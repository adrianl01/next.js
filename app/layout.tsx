import "./globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>My Next.js App</title>
      </head>
      <body className="flex flex-col items-center justify-center h-screen gap-4">
        {children}
      </body>
    </html>
  );
}
