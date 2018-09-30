const express=require('express')
const app=express()
const Sequelize=require("sequelize")
const Datatypes=Sequelize.DataTypes
const db=new Sequelize(
    {
        dialect:'sqlite',
        storage:__dirname + '/restarauntstestsirtest4.db'
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

// app.get('/bill',(req,res)=>
// {


//     Order.sum('price' ,{where:{Table_no:req.query["fbill"] }}).then(Order1=>
//         {
//             // console.log("HEY I AM HERE");
            
//            res.send(`<h1 align="center" style="font-weight:100;margin:11%;letter_spacing:17">AMOUNT  :  ${Order1}</h1>`);
//            console.log(Order1.order);
    
//         })
    

// })


app.get('/bill',(req, res)=>
{
    Order.findAll({where: {Table_no:req.query["fbill"]  }}).then(ans=>
    {
        console.log(ans)
        
        
        
        const str = ans.reduce((acc, val) => {
            return acc + `<li> ${val.order} : ${val.price} </li>`
        }, '')
        const ans1=ans.reduce((acc,val)=>
        {
            return acc+ +val.price



        },0);

        
        res.send(`
            <html>
                <body>
                <div align="center">
                <h1 align="center" style="letter-spacing:17px;font-weight:100">YOUR BILL</h1>
                <h3 align="center" style="letter-spacing:11px;font-weight:100">TABLE_NO: </h3>${ans[0].Table_no}

                <br>
                <h3 align="center" style="letter-spacing:11px;font-weight:100">ORDERS: </h3>
                ${str}  
                <h3 align="center" style="letter-spacing:11px;font-weight:100">AMOUNT :</h3>
                ${ans1}
                </div>
                </body>
            </html>
        `)

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