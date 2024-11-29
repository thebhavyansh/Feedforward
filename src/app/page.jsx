import Image from "next/image";
import Banner from "./_components/Banner";
import Cards from "./_components/Cards";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import { drizzle } from 'drizzle-orm/neon-http';
const db = drizzle(process.env.DATABASE_URL);
export default function Home() {
  return (
   <>
   <Header/>
   <Banner />
   <Footer />
   </>
  );
}
