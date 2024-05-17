import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="title text-2xl">Home Page</h1>
      <Link href="/contact" className="bg-zinc-900 text-white rounded-md hover:bg-zinc-700 px-4 py-2 ms-5">Contact</Link>
    </div>
  );
}
