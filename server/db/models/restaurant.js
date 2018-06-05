const Sequelize = require('sequelize')
const db = require('../db')

const Restaurant = db.define('restaurant', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  address: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    allowNull: false
  },
  coordinates: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.ENUM('$', '$$', '$$$', '$$$$')
  },
  cuisine: {
    type: Sequelize.STRING
  },
  reservation: {
    type: Sequelize.BOOLEAN
  },
  open: {
    type: Sequelize.INTEGER
  },
  close: {
    type: Sequelize.INTEGER
  }
})

module.exports = Restaurant
