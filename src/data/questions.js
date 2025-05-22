//TODO: move to aws when scaled up
//Layout like this:
//  topic: {
//     name:
//     levels: //i.e. index 0 of this list is all the questions/answers for level 1 from the levels grid 
//     [
//         [//this is for level 1
//             {question, answer, correct}, {question, answer, correct}, {question, answer, correct}
//         ],
//         [//this is for level 2
//             {question, answer, correct}, {question, answer, correct}, {question, answer, correct}
//         ]
//     ]
// }
// diff_topic:{}

export const questions = {
    integer_addition: {
      name: "Integer Addition",
      levels: [
        [{
          question: "7 + (- 8) =",
          answers: ["15", "-15", "-1", "1"],
          correct: "-1"
        },
        {
          question: "(-4) + (-5) =",
          answers: ["9", "-9", "20", "1"],
          correct: "-9"
        }],
        [{
            question: "112 + 74",
            answers: ["186", "86", "816", "88"],
            correct: "186"
          },
          {
              question: "231 + 101",
              answers: ["332", "232", "231", "321"],
              correct: "332"
        }]
      ]
    },
    long_addition: {
      name: "long_addition",
      levels: [
        [{
          question: "112 + 74",
          answers: ["186", "86", "816", "88"],
          correct: "186"
        },
        {
            question: "231 + 101",
            answers: ["332", "232", "231", "321"],
            correct: "332"
        }],
        [{
            question: "7 + (- 8) =",
            answers: ["15", "-15", "-1", "1"],
            correct: "-1"
          },
          {
            question: "(-4) + (-5) =",
            answers: ["9", "-9", "20", "1"],
            correct: "-9"
        }]
      ]
    }
};
  