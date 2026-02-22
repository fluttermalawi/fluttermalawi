/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6n2w0ntksia5pn2")

  // update
  collection.schema.addField(new SchemaField({
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
        "Speaker Session",
        "Tech Talk",
        "Info Session",
        "Watch Party",
        "Technical Session",
        "Workshop",
        "Code Lab",
        "Study Jam",
        "Training Session",
        "Hands-on Lab",
        "Bootcamp",
        "Hackathon",
        "Bug Bash",
        "Code Review Session",
        "Architecture Review",
        "Design Sprint",
        "Open Source Sprint",
        "Community Meetup",
        "Networking Event",
        "Office Hours",
        "Mentorship Session",
        "Career Fair",
        "Panel Discussion",
        "Roundtable",
        "Lightning Talk",
        "Fireside Chat",
        "AMA Session",
        "Tech Debate",
        "Developer Q&A",
        "Demo Day",
        "Project Showcase",
        "Developer Showcase",
        "Product Launch Event",
        "DevFest",
        "Google I/O Extended",
        "Flutter Festival",
        "Android Dev Days",
        "Cloud Summit",
        "Tech Roadshow",
        "Portfolio Review",
        "Mock Interview",
        "Resume Review Workshop",
        "Career Development Session"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6n2w0ntksia5pn2")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
