/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3afkm9swkz8qkw9")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wmza4spk",
    "name": "technology",
    "type": "select",
    "required": true,
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
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tg5iclru",
    "name": "name",
    "type": "text",
    "required": true,
    "presentable": true,
    "unique": false,
    "options": {
      "min": 3,
      "max": 50,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6ijbsws7",
    "name": "difficulty",
    "type": "select",
    "required": true,
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
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3afkm9swkz8qkw9")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wmza4spk",
    "name": "technology",
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
  }))

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
