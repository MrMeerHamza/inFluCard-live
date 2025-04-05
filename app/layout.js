import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "InfluCard",
  description: "A Fintech Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Exo+2:ital,wght@0,100..900;1,100..900&family=Sigmar&display=swap"
          rel="stylesheet"></link>
      </head>
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
