/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_961350965")

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

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_961350965")

  // remove field
  collection.fields.removeById("number2809179246")

  return app.save(collection)
})
