const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/index')

const Student = sequelize.define('student', {
  name: {
    type: DataTypes.STRING
  },
  age: {
    type: DataTypes.INTEGER
  },
  email: {
		type: DataTypes.STRING,
    unique: true
	},
  preferences: {
		type: DataTypes.STRING
	},
  currently_working: {
		type: DataTypes.BOOLEAN
	},
  favourite_pokemon: {
		type: DataTypes.STRING
	}
})

module.exports = Student