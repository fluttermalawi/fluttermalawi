/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3afkm9swkz8qkw9")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cflte8kz",
    "name": "approved",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3afkm9swkz8qkw9")

  // remove
  collection.schema.removeField("cflte8kz")

  return dao.saveCollection(collection)
})
