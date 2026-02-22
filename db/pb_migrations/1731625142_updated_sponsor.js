/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v7e7s35ikzp7b7w")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v7e7s35ikzp7b7w")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
})
