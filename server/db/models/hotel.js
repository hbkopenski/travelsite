const Sequelize = require('sequelize')
const db = require('../db')

const Hotel = db.define('hotel', {
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
  type: {
    type: Sequelize.ENUM('boutique', 'luxury', 'budget')
  },
})

module.exports = Hotel
