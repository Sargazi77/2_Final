module.exports = (sequelize, DataTypes) => {

    let Note = sequelize.define('Note', {

        name: {
            type: DataTypes.STRING,
            allowNull:false
        },
        Title: {
            type:DataTypes.STRING,
            allowNull:false,
        },
        Message: {
            type: DataTypes.STRING,
            allowNull: false
        },

        Date: {
            type : DataTypes.DATEONLY,
            allowNull: false
        }
    })
    Note.sync( {force: true} ).then( ()=> {
        console.log('Notes are synced')
    })

    return Note
}