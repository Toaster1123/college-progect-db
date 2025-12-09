/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3986214590")

  // update collection data
  unmarshal({
    "name": "cities"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3986214590")

  // update collection data
  unmarshal({
    "name": "sities"
  }, collection)

  return app.save(collection)
})
