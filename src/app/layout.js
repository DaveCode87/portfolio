import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DaveCode",
  description: "Portfolio DaveCode",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{display: "flex", flexDirection: "column",justifyContent: "space-between"}}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
