export default {
  data: {
    id: "500069956",
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
          id: "320",
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
            id: "1018431",
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
      id: "1018431",
      type: "questions",
      attributes: {
        score: 0,
        hint: "2.08",
        "additional-attributes": {},
        text: "<p>In the last few years, China _____ great achievements in environmental protection. </p>",
        position: 1,
      },
      relationships: {
        options: {
          data: [],
        },
        resources: {
          data: [
            {
              id: "1427965",
              type: "resources",
            },
            {
              id: "1427966",
              type: "resources",
            },
          ],
        },
      },
    },
    {
      id: "1427965",
      type: "resources",
      attributes: {
        "skeleton-path-v1": null,
        "skeleton-path": null,
        mime: "swf",
        "video-path": null,
        "additional-attributes": {},
        "image-path":
          "8014ded2c67cbd82880c7566b4b50221f9724cd1f6c4531dc6a0e34d96f0bc46.png.zip",
        "audio-path": null,
      },
    },
    {
      id: "1427966",
      type: "resources",
      attributes: {
        "skeleton-path-v1": null,
        "skeleton-path": null,
        mime: "mp3",
        "video-path": null,
        "additional-attributes": {},
        "image-path": null,
        "audio-path":
          "f71dff90e3cb9317b70825e00699f3c6fe5a48bc078637a55a9d34714435a8fb.mp3",
      },
    },
    {
      id: "320",
      type: "templates",
      attributes: {
        "is-option-shuffle": false,
        "display-name": "口语录音",
        module: "RAR_IQ_PFR2",
        "instruction-en": "Click and record.",
        name: "口语录音",
        "expected-time": 125,
        "instruction-cn": "完成录音作业。",
      },
    },
  ],
  marked_info_url: null,
};
