export default {
  data: {
    id: "500069940",
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
          id: "116",
          type: "templates",
        },
      },
      explain: {
        data: {
          id: "1018430",
          type: "explain",
        },
      },
      "word-banks": {
        data: [],
      },
      questions: {
        data: [
          {
            id: "1018429",
            type: "questions",
          },
        ],
      },
    },
  },
  included: [
    {
      id: "1018430",
      type: "explain",
      attributes: {
        text: "<p>这里是解析的内容。这里是解析的内容。这里是解析的内容。这里是解析的内容。这里是解析的内容。这里是解析的内容。这里是解析的内容。这里是解析的内容。这里是解析的内容。这里是解析的内容。这里是解析的内容。这里是解析的内容。这里是解析的内容。这里是解析的内容。这里是解析的内容。这里是解析的内容。这里是解析的内容。这里是解析的内容。这里是解析的内容。这里是解析的内容。这里是解析的内容。这里是解析的内容。这里是解析的内容。这里是解析的内容。这里是解析的内容。</p>",
      },
      relationships: {
        resources: {
          data: [],
        },
      },
    },
    {
      id: "1018429",
      type: "questions",
      attributes: {
        score: 0,
        hint: null,
        "additional-attributes": {},
        text: "A: Are you ready to order?\nB: Nearly. Could you tell us what the special is first?\nA: Of course, today's special is Kobe Beef.\nB: I'll have the Kobe Beef.\nA: How about you?\nH: I'll have the same.\nA: How would you like your steak cooked?\nB: Well done, please.\nA: How about you?\nH: Medium rare, please.\nA: Would you like soup or salad?\nB: A salad with thousand island dressing, please.\nA: And you?\nH: Neither. But I'd like some dessert. I'll get the ice cream, please.\nA: What flavor would you like? We have chocolate, green tea, and vanilla.\nH: Hmm, I'll have vanilla, please. How about you?\nB: Not for me, thanks. I'm trying to watch my weight.",
        position: 0,
      },
      relationships: {
        options: {
          data: [],
        },
        resources: {
          data: [
            {
              id: "1427961",
              type: "resources",
            },
          ],
        },
      },
    },
    {
      id: "1427961",
      type: "resources",
      attributes: {
        "skeleton-path-v1": null,
        "skeleton-path": null,
        mime: "mp3",
        "video-path": null,
        "additional-attributes": {},
        "image-path": null,
        "audio-path":
          "1355f67e88ab3ece9a716aacfef0314e1f4bf22b90d6d499fb5c760dc81bcb35.mp3",
      },
    },
    {
      id: "116",
      type: "templates",
      attributes: {
        "is-option-shuffle": false,
        "display-name": "口译朗读",
        module: "RAR_IQA_PRA",
        "instruction-en": "Passage reading",
        name: "口译朗读",
        "expected-time": 30,
        "instruction-cn": "",
      },
    },
  ],
  marked_info_url: null,
};
