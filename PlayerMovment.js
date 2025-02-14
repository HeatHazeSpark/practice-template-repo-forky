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
    console.log('player is stadying')
    resolve(direction,MoveBlocks)

  })
  .then((direction,MoveBlocks) => {
    if (direction = up){
      Player.y + MoveBlocks
    }if (direction = down) {
      Player.y - MoveBlocks
    }if (direction = right) {
      Player.x + MoveBlocks
    } if (direction = left) {
      Player.x - MoveBlocks
    }else{
      console.log('please reasign the direction right or the Move Blocks')
    } 
      
    
  })

}