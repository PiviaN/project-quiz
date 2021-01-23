class Quiz {
  structures = [
    {
      pageTitle: "Quiz 1 - Gamer Testing",
      question: "Quais destes jogos são exclusivos do PS4? ",
      clickEvent: "handleLeftAnswer()",
      first: {
        elements: ["Until Dawn", "Bloodborne", "Horizon: Zero Dawn", "The Last of Us", "God of War"],
        correctRedirection: "redirect(correctPage)"
      },
      second: {
        elements: ["Dota 2", "CS: GO", "VRs Chat", "Undertale", "Portal 2"],
        incorrectRedirection: "redirect(incorrectPage)"
      },
      third: {
        elements: ["Black Desert", "Days Gone", "COD: Warzone", "NBA 2K21", "Cyberpunk 2077"],
        incorrectRedirection: "redirect(incorrectPage)"
      }
    },
    {
      pageTitle: "Quiz 2 - Gamer Testing",
      question: "Quais destes jogos são lançamentos exclusivos da Ubisoft?",
      clickEvent: "handleRightAnswer()",
      first: {
        elements: ["Just Dance 2021", "Série Tom Clancy's", "Ghost of Tsushima", "No Man's Sky", "Until Dawn"],
        incorrectRedirection: "redirect(incorrectPage)"
      },
      second: {
        elements: ["Minecraft", "Sea of Thieves", "Dead by Daylight", "Destiny 2", "Tell me Why"],
        incorrectRedirection: "redirect(incorrectPage)"
      },
      third: {
        elements: ["Watch Dogs 2", "Assassin's Creed", "Watch Dogs 2", "Far Cry 4", "The Crew 2"],
        correctRedirection: "redirect(correctPage)"
      }
    },
    {
      pageTitle: "Quiz 3 - Gamer Testing",
      question: "Escolha apenas os jogos premiados na Game Awards 2020.",
      clickEvent: "handleMidAnswer()",
      first: {
        elements: ["Demon's Souls", "Half-Life: Alyx", "Cyberpunk 2077", "Doom Eternal", "Marvel's Avengers"],
        incorrectRedirection: "redirect(incorrectPage)"
      },
      second: {
        elements: ["The Last Of Us 2", "Among Us", "LOL", "Phasmophobia", "Hades"],
        correctRedirection: "redirect(correctPage)"
      },
      third: {
        elements: ["Rocket Arena", "Valorant", "Dota 2", "Fortnite", "Apex Legends"],
        incorrrectRedirection: "redirect(incorrectPage)"
      }
    },
    {
      pageTitle: "Quiz 4 - Gamer Testing",
      question: "Escolha apenas os consoles de quarta geração (1993-1999).",
      clickEvent: "handleLeftAnswer()",
      first: {
        elements: ["Virtual Boy", "Nintendo 64", "PocketStation", "Atari Jaguar", "PlayStation 1"],
        correctRedirection: "redirect(correctPage)"
      },
      second: {
        elements: ["Super Game Boy", "Super Nintendo", "Mega Drive", "Sega Saturn", "Casio PV-1000"],
        incorrectRedirection: "redirect(incorrectPage)"
      },
      third: {
        elements: ["Atari 2600", "Neo-Geo", "Pokémon Mini", "Nintendo DS", "Master System"],
        incorrrectRedirection: "redirect(incorrectPage)"
      }
    },
    {
      pageTitle: "Quiz 5 - Gamer Testing",
      question: "Quais destes são os 5 consoles mais vendidos do mundo?",
      clickEvent: "handleLeftAnswer()",
      first: {
        elements: ["PlayStation 2", "Nintendo DS", "PlayStation 1", "Game Boy", "Nintendo Wii"],
        correctRedirection: "redirect(correctPage)"
      },
      second: {
        elements: ["Game Boy Advance", "Xbox One", "Nintendo Switch", "PlayStation 3", "PlayStation 4"],
        incorrectRedirection: "redirect(incorrectPage)"
      },
      third: {
        elements: ["Mega Drive", "Xbox 360", "PlayStation 5", "Mega Drive", "Nintendo 3DS"],
        incorrrectRedirection: "redirect(incorrectPage)"
      }
    },
    {
      pageTitle: "Quiz 6 - Gamer Testing",
      question: "Quais destes consoles foram feitos pela Nintendo?",
      clickEvent: "handleMidAnswer()",
      first: {
        elements: ["Nintendo Switch", "Nintendo 64", "Color TV-Game", "NES Classic", "Mega Drive"],
        incorrectRedirection: "redirect(incorrectPage)"
      },
      second: {
        elements: ["Game Boy", "Wii", "Super Nintendo", "GameCube", "Wii U"],
        correctRedirection: "redirect(correctPage)"
      },
      third: {
        elements: ["Nintendo 3DS", "Atari 5200", "Nintendo Wii", "PlayStation 2", "Sega Saturn"],
        incorrrectRedirection: "redirect(incorrectPage)"
      }
    },
    {
      pageTitle: "Quiz 7 - Gamer Testing",
      question: "Escolha os jogos de estilo MMORPG",
      clickEvent: "handleMidAnswer()",
      first: {
        elements: ["Black Desert", "League of Legends", "Aika Online", "The Witcher 3", "Dark Souls"],
        incorrectRedirection: "redirect(incorrectPage)"
      },
      second: {
        elements: ["World of Warcraft", "Ragnarok Online", "TERA", "Perfect World", "MU Legend"],
        correctRedirection: "redirect(correctPage)"
      },
      third: {
        elements: ["Undertale", "Skyrim", "Neverwinter", "Path of Exile", "Nier: Automata"],
        incorrrectRedirection: "redirect(incorrectPage)"
      }
    },
    {
      pageTitle: "Quiz 8 - Gamer Testing",
      question: "Quais destes jogos são MOBA?",
      clickEvent: "handleRightAnswer()",
      first: {
        elements: ["Battlerite", "Teamfight Tactics", "Vainglory", "League of Legends", "Left 4 Dead"],
        incorrectRedirection: "redirect(incorrectPage)"
      },
      second: {
        elements: ["Overwatch", "Warframe", "Team Fortress 2", "Payday 2", "Loadout"],
        incorrectRedirection: "redirect(incorrectPage)"
      },
      third: {
        elements: ["Dota 2", "Smite", "League of Legends", "Paladins", "Clash Royale"],
        corrrectRedirection: "redirect(correctPage)"
      }
    },
    {
      pageTitle: "Quiz 9 - Gamer Testing",
      question: "Quais destes contém 5 personagens da Saga GTA?",
      clickEvent: "handleMidAnswer()",
      first: {
        elements: ["Big Smoke", "Carl Johnson (CJ)", "Charles Smith", "Aloy", "Eddie Winter"],
        incorrectRedirection: "redirect(incorrectPage)"
      },
      second: {
        elements: ["Niko Bellic", "Trevor Phillips", "Franklin Clinton", "Tommy Vercetti", "Denise Robinson"],
        correctRedirection: "redirect(correctPage)"
      },
      third: {
        elements: ["Marcus Holloway", "Pagan Min", "Deacon Lee", "Brian Johnson", "Claude"],
        incorrrectRedirection: "redirect(incorrectPage)"
      }
    },
    {
      pageTitle: "Quiz 10 - Gamer Testing",
      question: "Quais destes contém 5 vilões da saga Resident Evil?",
      clickEvent: "handleRightAnswer()",
      first: {
        elements: ["Jack Baker", "Bloodshot", "Duvalia", "Hazmat", "The Spitter"],
        incorrectRedirection: "redirect(incorrectPage)"
      },
      second: {
        elements: ["Volatiles", "Kyle Crane", "The Boomer", "Lurkers", "Creepers"],
        incorrectRedirection: "redirect(incorrectPage)"
      },
      third: {
        elements: ["Del Lago", "Dr. Salvador", "El Gigante", "Mr. X", "Nemesis"],
        corrrectRedirection: "redirect(correctPage)"
      }
    }
  ]
  
  getEveryElement() {
    this.structures.forEach((element) => {
      console.log(element);
    })
  }
}
