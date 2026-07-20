import type { POI } from "./types";

// Austria '26 — the sights, in trip order. Coords are [lat, lon].
// "north" = Inn valley + Innsbruck side + Achensee; "south" = the east
// side (Zillertal, Alpbachtal, Söll, Kufstein, Rattenberg); "transit"
// = the Munich Airport bookends. Toddler lens throughout — Gili is 3,
// Tom is 1.5.
export const attractions: POI[] = [
  {
    id: "achensee",
    name: "Achensee",
    category: "attraction",
    region: "north",
    description:
      "Tyrol's largest lake, a five-kilometre ribbon of turquoise held between the Karwendel and Rofan walls — locals call it 'the Tyrolean fjord.' The Pertisau shore on the west side is the family end: a gentle grassy lido (Strandbad), shallow water that warms up in August, a lakeside playground, and the Achensee steamers that putter across from the same dock. No climbing required — just a beach day at 930 m with mountains for a backdrop.",
    shortDescription: "Tyrol's 'fjord' — a turquoise lake with a family beach at Pertisau.",
    image: "./images/achensee.jpg",
    website: "https://www.achensee.com/en/",
    address: "Strandbad Pertisau, 6213 Pertisau, Austria",
    coords: [47.4392, 11.7086],
    tags: ["water", "nature", "family", "view"],
    difficulty: "easy",
    openingNote:
      "Strandbad open in summer; the Achensee steamers run daily May–Oct — check the day's sailing times at the Pertisau dock.",
    tips: [
      "Park at the Strandbad Pertisau lot; the beach, playground and boat dock are all a short flat walk apart.",
      "Water is snow-fed but the shallow Pertisau bay is the warmest corner — still bracing, bring a towel.",
      "The boat ride is short and stroller-friendly; sit on the sunny side for the Karwendel views.",
      "Shade is limited on the grass lido — claim a spot under a tree early and bring sun hats."
    ],
    quizFacts: [
      {
        question: "What nickname do locals give Achensee because of its long, deep shape between the mountains?",
        correctAnswer: "The Tyrolean fjord",
        distractors: ["The Tyrolean sea", "The blue mirror", "The giant's bathtub"]
      }
    ]
  },
  {
    id: "swarovski-kristallwelten",
    name: "Swarovski Kristallwelten",
    category: "attraction",
    region: "north",
    description:
      "A crystal wonderland built into a grassy hillside in Wattens, guarded by the Giant — a moss-covered face in the hill with water pouring from its mouth and glittering eyes. Inside are the Chambers of Wonder (mirror rooms, a crystal dome, art installations that delight small kids as much as adults); outside is one of Austria's best playgrounds — a four-storey play tower, a slide, and a crystal cloud you can walk under. Easily the most toddler-friendly 'museum' of the trip.",
    shortDescription: "The Giant's crystal chambers plus a huge outdoor play tower.",
    image: "./images/swarovski-kristallwelten.jpg",
    website: "https://kristallwelten.swarovski.com/en",
    address: "Kristallweltenstraße 1, 6112 Wattens, Austria",
    coords: [47.2988, 11.6003],
    tags: ["culture", "family", "view"],
    difficulty: "easy",
    bookingNote:
      "Not booked yet — pre-book a timed entry slot online; summer days sell out, especially mid-morning.",
    openingNote: "Open daily, generally 09:00–19:00 in summer (last entry earlier).",
    tips: [
      "Do the indoor Chambers of Wonder first while the kids are fresh, then let them loose in the outdoor playground.",
      "The play tower has age zones — Gili is fine in the lower levels; keep Tom to the toddler area.",
      "Strollers are fine on the outdoor paths; there's a garden restaurant for lunch.",
      "Allow 2.5–3 hours to enjoy both worlds without rushing."
    ],
    quizFacts: [
      {
        question: "What is the giant guarding the entrance to Swarovski Kristallwelten doing with the water?",
        correctAnswer: "A waterfall pours out of his mouth",
        distractors: ["He blows bubbles from his nose", "He cries crystal tears", "He sprays it from his hands"]
      }
    ]
  },
  {
    id: "hall-in-tirol",
    name: "Hall in Tirol",
    category: "attraction",
    region: "north",
    description:
      "A medieval salt town on the Inn with one of the largest preserved old towns in the western Alps — a tangle of pastel houses, arched lanes and quiet squares climbing to the Stadtturm and the Mint tower. Once richer than Innsbruck thanks to salt and its coin mint, it's now a calm, uncommercial place to wander after Swarovski. Car-free lanes mean the stroller rolls and the kids can toddle.",
    shortDescription: "A calm, car-free medieval salt-and-mint town on the Inn.",
    image: "./images/hall-in-tirol.jpg",
    website: "https://www.hall-wattens.at/en",
    address: "Oberer Stadtplatz, 6060 Hall in Tirol, Austria",
    coords: [47.2814, 11.5106],
    tags: ["culture", "village", "food"],
    difficulty: "easy",
    tips: [
      "Park in one of the garages below the old town (the lanes are pedestrian) and walk up.",
      "The upper Stadtplatz has cafés with terraces — good for a relaxed lunch with a stroller.",
      "Cobbles are uneven; a stroller works but a carrier is smoother for the steep bits.",
      "Half a day is plenty — pair it with Swarovski for a full but gentle day."
    ]
  },
  {
    id: "spieljoch-fuegen",
    name: "Spieljoch Fügen",
    category: "attraction",
    region: "south",
    description:
      "The family mountain at the mouth of the Zillertal. A gondola from Fügen lifts you to about 1,860 m, where the summit plateau has a big adventure playground, easy stroller-friendly paths, marmots in the meadows, and huge views down the valley. There's a summer toboggan run for older kids and plenty of hut terraces for a leisurely lunch. The mountain does the climbing so the family doesn't have to.",
    shortDescription: "A gondola to a 1,860 m summit playground with easy meadow paths.",
    image: "./images/spieljoch-fuegen.jpg",
    website: "https://www.spieljochbahn.at/",
    address: "Bahnweg 2, 6263 Fügen, Austria",
    coords: [47.3636, 11.8497],
    tags: ["nature", "family", "view"],
    difficulty: "easy",
    openingNote:
      "Gondola runs daily in summer, roughly 08:30–17:00 — check the day's first-up / last-down times at the valley station.",
    tips: [
      "Ride the gondola early; mountain weather in August turns to thunderstorms by mid-afternoon.",
      "The summit playground and the shortest meadow loop are stroller-manageable; bring the carrier for anything further.",
      "Warm layer + rain shell for the top even on a hot valley day — it's 900 m higher and windier.",
      "Lunch on a hut terrace is half the point — the Kaiserschmarrn up here is a reward in itself."
    ],
    quizFacts: [
      {
        question: "Which whistling animal lives in the mountain meadows around the Spieljoch summit?",
        correctAnswer: "The marmot",
        distractors: ["The penguin", "The kangaroo", "The camel"]
      }
    ]
  },
  {
    id: "zillertalbahn",
    name: "Zillertalbahn Steam Train",
    category: "attraction",
    region: "south",
    description:
      "A narrow-gauge railway that has puffed up and down the Zillertal since 1902, with genuine steam locomotives hauling old wooden carriages on select summer days. For a toddler obsessed with 'choo-choo,' the hiss and whistle of a real steam engine is pure magic; for parents it's a slow, scenic, no-driving hour through valley villages and hay meadows. Regular diesel trains run the same line all day if the steam timetable doesn't fit.",
    shortDescription: "A real 1900s steam train chugging through the Zillertal.",
    image: "./images/zillertalbahn.jpg",
    website: "https://www.zillertalbahn.at/en",
    address: "Bahnhofstraße 8, 6200 Jenbach, Austria",
    coords: [47.3879, 11.7784],
    tags: ["family", "culture", "view"],
    difficulty: "easy",
    bookingNote:
      "Steam departures run on limited days and sell out — check the summer steam timetable and reserve; regular trains need no booking.",
    tips: [
      "Jenbach is the northern terminus and easiest to park at; you can ride a leg and come back.",
      "Even a short one- or two-stop hop is enough of an event for little kids.",
      "The steam service is seasonal and dated — confirm it actually runs your day before planning around it.",
      "Bring a snack; the wooden carriages are charming but not built for toddler patience beyond ~40 min."
    ]
  },
  {
    id: "innsbruck-altstadt",
    name: "Innsbruck Old Town & Golden Roof",
    category: "attraction",
    region: "north",
    description:
      "Tyrol's capital wears its Alps like a crown — the Nordkette wall of rock rises straight off the end of the pastel old-town lanes. The centrepiece is the Goldenes Dachl, a late-Gothic balcony roofed with 2,657 gilded copper tiles, built so Emperor Maximilian could watch the square below. Car-free Herzog-Friedrich-Straße and Maria-Theresien-Straße are all cafés, gelato and stroller-smooth cobbles.",
    shortDescription: "Pastel car-free lanes under the Nordkette, capped by the Golden Roof.",
    image: "./images/innsbruck-altstadt.jpg",
    website: "https://www.innsbruck.info/en",
    address: "Herzog-Friedrich-Straße 15, 6020 Innsbruck, Austria",
    coords: [47.2686, 11.3933],
    tags: ["culture", "family", "food", "view"],
    difficulty: "easy",
    tips: [
      "Park once at the Congress / Hungerburgbahn garage and do the old town, the zoo and the Nordkette from there.",
      "The lanes are pedestrian and flat — ideal stroller territory, plenty of gelato stops for Gili.",
      "On Assumption Day (Aug 15) shops shut but cafés, restaurants and the lifts run.",
      "Two minutes' walk from the Golden Roof gets you river views of the Inn with the mountains behind."
    ],
    quizFacts: [
      {
        question: "The Golden Roof is covered in 2,657 shiny tiles. What are they really made of?",
        correctAnswer: "Gilded (gold-plated) copper",
        distractors: ["Solid gold", "Painted wood", "Yellow glass"]
      }
    ]
  },
  {
    id: "alpenzoo-innsbruck",
    name: "Alpenzoo Innsbruck",
    category: "attraction",
    region: "north",
    description:
      "Europe's highest-altitude zoo, set on a hillside above Innsbruck and stocked entirely with animals of the Alps: ibex and chamois, brown bears, wolves, lynx, otters, bearded vultures, and a cold-water aquarium of Alpine fish. Around 2,000 animals across 150 species, on a compact but hilly site. Open 365 days a year — which is exactly why it works on Assumption Day when much of the city is shut.",
    shortDescription: "Europe's highest zoo — bears, wolves, ibex and otters above Innsbruck.",
    image: "./images/alpenzoo-innsbruck.jpg",
    website: "https://www.alpenzoo.at/en/",
    address: "Weiherburggasse 37, 6020 Innsbruck, Austria",
    coords: [47.2831, 11.3901],
    tags: ["nature", "family"],
    difficulty: "moderate",
    openingNote: "Open daily 09:00–18:00 in summer, public holidays included.",
    tips: [
      "Ride the Hungerburgbahn funicular one stop from the Congress station up to the zoo — the space-age stations thrill little kids.",
      "The site is on a hill — bring the carrier for Tom; a stroller works but there are slopes.",
      "Go at opening: animals are most active in the morning cool and it beats the holiday crowds.",
      "Allow about two hours; there's a small café and picnic spots inside."
    ],
    quizFacts: [
      {
        question: "What is special about the Alpenzoo compared with other zoos in Europe?",
        correctAnswer: "It is the highest zoo in Europe and only keeps Alpine animals",
        distractors: ["It has the most lions", "It is entirely underwater", "It only opens at night"]
      }
    ]
  },
  {
    id: "nordkette",
    name: "Nordkette (Seegrube)",
    category: "attraction",
    region: "north",
    description:
      "The mountain wall that towers over Innsbruck, reachable in minutes: the Hungerburgbahn funicular then the Nordkettenbahn cable car lift you to Seegrube at 1,905 m, straight from the city centre. Up top it's coffee-with-a-view height — a hut terrace, easy strolls along the ridge, and the whole Inn valley laid out below. A quick 'top of the world' hit for a family, entirely optional and skippable when nap o'clock calls.",
    shortDescription: "City-centre cable car to a 1,905 m terrace over Innsbruck.",
    image: "./images/nordkette.jpg",
    website: "https://www.nordkette.com/en",
    address: "Höhenstraße 145, 6020 Innsbruck, Austria",
    coords: [47.3078, 11.3841],
    tags: ["view", "nature", "family"],
    difficulty: "easy",
    openingNote:
      "Funicular + cable cars run daily including holidays — check the last descent time at the station before going up.",
    tips: [
      "It's genuinely cold and windy at Seegrube even in August — proper jackets for everyone.",
      "The Seegrube terrace is a short walk from the top station; going higher to Hafelekar needs more effort.",
      "Only add this if the kids still have energy after the zoo and old town — it's the day's garnish, not the main course.",
      "Last cable car down is early evening; don't get caught planning dinner up there with tired toddlers."
    ]
  },
  {
    id: "alpbach-village",
    name: "Alpbach",
    category: "attraction",
    region: "south",
    description:
      "Repeatedly crowned Austria's most beautiful village — a cluster of dark-timber farmhouses on a sunny shelf above the valley, every balcony spilling red geraniums in August. There's nothing to 'do' in the ticketed sense, which is the point: you wander the flower-decked lanes, let the kids run the meadow playground by the school, and have a long lunch on a gasthof terrace. This is where the trip's framed photo gets taken.",
    shortDescription: "Austria's prettiest village — geranium balconies and a meadow playground.",
    image: "./images/alpbach-village.jpg",
    website: "https://www.alpbachtal.at/en/village/alpbach",
    address: "Alpbach 415, 6236 Alpbach, Austria",
    coords: [47.3990, 11.9430],
    tags: ["village", "view", "food", "family"],
    difficulty: "easy",
    tips: [
      "There's a playground by the school in the village centre — a good reward mid-wander.",
      "Lunch on a terrace; portions are big and kids are welcome everywhere.",
      "Only 15–20 min from the base — an easy morning or afternoon, no rush.",
      "The light is best late afternoon when the timber glows — good for photos if naps allow."
    ],
    quizFacts: [
      {
        question: "Alpbach is famous for winning which title?",
        correctAnswer: "The most beautiful village in Austria",
        distractors: ["The biggest city in Austria", "The tallest mountain in Austria", "The oldest castle in Austria"]
      }
    ]
  },
  {
    id: "juppi-zauberwald",
    name: "Juppi's Zauberwald (Reither Kogel)",
    category: "attraction",
    region: "south",
    description:
      "An enchanted-forest play trail on top of the Reither Kogel, reached by the Reitherkogelbahn gondola from Reith im Alpbachtal. A 2.5 km shaded loop is dotted with wooden play stations built around Juppi the mascot — a witch's house, giant xylophones, balance trails, water wheels and animal carvings — pitched exactly at a three-year-old's pace. Entry is included in the lift ticket. Take it slowly with snack stops and it fills a whole gentle morning.",
    shortDescription: "A gondola-top enchanted-forest play loop, perfect for a 3-year-old.",
    image: "./images/juppi-zauberwald.jpg",
    website: "https://www.alpbachtal.at/en/reitherkogelbahn",
    address: "Talstation Reitherkogelbahn, 6235 Reith im Alpbachtal, Austria",
    coords: [47.4356, 11.8748],
    tags: ["family", "nature", "view"],
    difficulty: "easy",
    openingNote:
      "Reitherkogelbahn runs daily except its Wednesday rest day; first ascent ~09:00, last descent ~16:30–17:00 — verify at the valley station.",
    tips: [
      "Note the Wednesday closure — plan the enchanted forest for any other day.",
      "The loop is shaded (good on a hot day) but has forest-path sections — carrier for Tom, Gili walks.",
      "Lift ticket covers the trail; there's a hut at the top for lunch.",
      "Budget the whole morning — with a toddler the 2.5 km loop plus play stops is a leisurely 2–3 hours."
    ]
  },
  {
    id: "lauser-sauser",
    name: "Lauser-Sauser Alpine Coaster",
    category: "attraction",
    region: "south",
    description:
      "A year-round rail toboggan at the Wiedersbergerhorn gondola in Alpbach: 1.4 km of track dropping 134 m, including what's billed as Austria's highest loop-carousel, with a hand brake so you control the speed. Children may ride as a front passenger with an adult from age 3, so Gili qualifies squealing with a parent; solo riding starts at age 8 and 1.30 m. Tom is too small, so parents take turns — one rides with Gili, the other has a coffee at the valley station.",
    shortDescription: "A brake-your-own alpine coaster; Gili rides in front of a parent (age 3+).",
    image: "./images/lauser-sauser.jpg",
    website: "https://www.alpbachtal.at/en/wiedersbergerhornbahn",
    address: "Talstation Wiedersbergerhornbahn, 6236 Alpbach, Austria",
    coords: [47.3930, 11.9250],
    tags: ["extreme", "family", "view"],
    difficulty: "moderate",
    openingNote:
      "Runs in summer with the Wiedersbergerhornbahn gondola — check the day's operating hours at the base before riding up.",
    tips: [
      "Age rule: from 3, a child rides in front of an adult; from 8 and 1.30 m they ride alone. Tom can't ride.",
      "Closed shoes and a hair tie for Gili — it gets quick on the second run.",
      "Control the speed with the brake lever; take the first run gentle, then let her ask for 'schneller!'.",
      "Plan for parents to alternate so one is always with Tom at the valley station."
    ]
  },
  {
    id: "hexenwasser-soell",
    name: "Hexenwasser Söll",
    category: "attraction",
    region: "south",
    description:
      "A 'witch's water' adventure world on the Hohe Salve above Söll, built entirely around water and bare feet: barefoot trails through mud and streams, water channels and dams to build, mills, a giant's chair, beehives, and dozens of hands-on stations spread across the mountainside. Reached by the Söll gondola, it's the single most three-year-old-perfect place on the whole trip — the kind of day where kids come home soaked, filthy and blissed out.",
    shortDescription: "A barefoot 'witch's water' park of streams, dams and mud — toddler heaven.",
    image: "./images/hexenwasser-soell.jpg",
    website: "https://www.hexenwasser.at/en/",
    address: "Hochsöll, 6306 Söll, Austria",
    coords: [47.4880, 12.2010],
    tags: ["water", "nature", "family"],
    difficulty: "easy",
    openingNote:
      "Open through the summer season; reached via the Söll gondola — check the day's gondola and park hours.",
    tips: [
      "Full change of clothes for both kids plus a towel — they WILL get soaked and muddy.",
      "Barefoot is the whole idea; bring water sandals for the rockier stretches.",
      "It's a mountain — sun cream and a warm layer for when clouds roll in; storms build by afternoon.",
      "Go in the morning and plan a long stay; this is a full anchor day, not a quick stop."
    ],
    quizFacts: [
      {
        question: "At the Hexenwasser, how are you meant to explore the water trails?",
        correctAnswer: "Barefoot",
        distractors: ["In ski boots", "In a boat", "Wearing gloves"]
      }
    ]
  },
  {
    id: "kufstein-festung",
    name: "Kufstein Fortress",
    category: "attraction",
    region: "south",
    description:
      "A mighty medieval fortress on a rock over the Inn, guarding the old border with Bavaria. Inside are ramparts to explore, a deep well, museum rooms, and the Heldenorgel — the 'Heroes' Organ,' one of the world's largest open-air organs, whose booming daily noon recital carries across the whole town. A cliff lift (the Kaiserlift/Panoramabahn) or a walk up the ramp gets you inside; from the walls the views run up and down the valley.",
    shortDescription: "A clifftop fortress with a giant open-air organ that booms at noon.",
    image: "./images/kufstein-festung.jpg",
    website: "https://www.festung.kufstein.at/en/",
    address: "Festung 2, 6330 Kufstein, Austria",
    coords: [47.5836, 12.1735],
    tags: ["culture", "view", "family"],
    difficulty: "moderate",
    openingNote:
      "The Heldenorgel plays daily at 12:00 (and often a second time in season). Fortress open daily in summer — check hours.",
    tips: [
      "Take the inclined fortress lift up rather than the steep ramp with a stroller and toddlers.",
      "Time your visit around the 12:00 organ recital — you can hear it from the old town too.",
      "Inside there are cobbles, steps and ramparts — carrier for Tom is easier than a stroller.",
      "Pair with a wander through Kufstein's riverside old town for lunch."
    ],
    quizFacts: [
      {
        question: "Every day at noon, what famous thing happens at Kufstein Fortress?",
        correctAnswer: "A giant open-air organ plays and can be heard across the town",
        distractors: ["A cannon fires into the river", "Knights have a sword fight", "The drawbridge falls down"]
      }
    ]
  },
  {
    id: "riedel-glass",
    name: "Riedel Glass (Kufstein)",
    category: "attraction",
    region: "south",
    description:
      "The Kufstein home of Riedel, the Tyrolean family firm that has made fine wine glasses for 11 generations. On weekday factory tours you watch glassblowers gather molten glass on the blowpipe and shape stemware by hand — a mesmerising, fiery bit of theatre for kids and adults alike — with a shop and café attached. A short, optional add-on to the Kufstein fortress day rather than a full outing on its own.",
    shortDescription: "Watch Tyrolean glassblowers shape wine glasses by hand.",
    image: "./images/riedel-glass.jpg",
    website: "https://www.riedel.com/",
    address: "Weißachstraße 28, 6330 Kufstein, Austria",
    coords: [47.5790, 12.1590],
    tags: ["culture", "family"],
    difficulty: "easy",
    openingNote:
      "Glassblowing tours are weekday-only and closed Sundays/holidays — check the day's tour times before driving over.",
    tips: [
      "It's an add-on to the Kufstein day, not a standalone trip — keep it short with little kids.",
      "The molten-glass demonstration is the highlight; the shop is fragile-toddler territory, hold hands.",
      "Confirm the tour schedule the morning of — times are limited.",
      "Skip if the fortress and old town already filled the day; toddlers tire."
    ]
  },
  {
    id: "rattenberg",
    name: "Rattenberg",
    category: "attraction",
    region: "south",
    description:
      "Austria's smallest town, squeezed onto a sliver between the Inn and a steep hill that keeps it in shadow half the winter — which is precisely why it became a glassmaking town, its workshops needing artificial light. Today the tiny medieval centre is a warren of glass studios and shops where you can watch cutters and blowers at work, all walkable in under an hour. A charming, low-effort morning before an afternoon by the lake.",
    shortDescription: "Austria's smallest town — a medieval warren of glassmakers' studios.",
    image: "./images/rattenberg.jpg",
    website: "https://www.alpbachtal.at/en/village/rattenberg",
    address: "Südtiroler Straße, 6240 Rattenberg, Austria",
    coords: [47.4443, 11.8928],
    tags: ["culture", "village", "family"],
    difficulty: "easy",
    tips: [
      "Park just outside the centre and walk in — the whole town is a few pedestrian lanes.",
      "Watch a glassblowing/cutting demo in one of the studios; kids are welcome to look.",
      "It's genuinely small — an hour or two, ideal paired with the Reintalersee swim afterward.",
      "Cobbles again — carrier over stroller for the smoothest visit."
    ],
    quizFacts: [
      {
        question: "Rattenberg is famous for being what?",
        correctAnswer: "The smallest town in Austria",
        distractors: ["The tallest town in Austria", "The oldest town in the world", "The only town with no roads"]
      }
    ]
  },
  {
    id: "munich-airport",
    name: "Munich Airport (MUC)",
    category: "airport",
    region: "transit",
    description:
      "The trip's arrival and departure point in Bavaria, about 90 minutes' drive north of the Tyrolean base. Landing here on Aug 11 at 18:50 ( El Al LY351), the Sixt SUV is collected at 19:30 from the Airport Center for an evening drive into the Alps; on Aug 20 the car returns to Terminalstr. Mitte / Parkhaus P6 by 13:00 ahead of the 16:30 flight home (LY254).",
    shortDescription: "Arrival & departure airport, ~90 min from the base — Sixt pickup and return.",
    image: "./images/munich-airport.jpg",
    website: "https://www.munich-airport.com/",
    address: "Nordallee 25, 85356 München, Germany",
    coords: [48.3538, 11.7861],
    tags: [],
    difficulty: "easy",
    tips: [
      "No German motorway vignette is needed to drive from MUC to Tyrol, but you need an Austrian one the moment you cross the border.",
      "Sixt pickup is at the Airport Center; return is at Terminalstr. Mitte / Parkhaus P6 — different spot, allow time to find it.",
      "Fuel up just before the airport on return day; Sixt expects the tank full.",
      "Build in a buffer on Aug 20: car back by 13:00, then check-in and security for the 16:30 flight."
    ]
  }
];

export const getAttraction = (id: string) => attractions.find(a => a.id === id);
