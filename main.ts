namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
`
    //% blockIdentity=images._tile
    export const tile2 = img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`
    //% blockIdentity=images._tile
    export const tile3 = img`
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
`
}
scene.onHitWall(SpriteKind.Player, function (sprite) {
    if (controller.A.isPressed()) {
        for (let direction of [CollisionDirection.Top, CollisionDirection.Right, CollisionDirection.Bottom, CollisionDirection.Left]) {
            break_in_direction(direction)
        }
    }
})
function break_in_direction (direction: number) {
    location_Wall = tilemap.locationInDirection(tilemap.locationOfSprite(mySprite), direction)
    if (tilemap.tileIsWall(location_Wall)) {
        for (let index = 0; index <= 4; index++) {
            if (true) {
            	
            }
        }
        tiles.setTileAt(location_Wall, myTiles.tile0)
        tiles.setWallAt(location_Wall, false)
    }
}
/**
 * ice-0
 * 
 * rock-1
 * 
 * algae-2
 */
let location_Wall: tiles.Location = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . . . e e e e . . . . . 
. . . e e e e e e e e . . . 
. . . . f f 2 2 f f . . . . 
. . . . f 2 2 2 2 f . . . . 
. . . . f 2 2 2 2 f . . . . 
. b b b f f 2 2 f f b b b . 
. b . . e e e e e e . . b . 
b b b . e e e e e e . b b b 
b . b . b b b b b b . b . b 
. . . . b b b b b b . . . . 
. . . . b b b b b b . . . . 
. . . . f f . . f f . . . . 
. . . . f f . . f f . . . . 
`, SpriteKind.Player)
scene.setBackgroundColor(4)
tiles.setTilemap(tiles.createTilemap(
            hex`1e001e00020202020202020202000000000000000000000000000000000000000000030202030203020202000000000000000000000000000000000000000000020202020202020202000000000000000000000000000000000000000000020203020202020200000300000000000000000000000000000000000000020202020202000000000000000200000000000002000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000300030000000000000000000000000000000000000000000000000000000303030300000000000000000000000000000000000000000000000000000003030303000000000000000000000000000000000000000000000000000003030300000000000000000000000300000000000003000000000000000000000000000000000000030000030100000000000300000000000000000000000000000000000000000000030300000000030000000000000000000000000000000000000000000000000000000000030000000000000000000000000000000000000000000000000003000000000300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010301010300000000000000000000000000000001010000000000000000030101010300000000000000000000000000000101030300000000000000030102010300000000000000000000000000000302030300000000000000030101010300000000000000000000000000000102030200000000000000030102030300000000000000000000000000000000000000000000000000000000000000000003030203000000000000000000000000000000000000000000000000000003010202000000000000000000000000000000000000000000000000000001010302000000000000000000000000000000000000000000000000000003020202000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`,
            img`
2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 . . 2 . . . . . . . . . . . . . . . . . . . 
2 2 2 2 2 2 . . . . . . . 2 . . . . . . 2 . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . 2 . 2 . . . . . 
. . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 . . . . 
. . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 . . . 
. . . . . . . . . . . . . . . . . . . . . . . 2 2 2 . . . . 
. . . . . . . 2 . . . . . . 2 . . . . . . . . . . . . . . . 
. . . 2 . . 2 2 . . . . . 2 . . . . . . . . . . . . . . . . 
. . . . . . 2 2 . . . . 2 . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . 
. . . . . . . . 2 . . . . 2 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . 2 2 2 2 2 . . . . . . . . . . . . . . . 2 2 . . . . . 
. . . 2 2 2 2 2 . . . . . . . . . . . . . . 2 2 2 2 . . . . 
. . . 2 2 2 2 2 . . . . . . . . . . . . . . 2 2 2 2 . . . . 
. . . 2 2 2 2 2 . . . . . . . . . . . . . . 2 2 2 2 . . . . 
. . . 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 2 2 2 2 . . . . . . . . . . . . . . . 
. . . . . . . . . . . 2 2 2 2 . . . . . . . . . . . . . . . 
. . . . . . . . . . . 2 2 2 2 . . . . . . . . . . . . . . . 
. . . . . . . . . . . 2 2 2 2 . 2 . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,myTiles.tile1,myTiles.tile2,myTiles.tile3],
            TileScale.Sixteen
        ))
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite)
tiles.placeOnRandomTile(mySprite, myTiles.tile0)
let resource_tiles = [myTiles.tile1, myTiles.tile2, myTiles.tile3]
let resource_drops = [img`
. . . . . . . 9 . . . . . . . . 
. . . . . . 9 9 9 . . . . . . . 
. . . . . 9 9 9 9 9 . . . . . . 
. . . . 9 9 9 9 9 9 9 . . . . . 
. . . 9 9 9 9 9 9 9 9 9 . . . . 
. . 9 9 9 9 9 9 9 9 9 9 9 . . . 
. 9 9 9 9 9 9 9 9 9 9 9 9 9 . . 
. 9 9 9 9 9 9 9 9 9 9 9 9 9 . . 
. 9 9 9 9 9 9 9 9 9 9 9 9 9 . . 
. 9 9 9 9 9 9 9 9 9 9 9 9 9 . . 
. 9 9 9 9 9 9 9 9 9 9 9 9 9 . . 
. . 9 9 9 9 9 9 9 9 9 9 9 . . . 
. . . 9 9 9 9 9 9 9 9 9 . . . . 
. . . . 9 9 9 9 9 9 9 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . 2 2 2 . . . . . 
. . . 2 2 . . . 2 2 2 . 2 2 2 . 
. . . 2 2 . . . 2 2 2 . 2 2 2 . 
. . . 2 2 . 2 2 2 . . . 2 2 2 . 
. . . . . . 2 2 2 . . . . . . . 
. . . . . . 2 2 2 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . 2 2 . . . 2 2 2 2 2 2 . . . 
. . 2 2 . . . 2 2 2 2 2 2 . . . 
. . 2 2 . . . 2 2 2 2 2 2 . . . 
. . 2 2 . . . 2 2 2 2 2 2 . . . 
. . . . . . . . . . . . . . . . 
. . . . 2 2 2 2 2 2 . . . . . . 
. . . . 2 2 2 2 2 2 . . . . . . 
. . . . 2 2 2 2 2 2 . . . . . . 
`, img`
. . . . . . . . . . . . . . . . 
. 7 . . . . . . . . . e . 7 . . 
. . . . e . 7 . . . . . . . . . 
. . e . . . . . 7 7 . . . . . . 
. . . . . . . e . . . . . . . . 
. . . . e . . . . . . . . . . . 
. . . . . . . . . 7 . e . . e e 
. . e . 7 . . . . . . . . 7 . . 
. . . . . . . . . . e . . 7 . . 
. . . . e . . . . 7 . . . . . . 
. . . . . e . . . . . . . . . . 
. . . . . . 7 . . . . . . . . . 
. . . 7 . . . . e . . . . . . . 
. . . 7 . 7 . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`]
forever(function () {
    if (tilemap.getLoadedMap() == tilemap.createMap(tiles.createTilemap(
            hex`1e001e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`,
            img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,myTiles.tile1,myTiles.tile2,myTiles.tile3],
            TileScale.Sixteen
        ))) {
    	
    }
})
