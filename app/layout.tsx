import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly"; //to fix the error after reloading the page and click anywhere Nextjs show random error message
import Modal from "./components/Modals/Modal";

export const metadata = {
  title: "Nextbnb",
  description: "Generated by create next app",
};
const bodyFont = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={bodyFont.className}>
        <ClientOnly>
          <Modal actionLabel="Submit" isOpen title="Hello World!" />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
