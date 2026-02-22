/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "6n2w0ntksia5pn2",
    "created": "2024-10-19 22:22:07.619Z",
    "updated": "2024-10-19 22:22:07.619Z",
    "name": "event",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "f8pk0jqs",
        "name": "organiser",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": 1,
          "maxSelect": 10,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "ld6ni0n0",
        "name": "type",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "Conference",
            "Speaker Session / Tech Talk",
            "Info Session",
            "Watch Party",
            "Technical Session"
          ]
        }
      },
      {
        "system": false,
        "id": "lzlwrb1t",
        "name": "topics",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 2,
          "values": [
            "Android",
            "Cloud",
            "DevFest",
            "Machine Learning",
            "AI",
            "Community Building",
            "Firebase",
            "Flutter",
            "Gemini",
            "Google I/O Extended",
            "TensorFlow js",
            "Web",
            "Gemma",
            "Animation",
            "State Management",
            "Business"
          ]
        }
      },
      {
        "system": false,
        "id": "dkgnsteu",
        "name": "location",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 2,
          "values": [
            "Hybrid",
            "Physical",
            "Online"
          ]
        }
      },
      {
        "system": false,
        "id": "ex6phvtk",
        "name": "date",
        "type": "date",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "eo6ouzq0",
        "name": "city",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "rvi2wpgc",
        "name": "region",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "Northern Region",
            "Central Region",
            "Southern Region"
          ]
        }
      },
      {
        "system": false,
        "id": "nulxohy6",
        "name": "description",
        "type": "editor",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "convertUrls": true
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
  const collection = dao.findCollectionByNameOrId("6n2w0ntksia5pn2");

  return dao.deleteCollection(collection);
})
