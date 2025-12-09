/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_859047449")

  // update field
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

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_859047449")

  // update field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "number4180622960",
    "max": null,
    "min": null,
    "name": "country_id",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
})
