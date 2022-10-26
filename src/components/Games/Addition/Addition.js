import React, { useState } from "react";
import "./addition.css";
import { questions } from "./additionData";
import StudentAccessAnimation from "../../../lotties/StudentAnimation/StudentAccessAnimation";
import { Container } from "react-bootstrap";

export default function Addition() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div>
      <StudentAccessAnimation />
      <div className="d-flex align-items-center justify-content-center">
        <div>
          <div className="quiz-container">
            {showScore ? (
              <section className="showScore-section">
                Your Score: {score} / {questions.length}
              </section>
            ) : (
              <Container>
                <section className="question-section">
                  <h1 className="text">
                    Question {currentQuestion + 1}/{questions.length}
                  </h1>
                  <p className="text">
                    {questions[currentQuestion].questionText}
                  </p>
                </section>

                <section className="answer-section">
                  {questions[currentQuestion].answerOptions.map((item) => (
                    <button className="button" onClick={() => handleClick(item.isCorrect)}>
                      {item.answerText}
                    </button>
                  ))}
                </section>
              </Container>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
