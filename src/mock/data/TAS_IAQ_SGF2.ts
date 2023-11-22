export default {
  data: {
    id: "500069908",
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
          id: "109",
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
            id: "1007058",
            type: "questions",
          },
          {
            id: "1007059",
            type: "questions",
          },
          {
            id: "1007062",
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
      id: "16112928",
      type: "options",
      attributes: {
        "is-checked": true,
        "additional-attributes": {},
        text: "went",
        position: 0,
      },
      relationships: {
        resources: {
          data: [],
        },
      },
    },
    {
      id: "16112944",
      type: "options",
      attributes: {
        "is-checked": true,
        "additional-attributes": {},
        text: "at",
        position: 0,
      },
      relationships: {
        resources: {
          data: [],
        },
      },
    },
    {
      id: "16112992",
      type: "options",
      attributes: {
        "is-checked": true,
        "additional-attributes": {},
        text: "Milky Way",
        position: 0,
      },
      relationships: {
        resources: {
          data: [],
        },
      },
    },
    {
      id: "1007058",
      type: "questions",
      attributes: {
        score: 0,
        hint: null,
        "additional-attributes": {},
        text: "Yesterday, I &lt;_&gt; to Ben and Emily's school.",
        position: 0,
      },
      relationships: {
        options: {
          data: [
            {
              id: "16112928",
              type: "options",
            },
          ],
        },
        resources: {
          data: [
            {
              id: "1410369",
              type: "resources",
            },
          ],
        },
      },
    },
    {
      id: "1007059",
      type: "questions",
      attributes: {
        score: 0,
        hint: null,
        "additional-attributes": {},
        text: "It starts &lt;_&gt; seven.<br/>（添加了第二个内容，相当于第二个question）|（有个小问题，这种情况下，前端显示的序号是2个1，最优的显示是1、2，因为有2个空）",
        position: 1,
      },
      relationships: {
        options: {
          data: [
            {
              id: "16112944",
              type: "options",
            },
          ],
        },
        resources: {
          data: [
            {
              id: "1410371",
              type: "resources",
            },
          ],
        },
      },
    },
    {
      id: "1007062",
      type: "questions",
      attributes: {
        score: 0,
        hint: null,
        "additional-attributes": {},
        text: "to detect planets in our own &lt;_&gt; and in other galaxies.|（也有个问题，前端预览的时候，题干音频只显示了第一题的音频）|正常的应该为：<ol><li>每个quesion的左侧显示对应的音频icon，若无则不显示，比如本题就无</li><li>原常规作业的逻辑是，前端预览时的题干是所有question音频的合集，并且有进度条，可以拖拽进度的，不过作业2.0可以不支持本条，实在意义不大</li></ol>",
        position: 2,
      },
      relationships: {
        options: {
          data: [
            {
              id: "16112992",
              type: "options",
            },
          ],
        },
        resources: {
          data: [],
        },
      },
    },
    {
      id: "1410369",
      type: "resources",
      attributes: {
        "skeleton-path-v1": null,
        "skeleton-path": null,
        mime: "mp3",
        "video-path": null,
        "additional-attributes": {},
        "image-path": null,
        "audio-path":
          "2dc8e1fc7ca115ee4a02e2c6850bfeae6b9c73b87b6d3023e717d6013acb3986.mp3",
      },
    },
    {
      id: "1410371",
      type: "resources",
      attributes: {
        "skeleton-path-v1": null,
        "skeleton-path": null,
        mime: "mp3",
        "video-path": null,
        "additional-attributes": {},
        "image-path": null,
        "audio-path":
          "44b75fec0dec6f05c11af85f91708eb17d8d748643b4a70cdd63cbb34b3a6f07.mp3",
      },
    },
    {
      id: "109",
      type: "templates",
      attributes: {
        "is-option-shuffle": false,
        "display-name": "听音填空",
        module: "TAS_IAQ_SGF2",
        "instruction-en": "Listen and fill in the blanks.",
        name: "T听音填空new",
        "expected-time": 30,
        "instruction-cn": "听录音，填写句中所缺的单词。",
      },
    },
  ],
  marked_info_url: null,
};
