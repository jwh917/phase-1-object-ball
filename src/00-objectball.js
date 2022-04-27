function gameObject(){
    //you can return the complete object instead saving it in a varibale and then return the object completely
    //old variable - let topLvlObj = 
    //below I returned the object instead the varibale, learn from video 
   return {
       home:{
        teamName: "Brooklyn Nets",
        colors: ["Black", " White"],
        players: {
        "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1

        },
        "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7

        },
        "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15

        },
        "Mason Plumlee": {
            number: 1,
            shoe: 18,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5

        },
        "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1

        }
        }
       },

       away:{
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", " Purple"],
        players: {
        "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2

        },
        "Bismak Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10

        },
        "DeSagna Diop": {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5

        },
        "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0

        },
        "Brendan Haywood": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12

        }
        }
    }
   }

//    return topLvlObj
}

// console.log(gameObject())


//after video
// forEach, map, filter, find, reduce can help thru lab

const game = gameObject()
const teams = Object.values(game)
// console.log(teams)

function homeTeam(){
  return gameObject().home
}

// console.log(homeTeam())


function awayTeam(){
  return gameObject().away
}

// console.log(awayTeam())

function players(){
  
  const homePlayers = game.home.players
  const awayPlayers = game.away.players

  // const players = Object.assign({}, homePlayers, awayPlayers)
  // const players = {...homePlayers, ...awayPlayers}
  //all the same 

  // return players
  return  Object.assign({}, homePlayers, awayPlayers)
}


function numPointsScored(playerInput){

  // const game = gameObject()
  // const homePlayers = game.home.players
  // const awayPlayers = game.away.players

  // const players = Object.assign({}, homePlayers, awayPlayers)
  // const players = {...homePlayers, ...awayPlayers}
  // becomes its own function above ^^^

  //way 1
  // for(const playerName in players()){
  //   // console.log(playerName)
  //   if(playerName === playerInput){
  //     return players()[playerName].points
  //     // return `${playerName}'s shoe size: ${players[playerName].points}`
  //   }
  // }

  //way 2
  // const playerArrays = Object.entries(players())
  // let points
  // // forEach, map, filter, find, reduce can help thru 
  // playerArrays.forEach(playerArray => { 
  //   if(playerArray[0] === playerInput) {
  //     points = playerArray[1].points
  //   }
  // })
  // return points

  //way 3
  // const playerArrays = Object.entries(players())
  // const player = playerArrays.find(playerArray => playerArray[0] === playerInput) 
  // return player[1].points

  //way 4
  return players()[playerInput].points
}

// console.log(numPointsScored("Brendan Haywood"))


// console.log(Object.keys(players()))
// console.log(Object.values(players()))
// console.log(Object.entries(players()))

function shoeSize(playerInput){
  return players()[playerInput].shoe
}

// console.log(shoeSize("Alan Anderson"))

function findByTeamName(teamName){
  return teams.find(team => teamName === team.teamName)
}

// console.log(findByTeamName("Brooklyn Nets"))


function teamColors(teamName){
  return findByTeamName(teamName).colors
}

// console.log(teamColors("Charlotte Hornets"))

function teamNames(){
  return teams.map(team => team.teamName)
}

// console.log(teamNames())

function playersNumbers(teamName){
  const teamsPlayers = findByTeamName(teamName).players
  const playersValues = Object.values(teamsPlayers)
  return playersValues.map(player => player.number)
}

// console.log(playersNumbers("Charlotte Hornets"))

function playerStats(playerName){
  return players()[playerName]
}

// console.log(playerStats("Ben Gordon"))

function bigShoeRebounds(){
 
  // console.log(players())
  console.log(Object.values(players()))

  const playersValues = Object.values(players())
  
  let playersShoeSizes = playersValues.sort((a,b) => { 

    // console.log(a,b)
  
    if(a.shoe > b.shoe) 
    // console.log(a,b)

    
    return -1
    
    if(a.shoe < b.shoe) 
    // console.log(a,b)

    
    return 1
    
    if(a.shoe == b.shoe) 
    console.log(a,b)

    return -1


    
  })[0]
  

  // console.log(playersValues) 
  // console.log(playersShoeSizes.rebounds)
  return playersShoeSizes.rebounds

}

