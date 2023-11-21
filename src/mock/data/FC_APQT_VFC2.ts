export default {
  data: {
    id: "500069955",
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
          id: "418",
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
            id: "1018427",
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
      id: "1018427",
      type: "questions",
      attributes: {
        score: 0,
        hint: "消防员",
        "additional-attributes": {
          "part-of-speech": "noun",
          "display-text": "",
          "english-defination": "",
        },
        text: "fireman",
        position: 1,
      },
      relationships: {
        options: {
          data: [],
        },
        resources: {
          data: [
            {
              id: "1427950",
              type: "resources",
            },
            {
              id: "1427951",
              type: "resources",
            },
          ],
        },
      },
    },
    {
      id: "1427950",
      type: "resources",
      attributes: {
        "skeleton-path-v1": null,
        "skeleton-path": null,
        mime: "mp3",
        "video-path": null,
        "additional-attributes": {},
        "image-path": null,
        "audio-path":
          "b7cbc44ae77cbd95a592704b84c21409d9f5b7b5a6d5bc72a73421fbfa72d174.mp3",
      },
    },
    {
      id: "1427951",
      type: "resources",
      attributes: {
        "skeleton-path-v1": null,
        "skeleton-path": null,
        mime: "swf",
        "video-path": null,
        "additional-attributes": {},
        "image-path":
          "3b6779d08b00cc2f09968215b56522177ceb2948667b23540320422aae322c17.png.zip",
        "audio-path": null,
      },
    },
    {
      id: "418",
      type: "templates",
      attributes: {
        "is-option-shuffle": false,
        "display-name": "DSR单词卡",
        module: "FC_APQT_VFC2",
        "instruction-en": "Learn the word, then read it aloud.",
        name: "DSR单词卡",
        "expected-time": 30,
        "instruction-cn": "学单词，大声念。",
      },
    },
  ],
  marked_info_url: null,
};
