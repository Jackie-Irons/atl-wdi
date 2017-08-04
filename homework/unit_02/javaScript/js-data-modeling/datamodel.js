
1.This app provides easy access to all your e-mail service providers in one app. The app will let you select one of your email addresses and view your e-mails for that address.

var exampleAccount = {
  userID: number,
  username: string,
  password: string,
  dateAccountCreated: date,
  lastLogin: date,
  associatedAccounts: [{
    userID: number,
    username: string,
    password: string,
    dateAccountCreated: date,
    lastLogin: date,
    mailProvider: string,
    emailsSentToAccount: {[
      sender: email address,
      body: string,
      dateRecieved: date,
      ]}
    }]
}

2. This one host a lot of radio stations and each featuring its own playlists
var exampleRadioStations = {
  ID: number,
  genre: string,
  popularityRanking: number,
  usersFollowing: array of usernames,
  playlists: {[
    genre: string,
    popularityRanking: number,
    songs: {[
      title: string,
      artist: string,
      genre: string,
      timesPlayed: number,
      ]}
    ]}
}

3. This one will be a tool for keeping track of all your fav bands and shows and it will track tour dates, ticket sales 
    and the next concert.
var exampleUser = {
  ID: number,
  username: string,
  password: string,
  favoritePlaylists: {[
    playlists: {[
      genre: string,
      popularityRanking: number,
      songs: {[
        title: string,
        artist: string,
        genre: string,
        timesPlayed: number,
        ]}
      ]}
    ]}

    var exampleUser = {
  id: number,
  username: string,
  password: string,
  dateCreated: date,
  lastLogin: date,
  lastConcertAttended: {
    bandName: array,
    location: array,
    date: date

  }
  favorite bands: [{
    bandName: array
    concerts: {[
      upcoming: date, string(location),
      ticketPurchase: string(link to external app),
      mostRecent: date, string(location),
      previous: date, string(location),
      ]}
    usersFollowing: [usernames]
    }]
}
var exampleBand = {
  bandName:
  concerts: {[
    upcoming: date, string(location),
    ticketPurchase: string(link to external app),
    mostRecent: date, string(location),
    previous: date, string(location),
    ]}
  usersFollowing: [usernames]
}

}
4.This one will allow customers to look at a list of coffeeshops that are close, and order drinks and place in a shooping carts
    and save.
var exampleUser = {
  id: number,
  username: string,
  password: string,
  dateCreated: date,
  lastLogin: date,
  location: GPS data,
  favoriteCoffeeShops: {
    shopName: string,
    shopLocation: GPS data,
    favoriteDrinks: {
      drinkName: string,
      drinkPrice: number,
      sizeOptions: [array]
    }
  }
  shoppingCart: {
    drinkName: string,
    coffeeShopBoughtFrom: string,
    price: number,
    orderComplete: boolean
  }
  previousOrders: {
      drinkName: string,
      coffeeShopBoughtFrom: string,
      price: number,
      orderComplete: boolean
      dateOrdered: date,
      review: string
    }
  nearbyCoffeeShops: {
    shopName: string,
    shopLocation: GPS data,
    menu: {
      drinkName: string,
      drinkPrice: number,
      sizeOptions: [array]
    }
  }
}
var exampleCoffeeShop = {
  shopName: string,
  shopLocation: GPS data,
  menu: {
    drinkName: string,
    drinkPrice: number,
    sizeOptions: [array]
  }
}

5. This one will show top stars from your favorite team you can look at thier stats and the whole team.

var exampleUserProfile = {
  id: number,
  username: string,
  password: string,
  dateCreated: date,
  lastLogin: date,
  playersFollowing: {
    playerName: string,
    recentGames: string,
  playerStats: {
    rushingYards: number,
    passingYards: number,
    Tackles: number,
  }
  favoriteTeams: {
    [
    teamId: number,
    teamName: string,
    sportPlayed: string,
    players: [
    playerName: string,
      recentGames: string,
    playerStats: {
      rushingYards: number,
      passingYards: number,
      Tackles: number,
    ]
    ]
  }
}
var exampleTeam = {
  teamId: number,
  teamName: string,
  sportPlayed: string,
  usersFollowing: [usernames]
  players: [
  playerName: string,
    recentGames: string,
  playerStats: {
    rushingYards: number,
    passingYards: number,
    Tackles: number,
  ]
  ]
}