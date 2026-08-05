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
    addedBy: "hila",
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
      "Allow 2.5–3 hours to enjoy both worlds without rushing.",
      "Hila's verdict: genuinely impressive, and the one place she'd save for a rainy day — most of the wow is indoors."
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
    addedBy: "hila",
    name: "Spieljoch Fügen",
    category: "attraction",
    region: "south",
    description:
      "The family mountain at the mouth of the Zillertal. A gondola from Fügen lifts you to about 1,860 m, where the summit plateau has a big adventure playground, easy stroller-friendly paths, marmots in the meadows, and huge views down the valley. There's a summer toboggan run for older kids and plenty of hut terraces for a leisurely lunch. Hila has been up here with the kids and rates it a proper hit — the summit playground is stuffed with things to climb, water-play pools, trampolines and little boats for children to push around, all with the valley falling away behind them. The mountain does the climbing so the family doesn't have to.",
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
      "Lunch on a hut terrace is half the point — the Kaiserschmarrn up here is a reward in itself.",
      "Hila's tip: bring swim nappies and a change of clothes — the water-play pools at the top are where the kids actually end up."
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
    addedBy: "hila",
    name: "Lauser-Sauser Alpine Coaster",
    category: "attraction",
    region: "south",
    description:
      "A year-round rail toboggan at the Wiedersbergerhorn gondola in Alpbach: 1.4 km of track dropping 134 m, including what's billed as Austria's highest loop-carousel, with a hand brake so you control the speed. Children may ride as a front passenger with an adult from age 3, so Gili qualifies squealing with a parent; solo riding starts at age 8 and 1.30 m. Tom is too small, so parents take turns — one rides with Gili, the other has a coffee at the valley station. The same site is Hila's 'Lauserland' pin: a woodland play and ropes world spread around the gondola, which she flagged with a plain caution — go and look first, and check it really suits kids this small before committing the day to it.",
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
      "Plan for parents to alternate so one is always with Tom at the valley station.",
      "Hila's caution on the Lauserland play world here: check on the spot that it genuinely suits a 3-year-old and a 1.5-year-old — some of it is pitched at bigger kids."
    ]
  },
  {
    id: "hexenwasser-soell",
    addedBy: "hila",
    name: "Hexenwasser Söll",
    category: "attraction",
    region: "south",
    description:
      "A 'witch's water' adventure world on the Hohe Salve above Söll, built entirely around water and bare feet: barefoot trails through mud and streams, water channels and dams to build, mills, a giant's chair, beehives, and dozens of hands-on stations spread across the mountainside. Reached by the Söll gondola, it's the single most three-year-old-perfect place on the whole trip — the kind of day where kids come home soaked, filthy and blissed out. Hila can vouch for it: her kids planted themselves in the water channels and refused to move on, so most of the mountain's other stations went unseen. Lunch is at the restaurant on site, where even the children's pasta arrives shaped like little witches.",
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
      "Go in the morning and plan a long stay; this is a full anchor day, not a quick stop.",
      "Hila's experience: don't build a tight plan around 'seeing it all' — the kids will pick one water station and stay there happily for hours."
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
    id: "waldspielplatz-fuegenberg",
    addedBy: "hila",
    name: "Waldspielplatz Fügenberg",
    category: "attraction",
    region: "south",
    description:
      "The forest playground ten minutes above our own front door, and Hila's easiest win on the whole list. A natural-wood play area tucked into the trees on Fügenberg: plenty to climb, swings including a toddler seat, a wobble bridge, a sand pit, and best of all a small stream running right through it for damming, splashing and general muddy business. Short, gentle forest theme trails lead off from the same clearing, so you can loop as far as the kids feel like walking and then come back to the swings. Free, unstaffed and open whenever you turn up.",
    shortDescription: "A free forest playground with a stream running through it, 10 min above Fügen.",
    image: "./images/waldspielplatz-fuegenberg.jpg",
    address: "Fügenberg 20a, 6264 Fügenberg, Austria",
    coords: [47.3458, 11.8416],
    tags: ["family", "nature", "water"],
    difficulty: "easy",
    openingNote:
      "A public forest playground — no gate, no ticket, no hours. Nothing to check before setting off.",
    tips: [
      "≈10 min drive from Fügen up the narrow Fügenberg mountain road; park at the Marienberg pilgrimage church and walk up the forest path.",
      "The stream is the main event — bring a change of clothes and shoes that can get wet.",
      "Stroller-manageable to the playground itself; the theme trails are forest paths, so carrier for Tom.",
      "Shade is patchy in places — hats and sun cream even though it's 'in the woods'.",
      "The perfect no-plan fallback for a late afternoon or a day when nobody wants to get in the car."
    ]
  },
  {
    id: "spielplatz-achensee",
    addedBy: "hila",
    name: "Spielplatz & Beach at Achensee North",
    category: "attraction",
    region: "north",
    description:
      "The far, quiet end of Achensee, and the payoff at the end of Hila's favourite Achensee day. She cycled the lakeside path with the family — Yuval on an e-bike doing the climbing, both kids in a towed child trailer — stopping to feed ducks, picnic and just look at the water, then rolled into the beach at the north end. There you get a groomed lawn beach on the lake, a proper adventure and water playground with channels and things to pump and splash, and somewhere to eat. Free to walk in, mountains on every side.",
    shortDescription: "Lawn beach plus a water playground at the quiet north end of Achensee.",
    image: "./images/spielplatz-achensee.jpg",
    website: "https://www.achensee.com/en/",
    address: "Badestrand Achensee Nord, 6215 Achenkirch am Achensee, Austria",
    coords: [47.5000, 11.7064],
    tags: ["water", "family", "nature", "view"],
    difficulty: "easy",
    openingNote:
      "The beach and playground are free and open through the bathing season; parking is paid. Nothing needs booking.",
    tips: [
      "≈45 min from Fügen — down the valley to Jenbach, up the steep Achensee road, then along the lake's east shore to Achenkirch.",
      "Hila's version: rent a bike plus a child trailer and an e-bike for the hills, and ride the lakeside path — the hard bit is the wind, not the gradient.",
      "The lakeside path does NOT loop the whole lake — the west shore between Pertisau and Achenkirch has no road, so it's an out-and-back.",
      "Bring a picnic and duck-friendly snacks; the ducks are half the entertainment for a 1.5-year-old.",
      "Swim nappies and towels — the water is snow-fed but the shallow shoreline warms up in August."
    ]
  },
  {
    id: "triassic-park",
    addedBy: "hila",
    name: "Triassic Park (Steinplatte)",
    category: "attraction",
    region: "south",
    description:
      "A dinosaur world on a mountain top. A gondola from Waidring lifts you onto the Steinplatte at around 1,870 m — a plateau that really was a tropical coral reef in the Triassic, which is why it's littered with fossils and now with life-size dinosaur models too. Hila found exactly the mix that works with small kids: play equipment, water-play areas, a small indoor museum, easy walking trails and a spectacular viewing platform, with dinosaurs lurking around every corner. Admission to the park is included once you've paid for the gondola.",
    shortDescription: "Life-size dinosaurs, water play and a huge view on a 1,870 m plateau.",
    image: "./images/triassic-park.jpg",
    website: "https://www.steinplatte.tirol/",
    address: "Talstation Steinplatte, Alpegg 10, 6384 Waidring, Austria",
    coords: [47.5873, 12.5649],
    tags: ["family", "nature", "view", "culture", "water"],
    difficulty: "easy",
    openingNote:
      "Open through the summer season, daily, with the gondola — check the day's first-up and last-down times at the valley station before driving over.",
    tips: [
      "Long drive: ≈1 h 15–1 h 30 from Fügen (Jenbach, A12 east to Wörgl, then the B178 past Söll and St. Johann). Treat it as a whole-day trip, not an afternoon.",
      "The pin is the valley station at Waidring — the park itself is up at the mountain station, so the gondola isn't optional.",
      "Main paths up top are described as stroller- and wheelchair-friendly, but it's still an alpine plateau — expect gravel and gradient.",
      "It's 1,870 m: warm layer and rain shell even on a hot valley day, and go early before afternoon storms build.",
      "Bring a change of clothes for the water-play area — it's the bit Gili won't want to leave."
    ],
    quizFacts: [
      {
        question: "Millions of years ago, when dinosaurs lived, what was the Steinplatte mountain at Triassic Park?",
        correctAnswer: "A warm tropical coral reef under the sea",
        distractors: ["A frozen ice sheet", "A giant volcano", "A sandy desert"]
      },
      {
        question: "What can you find hidden in the rocks all over the Steinplatte?",
        correctAnswer: "Fossils of ancient sea creatures",
        distractors: ["Gold coins", "Dinosaur eggs that still hatch", "Diamonds"]
      }
    ]
  },
  {
    id: "hintersteiner-see",
    addedBy: "hila",
    name: "Hintersteiner See",
    category: "attraction",
    region: "south",
    description:
      "A clear mountain lake sitting right under the rock teeth of the Wilder Kaiser, and the one lake Hila specifically wanted on the list because the water was genuinely pleasant — not the usual gasp-cold Alpine dip. There's a tidy managed beach with mown lawns to lie on (you pay to get in), and a family walking loop right around the shore, largely shaded and easy going. A swim, a picnic on the grass, and a slow lap of the lake is a whole happy day at toddler pace.",
    shortDescription: "A Wilder Kaiser lake with unusually warm water, a paid lido and an easy shore loop.",
    image: "./images/hintersteiner-see.jpg",
    website: "https://www.strandbad-hintersteinersee.at/",
    address: "Strandbad Hintersteiner See, Hinterstein 57, 6351 Scheffau am Wilden Kaiser, Austria",
    coords: [47.5407, 12.2146],
    tags: ["water", "nature", "family", "view"],
    difficulty: "easy",
    openingNote:
      "Strandbad open daily through the summer season; hours can change at short notice in cool or unsettled weather — check before setting out.",
    tips: [
      "≈55 min from Fügen (Jenbach, A12 east to Wörgl, then the B178 to Scheffau) — a real drive, so make it the day's main event.",
      "Access matters here: the road along the lake is closed to cars in the summer months, and the access road can be shut on the spot when the lake car park fills. Use the free park-and-ride with shuttle from Scheffau instead of gambling on a space.",
      "The Strandbad charges entry per person; bring cash and expect a modest fee for adults and children.",
      "Hila's note: the water really is swimmable — proper swim gear for everyone, not just paddling shoes.",
      "The shore loop is around an hour at a gentle pace and partly shaded; the car-free lakeside road is what makes it pleasant with a stroller."
    ]
  },
  {
    id: "erlebnissennerei-zillertal",
    addedBy: "hila",
    name: "Erlebnissennerei Zillertal (Show Dairy)",
    category: "attraction",
    region: "south",
    description:
      "A working Zillertal dairy that lets you walk through it, and one of Hila's best afternoons of the whole trip. You follow the production route and watch the cheese being made — she arrived late and the cheese machines had already stopped, but the packing line was still running and the kids were perfectly happy just watching machines and wheels of cheese go by. The tour ends in yoghurt tastings (several flavours, all good) and a shop selling everything made on site. Then you step outside into the farm half: pigs, goats, cows and hens to look at, a hay barn to jump in, little cars with a track to drive, a sand pit and a giant milk can you can climb.",
    shortDescription: "Watch cheese being made, taste the yoghurt, then a farmyard and hay-barn playground.",
    image: "./images/erlebnissennerei-zillertal.jpg",
    website: "https://www.erlebnissennerei-zillertal.at/",
    address: "Hollenzen 116, 6290 Mayrhofen, Austria",
    coords: [47.1790, 11.8714],
    tags: ["food", "family", "culture"],
    difficulty: "easy",
    openingNote:
      "Open daily, but live production stops early in the afternoon and does not run on Sundays or public holidays (so not on 15 Aug) — go on a weekday morning to see the machines working.",
    tips: [
      "≈30 min from Fügen straight up the B169 to Hollenzen, just before Mayrhofen.",
      "Hila's lesson learned the hard way: come in the morning if you actually want to see cheese being made. Later on you still get the packing line, and honestly that was enough for the kids.",
      "Adults and older children pay; small children go free — worth confirming the current rates on the day.",
      "Allow around 1.5–2 hours: dairy tour, tasting, shop, then the outdoor animals and play area, which is where the time really goes.",
      "Confirmed outside: cows, goats, sheep, pigs and hens, a goat petting corner, hay barn, mini-tractor track, sand pit and a tall climbable milk can."
    ],
    quizFacts: [
      {
        question: "At the Zillertal show dairy, what is the fresh milk from the mountain cows turned into?",
        correctAnswer: "Cheese, butter and yoghurt",
        distractors: ["Chocolate and sweets", "Bread and pretzels", "Apple juice"]
      }
    ]
  },
  {
    id: "zillertal-arena",
    addedBy: "hila",
    name: "Zillertal Arena (Zell am Ziller)",
    category: "attraction",
    region: "south",
    description:
      "The big lift network above Zell am Ziller, and Hila's shorthand for the mountain playground day it opens up. Her note describes a slide paradise, a genuinely lovely adventure playground, and a small lake you can swim in or hire a little rowing boat on — all of which sit together up at the Rosenalm, reached by gondola from Zell. Down in the valley the Arena is just the starting point: car park, ticket window, gondola. The good stuff is 1,700 m up, and the ride is half the fun for the kids.",
    shortDescription: "The gondola gateway from Zell am Ziller up to the Rosenalm play world and its little lake.",
    image: "./images/zillertal-arena.jpg",
    website: "https://www.zillertalarena.com/en/summer/",
    address: "Zillertal Arena, 6280 Zell am Ziller, Austria",
    coords: [47.2372, 11.8994],
    tags: ["family", "view", "water", "nature"],
    difficulty: "easy",
    openingNote:
      "Summer lift operation is daily in season — check the day's operating hours and last descent for the Rosenalmbahn before you commit to going up.",
    tips: [
      "≈20 min from Fügen up the B169 to Zell am Ziller, then the gondola.",
      "The pin on Hila's shared map landed on the Rohrberg hillside road below rather than at the lift — navigate to the Rosenalmbahn valley station in Zell am Ziller instead.",
      "The slide park, playground and boating lake she describes are the Fichtenwelt up at Rosenalm — see that entry for the detail.",
      "Small children generally ride the gondola free and older children at a reduced fare; check the current family tickets at the window.",
      "This is the closest 'big day out' to base — an easy pick when nobody wants a long drive."
    ]
  },
  {
    id: "rofan-seilbahn",
    addedBy: "hila",
    name: "Rofan Seilbahn (Erfurter Hütte)",
    category: "attraction",
    region: "north",
    description:
      "A big panoramic cable car from Maurach on Achensee that hauls you from the lakeshore to about 1,840 m in roughly five minutes. Hila pinned it purely for the view, and it earns that: the whole turquoise length of Achensee lies below you, with the Karwendel wall opposite. At the top there's a mountain inn and the Erfurter Hütte for lunch, a short walk out to a viewing platform, and easy alpine strolling if the mood holds. This is a view-and-Kaiserschmarrn stop rather than a play day — the mountain does all the work.",
    shortDescription: "A five-minute cable car to 1,840 m with the whole of Achensee laid out below.",
    image: "./images/rofan-seilbahn.jpg",
    website: "https://www.rofanseilbahn.at/",
    address: "Achenseestraße 10, 6212 Maurach am Achensee, Austria",
    coords: [47.4244, 11.7511],
    tags: ["view", "nature", "family"],
    difficulty: "easy",
    openingNote:
      "Runs daily through the summer season; weather can close it at short notice — check the day's hours and the last descent at the valley station.",
    tips: [
      "≈35 min from Fügen: down the valley to Jenbach, one hop on the A12, then the steep Achensee road up to Maurach.",
      "Hila left no note on this one — it's on the list for the view, so save it for a clear day and skip it in cloud.",
      "No dedicated summer playground was found at the top station, so pair it with the Achensee beach rather than expecting play equipment.",
      "The cabin itself is step-free, but the hut and its surroundings are not — carrier is easier than a stroller up here.",
      "The Airrofan zip-line at the top has a minimum age and height that rule both kids out; don't sell it to Gili."
    ]
  },
  {
    id: "gipfelalm-hohe-salve",
    addedBy: "hila",
    name: "Gipfelalm Hohe Salve",
    category: "attraction",
    region: "south",
    description:
      "The summit of the Hohe Salve at about 1,830 m, which Hila put on the map for two things: a 360-degree panorama and lunch. The Gipfelalm restaurant sits right on top with a rotating panoramic terrace, so the view does the walking for you; beside it are a small pilgrimage church and a climbing-and-play structure for children. Gondolas from Hopfgarten do all the climbing, and the summit knoll is a short walk from the top station — a genuinely easy way to stand somewhere very high with a 3-year-old.",
    shortDescription: "A 360° summit at 1,830 m with a rotating panoramic restaurant and a kids' climbing frame.",
    image: "./images/gipfelalm-hohe-salve.jpg",
    website: "https://hohe-salve.at/",
    address: "Salvenberg 59, 6361 Hopfgarten im Brixental, Austria",
    coords: [47.4650, 12.2038],
    tags: ["view", "food", "family", "nature"],
    difficulty: "easy",
    openingNote:
      "Open daily through the summer while the lifts run, roughly mid-May to late October — confirm the day's gondola hours and the restaurant before driving over.",
    tips: [
      "≈50 min from Fügen (Jenbach, A12 east to Wörgl, then the B170 to Hopfgarten), plus around 20 min in two gondola stages.",
      "Two gondola sections from Hopfgarten get you there; it can also be reached from the Söll side via Hochsöll, which pairs it with the Hexenwasser.",
      "Stroller-friendly trails are marketed up here and access is gondola-only, so a buggy works — but Tom will want the carrier for the final rise to the cross.",
      "Book the table mentally, not literally: lunch on the rotating terrace is the point, so time your ascent for it.",
      "It's a summit — cold wind and fast weather changes even in August. Jackets for everyone, and go in the morning."
    ]
  },
  {
    id: "salvenaland-hopfgarten",
    addedBy: "hila",
    name: "Salvenaland Hopfgarten",
    category: "attraction",
    region: "south",
    description:
      "Hopfgarten's family swim complex, built around a big natural swimming lake with a heated outdoor pool beside it. The piece that matters for us is the shallow natural children's pool with its own water channel — exactly the right depth for a 1.5-year-old — and the fact that, as Hila noted, the playground area is free to use while the bathing side is what you pay for. So you can turn up, let the kids loose on the climbing castle, giant swing and bouncy pillow for nothing, and only buy tickets if you actually want to swim.",
    shortDescription: "Natural swimming lake, heated pool and a shallow toddler pool — playground free.",
    image: "./images/salvenaland-hopfgarten.jpg",
    website: "https://www.salvena-land.at/",
    address: "Kelchsauer Straße 27, 6361 Hopfgarten im Brixental, Austria",
    coords: [47.4327, 12.1545],
    tags: ["water", "family"],
    difficulty: "easy",
    openingNote:
      "Open daily through the summer bathing season, but it closes in bad weather — check before making the drive.",
    tips: [
      "≈50 min from Fügen (Jenbach, A12 east to Wörgl, then the B170) — worth pairing with the Hohe Salve on the same day, they're about 4 km apart.",
      "Hila's key detail: the playground and recreation area are free; you only pay for the bathing side.",
      "It's all outdoors — no indoor pool as a rainy-day backup, and the whole thing shuts in bad weather.",
      "The shallow natural children's pool with the water channel is the toddler zone; the lake itself has jetties and deep water.",
      "Small children go free with a paying adult; confirm the current rates and the free-entry age at the desk."
    ]
  },
  {
    id: "fichtenschloss-rosenalm",
    addedBy: "hila",
    name: "Fichtenschloss (Rosenalm)",
    category: "attraction",
    region: "south",
    description:
      "The giant wooden spruce castle on the Rosenalm at 1,700 m, reached by gondola from Zell am Ziller — and in Hila's words a big playground on the mountain, best for kids roughly 2 to 8, with water play, a lovely view and a lake nearby. Towers to climb, a slide tower, a treetop walkway, a long wooden ball run and a proper water-play arena with sand, all in one fenced-in world. The Fichtensee lake sits a few minutes away with a shallow bay for the smallest bathers and little rowing boats for hire. Admission is included in the gondola ticket.",
    shortDescription: "A gondola-top wooden castle playground with water play and a swimmable little lake.",
    image: "./images/fichtenschloss-rosenalm.jpg",
    website: "https://www.zillertalarena.com/en/summer/cable-cars/adventure-worlds/fichtenwelt-rosenalm/",
    address: "Rohr 23, 6280 Rohrberg / Zell am Ziller, Austria",
    coords: [47.2478, 11.9410],
    tags: ["family", "water", "view", "nature"],
    difficulty: "easy",
    openingNote:
      "Daily in the summer season, gated by the Rosenalmbahn gondola — check the day's first ascent and last descent at the valley station in Zell am Ziller.",
    tips: [
      "≈20 min drive from Fügen to Zell am Ziller, then the gondola up — the closest big play day we have.",
      "Hila's advice, straight from her note: trainers and a full change of clothes for the kids. The water play gets them.",
      "The playground is included in the return lift ticket; small children generally ride free.",
      "The connecting trail is buggy-friendly and handcarts can be hired at the top for a small daily fee — that solves Tom.",
      "Aim for a Wednesday if you can: children's festival days run up here through the second half of August."
    ]
  },
  {
    id: "pepis-kinderland",
    addedBy: "hila",
    name: "Pepis Kinderland (Penken)",
    category: "attraction",
    region: "south",
    description:
      "A children's world high on the Penken above Mayrhofen at around 2,095 m, built around an eight-metre climbable wooden bear with slide towers, a rope bridge, an enormous sand pit, a jump pillow and a low ropes garden. Hila's note is honest about the shape of the day: the views are extraordinary and there is water play and lakes on the mountain, but there is also a solid 40-minute uphill walk in the mix, and the payoff at the end is a playground, a café and a trampoline. High, wide-open and beautiful — but the most logistics-heavy of her picks.",
    shortDescription: "A giant climbable wooden bear and ropes garden at 2,095 m on the Penken.",
    image: "./images/pepis-kinderland.jpg",
    website: "https://www.hintertuxergletscher.at/en/summer/finkenberger-almbahnen/pepis-kinderland/",
    address: "Penkenjoch, 6292 Finkenberg, Austria",
    coords: [47.1691, 11.7998],
    tags: ["family", "view", "nature"],
    difficulty: "moderate",
    openingNote:
      "Open daily in summer with the lifts, but note it belongs to the Finkenberg lift company, not Mayrhofen's — check that company's hours for the day.",
    tips: [
      "≈40 min drive from Fügen to Finkenberg, then two gondola sections. Hila's 'check the lift hours' warning is the single most important line here.",
      "Easiest route is the Finkenberg lifts, which land you right at Pepis. Coming up the Mayrhofen Penkenbahn instead leaves you around 1.5 km of walking — that's the 40 minutes in her note.",
      "The main water playground on this mountain is over near the Penken lift station, not at Pepis itself — two separate stops, don't expect them side by side.",
      "The café with the trampoline is a couple of minutes' flat walk from Pepis, at the same altitude.",
      "It's over 2,000 m: proper jackets, sun cream, and a hard stop by early afternoon before the weather turns."
    ]
  },
  {
    id: "pitz-park",
    addedBy: "hila",
    name: "PitzPark (Wenns)",
    category: "attraction",
    region: "north",
    description:
      "A chlorine-free natural swimming pond in the Pitztal, and by Hila's account a terrific water park: pools, a diving board, a floating raft to climb on, play equipment and a huge amount of lawn to spread out on. There's a heated shallow paddling pool for small children, a big playground, a café with a sun terrace, and bowling and indoor mini-golf if the weather breaks. The only problem with it is the map: it is a long way west of the Zillertal, and that drive is the deciding factor rather than anything about the place itself.",
    shortDescription: "A chlorine-free swimming pond with a raft, a paddling pool and acres of lawn.",
    image: "./images/pitz-park.jpg",
    website: "https://www.hochzeiger.com/en/pitzpark-in-wenns.html",
    address: "St. Margarethen 637, 6473 Wenns, Austria",
    coords: [47.1614, 10.7315],
    tags: ["water", "family"],
    difficulty: "easy",
    openingNote:
      "Open daily in good weather from roughly mid-June to mid-September — confirm the season dates and hours before setting out, they were only published for the previous summer.",
    tips: [
      "Be honest about the drive: ≈1 h 45 each way from Fügen, via the A12 past Innsbruck to Imst and then up the Pitztal. That's 3–3.5 hours in the car for a swim.",
      "The coordinates on Hila's map are correct — this really is in the Pitztal, it is not a mis-dropped pin.",
      "Given Therme Zillertal is in Fügen itself and Erlebnisbad Mayrhofen is 30 min away, this is only worth it if you're already heading west.",
      "The shallow heated children's pool is the toddler bit; the pond itself has a deep section and diving towers.",
      "Wet-weather backup on site — bowling lanes, an indoor playroom and indoor mini-golf."
    ]
  },
  {
    id: "ahornsee-mayrhofen",
    addedBy: "hila",
    name: "Ahornsee & Ahornbahn (Mayrhofen)",
    category: "attraction",
    region: "south",
    description:
      "Hila's note is short and exact: a big, impressive cable car, a route you can pull a cart along, water play, a small lake, and seating and picnic areas. That is the Ahorn plateau above Mayrhofen. The Ahornbahn is Austria's largest aerial tramway, carrying 160 people in a single cabin, and lifts you in about seven minutes to nearly 2,000 m. Up top the Ahornsee is a small made lake with generous lawns, shaded picnic tables, benches and a kiosk — less a playground than a place to sit down at altitude — and the circular walk that links it is flat, buggy-friendly, and lined with viewing platforms.",
    shortDescription: "Austria's biggest cable-car cabin up to a small lake, picnic lawns and a flat buggy loop.",
    image: "./images/ahornsee-mayrhofen.jpg",
    website: "https://www.mayrhofner-bergbahnen.com/",
    address: "Ahornbahn valley station, Ahornstraße 853, 6290 Mayrhofen, Austria",
    coords: [47.1348, 11.8744],
    tags: ["view", "nature", "family", "water"],
    difficulty: "easy",
    openingNote:
      "Runs daily through the summer season into late autumn — check the day's first and last cable car at the valley station in Mayrhofen.",
    tips: [
      "The pin for this one on the shared map was dropped in the wrong place — it landed on a different Ahornsee over in Salzburgerland, about 2.5 hours away. The real place is above Mayrhofen: ≈35 min drive from Fügen, plus a 7-minute cable car.",
      "Free handcarts are available at the mountain station, subject to availability — perfect for towing Tom around the circular trail.",
      "The circular route is about 2 km, flat and explicitly stroller-friendly, with several viewing platforms along it.",
      "The lake area is a feel-good spot rather than a play park: picnic tables in the shade, benches, toilets and a kiosk. Treat the water as paddling, not swimming.",
      "One of the two cabins now has an open roof deck for an extra fare — a thrill for adults, but not with a 1.5-year-old."
    ],
    quizFacts: [
      {
        question: "The Ahornbahn cable car above Mayrhofen is famous because its cabin is what?",
        correctAnswer: "The biggest cable-car cabin in Austria — it holds 160 people",
        distractors: ["Made entirely of glass", "The only one that goes underwater", "Pulled up the mountain by horses"]
      }
    ]
  },
  {
    id: "erlebnisbad-mayrhofen",
    addedBy: "hila",
    name: "Erlebnisbad Mayrhofen",
    category: "attraction",
    region: "south",
    description:
      "Mayrhofen's family pool, and Hila's pick for a plain hot-afternoon swim. The outdoor side is exactly what she noted: a toddler area, big lawns to sprawl on and slides. There's a shallow children's pool with water mushrooms and bubbles for Tom, a 25-metre sports pool, a long slide for Gili to work up to, and playground equipment, swings and a trampoline scattered around the grass. An indoor pool next door means the day survives a change in the weather.",
    shortDescription: "Family pool with a shallow toddler area, slides and big lawns — indoor pool as backup.",
    image: "./images/erlebnisbad-mayrhofen.jpg",
    website: "https://www.mayrhofen.at/en/stories/adventure-pool-mayrhofen",
    address: "Waldbadstraße 539, 6290 Mayrhofen, Austria",
    coords: [47.1642, 11.8644],
    tags: ["water", "family"],
    difficulty: "easy",
    openingNote:
      "Outdoor pool open daily through the summer; the indoor pool runs year-round. Check the day's hours before driving over.",
    tips: [
      "≈30 min from Fügen straight up the B169 — easy to combine with the show dairy at Hollenzen, which is on the same road.",
      "Small children go free; confirm the outdoor-pool rates at the desk, they weren't published in full.",
      "The shallow children's area with the water mushroom is the Tom zone; the 25 m sports pool is too deep for either of them.",
      "There's a whole indoor pool with slides next door — this is a solid rainy-day option too.",
      "Closer alternative: Therme Zillertal is in Fügen itself, with its own outdoor pool and almost no drive."
    ]
  },
  {
    id: "murmelland-zillertal",
    addedBy: "hila",
    name: "Murmelland Zillertal",
    category: "attraction",
    region: "south",
    description:
      "A free animal-and-play world at about 1,800 m on the Zillertaler Höhenstraße, and quite possibly the single best-matched place on Hila's whole list for a 3-year-old and a 1.5-year-old. Real marmots live here in a natural enclosure, alongside goats, sheep, alpacas, mini-pigs, rabbits and guinea pigs you can stroke and feed. The play side has a 12-metre marmot slide, swings, a water playground with a pirate ship and dams to build, and a children's chairlift of their own. There's no entry fee at all — you pay the toll on the mountain road to get up here, and that's it.",
    shortDescription: "Live marmots, petting animals, a 12 m marmot slide and a pirate-ship water playground — free entry.",
    image: "./images/murmelland-zillertal.jpg",
    website: "https://www.murmelland-zillertal.at/",
    address: "Kaltenbacher Skihütte, Neuhütten 1, 6272 Kaltenbach, Austria",
    coords: [47.2739, 11.8398],
    tags: ["family", "nature", "water", "view"],
    difficulty: "easy",
    openingNote:
      "Open daily through the summer season with a restaurant on site; entry is free. Check the day's hours, and the toll road's opening times, before setting off.",
    tips: [
      "≈40 min from Fügen: a few minutes down the B169 to Ried or Kaltenbach, then the toll Zillertaler Höhenstraße climbing in hairpins to 1,800 m. Expect a car toll at the gate.",
      "Entry to Murmelland itself is free; some of the rides (diggers, electric cars) take coins, so bring change.",
      "The marmots are real and live in a burrow enclosure — worth waiting quietly for them to come out.",
      "The interactive wildlife trail from here is about 2 km (not 3.5), wide, flat gravel and explicitly stroller- and handcart-friendly.",
      "Full change of clothes: the water playground with the pirate ship and dams is a soaking, not a splash."
    ],
    quizFacts: [
      {
        question: "Which whistling animal gives Murmelland its name and lives there in a burrow?",
        correctAnswer: "The marmot",
        distractors: ["The dolphin", "The parrot", "The crocodile"]
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
  },
  {
    id: "bergtierpark-blindham",
    name: "BergTierPark Blindham",
    category: "attraction",
    region: "transit",
    description:
      "A small hill-animal park in the Bavarian foothills, and the perfect circuit-breaker on the drive down from Munich. In the petting area Gili can feed and stroke the sheep; further round there are deer, wild boar, beavers and a long list of others. The main loop is about 2 km, buggy-friendly, and threaded with playgrounds so nobody gets marched anywhere. Best of all for an arrival day: there's a big indoor play barn (the SpielStadl) with a toddler corner, a sandpit and ride-on cars, so a wet morning doesn't sink the plan.",
    shortDescription: "Petting zoo, buggy-friendly forest loop and a big indoor play barn — 40 min from the airport.",
    image: "./images/bergtierpark-blindham.jpg",
    address: "Blindham 3, 85653 Aying, Germany",
    coords: [47.9276, 11.8159],
    tags: ["nature", "family"],
    difficulty: "easy",
    openingNote:
      "Open daily in summer, but check the day's hours before you set off — this is the one stop the whole morning is built around.",
    tips: [
      "A8 exit 96 (Hofoldinger Forst) — roughly 40 min from Munich Airport, a small detour off the motorway.",
      "Hire one of the pull-along wagons at the entrance (about €3) — worth it the moment Tom decides he's done walking.",
      "The indoor SpielStadl is the rain plan: ~2,000 m² with a toddler area, sandpit and ride-on cars.",
      "Buy a bag of feed at the entrance so the sheep actually come to Gili rather than ignoring her.",
      "Eat lunch here before the long stretch — and with Gili's sesame and Tom's banana allergies, check the counter's ingredients rather than assuming."
    ],
    quizFacts: [
      {
        question: "Which animal at BergTierPark Blindham can you feed and stroke up close?",
        correctAnswer: "The sheep",
        distractors: ["The wolves", "The eagles", "The crocodiles"]
      }
    ]
  },
  {
    id: "chiemsee-uebersee",
    name: "Chiemsee — Strandbad Feldwies (Übersee)",
    category: "attraction",
    region: "transit",
    description:
      "Bavaria's biggest lake, nicknamed the Bavarian Sea, and the southern shore at Übersee is its family end. The lido at Feldwies has a gently shelving, shallow entry — the kind a one-and-a-half-year-old can actually stand up in — plus a playground with carousels, climbing frames, slides and swings, wide lawns to flop on and food on site. Being lowland rather than alpine, the water is markedly warmer than the mountain lakes, and the Alps sit on the far side of it for the view.",
    shortDescription: "The Chiemsee's family shore — shallow warm water, a proper playground, 5 min off the A8.",
    image: "./images/chiemsee-uebersee.jpg",
    address: "Strandbad Feldwies, Seethal, 83236 Übersee, Germany",
    coords: [47.8496, 12.4754],
    tags: ["water", "family", "view"],
    difficulty: "easy",
    openingNote:
      "Summer lido — most Chiemsee lidos charge a small entry fee; confirm the day's hours and price at the gate.",
    tips: [
      "About 5 minutes off the A8 Übersee exit, so it costs almost nothing in detour on the Munich run.",
      "Warmer than Achensee or the Reintalersee — this is the lake where the water isn't a shock.",
      "Pack the towels and swim things somewhere reachable in the car, not at the bottom of a case.",
      "Shade is patchy on the lawns; claim a spot under a tree and keep the sun hats on.",
      "A good final play on the way home — burn the last of the kids' energy before the hotel and the flight."
    ]
  },
  {
    id: "ziller-radweg",
    addedBy: "hila",
    name: "Ziller Valley Cycle Path (Ziller Radweg)",
    category: "attraction",
    region: "south",
    description:
      "The valley's flat, paved cycle path, which runs along the Ziller river and passes straight out of Fügen — so it starts more or less at our front door. There is almost no gradient the whole way: just meadows, the rushing grey-green river on one side and the Zillertal walls rising on both, with benches and the odd farm shop along the route. Hila has it pencilled in for the late afternoon of arrival day, once the bags are in the room and nobody can face another car journey. It is the rare Austrian outing that works equally well with a stroller, a balance bike or a towed trailer, and because it is out-and-back you simply turn round the moment the kids have had enough.",
    shortDescription: "A flat riverside cycle path out of Fügen — buggy, balance-bike and trailer friendly.",
    image: "./images/ziller-radweg.jpg",
    address: "Ziller Radweg, 6263 Fügen, Austria",
    coords: [47.3492, 11.8550],
    tags: ["nature", "family"],
    difficulty: "easy",
    openingNote:
      "A public cycle path — no gate, no ticket, no hours. Nothing to check before setting off.",
    tips: [
      "Bikes, e-bikes and child trailers can be hired in the valley — ask the Stacherhof reception for the nearest rental and the current rates.",
      "With a 1.5-year-old the answer is a towed trailer or a child seat, not a saddle — Tom rides, Gili can do short stretches on a balance bike.",
      "It is out-and-back with no loop to commit to: ride until the mood turns, then roll back downstream.",
      "Almost no shade on the open meadow stretches — hats, sun cream and a water bottle even late in the day.",
      "Perfect arrival-day plan: it costs nothing, needs no booking, and you are ten minutes from the room when it collapses."
    ]
  },
  {
    id: "kundler-klamm",
    addedBy: "hila",
    name: "Kundler Klamm",
    category: "attraction",
    region: "north",
    description:
      "A gorge walk that a stroller can actually do, which is close to unheard of. The path from Kundl follows the Wildschönauer Ache into a narrow rock cleft — wide, well surfaced and near-level, with the river crashing along beside you and the walls closing overhead. Because the gorge is deep and tree-shaded it stays properly cool, which makes it the obvious answer to a hot August afternoon when nobody wants a mountain. Roughly 26 minutes from Fügen, and short enough to be a half-day rather than an expedition.",
    shortDescription: "A shady, genuinely stroller-friendly gorge walk beside a rushing river.",
    image: "./images/kundler-klamm.jpg",
    address: "Kundler Klamm, 6250 Kundl, Austria",
    coords: [47.4543, 11.9863],
    tags: ["nature", "water", "family"],
    difficulty: "easy",
    openingNote:
      "A public gorge path, open through the summer; it can close after storms or rockfall — check locally before driving over.",
    tips: [
      "≈26 min from Fügen — down the B169 to Strass, one hop on the A12, then into Kundl. Park at the gorge entrance.",
      "It is an out-and-back, so you choose the length: walk in twenty minutes, turn round, and it is still a proper outing.",
      "There is a gasthof at or near the gorge entrance for a drink and a break — worth confirming its hours on the day rather than counting on lunch.",
      "The gorge is shaded and noticeably colder than the valley — bring a layer for both kids even on a hot day.",
      "Rock and spray mean the surface can be damp; grippy shoes for Gili, and keep the stroller brake on at the viewpoints."
    ],
    quizFacts: [
      {
        question: "What made the narrow rocky gorge at the Kundler Klamm?",
        correctAnswer: "A rushing river slowly cutting through the rock",
        distractors: ["Giants digging with spades", "A machine built by the villagers", "A very big earthquake last year"]
      }
    ]
  },
  {
    id: "pillersee",
    addedBy: "hila",
    name: "Pillersee",
    category: "attraction",
    region: "south",
    description:
      "A calm, quiet lake at St. Ulrich am Pillersee with a flat, pram-friendly path running the whole way round it — mountains reflected in still water, reeds, benches, and rowing boats to hire from the shore. The circuit is short and level enough that a 3-year-old can walk most of it, with the boats as the bribe at the end. The catch is geography: this is a long way from the Zillertal, roughly two hours from Fügen, so it is not a day trip from base. It sits about 20 minutes from Triassic Park at Waidring, which is the only sensible way to use it — dinosaurs in the morning, lake in the afternoon.",
    shortDescription: "A still lake with a flat loop path and rowing boats — pair it with the Triassic Park day.",
    image: "./images/pillersee.jpg",
    address: "Pillersee, 6393 St. Ulrich am Pillersee, Austria",
    coords: [47.5393, 12.5688],
    tags: ["water", "nature", "family"],
    difficulty: "easy",
    openingNote:
      "The lakeside path is public and free; the boat hire is seasonal and weather-dependent — confirm it at the kiosk on the day.",
    tips: [
      "Do not plan this from Fügen: it is roughly 2 hours each way. It only makes sense bolted onto the Triassic Park / Waidring day, ≈20 min away.",
      "The path round the lake is flat and explicitly pram-friendly — the one lake walk where the stroller is easier than the carrier.",
      "Rowing boats are hired by the half-hour at the shore; ask about life jackets in toddler sizes before you push off.",
      "It is a mountain lake, so the water is cold and the shoreline shelves — paddling and duck-watching rather than a swim day.",
      "Bring a picnic; there is not much on the lake itself and the nearest village is a short drive."
    ],
    quizFacts: [
      {
        question: "What can you hire at the Pillersee to travel out onto the water?",
        correctAnswer: "A rowing boat",
        distractors: ["A submarine", "A hot-air balloon", "A cable car"]
      }
    ]
  },
  {
    id: "mayrhofen-town",
    addedBy: "hila",
    name: "Mayrhofen village",
    category: "attraction",
    region: "south",
    description:
      "The lively resort town at the head of the Zillertal, about 21 minutes up the valley from Fügen, and the closest thing the trip has to a proper high street. The main street is a flat walk lined with cafés, ice cream, souvenir shops and sports shops, with playgrounds tucked in behind and the big Penken and Ahorn lift stations bookending it. Hila's plan uses it as a soft landing after the show dairy — no tickets, no lifts, nothing to organise. For a 3-year-old the entire point is the ice cream, and that is a perfectly good reason to go.",
    shortDescription: "A flat, walkable resort high street 21 min from base — cafés, ice cream and playgrounds.",
    image: "./images/mayrhofen-town.jpg",
    address: "Hauptstraße, 6290 Mayrhofen, Austria",
    coords: [47.1628, 11.8608],
    tags: ["village", "food", "family"],
    difficulty: "easy",
    tips: [
      "≈21 min from Fügen straight up the B169 — the natural pairing with the show dairy at Hollenzen, which is on the same road just before town.",
      "Use one of the parking garages by the centre rather than hunting a street space; everything worth seeing is a flat walk from them.",
      "The main street is level and wide — stroller territory the whole way, no cobbles or climbs.",
      "Ice cream is the whole plan for Gili; with her sesame allergy, ask at the counter about the cones and toppings rather than assuming.",
      "Late afternoon is the right slot: the shops are open, the day's mountain crowds are down, and nobody needs a nap schedule respected."
    ]
  },
  {
    id: "lauserland",
    addedBy: "hila",
    name: "Lauserland (Alpbachtal)",
    category: "attraction",
    region: "south",
    description:
      "The family play world spread around the Wiedersbergerhorn valley station in Alpbach, about 24 minutes from Fügen. It is a big wooden adventure and water playground built for genuinely small children: climbing frames, slides, a sand area, and best of all a run of water channels with sluices and dams for the kids to build, block and flood, all set between forest and meadow. Hila has it down as the last Austrian morning of the trip, on the way out — close to the road home, free-form, and easy to cut short when the car is calling. Nothing needs booking and nobody has to be tall enough for anything.",
    shortDescription: "A wooden adventure and water playground at the Alpbach valley station — built for little kids.",
    image: "./images/lauserland.jpg",
    website: "https://www.alpbachtal.at/en/wiedersbergerhornbahn",
    address: "Talstation Wiedersbergerhornbahn, 6236 Alpbach, Austria",
    coords: [47.3963, 11.9243],
    tags: ["family", "nature", "water"],
    difficulty: "easy",
    openingNote:
      "Open through the summer season at the Wiedersbergerhornbahn valley station — check the day's hours before driving over.",
    tips: [
      "Don't confuse the two: Lauserland is the play park at the base station, while the 'Lauser-Sauser' is the alpine coaster at the same spot — separate things, separate entry.",
      "The coaster's rule is age 3 and up riding in front of an adult, so Gili can go and Tom cannot. Lauserland itself has no age bar, which is why it is the better fit for both of them.",
      "The water channels and dams are the main event — full change of clothes and shoes that can get soaked.",
      "≈24 min from Fügen via Strass and the Alpbachtal road; there is parking at the valley station.",
      "Good drive-out-day choice: turn up when it opens, let them wreck themselves for two hours, then head for Munich. Check the day's hours before you set off."
    ]
  },
  {
    id: "olympiapark-munich",
    addedBy: "hila",
    name: "Olympiapark München",
    category: "attraction",
    region: "transit",
    description:
      "The park built for Munich's 1972 Olympic Games, and Hila's pick for the final morning before the flight. It is enormous and green: rolling grass hills to run down, a lake with ducks that expect to be fed, and the famous tented roofs sweeping over the stadium and swimming hall. The Olympiaturm stands over it all with a lift up to a viewing platform, from which you can see the whole city and, on a clear day, the line of Alps you have just driven out of. Flat asphalt paths make it easy going with a buggy, and it is a soft, unstructured way to spend a last morning without committing to anything ticketed.",
    shortDescription: "Munich's 1972 Olympic park — big lawns, a duck lake and a tower with a view back to the Alps.",
    image: "./images/olympiapark-munich.jpg",
    website: "https://www.olympiapark.de/en",
    address: "Spiridon-Louis-Ring 21, 80809 München, Germany",
    coords: [48.1687, 11.5504],
    tags: ["family", "view", "nature"],
    difficulty: "easy",
    openingNote:
      "The park itself is open and free all day; the Olympiaturm charges separately and keeps its own hours — check them before you go up.",
    tips: [
      "It is a very big park — pick one corner (the lake and the hill below the stadium roofs) rather than trying to walk the whole thing with two small kids.",
      "Paths are flat and paved, so the buggy is fine; the grass hills are where Gili will actually want to be.",
      "The Olympiaturm is a paid extra with a lift queue that builds through the day — go early or skip it, and don't promise it before you've seen the line.",
      "Bring bread or duck food for the lake; that alone is twenty happy minutes for a 1.5-year-old.",
      "Park in the Olympiapark garages and time the exit generously — this is the last stop before the airport and the rental return."
    ],
    quizFacts: [
      {
        question: "Which enormous sports event was the Olympiapark in Munich built for?",
        correctAnswer: "The Olympic Games",
        distractors: ["A giant birthday party", "The world's biggest ice-cream festival", "A rocket launch"]
      }
    ]
  },
];

export const getAttraction = (id: string) => attractions.find(a => a.id === id);
