/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "v7e7s35ikzp7b7w",
    "created": "2024-10-12 17:09:52.886Z",
    "updated": "2024-10-12 17:09:52.886Z",
    "name": "sponsor",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "sniud1pm",
        "name": "logo",
        "type": "file",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "mimeTypes": [
            "image/png",
            "image/vnd.mozilla.apng",
            "image/svg+xml"
          ],
          "thumbs": [],
          "maxSelect": 1,
          "maxSize": 5242880,
          "protected": false
        }
      },
      {
        "system": false,
        "id": "0uflmynt",
        "name": "name",
        "type": "text",
        "required": true,
        "presentable": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "f7hdmtzv",
        "name": "website",
        "type": "url",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "exceptDomains": [],
          "onlyDomains": []
        }
      }
    ],
    "indexes": [
      "CREATE UNIQUE INDEX `idx_UAmh8HV` ON `sponsor` (\n  `name`,\n  `website`,\n  `logo`\n)"
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
  const collection = dao.findCollectionByNameOrId("v7e7s35ikzp7b7w");

  return dao.deleteCollection(collection);
})
