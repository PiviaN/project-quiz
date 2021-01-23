export default class Quiz {
  structures = [
    {
      pageTitle: "Quiz 1 - Gamer Testing",
      question: "Quais destes jogos são exclusivos do PS4? ",
      first: {
        elements: ["Until Dawn", "Bloodborne", "Horizon: Zero Dawn", "The Last of Us", "God of War"]
      },
      second: {
        elements: ["Dota 2", "CS: GO", "VRs Chat", "Undertale", "Portal 2"]
      },
      third: {
        elements: ["Black Desert", "Days Gone", "COD: Warzone", "NBA 2K21", "Cyberpunk 2077"]
      }
    },
    {
      pageTitle: "Quiz 2 - Gamer Testing",
      question: "Quais destes jogos são lançamentos exclusivos da Ubisoft?",
      first: {
        elements: ["Just Dance 2021", "Série Tom Clancy's", "Ghost of Tsushima", "No Man's Sky", "Until Dawn"]
      },
      second: {
        elements: ["Minecraft", "Sea of Thieves", "Dead by Daylight", "Destiny 2", "Tell me Why"]
      },
      third: {
        elements: ["Watch Dogs 2", "Assassin's Creed", "Watch Dogs 2", "Far Cry 4", "The Crew 2"]
      }
    },
    {
      pageTitle: "Quiz 3 - Gamer Testing",
      question: "Escolha apenas os jogos premiados na Game Awards 2020.",
      first: {
        elements: ["Demon's Souls", "Half-Life: Alyx", "Cyberpunk 2077", "Doom Eternal", "Marvel's Avengers"]
      },
      second: {
        elements: ["The Last Of Us 2", "Among Us", "LOL", "Phasmophobia", "Hades"]
      },
      third: {
        elements: ["Rocket Arena", "Valorant", "Dota 2", "Fortnite", "Apex Legends"]
      }
    },
    {
      pageTitle: "Quiz 4 - Gamer Testing",
      question: "Escolha apenas os consoles de quarta geração (1993-1999).",
      first: {
        elements: ["Virtual Boy", "Nintendo 64", "PocketStation", "Atari Jaguar", "PlayStation 1"]
      },
      second: {
        elements: ["Super Game Boy", "Super Nintendo", "Mega Drive", "Sega Saturn", "Casio PV-1000"]
      },
      third: {
        elements: ["Atari 2600", "Neo-Geo", "Pokémon Mini", "Nintendo DS", "Master System"]
      }
    },
    {
      pageTitle: "Quiz 5 - Gamer Testing",
      question: "Quais destes são os 5 consoles mais vendidos do mundo?",
      first: {
        elements: ["PlayStation 2", "Nintendo DS", "PlayStation 1", "Game Boy", "Nintendo Wii"]
      },
      second: {
        elements: ["Game Boy Advance", "Xbox One", "Nintendo Switch", "PlayStation 3", "PlayStation 4"]
      },
      third: {
        elements: ["Mega Drive", "Xbox 360", "PlayStation 5", "Mega Drive", "Nintendo 3DS"]
      }
    },
    {
      pageTitle: "Quiz 6 - Gamer Testing",
      question: "Quais destes consoles foram feitos pela Nintendo?",
      first: {
        elements: ["Nintendo Switch", "Nintendo 64", "Color TV-Game", "NES Classic", "Mega Drive"],
      },
      second: {
        elements: ["Game Boy", "Wii", "Super Nintendo", "GameCube", "Wii U"]
      },
      third: {
        elements: ["Nintendo 3DS", "Atari 5200", "Nintendo Wii", "PlayStation 2", "Sega Saturn"]
      }
    },
    {
      pageTitle: "Quiz 7 - Gamer Testing",
      question: "Escolha os jogos de estilo MMORPG",
      first: {
        elements: ["Black Desert", "League of Legends", "Aika Online", "The Witcher 3", "Dark Souls"],
      },
      second: {
        elements: ["World of Warcraft", "Ragnarok Online", "TERA", "Perfect World", "MU Legend"]
      },
      third: {
        elements: ["Undertale", "Skyrim", "Neverwinter", "Path of Exile", "Nier: Automata"]
      }
    },
    {
      pageTitle: "Quiz 8 - Gamer Testing",
      question: "Quais destes jogos são MOBA?",
      first: {
        elements: ["Battlerite", "Teamfight Tactics", "Vainglory", "League of Legends", "Left 4 Dead"],
      },
      second: {
        elements: ["Overwatch", "Warframe", "Team Fortress 2", "Payday 2", "Loadout"],
      },
      third: {
        elements: ["Dota 2", "Smite", "League of Legends", "Paladins", "Clash Royale"]
      }
    },
    {
      pageTitle: "Quiz 9 - Gamer Testing",
      question: "Quais destes contém 5 personagens da Saga GTA?",
      first: {
        elements: ["Big Smoke", "Carl Johnson (CJ)", "Charles Smith", "Aloy", "Eddie Winter"],
      },
      second: {
        elements: ["Niko Bellic", "Trevor Phillips", "Franklin Clinton", "Tommy Vercetti", "Denise Robinson"]
      },
      third: {
        elements: ["Marcus Holloway", "Pagan Min", "Deacon Lee", "Brian Johnson", "Claude"]
      }
    },
    {
      pageTitle: "Quiz 10 - Gamer Testing",
      question: "Quais destes contém 5 vilões da saga Resident Evil?",
      first: {
        elements: ["Jack Baker", "Bloodshot", "Duvalia", "Hazmat", "The Spitter"],
      },
      second: {
        elements: ["Volatiles", "Kyle Crane", "The Boomer", "Lurkers", "Creepers"],
      },
      third: {
        elements: ["Del Lago", "Dr. Salvador", "El Gigante", "Mr. X", "Nemesis"]
      }
    }
  ]

  loadPageStructure(page) {
    const pageInfo = this.structures[page - 1]
    console.log(pageInfo)

    // Setting page title
    document.title = pageInfo.pageTitle

    // Setting quiz question
    let questionEl = document.querySelector(".question")
    questionEl.innerHTML = pageInfo.question
  }
}