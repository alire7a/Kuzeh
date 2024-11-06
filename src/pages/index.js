import Image from "next/image";
import localFont from "next/font/local";
import Landing from "@/components/Landing";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

//${geistSans.variable} ${geistMono.variable}
export default function Home() {
  return (
    <div
      className={` `}>
     <Landing/>
    </div>
  );
}
