/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3986214590")

  // remove field
  collection.fields.removeById("number2573357162")

  // add field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "number2809179246",
    "max": null,
    "min": null,
    "name": "externalId",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "number4134623895",
    "max": null,
    "min": null,
    "name": "regionExternalId",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3986214590")

  // add field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "number2573357162",
    "max": null,
    "min": null,
    "name": "regionId",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // remove field
  collection.fields.removeById("number2809179246")

  // remove field
  collection.fields.removeById("number4134623895")

  return app.save(collection)
})
