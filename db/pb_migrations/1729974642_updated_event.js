/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6n2w0ntksia5pn2")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lzlwrb1t",
    "name": "topics",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 3,
      "values": [
        "Android",
        "Cloud",
        "DevFest",
        "Machine Learning",
        "AI",
        "Community Building",
        "Firebase",
        "Flutter",
        "Gemini",
        "Google I/O Extended",
        "TensorFlow js",
        "Web",
        "Gemma",
        "Animation",
        "State Management",
        "Business"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6n2w0ntksia5pn2")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lzlwrb1t",
    "name": "topics",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 2,
      "values": [
        "Android",
        "Cloud",
        "DevFest",
        "Machine Learning",
        "AI",
        "Community Building",
        "Firebase",
        "Flutter",
        "Gemini",
        "Google I/O Extended",
        "TensorFlow js",
        "Web",
        "Gemma",
        "Animation",
        "State Management",
        "Business"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
