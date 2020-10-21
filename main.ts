controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Player1.vy == 0) {
        Player1.vy = -150
    }
})
let Player1: Sprite = null
tiles.setTilemap(tiles.createTilemap(hex`10000a0003030303030303090707070707070707070707070707070800000a0011000000000b0c0010000000000000001100000000000000000000000000000010000000000d00000000000000000000000000000000000000000000000000000000000001010101010101010102000000000000030303030303030303030102000004010303030303030303030303050f0f06030303030303030303030303050e0e0603`, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    2 2 2 2 2 2 2 2 2 2 . . . . . . 
    . . . . . . . . . 2 2 2 . . 2 2 
    . . . . . . . . . . . 2 . . 2 . 
    . . . . . . . . . . . 2 . . 2 . 
    `, [myTiles.transparency16,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundCenter,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundNorthWest1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,sprites.dungeon.hazardLava0,myTiles.tile7,myTiles.tile8,myTiles.tile9], TileScale.Sixteen))
Player1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . f f f . . . . f f f . . . . . 
    . f 2 2 f . . f 2 2 f . . . . . 
    . f 3 2 2 f f 2 2 3 f . . . . . 
    . f 3 3 2 2 3 2 3 3 f . . . . . 
    . f 3 3 2 2 2 2 3 3 f . . . . . 
    . f 2 2 2 2 2 2 2 2 f . . . . . 
    . f 2 f 2 2 2 2 f 2 f . f f f . 
    . f 2 2 f 2 2 f 2 2 f . f 3 f . 
    . f 3 2 2 3 3 2 2 2 f . f 3 f . 
    . . f 2 2 2 2 2 2 3 3 f f 2 f . 
    . . f 3 2 2 2 2 2 2 3 3 2 2 f . 
    . . f 2 2 3 3 3 3 2 2 f f f . . 
    . . f 2 f f f 3 f f 2 f . . . . 
    . . f f . . f f . . f f . . . . 
    `, SpriteKind.Player)
tiles.placeOnRandomTile(Player1, myTiles.tile5)
controller.moveSprite(Player1, 100, 0)
Player1.ay = 300
scene.cameraFollowSprite(Player1)
game.onUpdate(function () {
    if (Player1.y > 150) {
        game.over(false)
    }
})