console.log(bigShoeRebounds())












//before video

// function homeTeamName() {
//     let object = gameObject()
//     return object['home']['teamName']
// }
  
// // console.log(homeTeamName())

// function awayTeamName() {
//     // let object = gameObject()
//     // return object['away']['teamName']
//     //2nd way to 
//     return gameObject()['away']['teamName']
// }
  
// // console.log(awayTeamName())



// function numPointsScored(playerName){
//     const game = gameObject()
//     for(const gamekey in game){
//         // console.log(gamekey)
//         const teamObj = game[gamekey]
//         // console.log(teamObj.players)
//         for (const teamKey in teamObj){
//           const playerObj = teamObj.players
//             for(const playerKey in playerObj){
//                 // console.log(playerKey)
//                 if(playerKey === playerName){
//                     return playerObj[playerKey].points
//                     // return `${playerName}'s shoe size: ${playerObj[playerKey].points}`

//                 }
//             }
//         }
//     }
    
// }

// // console.log(numPointsScored("Brendan Haywood"))

// function shoeSize(playerName){
//   const game = gameObject()
//   for(const gamekey in game){
//       // console.log(gamekey)
//       const teamObj = game[gamekey]
//       // console.log(teamObj.players)
//       for (const teamKey in teamObj){
//         const playerObj = teamObj.players
//           for(const playerKey in playerObj){
//               // console.log(playerKey)
//               if(playerKey === playerName){
//                   return playerObj[playerKey].shoe
//                   // return `${playerName}'s shoe size: ${playerObj[playerKey].shoe}`

//               }
//           }
//       }
//   }
  
// }

// // console.log(shoeSize("Brendan Haywood"))


// function teamColors(teamName){
//   const game = gameObject()
//   for(const gamekey in game){
//     const teamObj = game[gamekey]
//     const name = teamObj.teamName
//     if(name === teamName){
//       return teamObj.colors
//       // return `${teamName}'s team colors: ${teamObj.colors}`

//     }
    
//   }

// }

// // console.log(teamColors("Charlotte Hornets"))
// // console.log(teamColors("Brooklyn Nets"))


// function teamNames(){
//   const game = gameObject()
//   const teams = []

//   for(const gamekey in game){
//     const teamObj = game[gamekey]
//     // console.log(teamObj.teamName)
//     teams.push(teamObj.teamName)
//   }
//   // console.log(teams)
//   // return teams
//   return `The teams: ${teams}`

// }

// // console.log(teamNames())


// function playerNumbers(teamName){
//   const game = gameObject()
//   const teamJerseys = []
//   for(const gamekey in game){
//     // console.log(gamekey)
//     const teamObj = game[gamekey]
//     // console.log(teamObj.teamName)
//     const name = teamObj.teamName
//     if(name === teamName){
//       const playerObj = teamObj.players

//       console.log(game.home.players)
//       console.log(Object.values(playerObj))
//       console.log(Object.entries(playerObj))
//     }
//   }

  
// }

// console.log(playerNumbers("Brooklyn Nets"))


// console.log(Object.keys(gameObject()))
// console.log(Object.values(gameObject()))
// console.log(Object.entries(gameObject()))

// debugger

// // first, define the function.
// function goodPractices() {
//   let game = gameObject();
//   for (let gameKey in game) {
//     // are you ABSOLUTELY SURE what 'gameKey' is?
//     // use the debugger to find out!
//     // console.log(gameKey)
//     // debugger
//     let teamObj = game[gameKey]
//     for (let teamKey in teamObj) {
//       // are you ABSOLUTELY SURE what 'teamKey' is?
//       // use debugger to find out!
//     //   console.log(teamKey)
//     //   debugger

//       // what is 'data' at each loop through out this block?
//       // when will the following line of code work and when will it break?
//       let data = teamObj.player
//       for (let key in data) {
//         // console.log(key)

//         // debugger
//       }
//     }
//   }
// }

// // then, call the function so it runs!
// // goodPractices()


