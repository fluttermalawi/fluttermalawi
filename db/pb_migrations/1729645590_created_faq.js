/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "evu9fdmzucwzeid",
    "created": "2024-10-23 01:06:30.229Z",
    "updated": "2024-10-23 01:06:30.229Z",
    "name": "faq",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "gr9rrtdw",
        "name": "question",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": 25,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "eymoljqr",
        "name": "answer",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": 250,
          "pattern": ""
        }
      }
    ],
    "indexes": [
      "CREATE UNIQUE INDEX `idx_V2yBulu` ON `faq` (`question`)"
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("evu9fdmzucwzeid");

  return dao.deleteCollection(collection);
})
