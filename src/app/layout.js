import "./assets/css/main.scss";
import "react-toastify/dist/ReactToastify.css";
import { Inter } from "next/font/google";
import Header from "./(components)/header";
import { BasketProvider } from "./context";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BasketProvider>
          <Header />
          {children}
        </BasketProvider>
        <ToastContainer autoClose={2000} position="bottom-right" />
      </body>
    </html>
  );
}
