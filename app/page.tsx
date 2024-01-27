import Image from "next/image";
import TokenInfoTable from "./components/token-info-table";
import {mockData } from "@/data/mockData";

export default function Home() {
  return (
    <TokenInfoTable tokens={mockData} />
  );
}
