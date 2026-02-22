/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("0j5txra4h5iyor9");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "0j5txra4h5iyor9",
    "created": "2024-10-12 19:41:50.596Z",
    "updated": "2024-10-12 19:41:50.596Z",
    "name": "sponsors",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "1xnarcje",
        "name": "name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
