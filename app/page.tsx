import Image from "next/image";
import TokenInfoTable from "./components/token-info-table";
import { bitcoinInfo, ethereumInfo } from "@/data/mockData";

export default function Home() {
  return (
    <TokenInfoTable tokens={[bitcoinInfo, ethereumInfo]} />
  );
}
