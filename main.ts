enum ActionKind {
    Walking,
    Idle,
    Jumping,
    Attacking,
    AttackRight,
    Life2SliceLeft,
    Life2sliceright
}
namespace SpriteKind {
    export const dash = SpriteKind.create()
    export const Upgrade = SpriteKind.create()
}
namespace StatusBarKind {
    export const SLiceHealth = StatusBarKind.create()
}
/**
 * Collecting Item Code
 */
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    if (take_damage == true) {
        info.changeLifeBy(-1)
    }
    take_damage = false
    tiles.placeOnTile(mySprite, Respawn_point.getNeighboringLocation(CollisionDirection.Left))
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    Facing_up = true
    facing_left = false
    facing_right = false
    mySprite.setImage(img`
        ........................
        ........................
        ........................
        ........................
        .........fffff..........
        .......ffb1111ff........
        ......fb1111111bf.......
        ......f111111111f.......
        .....ffff1111111df......
        ....fb111c1dd111df......
        ....ffb1b1fdcf11bf......
        .....ffbfbfb11111f......
        ......ffffcfdb1b1f......
        .......fcccfcfbfbf......
        ........ffffffffff......
        .........ffffff.........
        .........ffffff.........
        .....f..fffffff.........
        .....fffffffff..........
        ......fffffff...........
        ........................
        ........................
        ........................
        ........................
        `)
    animation.runImageAnimation(
    mySprite,
    [img`
        ........................
        ........................
        ........................
        ..............fff.......
        .........fffffb1b.......
        .......ffddd111bf.......
        ......fb11111111b.......
        .....f1111111f1bf.......
        .....f11111ddc1df.......
        .....f11111dddbff.......
        .....f11111ddddcf.......
        .....f1111dddddff.......
        ......f11ddddddf........
        ......fbddddddbf........
        .......fbdddddff........
        ........fffffff.........
        ....ff.ffffb1b1f........
        .....fffffffbfbf........
        .....ffffffff...........
        ......ffffff............
        ........fff.............
        ........................
        ........................
        ........................
        `,img`
        ........................
        ........................
        ........................
        ........................
        ..............fff.......
        .........fffffb1b.......
        .......ffddd111bf.......
        ......fb11111111b.......
        .....f1111111f1bf.......
        .....f11111ddc1df.......
        .....f11111dddbff.......
        .....f11111ddddcf.......
        .....f1111dddddff.......
        ......f11ddddddf........
        ....f.fbddddddbf........
        ...f...fbdddddff........
        ....ff.fffb1b1f.........
        .....ffffffbfbf.........
        .....ffffffff...........
        ......ffffff............
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        ........................
        ........................
        ..............fff.......
        .........fffffb1b.......
        .......ffddd111bf.......
        ......fb11111111b.......
        .....f1111111f1bf.......
        .....f11111ddc1df.......
        .....f11111dddbff.......
        .....f11111ddddcf.......
        .....f1111dddddff.......
        ..f...f11ddddddf........
        ...ff.fbddddddbf........
        ....f..fbdddddff........
        ...f....fffffff.........
        ...fff.fffffff..........
        ....ffffffb1b1f.........
        .....ffffffbfbf.........
        ......ffffff............
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        ........................
        ........................
        ..............fff.......
        .........fffffb1b.......
        .......ffddd111bf.......
        ......fb11111111b.......
        .....f1111111f1bf.......
        .....f11111ddc1df.......
        .....f11111dddbff.......
        .....f11111ddddcf.......
        .....f1111dddddff.......
        ..f...f11ddddddf........
        ..fff.fbddddddbf........
        ....f..fbdddddff........
        ...ff...fffffff.........
        ...fff.ffb1b1f..........
        ....ffffffbfbf..........
        ....fffffffff...........
        ......ffffff............
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        ........................
        ........................
        ..............fff.......
        .........fffffb1b.......
        .......ffddd111bf.......
        ......fb11111111b.......
        .....f1111111f1bf.......
        .....f11111ddc1df.......
        f....f11111dddbff.......
        ..f..f11111ddddcf.......
        .....f1111dddddff.......
        .f....f11ddddddf........
        .ff...fbddddddbf........
        ..ff...fbdddddff........
        ..fff...fffffff.........
        ...fff.fffb1b1f.........
        ....fffffffbfbf.........
        ....ffffffffff..........
        ......ffffff............
        ........................
        ........................
        ........................
        ........................
        `],
    250,
    true
    )
})
controller.combos.attachCombo("udud", function () {
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        sprites.destroy(value)
    }
    Level_1()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    sprites.destroy(projectile)
    tiles.setWallAt(tiles.getTileLocation(26, 2), false)
    tiles.setWallAt(tiles.getTileLocation(26, 3), false)
    tiles.setWallAt(tiles.getTileLocation(26, 4), false)
    tileUtil.coverAllTiles(assets.tile`myTile9`, assets.tile`myTile11`)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (facing_right == true) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . c c c c . . . 
            . . . . . . . c c b b b b c . . 
            . . . . c c a a b 1 1 1 b b . . 
            . . a a a a b b 1 1 1 1 1 b . . 
            . a 1 1 1 1 1 1 1 1 1 1 1 b . . 
            . . a a c c a b b 1 1 1 b b . . 
            . . . . . . c c a b b b b c . . 
            . . . . . . . . . c c c c . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 150, 0)
        animation.runImageAnimation(
        projectile,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 3 . . a . . 3 . a . . . . 
            . a . . 3 . . . . c c c c . . . 
            . . . a . . . c c 1 1 1 1 c 3 . 
            . . . . c c a a 1 1 1 1 1 1 3 . 
            . . a a a a 1 1 1 1 1 1 1 1 . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . a a c c a b b 1 1 1 1 1 . . 
            . . . . a . c c a b b b b c . . 
            . a . . . . . 3 . c c c c . 3 . 
            . . . 3 . . a . . . 3 . a . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . 3 . . . . . 
            . . . . . . . . . . . a . . . . 
            . . 3 . . 3 . . . . . . a . . . 
            . . . 3 . . a . . c c c c 3 . . 
            . . . a . . . c c b b b b c . . 
            . . . . c c a a b 1 1 1 1 b 3 . 
            . . a a a a b b 1 1 1 1 1 1 a . 
            . . 1 b b 1 1 1 1 1 1 1 1 1 3 . 
            . . a a c c a 1 1 1 1 1 1 1 3 . 
            . . . . . . c c a 1 1 1 1 c . . 
            . 3 . . a . . . . c c c c 3 . . 
            . . . . . . . . . 3 . 3 a . . . 
            . 3 . . . 3 . . 3 . . a . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . a . . . . 
            . . . . . . . . . . . . a . . . 
            a . . . . . a . . c c c c a . . 
            . a . a . . . c c b b 1 1 c . . 
            . . . . c c a a b 1 1 1 1 b a . 
            . . a a a a b 1 1 1 1 1 1 1 a . 
            . . b 3 1 1 1 1 3 1 1 3 1 3 a . 
            . . a a 3 c a b b 1 1 1 1 3 a . 
            . a a . 3 . c c 3 b 3 1 1 c . . 
            . . . . a . . . . c c c c a . . 
            . . . . . . . 3 . . . . a 3 . . 
            . . . . . . . . . . . 3 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . a . . . . . 
            . . . . . . . . . . b a a . . . 
            . . . . . . . a . . . . a a . . 
            . . . . . . a . . c c c c a a . 
            . . . . . . . c c b b b b b a . 
            . a . . c c a a b 1 1 1 1 1 a . 
            . . a a a a b 1 1 1 1 1 1 1 a . 
            . a b 1 1 1 1 1 b 1 1 1 1 1 a . 
            . . a a c c a b b 1 1 1 1 b a . 
            . . . . . . c c a b b b b c a . 
            . . . . . . . . . c c c c a . . 
            . . . . . . a . . . . a b a . . 
            . . . . . . . a . . b a . . . . 
            . . . . . . . . . . a a . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        true
        )
        pause(750)
    }
    if (facing_left == true) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . c c c c . . . . . . . . . 
            . . c b b b b c c . . . . . . . 
            . . b b 1 1 1 b a a c c . . . . 
            . . b 1 1 1 1 1 b b a a a a . . 
            . . b 1 1 1 1 1 1 1 1 1 1 1 a . 
            . . b b 1 1 1 b b a c c a a . . 
            . . c b b b b a c c . . . . . . 
            . . . c c c c . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, -200, 0)
        animation.runImageAnimation(
        projectile,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . a . 3 . . a . . 3 . . . 
            . . . c c c c . . . . 3 . . a . 
            . 3 c 1 1 1 1 c c . . . a . . . 
            . 3 1 1 1 1 1 1 a a c c . . . . 
            . . 1 1 1 1 1 1 1 1 a a a a . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . 1 1 1 1 1 b b a c c a a . . 
            . . c b b b b a c c . a . . . . 
            . 3 . c c c c . 3 . . . . . a . 
            . . . a . 3 . . . a . . 3 . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . 3 . . . . . . . . . . 
            . . . . a . . . . . . . . . . . 
            . . . a . . . . . . 3 . . 3 . . 
            . . 3 c c c c . . a . . 3 . . . 
            . . c b b b b c c . . . a . . . 
            . 3 b 1 1 1 1 b a a c c . . . . 
            . a 1 1 1 1 1 1 b b a a a a . . 
            . 3 1 1 1 1 1 1 1 1 1 b b 1 . . 
            . 3 1 1 1 1 1 1 1 a c c a a . . 
            . . c 1 1 1 1 a c c . . . . . . 
            . . 3 c c c c . . . . a . . 3 . 
            . . . a 3 . 3 . . . . . . . . . 
            . . . . a . . 3 . . 3 . . . 3 . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . a . . . . . . . . . . . 
            . . . a . . . . . . . . . . . . 
            . . a c c c c . . a . . . . . a 
            . . c 1 1 b b c c . . . a . a . 
            . a b 1 1 1 1 b a a c c . . . . 
            . a 1 1 1 1 1 1 1 b a a a a . . 
            . a 3 1 3 1 1 3 1 1 1 1 3 b . . 
            . a 3 1 1 1 1 b b a c 3 a a . . 
            . . c 1 1 3 b 3 c c . 3 . a a . 
            . . a c c c c . . . . a . . . . 
            . . 3 a . . . . 3 . . . . . . . 
            . . . . 3 . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . a . . . . . . . . . . 
            . . . a a b . . . . . . . . . . 
            . . a a . . . . a . . . . . . . 
            . a a c c c c . . a . . . . . . 
            . a b b b b b c c . . . . . . . 
            . a 1 1 1 1 1 b a a c c . . a . 
            . a 1 1 1 1 1 1 1 b a a a a . . 
            . a 1 1 1 1 1 b 1 1 1 1 1 b a . 
            . a b 1 1 1 1 b b a c c a a . . 
            . a c b b b b a c c . . . . . . 
            . . a c c c c . . . . . . . . . 
            . . a b a . . . . a . . . . . . 
            . . . . a b . . a . . . . . . . 
            . . . . a a . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        true
        )
        pause(750)
    }
    if (Facing_up == true) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . c b b b b c . . . . . 
            . . . . c b b 1 1 b b c . . . . 
            . . . . c b 1 1 1 1 b c . . . . 
            . . . . c b 1 1 1 1 b c . . . . 
            . . . . c b 1 1 1 1 b c . . . . 
            . . . . . a b 1 1 b c . . . . . 
            . . . . . c b 1 b a c . . . . . 
            . . . . . c a 1 b a . . . . . . 
            . . . . . . c 1 a c . . . . . . 
            . . . . . . c 1 a c . . . . . . 
            . . . . . . a 1 a . . . . . . . 
            . . . . . . a 1 a . . . . . . . 
            . . . . . . . a . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 0, -200)
        pause(750)
    }
    projectile.lifespan = 50
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(mySprite, 65, 0)
    A_Button_Press = true
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        slow_jump()
        mySprite.ay = 300
        mySprite.vy = -150
    } else if (canDoubleJump) {
        mySprite.ay = 300
        mySprite.vy = -150
        canDoubleJump = false
    }
    A_Button_Press = false
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.dash, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    pause(1000)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    facing_right = false
    facing_left = true
    Facing_up = false
    mySprite.setImage(assets.image`myImage0`)
    animation.runImageAnimation(
    mySprite,
    [img`
        ........................
        ........................
        ........................
        ........................
        .........fffff..........
        ........f11111ff........
        .......fb111111bf.......
        .......f1111111dbf......
        ......fd111111dddf......
        ......fd11111ddddf......
        ......fd11dddddddf......
        ......f111dddddddf......
        ......f11fcddddddf......
        .....fb1111bdddbf.......
        .....f1b1bdfcfff........
        .....fbfbffffffff.......
        ......fffffffffff.ff....
        ...........ffffffff.....
        ........f1b1bffffff.....
        ........fbfbffffff......
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        ........................
        ........................
        ........................
        ........................
        ..........fffff.........
        .........f11111ff.......
        ........fb111111bf......
        ........f1111111dbf.....
        .......fd111111dddf.....
        .......fd11111ddddf.....
        .......fd11dddddddf.....
        .......f111dddddddf.....
        .......f11fcddddddf.....
        ......fb1111bdddbf......
        ......f1b1bdfcfff..ff...
        ......fbfbffffffffff....
        ...........fffffffff....
        ........f1b1bffffff.....
        ........fbfbffffff......
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        ........................
        ........................
        ........................
        .........fffff..........
        ........f11111ff........
        .......fb111111bf.......
        .......f1111111dbf......
        ......fd111111dddf......
        ......fd11111ddddf......
        ......fd11dddddddf......
        ......f111dddddddf......
        ......f11fcddddddf......
        .....fb1111bdddbf.......
        .....f1b1bdfcfff...f....
        .....fbfbffffffff...f...
        ......fffffffffff..ff...
        ..........f1b1bfffff....
        ..........fbfbfffff.....
        ..............ffff......
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        ........................
        ........................
        ........................
        .........fffff..........
        ........f11111ff........
        .......fb111111bf.......
        .......f1111111dbf......
        ......fd111111dddf......
        ......fd11111ddddf......
        ......fd11dddddddf......
        ......f111dddddddf......
        ......f11fcddddddf......
        .....fb1111bdddbf.......
        .....f1b1bdfcfff...f....
        .....fbfbffffffff...f...
        ......fffffffffff..ff...
        ...........fffffffff....
        ........f1b1bfffffff....
        ........fbfbffffff......
        ........................
        ........................
        ........................
        ........................
        `],
    250,
    true
    )
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    if (Blood_Sythe_Damage == false) {
        if (Dashing == false) {
            sprites.destroy(projectile)
            if (sprite == Enemy_1_Mele) {
                statusbar.value += -3
                sprites.destroy(projectile)
            }
            if (sprite == Enemy_slice) {
                Slice_Health_Bar.value += -10
                sprites.destroy(projectile)
            }
        }
    }
    if (Blood_Sythe_Damage == true) {
        if (Dashing == false) {
            sprites.destroy(projectile)
            if (sprite == Enemy_1_Mele) {
                sprites.destroy(projectile)
                statusbar.value += -6
            }
            if (sprite == Enemy_slice) {
                sprites.destroy(projectile)
                Slice_Health_Bar.value += -6
            }
        }
    }
    Enemy_1_Mele.follow(mySprite, 50)
})
statusbars.onStatusReached(StatusBarKind.SLiceHealth, statusbars.StatusComparison.LTE, statusbars.ComparisonType.Percentage, 50, function (status) {
    if (Its_level_1 == true) {
        if (Slice_phase_2 == false) {
            Enemy_slice.setImage(assets.image`myImage10`)
            Enemy_slice.changeScale(1.5, ScaleAnchor.Middle)
            Slice_Health_Bar.value = 80
            Slice_phase_2 = true
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    if (Able_to_open_Chest_1 == true) {
        tileUtil.coverAllTiles(sprites.dungeon.chestClosed, sprites.builtin.forestTiles10)
        blood_sythe = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 1 d . . . . . . . . . . 
            . . . 1 d d d . . . . . . . . . 
            . . 1 d d d d d . . . . . . . . 
            . . d d 2 . d f b . . . . . . . 
            . 1 d 2 . . . c f b . . . . . . 
            . 1 d 2 . . . . c f b . . . . . 
            . 1 2 . . . . . . c f b . . . . 
            . 1 2 . . . . . . . c f b . . . 
            . 1 2 . . . . . . . . c f b . . 
            . 1 . . . . . . . . . . c 2 b . 
            . . . . . . . . . . . . . c c . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Upgrade)
        blood_sythe.setPosition(mySprite.x, mySprite.y)
        Able_to_open_Chest_1 = false
    }
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    sprites.destroy(status.spriteAttachedTo())
})
function Level_1 () {
    tiles.setCurrentTilemap(tilemap`level2`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 3))
    tiles.setWallAt(tiles.getTileLocation(13, 13), false)
    tiles.setWallAt(tiles.getTileLocation(14, 13), false)
    tiles.setWallAt(tiles.getTileLocation(15, 13), false)
    Its_level_1 = true
    Switch_to_Slice = false
    Create_Enemies()
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    facing_right = true
    facing_left = false
    Facing_up = false
    mySprite.setImage(img`
        ........................
        ........................
        ........................
        ........................
        ..........fffff.........
        ........ff11111f........
        .......fb111111bf.......
        ......fbd1111111f.......
        ......fddd111111df......
        ......fdddd11111df......
        ......fddddddd11df......
        ......fddddddd111f......
        ......fddddddcf11f......
        .......fbdddb1111bf.....
        ........fffcfdb1b1f.....
        .......ffffffffbfbf.....
        ....ff.fffffffffff......
        .....ffffffff...........
        .....ffffffb1b1f........
        ......ffffffbfbf........
        ........................
        ........................
        ........................
        ........................
        `)
    animation.runImageAnimation(
    mySprite,
    [img`
        ........................
        ........................
        ........................
        ........................
        ..........fffff.........
        ........ff11111f........
        .......fb111111bf.......
        ......fbd1111111f.......
        ......fddd111111df......
        ......fdddd11111df......
        ......fddddddd11df......
        ......fddddddd111f......
        ......fddddddcf11f......
        .......fbdddb1111bf.....
        ........fffcfdb1b1f.....
        .......ffffffffbfbf.....
        ....ff.fffffffffff......
        .....ffffffff...........
        .....ffffffb1b1f........
        ......ffffffbfbf........
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        ........................
        ........................
        ........................
        ........................
        .........fffff..........
        .......ff11111f.........
        ......fb111111bf........
        .....fbd1111111f........
        .....fddd111111df.......
        .....fdddd11111df.......
        .....fddddddd11df.......
        .....fddddddd111f.......
        .....fddddddcf11f.......
        ......fbdddb1111bf......
        ...ff..fffcfdb1b1f......
        ....ffffffffffbfbf......
        ....fffffffff...........
        .....ffffffb1b1f........
        ......ffffffbfbf........
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        ........................
        ........................
        ........................
        ..........fffff.........
        ........ff11111f........
        .......fb111111bf.......
        ......fbd1111111f.......
        ......fddd111111df......
        ......fdddd11111df......
        ......fddddddd11df......
        ......fddddddd111f......
        ......fddddddcf11f......
        .......fbdddb1111bf.....
        ....f...fffcfdb1b1f.....
        ...f...ffffffffbfbf.....
        ...ff..fffffffffff......
        ....fffffb1b1f..........
        .....fffffbfbf..........
        ......ffff..............
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        ........................
        ........................
        ........................
        ..........fffff.........
        ........ff11111f........
        .......fb111111bf.......
        ......fbd1111111f.......
        ......fddd111111df......
        ......fdddd11111df......
        ......fddddddd11df......
        ......fddddddd111f......
        ......fddddddcf11f......
        .......fbdddb1111bf.....
        ....f...fffcfdb1b1f.....
        ...f...ffffffffbfbf.....
        ...ff..fffffffffff......
        ....fffffffff...........
        ....fffffffb1b1f........
        ......ffffffbfbf........
        ........................
        ........................
        ........................
        ........................
        `],
    250,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile17`, function (sprite, location) {
    if (controller.B.isPressed()) {
        if (spriteutils.isDestroyed(Enemy_slice)) {
            Level_1()
        }
    }
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    if (take_damage == true) {
        info.changeLifeBy(-1)
        take_damage = false
    }
})
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`myTile7`, function (sprite, location) {
    sprites.destroy(projectile)
    tiles.setWallAt(tiles.getTileLocation(15, 13), true)
    tiles.setWallAt(tiles.getTileLocation(14, 13), true)
    tiles.setWallAt(tiles.getTileLocation(13, 13), true)
    tiles.setTileAt(tiles.getTileLocation(13, 13), assets.tile`myTile8`)
    tiles.setTileAt(tiles.getTileLocation(14, 13), assets.tile`myTile8`)
    tiles.setTileAt(tiles.getTileLocation(15, 13), assets.tile`myTile8`)
    tileUtil.coverAllTiles(assets.tile`myTile7`, assets.tile`myTile21`)
})
statusbars.onZero(StatusBarKind.SLiceHealth, function (status) {
    sprites.destroy(status.spriteAttachedTo())
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Upgrade, function (sprite, otherSprite) {
    otherSprite.setScale(2, ScaleAnchor.Middle)
    if (can_collect_bloodsythe == true) {
        if (controller.A.isPressed()) {
            sprites.destroy(otherSprite)
            if (otherSprite == blood_sythe) {
                game.showLongText("The Blood Sythe; you feel the power of poor sould resonate within you. You do 6 damage", DialogLayout.Center)
                sprites.destroy(blood_sythe)
                Blood_Sythe_Damage = true
                can_collect_bloodsythe = false
            }
        }
    }
})
function slow_jump () {
	
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(Dashing)) {
        Dashing = true
        previous_speed = mySprite.vx
        controller.moveSprite(mySprite, 0, 0)
        if (facing_left == true) {
            direction = -1
        } else if (facing_right == true) {
            direction = 1
        }
        mySprite.setVelocity(direction * 400, 0)
        for (let index = 0; index <= 3; index++) {
            timer.background(function () {
                projectile2 = sprites.createProjectileFromSprite(mySprite.image, mySprite, 0 - direction * 5, 0)
                projectile2.lifespan = 50
            })
        }
        timer.after(100, function () {
            mySprite.vx = previous_speed
            controller.moveSprite(mySprite, 150, 0)
            Dashing = false
        })
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    Respawn_point = location
})
function coordinate_values () {
    enemy_y = Enemy_1_Mele.y
    enemy_x = Enemy_1_Mele.x
    Player_x = mySprite.x
    Player_y = mySprite.y
}
/**
 * Attacks
 */
function Create_Enemies () {
    if (Switch_to_Slice == false) {
        Enemy_slice = sprites.create(assets.image`myImage2`, SpriteKind.Enemy)
        if (Its_level_1 == false) {
            tiles.placeOnTile(Enemy_slice, tiles.getTileLocation(86, 249))
        }
        if (Its_level_1 == true) {
            tiles.placeOnTile(Enemy_slice, tiles.getTileLocation(46, 14))
        }
        Enemy_slice.setScale(1.5, ScaleAnchor.Middle)
        Slice_Health_Bar = statusbars.create(20, 4, StatusBarKind.SLiceHealth)
        Slice_Health_Bar.max = 50
        Slice_Health_Bar.attachToSprite(Enemy_slice)
        Slice_Animation_Left = animation.createAnimation(ActionKind.Attacking, 200)
        animation.attachAnimation(Enemy_slice, Slice_Animation_Left)
        Slice_Animation_Left.addAnimationFrame(assets.image`myImage4`)
        Slice_Animation_Left.addAnimationFrame(assets.image`myImage6`)
        Slice_Animation_Left.addAnimationFrame(assets.image`myImage5`)
        Slice_right = animation.createAnimation(ActionKind.AttackRight, 200)
        animation.attachAnimation(Enemy_slice, Slice_right)
        Slice_right.addAnimationFrame(assets.image`myImage7`)
        Slice_right.addAnimationFrame(assets.image`myImage9`)
        Slice_right.addAnimationFrame(assets.image`myImage8`)
        life_2_slice_left = animation.createAnimation(ActionKind.Life2SliceLeft, 200)
        animation.attachAnimation(Enemy_slice, life_2_slice_left)
        life_2_slice_left.addAnimationFrame(assets.image`myImage11`)
        life_2_slice_left.addAnimationFrame(assets.image`myImage12`)
        life_2_slice_left.addAnimationFrame(assets.image`myImage13`)
        Life_2_slice_right = animation.createAnimation(ActionKind.Life2sliceright, 200)
        animation.attachAnimation(Enemy_slice, Life_2_slice_right)
        Life_2_slice_right.addAnimationFrame(assets.image`myImage14`)
        Life_2_slice_right.addAnimationFrame(assets.image`myImage15`)
        Life_2_slice_right.addAnimationFrame(assets.image`myImage16`)
        pause(5000)
        Switch_to_Slice = true
    }
}
sprites.onDestroyed(SpriteKind.Enemy, function (sprite) {
    if (sprite == Enemy_1_Mele) {
        Create_Enemies()
        sprites.destroy(Enemy_1_Mele)
    }
    if (sprite == Enemy_slice) {
        sprites.destroy(Enemy_slice)
    }
})
function move2 (text: string, num: number) {
    pause(2000)
    mySprite.sayText(text)
    mySprite.x += num
    mySprite.y += 20
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
}
let Out_of_range: animation.Animation = null
let Life_2_slice_right: animation.Animation = null
let life_2_slice_left: animation.Animation = null
let Slice_right: animation.Animation = null
let Slice_Animation_Left: animation.Animation = null
let Player_y = 0
let Player_x = 0
let enemy_x = 0
let enemy_y = 0
let projectile2: Sprite = null
let direction = 0
let previous_speed = 0
let blood_sythe: Sprite = null
let Slice_Health_Bar: StatusBarSprite = null
let Enemy_slice: Sprite = null
let Dashing = false
let Blood_Sythe_Damage = false
let A_Button_Press = false
let projectile: Sprite = null
let facing_left = false
let Facing_up = false
let Respawn_point: tiles.Location = null
let Slice_phase_2 = false
let Its_level_1 = false
let facing_right = false
let Switch_to_Slice = false
let canDoubleJump = false
let can_collect_bloodsythe = false
let Able_to_open_Chest_1 = false
let take_damage = false
let statusbar: StatusBarSprite = null
let Enemy_1_Mele: Sprite = null
let mySprite: Sprite = null
game.setDialogFrame(img`
    . b . . . a b . . . . . b . . 
    a b b b b b b b b b b b 3 b b 
    b . a b . . . . a . b . . . b 
    3 . . . . . . . . . . . a . 3 
    b a . . c . . . . . c . . . b 
    b a . . . . . . . . . . . . b 
    b . . . . . . . . . . . c . b 
    a . c . . . . . . . . . . . b 
    b . . . . . . . . . . . . . 3 
    b . . . . . . . . . . . a . b 
    b a . . . . . . . . . . . . 3 
    b . . . . c . . . . c . . . b 
    b c . b . a . . b . . . . c b 
    a b b b b b b 3 b a b b b b b 
    . . . . b . . . . . . . b . . 
    `)
game.setDialogTextColor(1)
game.showLongText("You are the reaper of the underworld", DialogLayout.Center)
scene.setBackgroundColor(12)
tiles.setCurrentTilemap(tilemap`level1`)
info.setLife(100000)
mySprite = sprites.create(assets.image`myImage1`, SpriteKind.Player)
controller.moveSprite(mySprite, 150, 0)
Enemy_1_Mele = sprites.create(img`
    ......11........
    111...11....1111
    111115ff5..1111.
    .1115555551111..
    ...1f5555f1.....
    ....f5555ff.....
    ...ff5555fff....
    ...ff5555.ff....
    ..5f.ffff..5....
    ..f.ffffff.f....
    ....ff.fff......
    ....fff.ff......
    ....fff..ff.....
    .....5f..55.....
    .....5....5.....
    ....ff....f.....
    ................
    ................
    ................
    ................
    ................
    `, SpriteKind.Enemy)
tiles.placeOnTile(Enemy_1_Mele, tiles.getTileLocation(15, 251))
Enemy_1_Mele.setScale(1.5, ScaleAnchor.Middle)
tiles.placeOnTile(mySprite, tiles.getTileLocation(3, 251))
scene.cameraFollowSprite(mySprite)
mySprite.sayText(mySprite.x, 3000, false)
statusbar = statusbars.create(20, 4, StatusBarKind.Health)
statusbar.max = 20
statusbar.attachToSprite(Enemy_1_Mele)
music.play(music.stringPlayable("C D F D G D - C ", 124), music.PlaybackMode.InBackground)
take_damage = true
Able_to_open_Chest_1 = true
can_collect_bloodsythe = true
canDoubleJump = true
let Can_Slice = false
let My_sprite_is_right = false
let My_Sprite_is_left = false
Switch_to_Slice = false
facing_right = true
Its_level_1 = false
Slice_phase_2 = false
game.onUpdateInterval(2000, function () {
    if (Switch_to_Slice == true) {
        if (spriteutils.distanceBetween(mySprite, Enemy_slice) <= 50) {
            if (Slice_phase_2 == false) {
                if (My_Sprite_is_left == true) {
                    animation.setAction(Enemy_slice, ActionKind.Attacking)
                } else if (My_sprite_is_right == true) {
                    animation.setAction(Enemy_slice, ActionKind.AttackRight)
                }
            }
            if (Slice_phase_2 == true) {
                if (spriteutils.distanceBetween(mySprite, Enemy_slice) <= 50) {
                    if (My_Sprite_is_left == true) {
                        animation.setAction(Enemy_slice, ActionKind.Life2SliceLeft)
                    } else if (My_sprite_is_right == true) {
                        animation.setAction(Enemy_slice, ActionKind.Life2sliceright)
                    }
                }
            }
        }
        if (!(spriteutils.distanceBetween(mySprite, Enemy_slice) < 50)) {
            if (Slice_phase_2 == false) {
                Out_of_range = animation.createAnimation(ActionKind.Idle, 1000)
                Out_of_range.addAnimationFrame(assets.image`myImage2`)
                animation.attachAnimation(Enemy_slice, Out_of_range)
                animation.setAction(Enemy_slice, ActionKind.Idle)
            }
            if (Slice_phase_2 == true) {
                Out_of_range = animation.createAnimation(ActionKind.Idle, 1000)
                Out_of_range.addAnimationFrame(assets.image`myImage10`)
                animation.attachAnimation(Enemy_slice, Out_of_range)
                animation.setAction(Enemy_slice, ActionKind.Idle)
            }
        }
    }
})
game.onUpdateInterval(1000, function () {
    take_damage = true
})
forever(function () {
	
})
forever(function () {
	
})
game.onUpdateInterval(100, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        canDoubleJump = true
    }
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        controller.moveSprite(mySprite, 150, 0)
    }
    if (spriteutils.distanceBetween(mySprite, Enemy_1_Mele) <= 50) {
        Enemy_1_Mele.follow(mySprite, 50)
    }
    if (spriteutils.isDestroyed(Enemy_1_Mele)) {
        if (spriteutils.distanceBetween(mySprite, Enemy_slice) <= 50) {
            Enemy_slice.follow(mySprite, 50)
        }
        if (mySprite.x - Enemy_slice.x < 0) {
            My_Sprite_is_left = true
            My_sprite_is_right = false
        }
        if (mySprite.x - Enemy_slice.x > 0) {
            My_sprite_is_right = true
            My_Sprite_is_left = false
        }
    }
})
game.onUpdateInterval(200, function () {
	
})
