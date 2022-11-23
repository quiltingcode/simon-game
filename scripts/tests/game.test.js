/**
 * @jest-environment jsdom
 */

 const { game, newGame } = require("../game");

 beforeAll(() => {
     let fs = require("fs");
     let fileContents = fs.readFileSync("index.html", "utf-8");
     document.open();
     document.write(fileContents);
     document.close();
 });
 
 describe("game object contains correct keys", () => {
    test("score key exists", () => {
         expect("score" in game).toBe(true);
    });
    test("currentGame key exists", () => {
        expect("currentGame" in game).toBe(true);
    });
    test("playerMoves key exists", () => {
        expect("playerMoves" in game).toBe(true);
    });
    test("choices key exists", () => {
        expect("choices" in game).toBe(true);
    });
    test("choices contains correct ids", () => {
        expect(game.choices).toEqual(["button1", "button2", "button3", "button4"]);
    });
});

describe("newGame works correctly", () => {
    beforeAll(() => {
        game.score = 42;
        playerMoves = ["button1", "button2"];
        currentGame = ["button1", "button2"];
        document.getElementById("score").innerText = "42";
        newGame();
    });
    test("should set the game score to zero", () => {
        expect(game.score).toEqual(0);
    });
    test("playerMoves sequence should be cleared", () => {
        expect(game.playerMoves.length).toBe(0);
    });
    test("currentGame should be cleared", () => {
        expect(game.currentGame.length).toBe(0);
    });
});