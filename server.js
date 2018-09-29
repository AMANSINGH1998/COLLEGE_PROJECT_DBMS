const express=require('express')
const app=express()
const Sequelize=require("sequelize")
const Datatypes=Sequelize.DataTypes
const db=new Sequelize(
    {
        dialect:'sqlite',
        storage:__dirname + '/restarauntstestFINAL.db'
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
//  Order.create(
//      {
//      Table_no:1,
//     order:'LE AAO',
//     price:0
//      })
//      Order.create(
//         {
//         Table_no:2,
//        order:'AA JAO',
//        price:0
   
   
   
//         })

app.get('/bill',(req,res)=>
{


    Order.sum('price' ,{where:{Table_no:req.query["fbill"] }}).then(Order1=>
        {
            // console.log("HEY I AM HERE");
            
           res.send(`<h1 align="center" style="font-weight:100;margin:11%;letter_spacing:17">AMOUNT  :  ${Order1}</h1>`);
           console.log(Order1.order);
    
        })
    

})



     app.listen(5456,function()
{
    console.log(`connected
    http://localhost:5456
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