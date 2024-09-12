import Image from "next/image";
import { Inter } from "next/font/google";
import Carousel from "@/Components/Carousel";
import Counter from "@/Components/Counter";
import Filter from "@/Components/Filter/Filter";
import FAQ from "@/Components/FAQ";
import Card from "@/Components/Card";

export default function Home() {
  return (
    <>
      <div className=" capitalize text-center text-gray-400 text-4xl ">
        <h1>react imp components</h1>
      </div>
      <Carousel />
      <Counter />
      <Filter />
      <FAQ />
      {/* <Card /> */}
    </>
  );
}
