import { useState } from "react";
import "./styles.css";
var foodMojiDictionary = {
  "🍿": "PopCorn",
  "🍦": "Softee Icecream",
  "🎂": "Birthday Cake",
  "🍯": "Honey Pot",
  "🍕": "Pizza",
  "🍪": "Cookie",
  "☕": "Hot Beverage"
};
var emojisweKnow = Object.keys(foodMojiDictionary);
export default function App() {
  var [meaning, Setmeaning] = useState("");

  function getMeaning(event) {
    var userInput = event.target.value;
    var meaning = foodMojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "not in our database";
    }
    if (userInput === "") {
      meaning = "Enter a Food-Emoji";
    }
    Setmeaning(meaning);
    //console.log(meaning);
  }
  function emojiClickHandler(emoji) {
    console.log("clicked ", emoji);
    var usrclick = emoji;
    var meaning = foodMojiDictionary[usrclick];
    Setmeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Food-Moji</h1>
      <input onChange={getMeaning} />
      <div className="output-text">{meaning}</div>
      <h3>Emojis We Know</h3>
      {emojisweKnow.map(function (emoji) {
        return (
          <span
            key={emoji}
            onClick={() => emojiClickHandler(emoji)}
            style={{ padding: ".5rem", fontSize: "2rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
