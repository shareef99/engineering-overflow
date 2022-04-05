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
        <main className="px-[15%]">
          <section>
            <div className="flex justify-between my-8">
              <h2 className="text-xl">Top Questions</h2>
              <Link href="/askQuestion" as="ask-question">
                <button>Ask Question</button>
              </Link>
            </div>
            <div className="flex px-[5%]">
              <div className="flex flex-col items-end">
                <div className="flex space-x-2">
                  <span>0</span>
                  <span>votes</span>
                </div>
                <div className="flex space-x-2">
                  <span>11</span>
                  <span>answers</span>
                </div>
                <div className="flex space-x-2">
                  <span>99</span>
                  <span>views</span>
                </div>
              </div>
              <div className="pl-6">
                <p className="font-semibold text-xl">
                  How to score good marks in mathematics III
                </p>
                <div className="pt-2">
                  <span className="bg-primary-text text-primary-bg p-1 mx-1 rounded opacity-85">
                    Maths
                  </span>
                  <span className="bg-primary-text text-primary-bg p-1 mx-1 rounded opacity-85">
                    Marks
                  </span>
                  <span className="bg-primary-text text-primary-bg p-1 mx-1 rounded opacity-85">
                    Tag 3
                  </span>
                </div>
              </div>
            </div>
          </section>
        </main>
      </>
    </>
  );
}
