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
      question: "What is the best way to learn React?",
      tags: ["javascript", "react", "typescript"],
    },
    {
      votes: 10,
      answers: 2,
      views: 100,
      question: "When is PI day celebrated?",
      tags: ["maths", "science"],
    },
    {
      votes: 20,
      answers: 10,
      views: 90,
      question: "How to use TypeScript with React?",
      tags: ["engineering", "programming"],
    },
    {
      votes: 0,
      answers: 0,
      views: 0,
      question: "When is the admissions opening?",
      tags: [],
    },
    {
      votes: 10,
      answers: 2,
      views: 50,
      question: "Can we build games using javascript?",
      tags: ["javascript"],
    },
  ];

  // Context
  const { user } = useAuth();

  return (
    <>
      <Head>
        <title>Engineering Overflow</title>
      </Head>
      <section>
        <div className="flex justify-between my-8">
          <h2>Top Questions</h2>
          {user ? (
            <Link href="/ask-question">
              <button>Ask Question</button>
            </Link>
          ) : (
            <button onClick={() => console.log("Login to ask question")}>
              Ask Question
            </button>
          )}
        </div>
        {dummyQuestions.map((question, index) => (
          <div className="custom-border" key={index}>
            <Question
              views={question.views}
              answers={question.answers}
              votes={question.votes}
              question={question.question}
              tags={question.tags}
              key={index}
            />
          </div>
        ))}
      </section>
    </>
  );
}
