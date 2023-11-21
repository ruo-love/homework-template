export default {
  data: {
    id: "500069957",
    type: "exercises",
    attributes: {
      "navigation-icon-id": null,
      "is-interactive-quiz": false,
      "instruction-en-audio": null,
      "marc-word-banks": [],
      "display-level": 1,
      "nav-name": "",
      "instruction-en": null,
      name: "",
      "additional-attributes": {
        position: 2147483647,
      },
      "instruction-cn": null,
      position: 2147483647,
      "navigation-bg-color": null,
      "instruction-cn-audio": null,
      "navigation-bg-color-hover": null,
      dictionaries: [],
    },
    relationships: {
      template: {
        data: {
          id: "1",
          type: "templates",
        },
      },
      explain: {
        data: {
          id: "-1",
          type: "explain",
        },
      },
      "word-banks": {
        data: [],
      },
      questions: {
        data: [
          {
            id: "1018428",
            type: "questions",
          },
        ],
      },
    },
  },
  included: [
    {
      id: "-1",
      type: "explain",
      attributes: {
        text: "",
      },
      relationships: {
        resources: {
          data: [],
        },
      },
    },
    {
      id: "1018428",
      type: "questions",
      attributes: {
        score: 0,
        hint: null,
        "additional-attributes": {
          "display-text": "He is a fireman.",
        },
        text: "He is a fireman.",
        position: 1,
      },
      relationships: {
        options: {
          data: [],
        },
        resources: {
          data: [
            {
              id: "1427959",
              type: "resources",
            },
          ],
        },
      },
    },
    {
      id: "1427959",
      type: "resources",
      attributes: {
        "skeleton-path-v1": null,
        "skeleton-path": null,
        mime: "mp3",
        "video-path": null,
        "additional-attributes": {},
        "image-path": null,
        "audio-path":
          "c4d69bf1bab50876e8c5cc09dce6503d6e3b7cdf57ef2f384ffab40920228f31.mp3",
      },
    },
    {
      id: "1",
      type: "templates",
      attributes: {
        "is-option-shuffle": false,
        "display-name": "跟读练习",
        module: "RA_IQA_SRA",
        "instruction-en": "Read aloud.",
        name: "跟读练习",
        "expected-time": 15,
        "instruction-cn": "大声朗读。",
      },
    },
  ],
  marked_info_url: null,
};
