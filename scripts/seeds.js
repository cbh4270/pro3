const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Posts collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Wrestlers");

const wseeds = [
  {
    name: "Shawn Michaels",
    finishingMove: "Sweet Chin Music",
    imgUrl:
      "https://www.wwe.com/f/styles/wwe_1_1_540__composite/public/all/2018/10/Shawn_Michaels_Pro--d4bc7c99be4fcec510501f5e7d25bde7.png",
    description: "Hartbreak Kid",
    stamina: 100,
    health: 100,
    speed: 80,
    power: 85,
  },
  {
    name: "Randy Orton",
    finishingMove: "RKO",
    imgUrl:
      "https://www.wwe.com/f/styles/wwe_1_1_540__composite/public/all/2019/05/Randy_Orton_Pro--a9e0f9cbc3c45a244752ae995a7570ab.png",
    description: "The Viper",
    stamina: 100,
    health: 100,
    speed: 75,
    power: 85,
  },
  {
    name: "Triple H",
    finishingMove: "Pedigree",
    imgUrl:
      "https://www.wwe.com/f/styles/wwe_1_1_540__composite/public/all/2019/02/DX_Pro--d50fbad56a554dc91838431c89db6398.png",
    description: "The Game",
    stamina: 100,
    health: 100,
    speed: 65,
    power: 90,
  },
  {
    name: "John Cena",
    finishingMove: "STF",
    imgUrl:
      "https://www.wwe.com/f/styles/wwe_1_1_540__composite/public/all/2020/01/John_Cena_Pro--c49ac192e6c71d6dde11351ad70975d4.png",
    description: "The Doctor of Thuganomics",
    stamina: 100,
    health: 100,
    speed: 75,
    power: 90,
  },
  {
    name: "Jeff Hardy",
    finishingMove: "Swanton Bomb",
    imgUrl:
      "https://www.wwe.com/f/styles/wwe_1_1_540__composite/public/all/2020/08/Superstar_Jeff_Hardy_Title_Profile--6ff2d0a373976b8f5d0c3b24034091f2.png",
    description: "The Charismatic Enigma",
    stamina: 100,
    health: 100,
    speed: 90,
    power: 75,
  },
  {
    name: "Hardcore Holly",
    finishingMove: "Alabama Slam",
    imgUrl:
      "https://www.wwe.com/f/styles/wwe_1_1_540__composite/public/rd-talent/Profile/Hardcore_Holly_pro.png",
    description: "The Alabama Slamma",
    stamina: 100,
    health: 100,
    speed: 75,
    power: 90,
  },
  {
    name: "Chris Jericho",
    finishingMove: "Walls of Jericho",
    imgUrl:
      "https://www.wwe.com/f/styles/wwe_1_1_540__composite/public/all/2017/05/Chris_Jericho_Pro--3ccfc973e6285e437ea6cd55100a7aae.png",
    description: "The Ayatollah of Rock 'n' Rolla",
    stamina: 100,
    health: 100,
    speed: 80,
    power: 85,
  },
  {
    name: "The Undertaker",
    finishingMove: "Tombstone Piledriver",
    imgUrl:
      "https://www.wwe.com/f/styles/wwe_1_1_540__composite/public/all/2020/01/Undertaker_Pro--e73c07b669f8d823088cf8de4cebfde8.png",
    description: "The Deadman",
    stamina: 100,
    health: 100,
    speed: 80,
    power: 90,
  },
  {
    name: "Edge",
    finishingMove: "Spear",
    imgUrl:
      "https://www.wwe.com/f/styles/wwe_1_1_540__composite/public/all/2020/04/Edge_Pro--bf0ddae0f8bfed58e4b90c587b5037c4.png",
    description: "The Rated R Superstar",
    stamina: 100,
    health: 100,
    speed: 85,
    power: 85,
  },
  {
    name: "Rey Misterio",
    finishingMove: "619",
    imgUrl:
      "https://www.wwe.com/f/styles/wwe_1_1_540__composite/public/all/2020/01/Rey_Mysterio_Pro--ce1392898148b89855067b09c44dedf0.png",
    description: "The Master of the 619",
    stamina: 100,
    health: 100,
    speed: 90,
    power: 80,
  },
  {
    name: "Batista",
    finishingMove: "Batista Bomb",
    imgUrl:
      "https://www.wwe.com/f/styles/wwe_1_1_540__composite/public/rd-talent/Profile/Batista_pro.png",
    description: "The Animal",
    stamina: 100,
    health: 100,
    speed: 75,
    power: 95,
  },
  {
    name: "Matt Hardy",
    finishingMove: "Twist Of Fate",
    imgUrl:
      "https://www.wwe.com/f/styles/wwe_1_1_540__composite/public/all/2019/04/Matt_Hardy_Pro--f658eb813c43ec3a61bcfd29f14ef54f.png",
    description: "",
    stamina: 100,
    health: 100,
    speed: 80,
    power: 80,
  },
  {
    name: "Gregory Helms",
    finishingMove: "Shining Wizard",
    imgUrl:
      "https://www.wwe.com/f/styles/wwe_1_1_540__composite/public/rd-talent/Profile/Hurricane_pro.png",
    description: "The Hurricane",
    stamina: 100,
    health: 100,
    speed: 85,
    power: 75,
  },
  {
    name: "Torrie Wilson",
    finishingMove: "Spinning DDT",
    imgUrl:
      "https://www.wwe.com/f/styles/wwe_1_1_540__composite/public/all/2019/03/TorrieWilson_Pro--22036a191ceec320c4e240846699c40a.png",
    description: "Torrie",
    stamina: 80,
    health: 80,
    speed: 85,
    power: 60,
  },
  {
    name: "Kane",
    finishingMove: "ChokeSlam",
    imgUrl:
      "https://www.wwe.com/f/styles/wwe_1_1_540__composite/public/all/2020/01/Kane_Pro--97fd51c6219810ef02070c332958e10a.png",
    description: "The Big Red Machine",
    stamina: 100,
    health: 100,
    speed: 75,
    power: 90,
  },
  {
    name: "Stone Cold Steve Austin",
    finishingMove: "Stone Cold Stunner",
    imgUrl:
      "https://www.wwe.com/f/styles/wwe_1_1_540__composite/public/rd-talent/Profile/Stone_Cold_Steve_Austin_pro.png",
    description: "The Texas Rattle Snake",
    stamina: 100,
    health: 100,
    speed: 80,
    power: 85,
  },
  {
    name: "Trish Stratus",
    finishingMove: "Stratusfaction",
    imgUrl:
      "https://www.wwe.com/f/styles/wwe_1_1_540__composite/public/rd-talent/Profile/Trish_Stratus_pro.png",
    description: "Canada’s greatest export",
    stamina: 80,
    health: 80,
    speed: 85,
    power: 60,
  },
  {
    name: "Lita",
    finishingMove: "Moonsault",
    imgUrl:
      "https://www.wwe.com/f/styles/wwe_1_1_540__composite/public/rd-talent/Profile/Lita_pro.png",
    description: "Miss Congeniality",
    stamina: 80,
    health: 80,
    speed: 85,
    power: 60,
  },
  {
    name: "Sasha Banks",
    finishingMove: "Bank Statement",
    imgUrl:
      "https://www.wwe.com/f/styles/wwe_1_1_540__composite/public/all/2020/09/Sasha_Banks_Pro--ee558023ef6127e11fae6abcc424fa20.png",
    description: "The Boss",
    stamina: 80,
    health: 80,
    speed: 85,
    power: 60,
  },
];

db.Wrestlers.remove({})
  .then(() => db.Wrestlers.collection.insertMany(wseeds))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
