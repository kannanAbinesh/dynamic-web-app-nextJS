/* Plugins. */
import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/NavBar/NavBar";
import { Lexend } from "next/font/google";

/* Variable declarations. */
const lexend = Lexend({ variable: "--font-lexend", subsets: ["latin"] })
export const metadata = { title: "Life swap", description: "Virtuscribe" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lexend?.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
