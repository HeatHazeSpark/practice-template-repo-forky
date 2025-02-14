let up = "up"
let down = "down"
let right = "right"
let left = "left"
function MovePlayer (direction,MoveBlocks){
  let Player = {
    y : -4,
    x : -6
  }
  new Promise((resolve, reject) => {
    console.log('player is steadying')
    resolve({direction,MoveBlocks})
    
  })
  .then(({ direction, MoveBlocks}) => {
    if (direction === up){
      Player.y += MoveBlocks
    }else if (direction === down) {
      Player.y -= MoveBlocks
    }else if (direction === right) {
      Player.x += MoveBlocks
    }else if (direction === left) {
      Player.x -= MoveBlocks
    }else{
      console.log('please reasign the direction right or the Move Blocks')
    } 
      
    return Player;
    
  })
.then((Player) => {
  console.log(`ur player is at ${Player.y},${Player.x}`)
})
.catch((error) => {
  console.log('error 404 , restart game please',error)
})
}
MovePlayer("up", 3);
MovePlayer("right", 2);