import Option from "@/Components/Option";
import { questions } from "@/helpers/questions";
import React, { useState } from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Home = () => {
  const [currentQuetion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (isCorret: boolean) => {
    if (isCorret) {
      setScore((score) => score + 1);
    }
    const nextQuetion = currentQuetion + 1;
    if (nextQuetion < questions.length) {
      setCurrentQuestion(nextQuetion);
    } else {
      setShowScore(true);
    }
  };

  const calculateScoreString = (score: number) => {
    if (score >= 10) {
      return "Você foi excelente!";
    } else if (score >= 7 && score < 10) {
      return "Você foi bem!";
    } else if (score >= 5 && score < 7) {
      return "Você foi mal!";
    } else if (score >= 3 && score < 5) {
      return "Você foi muito mal!";
    } else {
      return "Você falhou miseravelmente, foi horroso para mim (💻) corrigir uma pontuação dessas.";
    }
  };

  return (
    <div className="w-screen h-screen bg-[#e8f2fe] flex items-center justify-center">
      {showScore && (
        <div className="sm:w-screen xl:w-1/3 flex flex-col items-center justify-center">
          <span className="text-2xl text-center">
            {calculateScoreString(score)}
          </span>
          <span className="mt-3 text-xl">
            Você acertou {score} de {questions.length}.
          </span>
        </div>
      )}
      {!showScore && (
        <div className="sm:w-screen px-2 xl:w-1/3 flex flex-col text-white">
          <span className="text-2xl w-full text-black ">
            {questions[currentQuetion].questionText}
          </span>
          <div className="mt-3 ">
            <span className="bg-[#4597ed] p-1 rounded">Acertou: {score}</span>
          </div>
          <div className="mt-5">
            {questions[currentQuetion].answerOptions.map(
              (answerOption, index) => (
                <Option
                  letter={index}
                  text={answerOption.answerText}
                  key={index}
                  onClick={() =>
                    handleAnswerOptionClick(answerOption.isCorrect)
                  }
                />
              )
            )}
          </div>
          <span className="mt-2 text-black text-right text-sm">
            Pergunta {currentQuetion + 1} de {questions.length}
          </span>
          <div className="mt-5 flex items-center justify-center">
            <a target="_blank" href="https://www.linkedin.com/in/3lucasrs/">
              <AiFillLinkedin className="text-3xl text-[#4597ed] hover:opacity-60" />
            </a>
            <a
              className="mx-1"
              target="_blank"
              href="https://github.com/3lucasrs"
            >
              <AiFillGithub className="text-3xl text-[#4597ed] hover:opacity-60" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
