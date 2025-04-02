namespace SpriteKind {
    export const Button1 = SpriteKind.create()
    export const Button3 = SpriteKind.create()
    export const Button2 = SpriteKind.create()
    export const Button3Z = SpriteKind.create()
    export const Button2Z = SpriteKind.create()
    export const Button1Z = SpriteKind.create()
}
function Skys_bank_system () {
    V1()
    B3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . f . . . . 
        . . f f f f f f f f f f f . . . 
        . . . . . . . . . . . f . . . . 
        . . . f . . . . . . . . . . . . 
        . . f f f f f f f f f f f . . . 
        . . . f . . . . . f . . . . . . 
        . . . . . . . f f f f f . . . . 
        . . . . . . . f . f . . . . . . 
        . . . . . . . f f f f f . . . . 
        . . . . . . . . . f . f . . . . 
        . . . . . . . f f f f f . . . . 
        . . . . . . . . . f . . . . . . 
        `, SpriteKind.Button3)
    B3.setPosition(53, 100)
    B1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f . f . . . . . . . . 
        . . . . . f . f . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . . f . f . . . . . . 
        . . . . . . . f . f . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Button1)
    B1.setPosition(78, 100)
    scene.setBackgroundColor(11)
}
function Daniel_Z_password_ask () {
    Daniel_Zs_password = game.askForNumber("Password")
    Daniels_password()
    if (Daniel_Zs_password == blockSettings.readNumber("Password Daniel")) {
        game.splash("Correct")
        Daniels_bank_system()
    } else {
        game.splash("Nope")
        Accounts()
    }
}
function V2 () {
    blockSettings.writeNumber("DD", 45)
    info.setScore(blockSettings.readNumber("DD"))
}
function Daniels_password () {
    blockSettings.writeNumber("Password Daniel", 123)
}
function Sky_password_ask () {
    Skys_password()
    Password_sky = game.askForNumber("Password")
    if (Password_sky == blockSettings.readNumber("Password sky")) {
        game.splash("Correct")
        Skys_bank_system()
    } else {
        game.splash("Nope")
        Accounts()
    }
}
function Skys_password () {
    blockSettings.writeNumber("Password sky", 1)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Button1, function (sprite, otherSprite) {
    if (Mouse.overlapsWith(B1) && browserEvents.Enter.isPressed()) {
        B1.sayText("Money checking ", 2000, true)
        story.showPlayerChoices("Yes", "No")
        if (story.getLastAnswer() == "Yes") {
            Check_$_sky()
        } else {
        	
        }
    }
})
function Check_$_Daniel_Z () {
    Password_Z = game.askForNumber("Password")
    if (Password_Z == blockSettings.readNumber("Password Daniel")) {
        V2()
        game.splash("You have " + blockSettings.readNumber("DD") + " Dollar")
    } else {
        game.splash("Nope")
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Button1Z, function (sprite, otherSprite) {
    if (Mouse.overlapsWith(B1) && browserEvents.Enter.isPressed()) {
        B1.sayText("Money checking ", 2000, true)
        story.showPlayerChoices("Yes", "No")
        if (story.getLastAnswer() == "Yes") {
            Check_$_Daniel_Z()
        } else {
        	
        }
    }
})
function Daniels_bank_system () {
    V2()
    B3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . f . . . . 
        . . f f f f f f f f f f f . . . 
        . . . . . . . . . . . f . . . . 
        . . . f . . . . . . . . . . . . 
        . . f f f f f f f f f f f . . . 
        . . . f . . . . . f . . . . . . 
        . . . . . . . f f f f f . . . . 
        . . . . . . . f . f . . . . . . 
        . . . . . . . f f f f f . . . . 
        . . . . . . . . . f . f . . . . 
        . . . . . . . f f f f f . . . . 
        . . . . . . . . . f . . . . . . 
        `, SpriteKind.Button3Z)
    B3.setPosition(53, 93)
    B1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f . f . . . . . . . . 
        . . . . . f . f . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . . f . f . . . . . . 
        . . . . . . . f . f . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Button1Z)
    B1.setPosition(78, 100)
    scene.setBackgroundColor(11)
}
function Send_moneyS () {
    game.splash("Available people")
    story.showPlayerChoices("Daniel Z", "")
    if (story.getLastAnswer() == "Daniel Z") {
        Password_sky = game.askForNumber("Password")
        if (Password_sky == blockSettings.readNumber("Password sky")) {
            game.splash("How much do you want to send")
            blockSettings.writeNumber("S", game.askForNumber("$"))
            info.changeScoreBy(blockSettings.readNumber("S"))
        } else {
            game.splash("Nope")
        }
    } else {
    	
    }
}
function V1 () {
    blockSettings.writeNumber("SD", 1)
    info.setScore(blockSettings.readNumber("SD"))
}
function Accounts () {
    story.showPlayerChoices("Daniel Z", "Sky")
    if (story.getLastAnswer() == "Sky") {
        Sky_password_ask()
    } else {
        Daniel_Z_password_ask()
    }
}
function Send_moneyD () {
    game.splash("Available people")
    story.showPlayerChoices("Sky", "")
    if (story.getLastAnswer() == "Sky") {
        Daniel_Zs_password = game.askForNumber("Password")
        if (Daniel_Zs_password == blockSettings.readNumber("Password Daniel")) {
            game.splash("How much do you want to send")
            blockSettings.writeNumber("D", game.askForNumber("$"))
            info.changeScoreBy(blockSettings.readNumber("D"))
        } else {
            game.splash("Nope")
        }
    } else {
    	
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Button3, function (sprite, otherSprite) {
    if (Mouse.overlapsWith(B3) && browserEvents.Enter.isPressed()) {
        B3.sayText("Send money", 2000, true)
        story.showPlayerChoices("Yes", "No")
        if (story.getLastAnswer() == "Yes") {
            Send_moneyS()
        } else {
        	
        }
    }
})
function Check_$_sky () {
    Question = game.askForNumber("Password")
    if (Question == blockSettings.readNumber("Password sky")) {
        V1()
        game.splash("You have " + blockSettings.readNumber("SD") + " Dollar")
    } else {
        game.splash("Nope")
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Button3Z, function (sprite, otherSprite) {
    if (Mouse.overlapsWith(B3) && browserEvents.Enter.isPressed()) {
        B3.sayText("Send money", 2000, true)
        story.showPlayerChoices("Yes", "No")
        if (story.getLastAnswer() == "Yes") {
            Send_moneyD()
        } else {
        	
        }
    }
})
let Question = 0
let Password_Z = 0
let Password_sky = 0
let Daniel_Zs_password = 0
let B1: Sprite = null
let B3: Sprite = null
let Mouse: Sprite = null
Accounts()
Mouse = sprites.create(img`
    f f . . . . . . . . . . . . . . 
    f 9 f . . . . . . . . . . . . . 
    f 9 9 f . . . . . . . . . . . . 
    f 9 9 9 f . . . . . . . . . . . 
    f 9 9 9 9 f . . . . . . . . . . 
    f 9 9 9 9 f . . . . . . . . . . 
    f 9 9 9 f . . . . . . . . . . . 
    f 9 9 f . . . . . . . . . . . . 
    f f f . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Mouse, 100, 100)
Mouse.setStayInScreen(true)
Mouse.z = 20
