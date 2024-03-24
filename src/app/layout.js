import { Roboto, Inter } from "next/font/google";
import "./globals.css";
import { ThemeModeScript } from "flowbite-react";
import StoreProvider from "@/lib/StoreProvider";

const inter = Inter({ subsets: ["latin"] });

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
export const metadata = {
  title: "Wallet Stealer",
  description: "Wallet Stealer",
};

export default function RootLayout({ children }) {
  return (
    <StoreProvider>
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
    </StoreProvider>
  );
}
