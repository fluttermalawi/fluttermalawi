/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6n2w0ntksia5pn2")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "x3owfdvr",
    "name": "organisers",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "1po8gtxq4hoe9jp",
      "cascadeDelete": false,
      "minSelect": 1,
      "maxSelect": 3,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6n2w0ntksia5pn2")

  // remove
  collection.schema.removeField("x3owfdvr")

  return dao.saveCollection(collection)
})
