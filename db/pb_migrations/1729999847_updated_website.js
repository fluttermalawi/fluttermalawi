/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i0habd5dechncxm")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ar3yqjzx",
    "name": "codeOfConduct",
    "type": "editor",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "convertUrls": true
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lkuvuz8z",
    "name": "termsOfService",
    "type": "editor",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "convertUrls": true
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jzzuz26b",
    "name": "cookiePolicy",
    "type": "editor",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "convertUrls": true
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i0habd5dechncxm")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ar3yqjzx",
    "name": "codeOfConduct",
    "type": "editor",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "convertUrls": false
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lkuvuz8z",
    "name": "termsOfService",
    "type": "editor",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "convertUrls": false
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jzzuz26b",
    "name": "cookiePolicy",
    "type": "editor",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "convertUrls": false
    }
  }))

  return dao.saveCollection(collection)
})
