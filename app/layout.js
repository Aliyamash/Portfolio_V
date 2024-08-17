import Header from "@/components/layout/Header";
import "./globals.css";
import AOS from "@/components/libraries/AOS";
import AOSCL from "@/components/libraries/AOS";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
         <Header/>
            {children}
         <AOSCL/>
         </body>
    </html>
  );
}
