import React from "react";
import "./App.css";
import AboutBand from "./components/Band/AboutBand";
import DiscsBand from "./components/Band/DiscsBand";
//teste GIT

export interface Band {
  name: string;
  description: string;
  people: string[];
}

export interface Discs {
  id: number;
  name: string;
  year: number;
  cover: string;
  songs: string[];
}

const App = () => {
  const appBand: Band = {
    name: "Coldplay",
    description:
      "Coldplay are a British rock band formed in London in 1996. They met at University College London and began playing music together from 1996 to 1998, first calling themselves Pectoralz and then Starfish. With 100 million albums sold worldwide, Coldplay are the most successful band of the 21st century and one of the best-selling music acts of all time. According to Fuse, they are also the sixth-most awarded group in history. Other notable achievements include the sixth-highest-grossing tour of all time, three of the 50 highest-selling albums ever in the United Kingdom, the most number-one records in the country without ever missing the top, most nominations and wins for a band in Brit Awards history, and becoming the first British group to debut at number-one on the Billboard Hot 100. Coldplay are considered one of the most influential bands of the 21st century as well, with Forbes describing them as the standard for the current alternative scene. The Rock and Roll Hall of Fame included A Rush of Blood to the Head on their `200 Definitive Albums` list, and the single `Yellow` is part of their `Songs That Shaped Rock and Roll` exhibition for being one of the most successful and important recordings in the industry. In spite of their popularity and impact, Coldplay have earned a reputation as polarizing music icons.",
    people: [
      "Chris Martin",
      "Jonny Buckland",
      "Guy Berryman",
      "Will Champion",
      "Phil Harvey",
    ],
  };

  let discography: Discs[] = [
    {
      id: 1,
      name: "Parachutes",
      year: 2000,
      cover: "/covers/Coldplay_Parachutes.png",
      songs: [
        "Don't Panic",
        "Shiver",
        "Spies",
        "Sparks",
        "Yellow",
        "Trouble",
        "Parachutes",
        "High Speed",
        "We Never Change",
        "Everything's Not Lost",
      ],
    },
    {
      id: 2,
      name: "A Rush of Blood to the Head",
      year: 2002,
      cover: "/covers/Coldplay_ARush.png",
      songs: [
        "Politik",
        "In My Place",
        "God Put a Smile upon Your Face",
        "The Scientist",
        "Clocks",
        "Daylight",
        "Green Eyes",
        "Warning Sign",
        "A Whisper",
        "A Rush of Blood to the Head",
        "Amsterdam",
      ],
    },
    {
      id: 3,
      name: "X&Y",
      year: 2005,
      cover: "/covers/Coldplay-X&Y.png",
      songs: [
        "Square One",
        "What If",
        "White Shadows",
        "Fix You",
        "Talk",
        "X&Y",
        "Speed of Sound",
        "A Message",
        "Low",
        "The Hardest Part",
        "Swallowed in the Sea",
        "Twisted Logic",
        "Til Kingdom Come",
      ],
    },
    {
      id: 4,
      name: "Viva la Vida or Death and All His Friends",
      year: 2008,
      cover: "/covers/Coldplay_Viva_la_Vida.png",
      songs: [
        "Life in Technicolor",
        "Cemeteries of London",
        "Lost!",
        "42",
        "Lovers in Japan/Reign of Love",
        "Yes",
        "Viva la Vida",
        "Violet Hill",
        "Strawberry Swing",
        "Death and All His Friends",
      ],
    },
    {
      id: 5,
      name: "Mylo Xyloto",
      year: 2011,
      cover: "/covers/Myloxyloto.jpg",
      songs: [],
    },
  ];
  return (
    <div>
      <AboutBand props={appBand} />
      <DiscsBand props={discography} />
    </div>
  );
};

export default App;
