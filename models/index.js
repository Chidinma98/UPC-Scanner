const Sequelize = require("sequelize")

const db = new Sequelize({
    database: "upc_scanner",
    dialect: "postgres",
    define:{
        underscored:true,
        returning:true
    }
})

const Product = db.define('products', {
    upcCode: Sequelize.INTEGER,
    brandName: Sequelize.TEXT,
    productName: Sequelize.TEXT,
    description: Sequelixe.TEXT
})

const Review = db.define('reviews',{
    username: Sequelize.TEXT,
    comment: Sequelize.TEXT,
    storePurchased: Sequelize.TEXT,
    date: Sequelize.INTEGER,
    price: Sequelize.INTEGER,
    rating: Sequelize.INTEGER


})

const User = db.define('user', {
name: Sequelize.TEXT,
password: Sequelize.TEXT
})


Product.hasMany(Review)
Review.belongsTo(Product)
User.hasMany(Review)
Review.belongsTo(User)