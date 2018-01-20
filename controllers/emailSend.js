/**
 * Created by liqi on 20/01/2018.
 */
var nodemailer = require('nodemailer');

module.exports =   function(req,res){

    var user_name=req.body.userName;
    var user_Location=req.body.userLocation;
    var user_Location2=req.body.userLocation2;
    var user_Phone=req.body.userPhone;
    var user_DeliveryTime=req.body.userDeliveryTime;
    var product_Name=req.body.productName;
    var product_Size=req.body.productSize;
    var product_Quantity=req.body.productQuantity;
    var product_Color=req.body.productColor;

    console.log("User name = "+user_name+", password is "+user_Location);

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'lee5187415@gmail.com',
            pass: 'liqi5187415'
        }
    });

    var mailOptions = {

        from: 'lee5187415@gmail.com',
        to: '114220313@umail.ucc.ie',
        subject: 'Sending Email using Node.js',
        text: "User name "+user_name+", user location is "+user_Location+"user city "+user_Location2+", " +
        "user phone is "+user_Phone+"User delivery time "+user_DeliveryTime+", product name is "+product_Name+"product size is  "+product_Size+", product quantity is "+product_Quantity+", product color is "+product_Color };

    var CustomermailOptions = {

        from: 'lee5187415@gmail.com',
        to: '114220313@umail.ucc.ie',
        subject: 'email to customer',
        text: "User name "+user_name+", user location is "+user_Location+"user city "+user_Location2+", " +
        "user phone is "+user_Phone+"User delivery time "+user_DeliveryTime+", product name is "+product_Name+"product size is  "+product_Size+", product quantity is "+product_Quantity+", product color is "+product_Color };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

    transporter.sendMail(CustomermailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Custommer Email sent: ' + info.response);
        }
    });

    res.end("yes");


}