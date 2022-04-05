import Head from "next/head";
import Link from "next/Link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Engineering Overflow</title>
      </Head>
      <>
        <header className="container flex items-center justify-between my-4 border-b-2 border-primary-text pb-4">
          <div id="logo">
            <span className="font-bold text-2xl">
              <Link href="/">Engineering Overflow</Link>
            </span>
          </div>
          <nav>
            <ul>
              <li>
                {" "}
                <Link href="/login">Login</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main></main>
        <footer></footer>
      </>
    </>
  );
}
