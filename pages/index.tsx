import Head from "next/head";
import Link from "next/Link";
import Question from "../components/question";
import { useAuth } from "../context/authContext";

export default function Home() {
  // Constant
  const dummyQuestions = [
    {
      votes: 0,
      answers: 0,
      views: 0,
      question: "This is question number 1",
      tags: ["javascript", "react", "typescript"],
    },
    {
      votes: 10,
      answers: 2,
      views: 100,
      question: "This is question number 2",
      tags: ["maths", "science"],
    },
    {
      votes: 20,
      answers: 10,
      views: 90,
      question: "This is question number 3",
      tags: ["engineering", "programming"],
    },
    {
      votes: 0,
      answers: 0,
      views: 0,
      question: "This is question number 4",
      tags: [],
    },
    {
      votes: 10,
      answers: 2,
      views: 50,
      question: "This is question number 5",
      tags: ["javascript", "react", "typescript"],
    },
  ];

  // Context
  const { login } = useAuth();

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
                <button onClick={login}>Login</button>
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
            {dummyQuestions.map((question) => (
              <div className="custom-border">
                <Question
                  views={question.views}
                  answers={question.answers}
                  votes={question.votes}
                  question={question.question}
                  tags={question.tags}
                />
              </div>
            ))}
          </section>
        </main>
      </>
    </>
  );
}
