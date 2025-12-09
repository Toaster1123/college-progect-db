/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_859047449")

  // remove field
  collection.fields.removeById("number4180622960")

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
    "id": "number273812419",
    "max": null,
    "min": null,
    "name": "countryExternalId",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_859047449")

  // add field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "number4180622960",
    "max": null,
    "min": null,
    "name": "countryId",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // remove field
  collection.fields.removeById("number2809179246")

  // remove field
  collection.fields.removeById("number273812419")

  return app.save(collection)
})
