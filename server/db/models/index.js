const Activity = require('./activity')
const Hotel = require('./hotel')
const Restaurant = require('./restaurant')
const Country = require('./country')
const City = require('./city')
const User = require('./user')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */
Activity.belongsTo(Country)
Activity.belongsTo(City)
City.hasMany(Activity)
Country.hasMany(Activity)
Hotel.belongsTo(City)
City.hasMany(Hotel)
City.belongsTo(Country)
Country.hasMany(City)
City.hasMany(Restaurant)
Restaurant.belongsTo(City)


/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  Activity,
  Hotel,
  Restaurant,
  Country,
  City,
  User
}


// Database Models/Schema:

// Countries 
// 	-Visa Req
// 	-Tipping culture
// 	-Power Adapter
// 	-Currency (plugin)
// 	-Best time of year (weather widget)
// 	-vaccines
// Cities
// 	-Metro
// Restaurants
// 	-Address
// 	-Price
// 	-Res
// 	-cuisine
//  -rating (plugin)
// 	-Name
// 	-coordinates
// Hotels
// 	-Address
// 	-Price
//  -Rating (plugin)
// 	-type
// 	-Name
// 	-coordinates
// Activities
// 	-Address
// 	-Price
// 	-Res
// 	-Name
// 	-duration
// 	-coordinates
//  -rating (plugin)
// Tips
// 	-tip



