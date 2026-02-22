/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6n2w0ntksia5pn2")

  // remove
  collection.schema.removeField("f8pk0jqs")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6n2w0ntksia5pn2")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "f8pk0jqs",
    "name": "organisers",
    "type": "relation",
    "required": false,
    "presentable": true,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": 1,
      "maxSelect": 5,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
})
