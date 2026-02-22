/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3afkm9swkz8qkw9")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0lmqewpa",
    "name": "link",
    "type": "url",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3afkm9swkz8qkw9")

  // remove
  collection.schema.removeField("0lmqewpa")

  return dao.saveCollection(collection)
})
