/**
 * Created by liqi on 20/01/2018.
 */

var Sequelize = require('sequelize');

var connection = new Sequelize('swag','root','new_password',{

    host:'localhost',
    port:'3306',
    dialect: 'mysql'

});

var Article = connection.define('orders',{


    product_name:Sequelize.STRING,

    customer_name: Sequelize.TEXT,
    customer_location: Sequelize.TEXT,
    customer_secondlocation: Sequelize.TEXT,
    customer_phone: Sequelize.INTEGER,
    customer_deliveryTime: Sequelize.DATE,
    product_size: Sequelize.TEXT,
    product_quantity: Sequelize.INTEGER,
    product_color: Sequelize.STRING

});

connection.sync().then(function(){


    Article.create({

        product_name: 'demo title',
        customer_name:'test'

    });


});