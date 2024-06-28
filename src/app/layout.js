import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700", "900", "300"],
});

export const metadata = {
  title: "Luis Camarillo's Portfolio",
  description: "Some projects...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
