namespace SpriteKind {
    export const dna = SpriteKind.create()
    export const da = SpriteKind.create()
    export const Coin = SpriteKind.create()
    export const rush = SpriteKind.create()
    export const life = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (monde == _1) {
        if (joueur.vy == 0) {
            joueur.vy = -150
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Coin, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.spray, 100)
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile15`, function (sprite, location) {
    if (didactitiel == _1 + 4) {
        pause(100)
        game.showLongText("bravo, tu a fini le didactitiel", DialogLayout.Bottom)
        game.showLongText("maintenant je te laisse faire le niveau 0", DialogLayout.Bottom)
        game.showLongText("mais n'oublis pas les abeille te font perdre une vie", DialogLayout.Bottom)
        game.showLongText("quand tu n'a plus de vie tu est mort", DialogLayout.Bottom)
        didactitiel += 1
        sprites.destroyAllSpritesOfKind(SpriteKind.da)
        sprites.destroyAllSpritesOfKind(SpriteKind.dna)
        sprites.destroyAllSpritesOfKind(SpriteKind.Coin)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
        joueur.setPosition(46, -5)
        tiles.setCurrentTilemap(tilemap`level1`)
        game.showLongText("m-1 lvl-0", DialogLayout.Bottom)
    } else {
        sprites.destroyAllSpritesOfKind(SpriteKind.da)
        sprites.destroyAllSpritesOfKind(SpriteKind.dna)
        sprites.destroyAllSpritesOfKind(SpriteKind.Coin)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
        joueur.setPosition(46, -5)
        tiles.setCurrentTilemap(tilemap`monde-1-1`)
        game.showLongText("m-1", DialogLayout.Bottom)
        monde = 1
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile12`, function (sprite, location) {
    info.changeLifeBy(-1)
    if (didactitiel == _1 + 3) {
        pause(100)
        game.showLongText("oh non tu est mort", DialogLayout.Bottom)
        game.showLongText("une chance que tu a toucher le drapeau de checkpoint", DialogLayout.Bottom)
        didactitiel += 1
        tiles.setCurrentTilemap(tilemap`didactitiel 4`)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.dna, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.da)
    drapeau_a = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . 5 5 4 . . . . . . . 
        . . . . . . 5 4 4 . . . . . . . 
        . . . . . . . f 5 5 5 5 7 5 . . 
        . . . . . . . f 5 5 7 7 5 . . . 
        . . . . . . . f 5 7 7 5 . . . . 
        . . . . . . . f 7 5 5 . . . . . 
        . . . . . . . f 5 . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . d d . . . . . . . 
        . . . . . . d d d d . . . . . . 
        `, SpriteKind.da)
    drapeau_a.setPosition(otherSprite.x, otherSprite.y)
    sprites.destroy(otherSprite)
    if (didactitiel == _1 + 2) {
        pause(100)
        game.showLongText("bravo", DialogLayout.Bottom)
        game.showLongText("maintenant fait le parcours et touche le portail", DialogLayout.Bottom)
        didactitiel += 1
        tiles.setCurrentTilemap(tilemap`didactitiel 3`)
    }
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    if (didactitiel == _1 + 1) {
        pause(100)
        game.showLongText("bravo", DialogLayout.Bottom)
        game.showLongText("maintenant fait le parcours et touche le drapeau", DialogLayout.Bottom)
        didactitiel += 1
        tiles.setCurrentTilemap(tilemap`didactitiel2`)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.rush, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.spray, 100)
    bee = sprites.create(img`
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f f f . . . . 
        . . . f 1 1 1 1 f 1 1 1 1 f . . . 
        . . . f 1 1 1 d f d 1 1 1 f . . . 
        . . . f 1 1 d b f b d 1 1 f . . . 
        . . . . f f f f f f f f f . . . . 
        . . . f 5 5 5 5 f 5 5 5 5 f . . . 
        . . . f 5 f 5 5 f 5 5 f 5 f . . . 
        . . . f 5 5 5 5 f 5 5 5 5 f . . . 
        . . . . f f f f f f f f f . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    bee.setPosition(joueur.x - 80, joueur.y - 80)
    bee.follow(joueur)
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    if (didactitiel == _1) {
        pause(100)
        game.showLongText("bravo", DialogLayout.Bottom)
        game.showLongText("appuis sur \"gauche\" ou \"Droit\" pour bouger", DialogLayout.Bottom)
        didactitiel += 1
    }
})
info.onLifeZero(function () {
    joueur.setPosition(drapeau_a.x, drapeau_a.y)
    info.setLife(5)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.life, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.spray, 100)
    info.changeLifeBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.spray, 100)
    info.changeLifeBy(-1)
})
let coeur: Sprite = null
let bee_rushe: Sprite = null
let coin: Sprite = null
let drapeau_na: Sprite = null
let bee: Sprite = null
let drapeau_a: Sprite = null
let didactitiel = 0
let joueur: Sprite = null
let monde = 0
let _1 = 0
_1 = 0
monde = 0
joueur = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
joueur.setPosition(46, -5)
scene.setBackgroundColor(9)
controller.moveSprite(joueur, 100, 0)
joueur.ay = 350
joueur.setStayInScreen(true)
scene.cameraFollowSprite(joueur)
tiles.setCurrentTilemap(tilemap`didactitiel1`)
info.setLife(5)
game.showLongText("appuis sur \"haut\" pour sauter", DialogLayout.Bottom)
forever(function () {
    if (monde == _1 + 1) {
        controller.moveSprite(joueur, 100, 100)
        joueur.ay = 0
    } else {
        joueur.ay = 350
        controller.moveSprite(joueur, 100, 0)
    }
})
forever(function () {
    for (let valeur of tiles.getTilesByType(assets.tile`myTile8`)) {
        drapeau_na = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . 5 . . . . . . . . 
            . . . . . . 5 5 4 . . . . . . . 
            . . . . . . 5 4 4 . . . . . . . 
            . . . . . . . f 3 3 3 3 2 4 . . 
            . . . . . . . f 3 3 2 2 4 . . . 
            . . . . . . . f 3 2 2 4 . . . . 
            . . . . . . . f 2 4 4 . . . . . 
            . . . . . . . f 4 . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . d d . . . . . . . 
            . . . . . . d d d d . . . . . . 
            `, SpriteKind.dna)
        tiles.placeOnTile(drapeau_na, valeur)
        tiles.setTileAt(valeur, assets.tile`transparency16`)
    }
    for (let valeur of tiles.getTilesByType(assets.tile`myTile7`)) {
        coin = sprites.create(assets.image`d na`, SpriteKind.Coin)
        tiles.placeOnTile(coin, valeur)
        tiles.setTileAt(valeur, assets.tile`transparency16`)
        animation.runImageAnimation(
        coin,
        [img`
            . . b b b b . . 
            . b 5 5 5 5 b . 
            b 5 d 3 3 d 5 b 
            b 5 3 5 5 1 5 b 
            c 5 3 5 5 1 d c 
            c d d 1 1 d d c 
            . f d d d d f . 
            . . f f f f . . 
            `,img`
            . . b b b . . . 
            . b 5 5 5 b . . 
            b 5 d 3 d 5 b . 
            b 5 3 5 1 5 b . 
            c 5 3 5 1 d c . 
            c 5 d 1 d d c . 
            . f d d d f . . 
            . . f f f . . . 
            `,img`
            . . . b b . . . 
            . . b 5 5 b . . 
            . b 5 d 1 5 b . 
            . b 5 3 1 5 b . 
            . c 5 3 1 d c . 
            . c 5 1 d d c . 
            . . f d d f . . 
            . . . f f . . . 
            `,img`
            . . . b b . . . 
            . . b 5 5 b . . 
            . . b 1 1 b . . 
            . . b 5 5 b . . 
            . . b d d b . . 
            . . c d d c . . 
            . . c 3 3 c . . 
            . . . f f . . . 
            `,img`
            . . . b b . . . 
            . . b 5 5 b . . 
            . b 5 1 d 5 b . 
            . b 5 1 3 5 b . 
            . c d 1 3 5 c . 
            . c d d 1 5 c . 
            . . f d d f . . 
            . . . f f . . . 
            `,img`
            . . . b b b . . 
            . . b 5 5 5 b . 
            . b 5 d 3 d 5 b 
            . b 5 1 5 3 5 b 
            . c d 1 5 3 5 c 
            . c d d 1 d 5 c 
            . . f d d d f . 
            . . . f f f . . 
            `],
        100,
        true
        )
    }
    for (let valeur of tiles.getTilesByType(assets.tile`myTile9`)) {
        bee_rushe = sprites.create(assets.image`myImage`, SpriteKind.rush)
        tiles.placeOnTile(bee_rushe, valeur)
        tiles.setTileAt(valeur, assets.tile`transparency16`)
    }
    for (let valeur of tiles.getTilesByType(assets.tile`myTile`)) {
        coeur = sprites.create(img`
            ....................
            ....................
            ....................
            ....................
            ....................
            .......ff...ff......
            ......f22f.f22f.....
            .....f2322f2222f....
            .....f232222222f....
            .....f222222222f....
            ......f22222b2f.....
            .......f222b2f......
            ........f222f.......
            .........f2f........
            ..........f.........
            ....................
            ....................
            ....................
            ....................
            ....................
            `, SpriteKind.life)
        tiles.placeOnTile(coeur, valeur)
        tiles.setTileAt(valeur, assets.tile`transparency16`)
    }
})
