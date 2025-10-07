import { Metadata } from "next";
import HomeOnePage from "./(homes)/home-1/page";
import HomeTwoMain from "@/pages/homes/home-2";

export const metadata: Metadata = {
  title: "Liko - Home Page",
};

export default function Home() {
  return (
    <>
      <HomeTwoMain />
    </>
  );
}
