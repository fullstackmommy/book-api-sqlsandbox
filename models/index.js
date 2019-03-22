const Sequelize = require('sequelize')

const sequelize = new Sequelize("books-api", "postgres", "postgres", {
    dialect: "postgres",
    logging: false
})

const models = {
    Book: sequelize.import ("./Book"),
    Author: sequelize.import ("./Author")
}

Object
    .keys(models)
    .forEach(key => {
        if ("associate" in models[key]) {
            models[key].associate(models)
        }
    })

module.exports = {
    sequelize,
    ...models
}