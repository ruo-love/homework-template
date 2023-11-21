export default {
  data: {
    id: "500069958",
    type: "exercises",
    attributes: {
      "navigation-icon-id": null,
      "is-interactive-quiz": false,
      "instruction-en-audio": null,
      "marc-word-banks": [],
      "display-level": 1,
      "nav-name": "",
      "instruction-en": "Прочитайте диалог вслух.",
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
          id: "381",
          type: "templates",
        },
      },
      explain: {
        data: {
          id: "203110",
          type: "explain",
        },
      },
      "word-banks": {
        data: [],
      },
      questions: {
        data: [
          {
            id: "203110",
            type: "questions",
          },
        ],
      },
    },
  },
  included: [
    {
      id: "203110",
      type: "explain",
      attributes: {
        text: "Can you dance?<br>Ты умеешь танцевать?<br><br>No, I can't.<br>Нет, я не буду.",
      },
      relationships: {
        resources: {
          data: [],
        },
      },
    },
    {
      id: "1018395",
      type: "options",
      attributes: {
        "is-checked": true,
        "additional-attributes": {},
        text: "Can you dance?",
        position: 1,
      },
      relationships: {
        resources: {
          data: [
            {
              id: "1427853",
              type: "resources",
            },
          ],
        },
      },
    },
    {
      id: "1018396",
      type: "options",
      attributes: {
        "is-checked": false,
        "additional-attributes": {},
        text: "No, I can't.",
        position: 2,
      },
      relationships: {
        resources: {
          data: [
            {
              id: "1427858",
              type: "resources",
            },
          ],
        },
      },
    },
    {
      id: "203110",
      type: "questions",
      attributes: {
        score: 0,
        hint: null,
        "additional-attributes": {},
        text: "",
        position: 1,
      },
      relationships: {
        options: {
          data: [
            {
              id: "1018395",
              type: "options",
            },
            {
              id: "1018396",
              type: "options",
            },
          ],
        },
        resources: {
          data: [
            {
              id: "1427848",
              type: "resources",
            },
          ],
        },
      },
    },
    {
      id: "1427848",
      type: "resources",
      attributes: {
        "skeleton-path-v1": null,
        "skeleton-path": null,
        mime: "swf",
        "video-path": null,
        "additional-attributes": {},
        "image-path":
          "9d53e860251430835a2fd07f6223c232cb34f590da9f5a59d5b9999140dc0981.png.zip",
        "audio-path": null,
      },
    },
    {
      id: "1427853",
      type: "resources",
      attributes: {
        "skeleton-path-v1": null,
        "skeleton-path": null,
        mime: "mp3",
        "video-path": null,
        "additional-attributes": {},
        "image-path": null,
        "audio-path":
          "1f430a652cf8acc56a45566ba200e6f3ba0d673cea33616fa09f78c93e759b67.mp3",
      },
    },
    {
      id: "1427858",
      type: "resources",
      attributes: {
        "skeleton-path-v1": null,
        "skeleton-path": null,
        mime: "mp3",
        "video-path": null,
        "additional-attributes": {},
        "image-path": null,
        "audio-path":
          "e9a10da549e2eb8079c57e6d01bf1f043a63e62a9edf446ab07694380c0d62bd.mp3",
      },
    },
    {
      id: "381",
      type: "templates",
      attributes: {
        "is-option-shuffle": false,
        "display-name": "跟读对话",
        module: "RA_IQA_DRA",
        "instruction-en": "Read the dialog aloud.",
        name: "跟读对话",
        "expected-time": 30,
        "instruction-cn": "大声朗读对话。",
      },
    },
  ],
  marked_info_url: null,
};
