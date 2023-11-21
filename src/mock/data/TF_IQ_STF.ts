export default {
  data: {
    id: "500069949",
    type: "exercises",
    attributes: {
      "navigation-icon-id": null,
      "is-interactive-quiz": false,
      "instruction-en-audio": null,
      "marc-word-banks": [],
      "display-level": 1,
      "nav-name": "",
      "instruction-en": "Слушайте, читайте и выбирайте истину или ложь.",
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
          id: "74",
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
            id: "1018378",
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
      id: "1421632",
      type: "options",
      attributes: {
        "is-checked": true,
        "additional-attributes": {},
        text: "F",
        position: 2,
      },
      relationships: {
        resources: {
          data: [],
        },
      },
    },
    {
      id: "710816",
      type: "options",
      attributes: {
        "is-checked": false,
        "additional-attributes": {},
        text: "T",
        position: 1,
      },
      relationships: {
        resources: {
          data: [],
        },
      },
    },
    {
      id: "1018378",
      type: "questions",
      attributes: {
        score: 0,
        hint: null,
        "additional-attributes": {},
        text: "My father is an English teacher.",
        position: 1,
      },
      relationships: {
        options: {
          data: [
            {
              id: "710816",
              type: "options",
            },
            {
              id: "1421632",
              type: "options",
            },
          ],
        },
        resources: {
          data: [
            {
              id: "1427824",
              type: "resources",
            },
          ],
        },
      },
    },
    {
      id: "1427824",
      type: "resources",
      attributes: {
        "skeleton-path-v1": null,
        "skeleton-path": null,
        mime: "mp3",
        "video-path": null,
        "additional-attributes": {},
        "image-path": null,
        "audio-path":
          "2807467a6385f33ff213f5146775a4b2669f9d78d4df767fd65376aeea5e446f.mp3",
      },
    },
    {
      id: "74",
      type: "templates",
      attributes: {
        "is-option-shuffle": false,
        "display-name": "tingjukanjupanduan",
        module: "TF_IAQ_STF",
        "instruction-en": "Listen, read, and choose true or false.",
        name: "听句看句判断",
        "expected-time": 13,
        "instruction-cn": "听录音，判断下面的句子。相符的选T，不相符的选F。",
      },
    },
  ],
  marked_info_url: null,
};
