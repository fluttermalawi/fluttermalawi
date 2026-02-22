/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v7e7s35ikzp7b7w")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_UAmh8HV` ON `sponsor` (`logo`)",
    "CREATE UNIQUE INDEX `idx_F7FD07T` ON `sponsor` (`name`)",
    "CREATE UNIQUE INDEX `idx_C3VcFH1` ON `sponsor` (`website`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v7e7s35ikzp7b7w")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_UAmh8HV` ON `sponsor` (\n  `name`,\n  `website`,\n  `logo`\n)"
  ]

  return dao.saveCollection(collection)
})
