/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6n2w0ntksia5pn2")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bzq2cy5i",
    "name": "isCanceled",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "akrx4f8o",
    "name": "isPostponed",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6n2w0ntksia5pn2")

  // remove
  collection.schema.removeField("bzq2cy5i")

  // remove
  collection.schema.removeField("akrx4f8o")

  return dao.saveCollection(collection)
})
