import Header from "../components/Header";
import "../globals.css";

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header/>
        <main className="p-5 flex-1">{children}</main>
      </body>
    </html>
  );
}
