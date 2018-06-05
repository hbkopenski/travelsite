const Sequelize = require('sequelize')
const db = require('../db')

const City = db.define('city', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  metroUrl: {
    type: Sequelize.STRING,
  },
})

module.exports = City
