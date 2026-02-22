/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "3afkm9swkz8qkw9",
    "created": "2024-10-19 19:26:04.796Z",
    "updated": "2024-10-19 19:26:04.796Z",
    "name": "project",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "wmza4spk",
        "name": "type",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 5,
          "values": [
            "Android",
            "iOS",
            "Flutter",
            "ReactNative",
            "Kotlin",
            "Swift",
            "Web",
            "React",
            "Angular",
            "Vue",
            "Svelte",
            "NextJS",
            "TypeScript",
            "NodeJS",
            "Django",
            "Ruby",
            "Spring",
            "ASPNETCore",
            "GraphQL",
            "SQL",
            "MongoDB",
            "PostgreSQL",
            "Redis",
            "Cloud",
            "AWS",
            "Azure",
            "GCP",
            "Kubernetes",
            "Docker",
            "AI",
            "MachineLearning",
            "TensorFlow",
            "PyTorch",
            "TensorFlowJS",
            "Scikit",
            "NLP",
            "Firebase",
            "Gemini",
            "Gemma",
            "Blockchain",
            "AR",
            "VR",
            "IoT",
            "CI_CD",
            "Jenkins",
            "GitHubActions",
            "Linux",
            "Windows",
            "macOS",
            "Python",
            "JavaScript",
            "Java",
            "CSharp",
            "CPlusPlus",
            "Go",
            "Rust",
            "Microservices",
            "ServerlessComputing",
            "EdgeComputing",
            "QuantumComputing",
            "Cybersecurity"
          ]
        }
      },
      {
        "system": false,
        "id": "tg5iclru",
        "name": "name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "6ijbsws7",
        "name": "difficulty",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "Beginner",
            "Intermediate",
            "Advanced"
          ]
        }
      }
    ],
    "indexes": [
      "CREATE UNIQUE INDEX `idx_5xCnFUc` ON `project` (`name`)"
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("3afkm9swkz8qkw9");

  return dao.deleteCollection(collection);
})
