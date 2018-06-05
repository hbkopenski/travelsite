const db = require('../server/db')
const { Activity, User, Hotel, Restaurant, City, Country } = require('../server/db/models')

const users = [
  {
    email: 'h.kopenski@gmail.com',
    isAdmin: true,
    password: 'hbk320',
  }
]

const activities = [
  {
    name: 'Empire State Building',
    address: ['350 5th Ave', '10118'],
    price: 40, 
    coordinates: 'test',
    tag: 'sightseeing',
    reservation: true,
    duration: 120,
    open: 11,
    close: 11
  },
]

const cities = [
  {
    name: 'New York, NY',
    metroUrl: '',
  }
]

const countries = [
  {
    name: 'United States of America',
    visa: false,
    tipping: true,
    outlets: '110V',
    currency: 'US Dollar',
    season: 'May - Semptember',
    tips: ['one tip', 'another tip']
  }
]

const hotels = [
  {
    name: 'PUBLIC',
    address: ['215 Chrystie St', '10002'],
    price: '$$',
    type: 'boutique', 
    coordinates: 'test',
  },
  {
    name: 'Gansevoort Hotel',
    address: ['18 9th Ave', '10014'],
    price: '$$',
    type: 'boutique', 
    coordinates: 'test',
  },
]

const restaurants = [
  {
    name: 'Ippudo',
    address: ['65 4th Ave', '10003'],
    cuisine: 'japanese',
    coordinates: 'test',
    price: '$$',
    reservation: false,
    open: 11,
    close: 11
  },
  {
    name: 'Nyonya',
    address: ['199 Grand St', '10013'],
    cuisine: 'malaysian',
    coordinates: '',
    price: '$',
    reservation: false,
    open: 11,
    close: 11
  },
]

function buildingUsers() {
  return Promise.all(users.map(user => User.create(user)))
}

function buildingCountries() {
  return Promise.all(countries.map(country => Country.create(country)))
}

function buildingCities() {
  return Promise.all(cities.map(city => City.create(city)))
}

function buildingHotels() {
  return Promise.all(hotels.map(hotel => Hotel.create(hotel)));
}

function buildingRestaurants() {
  return Promise.all(restaurants.map(restaurant => Restaurant.create(restaurant)))
}

function buildingActivities() {
  return Promise.all(activities.map(activity => Activity.create(activity)))
}

function seed() {
  return buildingHotels()
    .then(() => buildingUsers())
    .then(() => buildingCities())
    .then(() => buildingCountries())
    .then(() => buildingRestaurants())
    .then(() => buildingActivities())
    .catch(error => console.error('Failed to map data ', error));
}

console.log('Syncing Database')

db.sync({ force: true })
  .then(() => {
    console.log('Seeding database');
    return seed();
  })
  .then(() => console.log('Seeding Successful'))
  .catch(err => {
    console.error('Error while seeding');
    console.error(err.stack)
  })
  .finally(() => {
    db.close();
    return null;
  })


