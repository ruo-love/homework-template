export default{
    "data": {
        "id": "500069907",
        "type": "exercises",
        "attributes": {
            "navigation-icon-id": null,
            "is-interactive-quiz": false,
            "instruction-en-audio": null,
            "marc-word-banks": [],
            "display-level": 1,
            "nav-name": "",
            "instruction-en": null,
            "name": "",
            "additional-attributes": {
                "position": 2147483647
            },
            "instruction-cn": null,
            "position": 2147483647,
            "navigation-bg-color": null,
            "instruction-cn-audio": null,
            "navigation-bg-color-hover": null,
            "dictionaries": []
        },
        "relationships": {
            "template": {
                "data": {
                    "id": "283",
                    "type": "templates"
                }
            },
            "explain": {
                "data": {
                    "id": "-1",
                    "type": "explain"
                }
            },
            "word-banks": {
                "data": []
            },
            "questions": {
                "data": [
                    {
                        "id": "1016829",
                        "type": "questions"
                    },
                    {
                        "id": "1016832",
                        "type": "questions"
                    },
                    {
                        "id": "1016837",
                        "type": "questions"
                    }
                ]
            }
        }
    },
    "included": [
        {
            "id": "-1",
            "type": "explain",
            "attributes": {
                "text": ""
            },
            "relationships": {
                "resources": {
                    "data": []
                }
            }
        },
        {
            "id": "16269264",
            "type": "options",
            "attributes": {
                "is-checked": true,
                "additional-attributes": {},
                "text": "kind",
                "position": 0
            },
            "relationships": {
                "resources": {
                    "data": []
                }
            }
        },
        {
            "id": "16269312",
            "type": "options",
            "attributes": {
                "is-checked": true,
                "additional-attributes": {},
                "text": "help",
                "position": 0
            },
            "relationships": {
                "resources": {
                    "data": []
                }
            }
        },
        {
            "id": "16269392",
            "type": "options",
            "attributes": {
                "is-checked": true,
                "additional-attributes": {},
                "text": "noisy",
                "position": 0
            },
            "relationships": {
                "resources": {
                    "data": []
                }
            }
        },
        {
            "id": "1016829",
            "type": "questions",
            "attributes": {
                "score": 0,
                "hint": null,
                "additional-attributes": {},
                "text": "Jack's first day at work: not busy 3. &lt;_&gt;",
                "position": 0
            },
            "relationships": {
                "options": {
                    "data": [
                        {
                            "id": "16269264",
                            "type": "options"
                        }
                    ]
                },
                "resources": {
                    "data": [
                        {
                            "id": "1424453",
                            "type": "resources"
                        },
                        {
                            "id": "1424452",
                            "type": "resources"
                        }
                    ]
                }
            }
        },
        {
            "id": "1016832",
            "type": "questions",
            "attributes": {
                "score": 0,
                "hint": null,
                "additional-attributes": {},
                "text": "|4. &lt;_&gt;",
                "position": 1
            },
            "relationships": {
                "options": {
                    "data": [
                        {
                            "id": "16269312",
                            "type": "options"
                        }
                    ]
                },
                "resources": {
                    "data": []
                }
            }
        },
        {
            "id": "1016837",
            "type": "questions",
            "attributes": {
                "score": 0,
                "hint": null,
                "additional-attributes": {},
                "text": "|5. &lt;_&gt;",
                "position": 2
            },
            "relationships": {
                "options": {
                    "data": [
                        {
                            "id": "16269392",
                            "type": "options"
                        }
                    ]
                },
                "resources": {
                    "data": []
                }
            }
        },
        {
            "id": "1424452",
            "type": "resources",
            "attributes": {
                "skeleton-path-v1": null,
                "skeleton-path": null,
                "mime": "mp3",
                "video-path": null,
                "additional-attributes": {},
                "image-path": null,
                "audio-path": "79c045efa339f132e716c7a46ed5af1dd8e29be2d28f6b055c9f7a06242420c8.mp3"
            }
        },
        {
            "id": "1424453",
            "type": "resources",
            "attributes": {
                "skeleton-path-v1": null,
                "skeleton-path": null,
                "mime": "swf",
                "video-path": null,
                "additional-attributes": {},
                "image-path": "2469ae45eafd6dd4c0f2373ce74677a9d64f5c0125920877467223525ef2e897.png.zip",
                "audio-path": null
            }
        },
        {
            "id": "283",
            "type": "templates",
            "attributes": {
                "is-option-shuffle": false,
                "display-name": "T听音看表填空",
                "module": "TAS_IAP_PLC",
                "instruction-en": "Listen, read, and write.",
                "name": "T听音看表填空",
                "expected-time": 100,
                "instruction-cn": "听录音，看图表，填写恰当的内容。"
            }
        }
    ],
    "marked_info_url": null
}