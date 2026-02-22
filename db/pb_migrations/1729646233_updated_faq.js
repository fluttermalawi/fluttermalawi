/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("evu9fdmzucwzeid")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "eymoljqr",
    "name": "answer",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": 1000,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("evu9fdmzucwzeid")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "eymoljqr",
    "name": "answer",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": 250,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
