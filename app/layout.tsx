import "./globals.css";
import Navbar from "@/app/components/layout/Navbar";

export const metadata = {
  title: "EZONE | Study Abroad",
  description: "Global Education Consultants",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">

        <Navbar />

        {children}

      </body>
    </html>
  );
}