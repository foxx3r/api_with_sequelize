const db = require("./connection-db")

const posts = db.sequelize.define("usersPost", {
  name: {
    type: db.Sequelize.STRING,
    allowNull: false,
    required: true,
    timestamps: true
  },
  age: {
    type: db.Sequelize.INTEGER,
    allowNull: false,
    required: false,
    timestamps: true
  },
  description: {
    type: db.Sequelize.TEXT,
    allowNull: true,
    required: false,
    timestamps: true
  }
})

posts.sync({ force: true })

module.exports = posts
