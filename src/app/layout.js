import { Roboto, Inter } from "next/font/google";
import "./globals.css";
import { ThemeModeScript } from "flowbite-react";

const inter = Inter({ subsets: ["latin"] });

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <ThemeModeScript />
        <script
          src="https://kit.fontawesome.com/231b0cbe39.js"
          crossorigin="anonymous"
        ></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
