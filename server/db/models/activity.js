const Sequelize = require('sequelize')
const db = require('../db')

const Activity = db.define('activity', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  address: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    allowNull: false
  },
  price: {
    type: Sequelize.INTEGER,
  },
  coordinates: {
    type: Sequelize.STRING,
    allowNull: false
  },
  tag: {
    type: Sequelize.ENUM('adventure', 'cultural', 'sightseeing')
  },
  reservation: {
    type: Sequelize.BOOLEAN
  },
  duration: {
    type: Sequelize.INTEGER
  },
  open: {
    type: Sequelize.INTEGER
  },
  close: {
    type: Sequelize.INTEGER
  }
})

module.exports = Activity
