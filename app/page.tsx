import Image from "next/image";
import TokenInfoTable from "./components/token-info-table";
import { mockData } from "@/data/mockData";
import { Link } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <TokenInfoTable tokens={mockData} />
      <Link href="/my-tokens">View My Tokens</Link>
    </>
  );
}
