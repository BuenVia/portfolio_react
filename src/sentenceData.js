const sentencesArray = [
  {
    id: 1,
    name: "cuando",
    sentences: [
      {
        id: 1,
        question: "Cuando llegues, avísame.",
        answer: "When you arrive, let me know."
      },
      {
        id: 2,
        question: "When you arrive, let me know.",
        answer: "Cuando llegues, avísame."
      },
      {
        id: 3,
        question: "Siempre estoy feliz cuando ella me llame.",
        answer: "I am always happy when she calls me."
      },
      {
        id: 4,
        question: "I am always happy when she calls me.",
        answer: "Siempre estoy feliz cuando ella me llame."
      },
      {
        id: 5,
        question: "Cuando tengas tiempo, podemos hablar.",
        answer: "When you have time, we can talk."
      },
      {
        id: 6,
        question: "When you have time, we can talk.",
        answer: "Cuando tengas tiempo, podemos hablar."
      },
      {
        id: 7,
        question: "Cuando me digas, comenzamos.",
        answer: "When you tell me, we'll start."
      },
      {
        id: 8,
        question: "When you tell me, we'll start.",
        answer: "Cuando me digas, comenzamos."
      },
      {
        id: 9,
        question: "Siempre hay alegría cuando él lo haga bien.",
        answer: "There is always joy when he does it well."
      },
      {
        id: 10,
        question: "There is always joy when he does it well.",
        answer: "Siempre hay alegría cuando él lo haga bien."
      }
    ],
    notes: ""
  },
  {
    id: 2,
    name: "mientras",
    sentences: [
      {
        id: 16,
        question: "Mientras practiques, mejorarás tu habilidad.",
        answer: "While you practice, you will improve your skill."
      },
      {
        id: 17,
        question: "While you practice, you will improve your skill.",
        answer: "Mientras practiques, mejorarás tu habilidad."
      },
      {
        id: 18,
        question: "Estaré contigo mientras superas los desafíos.",
        answer: "I will be with you while you overcome the challenges."
      },
      {
        id: 19,
        question: "I will be with you while you overcome the challenges.",
        answer: "Estaré contigo mientras superas los desafíos."
      },
      {
        id: 20,
        question: "Mientras estudies, mantén la concentración.",
        answer: "While you study, maintain focus."
      },
      {
        id: 21,
        question: "While you study, maintain focus.",
        answer: "Mientras estudies, mantén la concentración."
      },
      {
        id: 22,
        question: "Hablaré contigo mientras lo necesites.",
        answer: "I will talk with you while you need it."
      },
      {
        id: 23,
        question: "I will talk with you while you need it.",
        answer: "Hablaré contigo mientras lo necesites."
      },
      {
        id: 24,
        question: "Mientras tengas metas, trabaja hacia ellas.",
        answer: "While you have goals, work towards them."
      },
      {
        id: 25,
        question: "While you have goals, work towards them.",
        answer: "Mientras tengas metas, trabaja hacia ellas."
      }
    ],
    notes: "En español, se usa mientras con el indicativo o el subjuntivo. Si se usa con el indicativo, mientras se traduce como 'while' del inglés. Si se usa con el subjuntivo, se traduce como 'as long as'."
  },
  {
    id: 3,
    name: "querer",
    sentences: [
      {
        id: 26,
        question: "Quiero que estudies para el examen.",
        answer: "I want you to study for the exam."
      },
      {
        id: 27,
        question: "I want you to study for the exam.",
        answer: "Quiero que estudies para el examen."
      },
      {
        id: 28,
        question: "Quiero que me ayudes con este problema.",
        answer: "I want you to help me with this problem."
      },
      {
        id: 29,
        question: "I want you to help me with this problem.",
        answer: "Quiero que me ayudes con este problema."
      },
      {
        id: 30,
        question: "Quiero que él hable con sinceridad.",
        answer: "I want him to speak honestly."
      },
      {
        id: 31,
        question: "I want him to speak honestly.",
        answer: "Quiero que él hable con sinceridad."
      },
      {
        id: 32,
        question: "Quiero que ellos tomen la decisión correcta.",
        answer: "I want them to make the right decision."
      },
      {
        id: 33,
        question: "I want them to make the right decision.",
        answer: "Quiero que ellos tomen la decisión correcta."
      },
      {
        id: 34,
        question: "Quiero que tú vengas a la fiesta.",
        answer: "I want you to come to the party."
      },
      {
        id: 35,
        question: "I want you to come to the party.",
        answer: "Quiero que tú vengas a la fiesta."
      },
      {
        id: 36,
        question: "Quise que estudiaras para el examen.",
        answer: "I wanted you to study for the exam."
      },
      {
        id: 37,
        question: "I wanted you to study for the exam.",
        answer: "Quise que estudiaras para el examen."
      },
      {
        id: 38,
        question: "Quise que me ayudaras con este problema.",
        answer: "I wanted you to help me with this problem."
      },
      {
        id: 39,
        question: "I wanted you to help me with this problem.",
        answer: "Quise que me ayudaras con este problema."
      },
      {
        id: 40,
        question: "Quise que él hablara con sinceridad.",
        answer: "I wanted him to speak honestly."
      },
      {
        id: 41,
        question: "I wanted him to speak honestly.",
        answer: "Quise que él hablara con sinceridad."
      },
      {
        id: 42,
        question: "Quise que ellos tomaran la decisión correcta.",
        answer: "I wanted them to make the right decision."
      },
      {
        id: 43,
        question: "I wanted them to make the right decision.",
        answer: "Quise que ellos tomaran la decisión correcta."
      },
      {
        id: 44,
        question: "Quise que tú vinieras a la fiesta.",
        answer: "I wanted you to come to the party."
      },
      {
        id: 45,
        question: "I wanted you to come to the party.",
        answer: "Quise que tú vinieras a la fiesta."
      },
      {
        id: 46,
        question: "Quise que ella lograra sus metas.",
        answer: "I wanted her to achieve her goals."
      },
      {
        id: 47,
        question: "I wanted her to achieve her goals.",
        answer: "Quise que ella lograra sus metas."
      },
      {
        id: 48,
        question: "Quise que ustedes practicaran más.",
        answer: "I wanted you all to practice more."
      },
      {
        id: 49,
        question: "I wanted you all to practice more.",
        answer: "Quise que ustedes practicaran más."
      },
      {
        id: 50,
        question: "Quise que ellos comprendieran la importancia.",
        answer: "I wanted them to understand the importance."
      },
      {
        id: 51,
        question: "I wanted them to understand the importance.",
        answer: "Quise que ellos comprendieran la importancia."
      },
      {
        id: 52,
        question: "Quise que tú te relajaras un poco.",
        answer: "I wanted you to relax a bit."
      },
      {
        id: 53,
        question: "I wanted you to relax a bit.",
        answer: "Quise que tú te relajaras un poco."
      }
    ]
  }
];

export default sentencesArray;
