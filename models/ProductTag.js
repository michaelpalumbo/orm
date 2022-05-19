const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Product = require('./Product')
const Tag = require('./Tag')
// create our User model
class ProductTag extends Model {}

// define table columns and configuration

ProductTag.init(
    {
        // TABLE COLUMN DEFINITIONS GO HERE
        // define an id column
        id: {
            // use the special Sequelize DataTypes object provide what type of data it is
            type: DataTypes.INTEGER,
            // this is the equivalent of SQL's `NOT NULL` option
            allowNull: false,
            // instruct that this is the Primary Key
            primaryKey: true,
            // turn on auto increment
            autoIncrement: true
        },
        // cat name
        product_id: {
            type: DataTypes.INTEGER,
            references: {
                // This is a reference to another model
                model: Product,
          
                // This is the column name of the referenced model
                key: 'id',
            }
        },
        tag_id: {
            type: DataTypes.INTEGER,
            references: {
                // This is a reference to another model
                model: Tag,
          
                // This is the column name of the referenced model
                key: 'id',
            }
        },
    },
    {
        // TABLE CONFIGURATION OPTIONS GO HERE (https://sequelize.org/v5/manual/models-definition.html#configuration))

        // pass in our imported sequelize connection (the direct connection to our database)
        sequelize,
        // don't automatically create createdAt/updatedAt timestamp fields
        timestamps: false,
        // don't pluralize name of database table
        freezeTableName: true,
        // use underscores instead of camel-casing (i.e. `comment_text` and not `commentText`)
        underscored: true,
        // make it so our model name stays lowercase in the database
        modelName: 'producttag'
    }
);

module.exports = ProductTag;

