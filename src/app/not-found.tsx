import Link from "next/link";
import { Nav } from "@/components/Nav";
export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="min-h-[70svh] px-5 md:px-10 pt-44">
        <h1 className="serif text-5xl">Essa página não existe.</h1>
        <Link href="/" className="link inline-block mt-6">Voltar ao início</Link>
      </main>
    </>
  );
}
