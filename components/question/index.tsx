interface Props {
  votes: number;
  answers: number;
  views: number;
  question: string;
  tags: Array<string>;
}

const Question = ({ answers, views, votes, question, tags }: Props) => {
  return (
    <div className="flex px-[5%] my-4" key={question}>
      <div className="flex flex-col items-end">
        <div className="flex space-x-2">
          <span>{votes}</span>
          <span>votes</span>
        </div>
        <div className="flex space-x-2">
          <span>{answers}</span>
          <span>answers</span>
        </div>
        <div className="flex space-x-2">
          <span>{views}</span>
          <span>views</span>
        </div>
      </div>
      <div className="pl-6">
        <p className="font-semibold text-xl">{question}</p>
        <div className="pt-2">
          {tags.map((tag) => (
            <span className="bg-primary-text text-primary-bg inline-block rounded-full px-3 py-1  mr-2 text-sm">
              {tag.toLowerCase()}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Question;
