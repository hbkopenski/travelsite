const Sequelize = require('sequelize')
const db = require('../db')

const Country = db.define('country', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  visa: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  tipping: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  outlets: {
    type: Sequelize.STRING
  },
  currency: {
    type: Sequelize.STRING
  },
  season: {
    type: Sequelize.STRING
  },
  vaccines: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  tips: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  }
})

module.exports = Country
