import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="text-red-200">
      <h1>IMDb</h1>
    </div>
  );
}
