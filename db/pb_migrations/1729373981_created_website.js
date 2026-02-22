/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "i0habd5dechncxm",
    "created": "2024-10-19 21:39:41.714Z",
    "updated": "2024-10-19 21:39:41.714Z",
    "name": "website",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ar3yqjzx",
        "name": "codeOfConduct",
        "type": "editor",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "convertUrls": false
        }
      },
      {
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
      },
      {
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
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("i0habd5dechncxm");

  return dao.deleteCollection(collection);
})
