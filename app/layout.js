import "./globals.css";
import AOSCL from "@/components/libraries/AOS";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
            {children}
            <AOSCL/>
         </body>
    </html>
  );
}
