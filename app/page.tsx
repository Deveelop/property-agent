import Hero from "@/components/Hero";
import Search from "@/components/Search";
import HouseContextProvider from "@/components/HouseContext";

export default function Home() {
  return (
 <>
 <HouseContextProvider>
 <Hero/>
 <Search/>
 </HouseContextProvider>
 
 </>
  );
}
