import { useState, useMemo, useEffect } from "react";
import "./App.css";
import { Trivia } from "./components/Trivia";
import { Timer } from "./components/Timer";
import { Start } from "./components/Start";
// import theme from "./sounds/theme.mp3";
// import useSound from "use-sound";
function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$ 0");
  const [username, setUsername] = useState(null);
  // const [endingCredits] = useSound(theme);
  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question:
        "Which of the following option is correct in the case of the Babel?",
      answers: [
        {
          text: "Babel is a Compiler.",
          correct: false,
        },
        {
          text: "Babel is a Transpilar.",
          correct: false,
        },
        {
          text: "None of the above.",
          correct: false,
        },
        {
          text: "Both A and B are correct.",
          correct: true,
        },
      ],
    },
    {
      id: 5,
      question: "What is the use of 'webpack' command in React.js?",
      answers: [
        {
          text: "The 'webpack' command is used to transpile all the JavaScript down into one file.",
          correct: false,
        },
        {
          text: "It runs React local development server.",
          correct: false,
        },
        {
          text: "It is a module bundler.",
          correct: true,
        },
        {
          text: "None of the above.",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question:
        "Which of the following is used to pass data to a component from outside in React.js?",
      answers: [
        {
          text: "SetState",
          correct: false,
        },
        {
          text: "Render with arguments",
          correct: false,
        },
        {
          text: "Props",
          correct: true,
        },
        {
          text: "PropTypes",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question:
        "Which of the following function is used to change the state of the React.js component?",
      answers: [
        {
          text: "this.setState",
          correct: true,
        },
        {
          text: "this.setChangeState",
          correct: false,
        },
        {
          text: "this.State{}",
          correct: false,
        },
        {
          text: "None of the above.",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question:
        "Which of the following method refers to the parent class in React.js?",
      answers: [
        {
          text: "inherits()",
          correct: false,
        },
        {
          text: "self()",
          correct: false,
        },
        {
          text: "super()",
          correct: true,
        },
        {
          text: "this()",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "Which of the following type of a variable is volatile?",
      answers: [
        {
          text: "Mutable variable",
          correct: true,
        },
        {
          text: "Dynamic variable",
          correct: false,
        },
        {
          text: "Volatile variable",
          correct: false,
        },
        {
          text: "Immutable variable",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question:
        "Which of the following option is used as hexadecimal literal beginning?",
      answers: [
        {
          text: "00",
          correct: false,
        },
        {
          text: "0x",
          correct: false,
        },
        {
          text: "0X",
          correct: false,
        },
        {
          text: "Both 0x and 0X",
          correct: true,
        },
      ],
    },
    {
      id: 11,
      question: "In JavaScript the x===y statement implies that",
      answers: [
        {
          text: "Both x and y are equal in value, type and reference address as well.",
          correct: false,
        },
        {
          text: "Both are x and y are equal in value only.",
          correct: false,
        },
        {
          text: "Both are equal in the value and data type.",
          correct: true,
        },
        {
          text: "Both are not same at all.",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question:
        "Which of the following language was developed as the first purely object programming language?",
      answers: [
        {
          text: "SmallTalk",
          correct: true,
        },
        {
          text: "C++",
          correct: false,
        },
        {
          text: "Kotlin",
          correct: false,
        },
        {
          text: "Java",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "Which of the following is not an OOPS concept?",
      answers: [
        {
          text: "Encapsulation",
          correct: false,
        },
        {
          text: "Polymorphism",
          correct: false,
        },
        {
          text: "Exception",
          correct: true,
        },
        {
          text: "Abstraction",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "Which of the following is not a DDL command?",
      answers: [
        {
          text: "TRUNCATE",
          correct: false,
        },
        {
          text: "ALTER",
          correct: false,
        },
        {
          text: "CREATE",
          correct: false,
        },
        {
          text: "UPDATE",
          correct: true,
        },
      ],
    },
    {
      id: 15,
      question: "SQL Views are also known as",
      answers: [
        {
          text: "Simple tables",
          correct: false,
        },
        {
          text: "Virtual tables",
          correct: true,
        },
        {
          text: "Complex tables",
          correct: false,
        },
        {
          text: "Actual Tables",
          correct: false,
        },
      ],
    },
  ];
  console.log(questionNumber);
  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1.000" },
        { id: 6, amount: "$ 2.000" },
        { id: 7, amount: "$ 4.000" },
        { id: 8, amount: "$ 8.000" },
        { id: 9, amount: "$ 16.000" },
        { id: 10, amount: "$ 32.000" },
        { id: 11, amount: "$ 64.000" },
        { id: 12, amount: "$ 125.000" },
        { id: 13, amount: "$ 250.000" },
        { id: 14, amount: "$ 500.000" },
        { id: 15, amount: "$ 1.000.000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      questionNumber <= 15 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
    questionNumber === 16 && setEarned(moneyPyramid[14]) && setStop(true);
  }, [questionNumber]);
  console.log(moneyPyramid.length);
  console.log(questionNumber);
  return (
    <div className="app">
      {username ? (
        <>
          <div className="main">
            {stop ? (
              <h1 className="endText">You earned {earned}</h1>
            ) : (
              <>
                <div className="top">
                  {questionNumber <= 15 && (
                    <div className="timer">
                      <Timer
                        setStop={setStop}
                        questionNumber={questionNumber}
                      />
                    </div>
                  )}
                </div>
                <div className="bottom">
                  {questionNumber <= 15 && (
                    <Trivia
                      data={data}
                      setQuestionNumber={setQuestionNumber}
                      questionNumber={questionNumber}
                      setStop={setStop}
                    />
                  )}
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <Start setUsername={setUsername} />
      )}
    </div>
  );
}

export default App;
