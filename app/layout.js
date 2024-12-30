import { Inter } from "next/font/google";
import "./globals.css";
import BootstrapClient from "@/components/bootstrapCliant";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { revalidatePath } from "next/cache";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "John Diagnostic Centre",
  description: "Most trusted pathology in Udaynarayanpur",
};

export default function RootLayout({ children }) {
  revalidatePath('/', 'layout')
  return (
    <html lang="en">        
      <body className={inter.className}>
      <Navbar />  
        {children}
        <BootstrapClient />
        <Footer />
      </body>
    </html>
  );
}
