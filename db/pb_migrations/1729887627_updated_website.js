/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i0habd5dechncxm")

  // remove
  collection.schema.removeField("3osbf5ud")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i0habd5dechncxm")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3osbf5ud",
    "name": "callToAction",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 2000000
    }
  }))

  return dao.saveCollection(collection)
})
