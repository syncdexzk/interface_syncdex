import Head from "next/head";
import Banner from "@/components/Banner/Banner";
import ContactOne from "@/components/Contact/ContactOne";
import Roadmap from "@/components/Roadmap/Roadmap";
import Sales from "@/components/Sales/Sales";
import TeamOne from "@/components/Team/TeamOne";
import TopPartners from "@/components/TopPartners/TopPartners";
import WhitePaper from "@/components/WhitePaper/WhitePaper";
import WhoWeAre from "@/components/WhoWeAre/WhoWeAre";
import Info from "@/components/Info/Info";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import LayoutOne from "@/layouts/LayoutOne";

export default function Home() {
  return (
    <>
      <Head>
        <title>SyncDex is the first ecosystem-focused and community-driven DEX built on zkSync Era.</title>
        <meta name="description" content="" />

      </Head>

      <LayoutOne>
        <main className="fix">
        <div className="bg-1">
          <Banner />
          <WhoWeAre />
        </div>
          <div className="Bg-2">
            <WhyChooseUs />
            <Info />
            <TopPartners />
          </div>
        </main>
      </LayoutOne>
    </>
  );
}
