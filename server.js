const Sequelize=require("sequelize")
const Datatypes=Sequelize.DataTypes
const db=new Sequelize(
    {
        dialect:'sqlite',
        storage:__dirname + '/restaraunt.db'
    })
    const orders=db.define('ORDER',
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