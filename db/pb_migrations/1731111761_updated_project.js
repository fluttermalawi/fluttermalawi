/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3afkm9swkz8qkw9")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "c1hjveo8",
    "name": "image",
    "type": "file",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [
        "image/jpeg",
        "image/png"
      ],
      "thumbs": [],
      "maxSelect": 1,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3afkm9swkz8qkw9")

  // remove
  collection.schema.removeField("c1hjveo8")

  return dao.saveCollection(collection)
})
