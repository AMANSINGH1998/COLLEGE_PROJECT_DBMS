const express=require('express')
const app=express()
const Sequelize=require("sequelize")
const Datatypes=Sequelize.DataTypes
const db=new Sequelize(
    {
        dialect:'sqlite',
        storage:__dirname + '/restaraunts.db'
    })
    const Order=db.define('ORDER',
    {
        Table_no:Datatypes.INTEGER,
        order:Datatypes.STRING,
        price:Datatypes.INTEGER
    })
    db.sync()
    db.authenticate().then(()=>
    {
        console.log("SUCCCESSFULLY CONNECTED")
    }).catch((err)=>{
        console.error
    })

// $(function()
// {
    
//     let input=$("#placeorders")
//     let MRP=$("#price")
//     let button=$("button")
//     button.click(function()
//     {
//         console.log("clicked")
//     })
app.use('/',express.static(__dirname+'/public'))
app.get('/insert',(req,res)=>
{
    Order.create({
        Table_no:req.query["table"],
        order:req.query["placeorder"],
        price:req.query["price"]
     })
console.log("insert")
console.log(req.query['table'])
})
 
app.listen(5455,function()
{
    console.log(`connected
    http://localhost:5455
    `)
})
// })
 
    // db.findALL(
    // {
    //     where:
    //     {
    //         Table_no:1
    //     }
    // })