import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata = {
  title: "Voice Masterclass",
  description: "International medical masterclass",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}