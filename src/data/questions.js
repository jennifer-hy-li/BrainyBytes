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
        [
          {
            question: "7 + (- 8) =",
            answers:  [
              { id: 1, answer: "15" },
              { id: 2, answer: "-15" },
              { id: 3, answer: "-1" },
              { id: 4, answer: "1" }
            ],
            correctID: [3]
          },
          {
            question: "(-4) + (-5) =",
            answers:  [
              { id: 1, answer: "9" },
              { id: 2, answer: "-9" },
              { id: 3, answer: "20" },
              { id: 4, answer: "1" }
            ],
            correctID: [2]
          }
        ],
        [
          {
            question: "112 + 74",
            answers:  [
              { id: 1, answer: "186" },
              { id: 2, answer: "86" },
              { id: 3, answer: "816" },
              { id: 4, answer: "88" }
            ],
            correctID: [1]
          },
          {
              question: "231 + 101",
              answers:  [
                { id: 1, answer: "332" },
                { id: 2, answer: "232" },
                { id: 3, answer: "231" },
                { id: 4, answer: "321" }
              ],
              correctID: [1]
          }
        ]
      ]
    },
    long_addition: {
      name: "long_addition",
      levels: [
        [
          {
            question: "112 + 74",
            answers:  [
              { id: 1, answer: "186" },
              { id: 2, answer: "86" },
              { id: 3, answer: "816" },
              { id: 4, answer: "88" }
            ],
            correctID: [1]
          },
          {
              question: "231 + 101",
              answers:  [
                { id: 1, answer: "332" },
                { id: 2, answer: "232" },
                { id: 3, answer: "231" },
                { id: 4, answer: "321" }
              ],
              correctID: [1]
          }
        ],
        [
          {
            question: "7 + (- 8) =",
            answers:  [
              { id: 1, answer: "15" },
              { id: 2, answer: "-15" },
              { id: 3, answer: "-1" },
              { id: 4, answer: "1" }
            ],
            correctID: [3]
          },
          {
            question: "(-4) + (-5) =",
            answers:  [
              { id: 1, answer: "9" },
              { id: 2, answer: "-9" },
              { id: 3, answer: "20" },
              { id: 4, answer: "1" }
            ],
            correctID: [2]
          }
        ]
      ]
    }
};
  