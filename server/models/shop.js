import connection from "./db";

const users = connection.db("users");

class shope extends Model {}

Shop.init({
    name: {
        TYPE : String,
        defaultValue : " NewShop",
        allowNull : false,
    },
    description: {
        TYPE : String,
        defaultValue : "",
    },
    address: {
        TYPE : String,
        defaultValue : "Sweet Home Alabama",
    },
    avis:{
        TYPE : String,
        defaultValue : "",
    },
    note:{
        TYPE : Number ,
        defaultValue : 0
    },
    articles:{
        TYPE : []
    },
    owner:{
        TYPE : users
    },

}
)