export default {
    "data": {
        "id": "500069939",
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
                    "id": "277",
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
                        "id": "834236",
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
            "id": "834237",
            "type": "options",
            "attributes": {
                "is-checked": true,
                "additional-attributes": {},
                "text": "She has experience on stage.",
                "position": 0
            },
            "relationships": {
                "resources": {
                    "data": []
                }
            }
        },
        {
            "id": "834238",
            "type": "options",
            "attributes": {
                "is-checked": false,
                "additional-attributes": {},
                "text": "She has been on television many times.",
                "position": 1
            },
            "relationships": {
                "resources": {
                    "data": []
                }
            }
        },
        {
            "id": "834239",
            "type": "options",
            "attributes": {
                "is-checked": false,
                "additional-attributes": {},
                "text": "She has never sung a song on stage.",
                "position": 2
            },
            "relationships": {
                "resources": {
                    "data": []
                }
            }
        },
        {
            "id": "834240",
            "type": "options",
            "attributes": {
                "is-checked": false,
                "additional-attributes": {},
                "text": "She is a perfect singer.",
                "position": 3
            },
            "relationships": {
                "resources": {
                    "data": []
                }
            }
        },
        {
            "id": "834236",
            "type": "questions",
            "attributes": {
                "score": 0,
                "hint": null,
                "additional-attributes": {},
                "text": "",
                "position": 1
            },
            "relationships": {
                "options": {
                    "data": [
                        {
                            "id": "834237",
                            "type": "options"
                        },
                        {
                            "id": "834238",
                            "type": "options"
                        },
                        {
                            "id": "834239",
                            "type": "options"
                        },
                        {
                            "id": "834240",
                            "type": "options"
                        }
                    ]
                },
                "resources": {
                    "data": [
                        {
                            "id": "941548",
                            "type": "resources"
                        }
                    ]
                }
            }
        },
        {
            "id": "941548",
            "type": "resources",
            "attributes": {
                "skeleton-path-v1": null,
                "skeleton-path": null,
                "mime": "mp3",
                "video-path": null,
                "additional-attributes": {},
                "image-path": null,
                "audio-path": "43fdd9689c2026cb27eff86e90a3967fee519c3b55b2fcfa6d753d810d573009.mp3"
            }
        },
        {
            "id": "277",
            "type": "templates",
            "attributes": {
                "is-option-shuffle": false,
                "display-name": "听音回答234",
                "module": "LA_IA_SCR",
                "instruction-en": "Listen and choose the correct answer.",
                "name": "听音回答234",
                "expected-time": 17,
                "instruction-cn": "听录音，选出正确的答案。"
            }
        }
    ],
    "marked_info_url": null
}