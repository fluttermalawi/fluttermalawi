/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6n2w0ntksia5pn2")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mhubksg3",
    "name": "address",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gb7zdjyw",
    "name": "map",
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
  const collection = dao.findCollectionByNameOrId("6n2w0ntksia5pn2")

  // remove
  collection.schema.removeField("mhubksg3")

  // remove
  collection.schema.removeField("gb7zdjyw")

  return dao.saveCollection(collection)
})
