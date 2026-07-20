import type { Day } from "./types";

// TYROL 2026 — Alpbachtal & the Lower Inn Valley with two toddlers.
// One anchor activity per day, naps are sacred, no drive over ~40 min
// except the two airport transfers. Base for all nine nights: the hotel
// in the Kramsach–Alpbachtal area.
export const itinerary: Day[] = [
  {
    dayNumber: 1,
    date: "2026-08-11",
    weekday: "Tuesday",
    region: "transit",
    base: "Munich → Kramsach–Alpbachtal",
    title: "Land in Munich, drive into the Alps",
    subtitle: "LY351 lands 18:50 · Sixt pickup 19:30 · evening drive to the hotel",
    leadImage: "./images/munich-airport.jpg",
    activities: [
      {
        time: "18:50",
        title: "Land at Munich Airport (MUC)",
        description:
          "LY351 touches down at 18:50. Passport control with two tired toddlers takes a while — split up: one parent grabs the bags, the other keeps Gili and Tom moving. There's a supermarket (Edeka) in the MAC Forum between the terminals if you want milk, water and breakfast bits for the first morning.",
        attractionId: "munich-airport"
      },
      {
        time: "19:30",
        title: "Sixt pickup — MUC Airport Center",
        description:
          "The Sixt desk is in the Airport Center between Terminals 1 and 2. Confirm both child seats are installed and actually fit before you leave the garage — swapping a seat at 20:00 is much easier at the counter than in a dark hotel car park. Set the navigation to the hotel before pulling out.",
        rideToNext: { duration: "1 h 40", note: "A8 → A93 → A12, ≈ 160 km", departAt: "20:00" }
      },
      {
        time: "~21:45",
        title: "Arrive at the hotel, everyone straight to bed",
        description:
          "Check in, carry the sleeping kids up, unpack only the essentials. Tomorrow starts gently at the lake — no alarm needed beyond the toddlers' built-in one."
      }
    ],
    driveNotes:
      "Munich Airport → Kramsach ≈ 1 h 40 (160 km) via A8, A93 and the A12 Inntal motorway. You cross into Austria at Kufstein — the Austrian motorway needs a vignette; buy a digital one online before the trip or a sticker at the last German services (the rental almost certainly doesn't include it).",
    gear: [
      { item: "Passports, driving licence and the Sixt booking confirmation handy in the daypack" },
      { item: "Snacks, water and a favorite toy each within arm's reach for the night drive" },
      { item: "Light jackets on top of the carry-on — Alpine evenings run 15 °C cooler than Tel Aviv" },
      { item: "Pyjamas and toothbrushes packed at the top of one bag for a zero-search bedtime" }
    ],
    dayTips: [
      "Buy the Austrian digital vignette (asfinag.at) before you fly — one less stop with sleeping kids in the back",
      "Keep some euros in coins for the first days — small Tyrolean kiosks and parking machines still love cash",
      "If the flight is late, don't stress: Sixt airport counters run late into the evening, and the A12 is quiet after 21:00",
      "Text the hotel your arrival time from the airport so late check-in is ready"
    ],
    italianWords: [
      {
        word: "Servus",
        pronounce: "SER-voos",
        meaning: "Hi / hello (the all-purpose friendly greeting in Tyrol and Bavaria)",
        example: "Servus, wir sind die Familie aus Israel!",
        exampleMeaning: "Hi, we're the family from Israel!"
      },
      {
        word: "Grüß Gott",
        pronounce: "gruess GOT",
        meaning: "Hello (the polite Austrian greeting — literally 'greet God')",
        example: "Grüß Gott, wir haben eine Reservierung.",
        exampleMeaning: "Hello, we have a reservation."
      },
      {
        word: "Auto",
        pronounce: "OW-toh",
        meaning: "Car",
        example: "Unser Auto ist blau.",
        exampleMeaning: "Our car is blue."
      },
      {
        word: "Los geht's!",
        pronounce: "lohs GAYTS",
        meaning: "Let's go! Off we go!",
        example: "Los geht's in die Berge!",
        exampleMeaning: "Off we go into the mountains!"
      },
      {
        word: "Gute Nacht",
        pronounce: "GOO-teh NAHKHT",
        meaning: "Good night",
        example: "Gute Nacht, Gili und Tom!",
        exampleMeaning: "Good night, Gili and Tom!"
      }
    ],
    drinkOfTheDay: {
      name: "Almdudler",
      type: "other",
      pairing:
        "Austria's beloved herbal-lemonade — alpine herbs, fizzy, zero alcohol. The right call when one of you just drove a rental across a border in the dark and tomorrow starts early. It's on every menu in Tyrol; consider it your welcome ritual.",
      servingNote: "Ice-cold from the bottle, or over ice with a lemon slice"
    }
  },
  {
    dayNumber: 2,
    date: "2026-08-12",
    weekday: "Wednesday",
    departureTime: "09:30",
    rideToFirst: { duration: "30 min", note: "via Wiesing, then the climb up the Achensee road" },
    region: "north",
    base: "Kramsach–Alpbachtal",
    title: "Achensee — Tyrol's fjord, from the beach",
    subtitle: "Lakeside lido and playground in Pertisau, optional boat ride",
    leadImage: "./images/achensee.jpg",
    activities: [
      {
        time: "10:00",
        title: "Strandbad Pertisau — beach, playground, shallow water",
        description:
          "The lakeside lido on the Pertisau shore is free to enter and built for exactly this crew: a huge lawn, a pirate-ship playground with slide, swings and sandbox, a separate shallow children's pool, and a gently shelving lake entry. The water is drinking-water clear and famously brisk — Gili will be in it anyway. Grab a shaded spot under the sun sails early; the Karwendel peaks across the water do the view work.",
        attractionId: "achensee",
        tag: "water",
        rideToNext: { duration: "5 min", note: "short hop along the shore to the Pertisau dock" }
      },
      {
        time: "13:30",
        title: "Boat ride on the lake",
        description:
          "The Achensee ships have run since 1887 and sail daily in summer between six docks. Hop on at Pertisau for a short leg (Pertisau → Gaisalm or a round trip) — kids under 6 ride free, and the top deck is toddler-thrilling without being scary. Check the day's timetable at the dock or achenseeschifffahrt.at; sailings are roughly hourly in high season.",
        attractionId: "achensee",
        tag: "water",
        optional: true
      },
      {
        time: "15:30",
        title: "Ice cream, then the nap-drive home",
        description:
          "One scoop each on the Pertisau promenade, then let the winding descent do what it does best — both kids asleep before Wiesing. Quiet hotel afternoon."
      }
    ],
    driveNotes:
      "Base → Pertisau ≈ 30 min: A12 or the valley road to Wiesing, then the switchback climb up to the Achensee plateau. It's a proper mountain road for ten minutes — smooth but curvy, so time it for after breakfast, not after a big lunch.",
    gear: [
      { item: "Swim gear, swim diaper for Tom, and a change of clothes for everyone", for: "achensee" },
      { item: "Water shoes — the beach entry is pebbly in places", for: "achensee" },
      { item: "Sun hats and SPF50 — mountain sun at 950 m is stronger than it feels", for: "achensee" },
      { item: "Picnic blanket for the lido lawn" },
      { item: "Windbreaker layer for the boat deck — it's breezy even in August", for: "achensee" }
    ],
    dayTips: [
      "Arrive by 10:00 — Pertisau's paid car parks and the shaded lido spots fill by 11 in August",
      "The lake sits at ~950 m: mornings can start at 15 °C even when the afternoon hits 27 °C, so layer the kids",
      "Afternoon thunderstorms are an Alpine summer classic — do the water stuff early, keep the boat ride flexible",
      "The lido has a snack bar, but the Pertisau promenade has better lunch — kaiserschmarrn splits nicely four ways",
      "Kids under 6 sail free on the Achensee ships; buy tickets right at the dock"
    ],
    italianWords: [
      {
        word: "Wasser",
        pronounce: "VAH-ser",
        meaning: "Water",
        example: "Das Wasser ist kalt!",
        exampleMeaning: "The water is cold!"
      },
      {
        word: "See",
        pronounce: "zay",
        meaning: "Lake (der See — not 'sea'!)",
        example: "Der Achensee ist der größte See in Tirol.",
        exampleMeaning: "The Achensee is the biggest lake in Tyrol."
      },
      {
        word: "Schiff",
        pronounce: "shif",
        meaning: "Ship, boat",
        example: "Schau, das Schiff kommt!",
        exampleMeaning: "Look, the boat is coming!"
      },
      {
        word: "Schwimmen",
        pronounce: "SHVIM-men",
        meaning: "To swim",
        example: "Gili will schwimmen gehen.",
        exampleMeaning: "Gili wants to go swimming."
      },
      {
        word: "Kalt",
        pronounce: "kahlt",
        meaning: "Cold",
        example: "Brrr, das ist kalt!",
        exampleMeaning: "Brrr, that's cold!"
      },
      {
        word: "Berg",
        pronounce: "behrk",
        meaning: "Mountain",
        example: "Die Berge sind so hoch!",
        exampleMeaning: "The mountains are so tall!"
      }
    ],
    drinkOfTheDay: {
      name: "Hugo",
      type: "cocktail",
      pairing:
        "The Alps' summer spritz — prosecco, elderflower syrup, mint and soda. Elderflower grows on the meadows you drove past today, and after a day of lake wind and toddler-lifeguarding, its light floral fizz is exactly right.",
      servingNote: "Big wine glass, lots of ice, a mint sprig and a squeeze of lime"
    }
  },
  {
    dayNumber: 3,
    date: "2026-08-13",
    weekday: "Thursday",
    departureTime: "09:00",
    rideToFirst: { duration: "30 min", note: "A12 west to the Wattens exit" },
    region: "north",
    base: "Kramsach–Alpbachtal",
    title: "Crystal worlds & a medieval old town",
    subtitle: "Swarovski Kristallwelten in Wattens, then Hall in Tirol",
    leadImage: "./images/swarovski-kristallwelten.jpg",
    activities: [
      {
        time: "09:30",
        title: "Swarovski Kristallwelten — the Giant's garden",
        description:
          "Open daily 09:00–19:00 (last entry 18:00), so an early start beats the tour buses. Inside, the Chambers of Wonder are a dim, sparkly 45 minutes that both kids will treat as fireworks; outside is the real toddler gold — the crystal cloud over the mirror pool, the huge playground tower with slides and nets, and the carousel. Gili gets the play tower, Tom gets the water-spitting Giant's head. Do the chambers first, then release them into the garden.",
        attractionId: "swarovski-kristallwelten",
        tag: "family",
        rideToNext: { duration: "15 min", note: "back roads along the Inn to Hall", departAt: "13:00" }
      },
      {
        time: "13:15",
        title: "Hall in Tirol — lunch and an old-town wander",
        description:
          "Hall has one of the best-preserved medieval old towns in Austria — bigger than Innsbruck's, and blissfully uncrowded. Park at the edge (the old town is largely car-free), find a gasthaus table on the Oberer Stadtplatz, then let the kids run the cobbled lanes. The mint tower (Münzerturm) is the postcard; the ice cream on the square is the actual goal.",
        attractionId: "hall-in-tirol",
        tag: "village"
      },
      {
        time: "15:00",
        title: "Home for naps",
        description:
          "Thirty easy minutes back on the A12. If the kids are asleep, take the scenic valley road and stretch the drive."
      }
    ],
    driveNotes:
      "Base → Wattens ≈ 30 min on the A12, Wattens → Hall in Tirol ≈ 15 min, Hall → base ≈ 30 min. All flat valley motorway — the easiest driving day of the trip.",
    gear: [
      { item: "Stroller for Tom — the whole Kristallwelten garden is smooth and stroller-friendly", for: "swarovski-kristallwelten" },
      { item: "A spare shirt for the Giant's water features — someone will get sprayed", for: "swarovski-kristallwelten" },
      { item: "Comfortable shoes for Hall's cobbles — stroller wheels rattle but manage", for: "hall-in-tirol" },
      { item: "Sun hats for the playground tower — it's in full sun at midday", for: "swarovski-kristallwelten" }
    ],
    dayTips: [
      "Book Kristallwelten tickets online the night before — you skip the ticket line and August mornings get busy by 10:30",
      "The indoor chambers are dark and a bit loud in places — Tom in the carrier, Gili by the hand, and it's magic rather than scary",
      "Kristallwelten's café is fine but Hall's old-town gasthäuser are better and half the price — hold out for lunch",
      "Most Hall shops close for a quiet hour after lunch; the square and ice cream don't",
      "Keep the receipt-sized garden map — the play tower and carousel are at the far end and easy to miss"
    ],
    italianWords: [
      {
        word: "Kristall",
        pronounce: "kris-TAHL",
        meaning: "Crystal",
        example: "So viele Kristalle!",
        exampleMeaning: "So many crystals!"
      },
      {
        word: "Glitzern",
        pronounce: "GLIT-sern",
        meaning: "To sparkle, glitter",
        example: "Alles glitzert hier!",
        exampleMeaning: "Everything sparkles here!"
      },
      {
        word: "Riese",
        pronounce: "REE-zeh",
        meaning: "Giant (the big grass-covered head at Kristallwelten)",
        example: "Der Riese spuckt Wasser!",
        exampleMeaning: "The giant spits water!"
      },
      {
        word: "Schau mal!",
        pronounce: "SHOW mahl",
        meaning: "Look! (the phrase you'll hear Gili copy first)",
        example: "Schau mal, ein Karussell!",
        exampleMeaning: "Look, a carousel!"
      },
      {
        word: "Eis",
        pronounce: "ice",
        meaning: "Ice cream (also 'ice')",
        example: "Ein Eis für Gili, bitte.",
        exampleMeaning: "One ice cream for Gili, please."
      },
      {
        word: "Stadt",
        pronounce: "shtaht",
        meaning: "Town, city",
        example: "Hall ist eine alte Stadt.",
        exampleMeaning: "Hall is an old town."
      }
    ],
    drinkOfTheDay: {
      name: "Grüner Veltliner",
      type: "wine",
      pairing:
        "Austria's signature white — white pepper, green apple, crystal-crisp acidity. On the day you spent inside a giant crystal, pour the wine that tastes like one. Any Tyrolean gasthaus lists a good one from the Wachau or Weinviertel.",
      servingNote: "Well-chilled (8–10 °C); a Grüner from a 'DAC' region is a safe pick"
    }
  },
  {
    dayNumber: 4,
    date: "2026-08-14",
    weekday: "Friday",
    departureTime: "08:45",
    rideToFirst: { duration: "20 min", note: "A12 to Wiesing, then into the Zillertal to Fügen" },
    region: "south",
    base: "Kramsach–Alpbachtal",
    title: "Zillertal family mountain day",
    subtitle: "Spieljoch Fügen gondola — play areas at 1,860 m; steam train optional",
    leadImage: "./images/spieljoch-fuegen.jpg",
    activities: [
      {
        time: "09:15",
        title: "Spieljochbahn up the family mountain",
        description:
          "Fügen's certified family mountain: the gondola runs daily in peak season (first ascent 09:00, last descent 17:00 through late August). At the top station you get a toddler jackpot — a water play area, barefoot path, a walk-in show mine, and a big adventure playground, all within a hundred meters of the lift and the Mountain Loft restaurant. Gili roams free, Tom paddles at the water channels; nobody has to hike anywhere.",
        attractionId: "spieljoch-fuegen",
        tag: "family",
        rideToNext: { duration: "10 min", note: "down the valley road to Jenbach station", departAt: "14:00" }
      },
      {
        time: "Afternoon",
        title: "Zillertalbahn steam train",
        description:
          "The narrow-gauge Zillertalbahn still runs a real steam locomotive with wooden carriages between Jenbach and Mayrhofen — in summer it operates Tuesday to Saturday, so today qualifies. A short hop (Jenbach → Fügen or one stop further) is plenty for the kids: whistle, smoke, clickety-clack, done in half an hour. Check the day's departure times at Jenbach station or zillertalbahn.at rather than building the day around it.",
        attractionId: "zillertalbahn",
        tag: "family",
        optional: true
      },
      {
        time: "15:30",
        title: "Back to base, playground and dinner",
        description:
          "Twenty minutes home. If naps happened on the mountain, the hotel playground closes out the day."
      }
    ],
    driveNotes:
      "Base → Fügen (Spieljochbahn valley station) ≈ 20 min: A12 one junction to Wiesing, then the B169 into the Zillertal. Jenbach station is ≈ 10 min from Fügen on the way home. Zero mountain-road driving — the gondola does the climbing.",
    gear: [
      { item: "Change of clothes and a small towel for the summit water play area", for: "spieljoch-fuegen" },
      { item: "Carrier for Tom — paths at the top are gravel; a stroller works around the play area but the carrier is freer", for: "spieljoch-fuegen" },
      { item: "Fleece layers — it's 10 °C cooler at 1,860 m than in the valley", for: "spieljoch-fuegen" },
      { item: "Closed shoes for the show mine (it's cool and dim inside)", for: "spieljoch-fuegen" },
      { item: "Sunscreen — alpine sun above the treeline is fierce even at 20 °C" }
    ],
    dayTips: [
      "Ride up before 09:30 — clear morning views, empty playground, and you're eating lunch at the Mountain Loft while the crowds arrive",
      "The gondola cabins take strollers, no problem — no folding gymnastics required",
      "If clouds sit low on the peaks in the morning, flip the day: steam train first, mountain after lunch",
      "The steam train is the nostalgia option, not the schedule backbone — regular modern trains run the same line hourly if the timing doesn't work",
      "Friday afternoon traffic into the Zillertal is inbound tourists — you'll be driving out against it, smug and on time for naps"
    ],
    italianWords: [
      {
        word: "Gondel",
        pronounce: "GON-del",
        meaning: "Gondola, cable car cabin",
        example: "Wir fahren mit der Gondel!",
        exampleMeaning: "We're riding the gondola!"
      },
      {
        word: "Zug",
        pronounce: "tsook",
        meaning: "Train",
        example: "Der Zug macht tschu-tschu!",
        exampleMeaning: "The train goes choo-choo!"
      },
      {
        word: "Dampf",
        pronounce: "dahmpf",
        meaning: "Steam",
        example: "Schau, der Dampf von der Lokomotive!",
        exampleMeaning: "Look, the steam from the locomotive!"
      },
      {
        word: "Hoch",
        pronounce: "hohkh",
        meaning: "High, tall",
        example: "Wir sind so hoch oben!",
        exampleMeaning: "We're so high up!"
      },
      {
        word: "Kuh",
        pronounce: "koo",
        meaning: "Cow (you'll hear the bells before you see them)",
        example: "Die Kuh hat eine Glocke.",
        exampleMeaning: "The cow has a bell."
      }
    ],
    drinkOfTheDay: {
      name: "Zillertal Bier",
      type: "beer",
      pairing:
        "Brewed in Zell am Ziller since 1500, a few kilometers up the valley you played in today. The Zillertal Weißbier after a mountain morning — banana-y, cloudy, cold — is as local as a beer pairing gets on this trip.",
      servingNote: "Weißbier glass, poured slowly, yeast swirled in at the end"
    }
  },
  {
    dayNumber: 5,
    date: "2026-08-15",
    weekday: "Saturday",
    departureTime: "09:00",
    rideToFirst: { duration: "40 min", note: "A12 west to Innsbruck" },
    region: "north",
    base: "Kramsach–Alpbachtal",
    title: "Innsbruck — alpine animals & the Golden Roof",
    subtitle: "Assumption Day: shops shut, but the zoo, the funicular and the old town don't care",
    leadImage: "./images/alpenzoo-innsbruck.jpg",
    activities: [
      {
        time: "09:45",
        title: "Alpenzoo — every animal of the Alps, on a hillside",
        description:
          "Europe's highest-altitude zoo is open 365 days a year, 09:00–18:00 in summer — public holiday included, which is exactly why it anchors today. Around 2,000 alpine animals: ibex, brown bears, wolves, lynx, otters, and a fish-filled aquarium. It's compact enough for toddler legs (with a hill — bring the carrier), and morning is feeding-and-activity time for the animals. Park at the Hungerburgbahn's Congress garage and ride the funicular one stop up to the zoo — for Gili, the space-ship stations are half the attraction.",
        attractionId: "alpenzoo-innsbruck",
        tag: "family",
        rideToNext: { duration: "15 min", note: "funicular down + a short walk into the Altstadt", departAt: "12:30" }
      },
      {
        time: "12:45",
        title: "Altstadt stroll & the Golden Roof",
        description:
          "Lunch in the old town, then the two-minute sightseeing hit: the Goldenes Dachl with its 2,657 gilded copper tiles, Maria-Theresien-Straße's pastel facades, and the Nordkette wall of rock looming over everything. It's a holiday, so shops are shuttered — but cafés, restaurants and gelato are open and the car-free lanes are perfect stroller territory.",
        attractionId: "innsbruck-altstadt",
        tag: "culture"
      },
      {
        time: "14:30",
        title: "Nordkette — up the mountain in a moving postcard",
        description:
          "If the kids are still charged, ride the Hungerburgbahn onward and take the cable car to Seegrube at 1,905 m — coffee-with-a-view height, twenty minutes above the city. Cable cars run daily including holidays; check the last descent time at the station. Skip guilt-free if nap o'clock is calling.",
        attractionId: "nordkette",
        tag: "view",
        optional: true
      }
    ],
    driveNotes:
      "Base → Innsbruck ≈ 40 min on the A12 — the longest day-trip drive of the week, timed against morning energy. Park once at the Congress/Hungerburgbahn garage and let the funicular handle the hill; driving up to the zoo directly is possible but the small lot fills fast on holidays.",
    gear: [
      { item: "Carrier for Tom — the zoo is built on a slope and some paths are stepped", for: "alpenzoo-innsbruck" },
      { item: "Stroller for the flat, car-free Altstadt — swap at the car if you can", for: "innsbruck-altstadt" },
      { item: "Layers for Seegrube — it can be 12 °C up there in August", for: "nordkette" },
      { item: "Water bottles — refill at Innsbruck's public fountains, the water is straight off the mountain" },
      { item: "Coins/card for the parking garage — holiday rates apply all day" }
    ],
    dayTips: [
      "August 15 is Mariä Himmelfahrt — a national holiday. Shops closed, museums vary, but the zoo, lifts, cafés and restaurants all run. Expect locals out in force",
      "Combi tickets covering Hungerburgbahn + Alpenzoo entry are sold at the funicular — cheaper than paying each separately",
      "Be at the zoo when it's freshest — animals are active in the morning cool, and holiday crowds peak after 11",
      "Reserve nothing for lunch, just walk one lane off the Golden Roof drag and pick a gasthaus with a free table outside",
      "If the holiday crowds feel like too much, bail after the zoo — it's the anchor; everything else is garnish"
    ],
    italianWords: [
      {
        word: "Zoo",
        pronounce: "tsoh",
        meaning: "Zoo (Germans say 'tso', not 'zoo')",
        example: "Der Alpenzoo hat Bären!",
        exampleMeaning: "The alpine zoo has bears!"
      },
      {
        word: "Tier",
        pronounce: "teer",
        meaning: "Animal",
        example: "Welches Tier ist das?",
        exampleMeaning: "Which animal is that?"
      },
      {
        word: "Adler",
        pronounce: "AHD-ler",
        meaning: "Eagle (Tyrol's symbol — it's on the flag)",
        example: "Der Adler fliegt hoch.",
        exampleMeaning: "The eagle flies high."
      },
      {
        word: "Murmeltier",
        pronounce: "MOOR-mel-teer",
        meaning: "Marmot (the whistling fluffball of the Alps)",
        example: "Das Murmeltier pfeift!",
        exampleMeaning: "The marmot whistles!"
      },
      {
        word: "Gold",
        pronounce: "golt",
        meaning: "Gold",
        example: "Das Dach ist aus Gold!",
        exampleMeaning: "The roof is made of gold!"
      },
      {
        word: "Feiertag",
        pronounce: "FYE-er-tahk",
        meaning: "Public holiday",
        example: "Heute ist ein Feiertag in Österreich.",
        exampleMeaning: "Today is a public holiday in Austria."
      }
    ],
    drinkOfTheDay: {
      name: "Aperol Spritz",
      type: "aperitif",
      pairing:
        "Innsbruck's café terraces on a holiday afternoon are half orange with these. Tyrol sits an hour from the Italian border and drinks accordingly — one spritz under the Nordkette while the kids demolish a second gelato is the day's proper ending.",
      servingNote: "3 parts prosecco, 2 parts Aperol, splash of soda, orange slice — the Austrians pour them generous"
    }
  },
  {
    dayNumber: 6,
    date: "2026-08-16",
    weekday: "Sunday",
    departureTime: "09:30",
    rideToFirst: { duration: "15 min", note: "up the Alpbachtal to Reith im Alpbachtal" },
    region: "south",
    base: "Kramsach–Alpbachtal",
    title: "Slow Sunday — enchanted forest & the flower village",
    subtitle: "Juppi Zauberwald above Reith, Alpbach village, optional alpine coaster",
    leadImage: "./images/juppi-zauberwald.jpg",
    activities: [
      {
        time: "09:45",
        title: "Juppi Zauberwald — the enchanted forest on the Reither Kogel",
        description:
          "Ride the Reitherkogelbahn up (runs daily except its Wednesday rest day — today's Sunday, we're fine; first ascent 09:00, last descent 16:30–17:00). At the top, Juppi's Zauberwald is a 2.5 km shaded loop of play stations — witch's house, wooden xylophones, balance trails, water wheels — pitched exactly at Gili's speed. Entry is included in the lift ticket. Take it slow: this loop with snack stops is the whole morning.",
        attractionId: "juppi-zauberwald",
        tag: "family",
        rideToNext: { duration: "10 min", note: "over the hill into Alpbach village", departAt: "13:00" }
      },
      {
        time: "13:15",
        title: "Alpbach — Austria's prettiest village, at nap pace",
        description:
          "Alpbach's wooden farmhouses drip with geraniums — the village has won 'most beautiful in Austria' honors and every balcony shows why. Lunch at a gasthof terrace, a slow lap of the village, playground stop by the school. This is the day you take the photos that end up framed.",
        attractionId: "alpbach-village",
        tag: "village"
      },
      {
        time: "15:00",
        title: "Lauser-Sauser alpine coaster — parents alternate",
        description:
          "The year-round rail coaster at the Wiedersbergerhorn gondola drops 134 m over 1.4 km, including Austria's highest loop-carousel. Rules: from age 3, kids may ride as a passenger in front of an adult — so Gili qualifies; from 8 (and 1.30 m) they ride alone. Tom can't ride, so parents alternate: one takes Gili down squealing, the other has a coffee at the valley station with Tom. Check the gondola's summer hours at the base station before riding up.",
        attractionId: "lauser-sauser",
        tag: "extreme",
        optional: true
      }
    ],
    driveNotes:
      "Everything today lives in our home valley: base → Reith im Alpbachtal ≈ 15 min, Reith → Alpbach ≈ 10 min, Alpbach → base ≈ 20 min. The shortest driving day of the trip — by design, after yesterday's city outing.",
    gear: [
      { item: "Carrier or all-terrain stroller — the Zauberwald loop is a gravel forest path", for: "juppi-zauberwald" },
      { item: "A change of clothes — the water-wheel stations always win", for: "juppi-zauberwald" },
      { item: "Closed shoes for Gili on the coaster (and a hair tie — it gets quick)", for: "lauser-sauser" },
      { item: "Picnic snacks for the forest loop's benches", for: "juppi-zauberwald" }
    ],
    dayTips: [
      "The Reitherkogelbahn rests on Wednesdays — today (Sunday) it runs, which is exactly why the slow day sits here in the week",
      "The Zauberwald loop has zero exposure and constant shade — the rare alpine outing where you can let Gili lead",
      "Sunday lunch in Alpbach is popular with locals — aim to sit down by 12:30 or book a table in the morning",
      "The Alpbachtal Card (often given free by area accommodations) can include the area lifts — ask the hotel reception before buying tickets",
      "On the Lauser-Sauser you control the speed with a brake lever — first run gentle, second run Gili will demand 'schneller!'"
    ],
    italianWords: [
      {
        word: "Wald",
        pronounce: "vahlt",
        meaning: "Forest",
        example: "Wir gehen in den Zauberwald!",
        exampleMeaning: "We're going into the enchanted forest!"
      },
      {
        word: "Zauber",
        pronounce: "TSOW-ber",
        meaning: "Magic",
        example: "Das ist ein Zauberwald.",
        exampleMeaning: "That's a magic forest."
      },
      {
        word: "Dorf",
        pronounce: "dorf",
        meaning: "Village",
        example: "Alpbach ist das schönste Dorf.",
        exampleMeaning: "Alpbach is the prettiest village."
      },
      {
        word: "Blume",
        pronounce: "BLOO-meh",
        meaning: "Flower",
        example: "So viele Blumen am Balkon!",
        exampleMeaning: "So many flowers on the balcony!"
      },
      {
        word: "Schneller!",
        pronounce: "SHNEL-ler",
        meaning: "Faster!",
        example: "Schneller, Papa, schneller!",
        exampleMeaning: "Faster, Daddy, faster!"
      },
      {
        word: "Langsam",
        pronounce: "LAHNG-zahm",
        meaning: "Slow, slowly",
        example: "Heute machen wir alles langsam.",
        exampleMeaning: "Today we do everything slowly."
      }
    ],
    drinkOfTheDay: {
      name: "Obstler",
      type: "digestif",
      pairing:
        "The Tyrolean farmhouse schnaps — clear fruit brandy distilled from apples and pears, and every Alpbach gasthof pours a homemade one. After a Sunday of geranium balconies and forest magic, one small glass 'für die Verdauung' is the local liturgy.",
      servingNote: "A tiny stem glass, room temperature, sipped — never shot"
    }
  },
  {
    dayNumber: 7,
    date: "2026-08-17",
    weekday: "Monday",
    departureTime: "08:45",
    rideToFirst: { duration: "30 min", note: "A12 toward Kufstein, exit Wörgl-Ost, then up to Söll" },
    region: "south",
    base: "Kramsach–Alpbachtal",
    title: "Hexenwasser — barefoot with the witches",
    subtitle: "A whole mountain of water play above Söll",
    leadImage: "./images/hexenwasser-soell.jpg",
    activities: [
      {
        time: "09:30",
        title: "Gondola up to Hochsöll",
        description:
          "The Hexenwasser gondola runs daily through the season, 08:45–17:30. Ride up with the morning crowd of rubber-booted toddlers — you're all going to the same place.",
        attractionId: "hexenwasser-soell",
        tag: "family",
        rideToNext: { duration: "5 min", note: "the witch's world starts right at the top station" }
      },
      {
        time: "09:45",
        title: "Hexenwasser — Austria's best barefoot water world",
        description:
          "Seventy-plus hands-on stations spread over the mountainside: the long barefoot trail through mud, moss and spring water, witch-themed water channels with little gates and mills, a giant sundial, bees behind glass, and bread you can watch being baked at the witches' bakery. It is the single best 3-year-old attraction in Tyrol — Gili will do the barefoot trail twice, Tom parks himself at the first water channel and stays. Staff ('witches') run little demos through the day; the whole thing is included in the lift ticket.",
        attractionId: "hexenwasser-soell",
        tag: "water"
      },
      {
        time: "14:30",
        title: "Last splash, gondola down, nap-drive home",
        description:
          "Buy the fresh witch-bakery bread on the way out — it's tomorrow's breakfast. Thirty minutes of valley motorway does the rest."
      }
    ],
    driveNotes:
      "Base → Söll ≈ 30 min: A12 toward Kufstein, exit at Wörgl-Ost, then the B178 to the Hexenwasser gondola's big free car park. Same directions in reverse for the sleepy ride home.",
    gear: [
      { item: "Towels, full changes of clothes for BOTH kids, and swim diaper for Tom — this is a getting-wet day, not a maybe", for: "hexenwasser-soell" },
      { item: "Crocs or sandals that can get soaked, for the walks between barefoot stations", for: "hexenwasser-soell" },
      { item: "Carrier for Tom — paths are gravel and gently sloped; strollers manage the main loop but the carrier is easier", for: "hexenwasser-soell" },
      { item: "Sunscreen and hats — most water stations sit in open meadow", for: "hexenwasser-soell" },
      { item: "A plastic bag for the wet everything" }
    ],
    dayTips: [
      "Go on a warm sunny day if the week allows a swap — Hexenwasser in drizzle is heroic, in sunshine it's perfect",
      "Arrive for the first gondolas: you'll have the barefoot trail nearly to yourselves until 10:30",
      "The mountain restaurants at Hochsöll are used to soaked toddlers — lunch there rather than packing out",
      "Watch the boards for the witches' little demos (bread baking, candle making) — short, wordless enough, and toddler-mesmerizing",
      "Everything at the top is included with the gondola ticket — no coin-operated anything, blessedly"
    ],
    italianWords: [
      {
        word: "Hexe",
        pronounce: "HEK-seh",
        meaning: "Witch (the friendly kind, here)",
        example: "Die Hexe backt Brot.",
        exampleMeaning: "The witch is baking bread."
      },
      {
        word: "Barfuß",
        pronounce: "BAR-foos",
        meaning: "Barefoot",
        example: "Wir gehen barfuß durchs Wasser!",
        exampleMeaning: "We're walking barefoot through the water!"
      },
      {
        word: "Matsch",
        pronounce: "mahch",
        meaning: "Mud (the fun kind)",
        example: "Tom liebt den Matsch.",
        exampleMeaning: "Tom loves the mud."
      },
      {
        word: "Brot",
        pronounce: "broht",
        meaning: "Bread",
        example: "Das Brot ist noch warm!",
        exampleMeaning: "The bread is still warm!"
      },
      {
        word: "Nass",
        pronounce: "nahs",
        meaning: "Wet",
        example: "Alle sind nass!",
        exampleMeaning: "Everyone is wet!"
      }
    ],
    drinkOfTheDay: {
      name: "Skiwasser",
      type: "other",
      pairing:
        "Tyrol's own invention — raspberry syrup, lemon and cold water, born on these slopes for thirsty skiers. On the day everyone spent six hours in mountain spring water, the family toast is the local water-based classic. Order it at the mountain hut; make it again at home all winter.",
      servingNote: "Tall glass, lots of ice, roughly 1 part raspberry syrup to 5 parts water, big lemon squeeze"
    }
  },
  {
    dayNumber: 8,
    date: "2026-08-18",
    weekday: "Tuesday",
    departureTime: "09:00",
    rideToFirst: { duration: "25 min", note: "straight down the A12 to Kufstein" },
    region: "south",
    base: "Kramsach–Alpbachtal",
    title: "Kufstein — a real fortress above the Inn",
    subtitle: "Festung Kufstein by glass lift, the noon organ, optional Riedel glassworks",
    leadImage: "./images/kufstein-festung.jpg",
    activities: [
      {
        time: "09:45",
        title: "Festung Kufstein — up by the glass Panoramabahn",
        description:
          "The 800-year-old fortress glowers over the town from its rock — and the barrier-free glass Panoramabahn glides you from the visitor center straight to the top, no climb. Up there: ramparts to patrol, the deep well, cannons, the Kaiserturm, and lawns where the kids can safely charge around. The stroller comes up fine on the lift, but inside the towers it's stairs — carrier for Tom, and let Gili count the cannons. Open daily; last entry an hour before closing.",
        attractionId: "kufstein-festung",
        tag: "culture",
        rideToNext: { duration: "5 min", note: "walk down into the old town lanes", departAt: "12:15" }
      },
      {
        time: "12:00",
        title: "The Heldenorgel at noon, then lunch in the old town",
        description:
          "Time your descent for 12:00: the Heldenorgel — the world's largest open-air organ, built into the fortress tower in 1931 — plays every day at noon and echoes across the whole town. Listen from the square below, then lunch in the postcard-perfect Römerhofgasse lane.",
        attractionId: "kufstein-festung",
        tag: "culture",
        rideToNext: { duration: "5 min", note: "short drive across town to the Riedel works" }
      },
      {
        time: "14:00",
        title: "Riedel Glass — watch the glassblowers",
        description:
          "The famous wine-glass maker's Kufstein home opens its factory to visitors on weekdays: a museum, a multimedia 'Sinnfonie' walk, and a gallery view of glassblowers shaping red-hot glass. Public tours typically run late morning and early afternoon on weekdays — check times at riedel.com before committing. Gili gets fifteen fascinated minutes out of molten glass; that's the right dose. Skip freely if naps call.",
        attractionId: "riedel-glass",
        tag: "culture",
        optional: true
      }
    ],
    driveNotes:
      "Base → Kufstein ≈ 25 min straight up the A12 (it's the last town before the German border — you'll drive this same stretch to the airport on Thursday). Park at the City Parkgarage or the Riedel car park; both are a short walk from the fortress visitor center.",
    gear: [
      { item: "Carrier for Tom — the Panoramabahn is step-free but the fortress interiors are stairs on stairs", for: "kufstein-festung" },
      { item: "Sun hats — the ramparts and lawns at the top are shade-free at midday", for: "kufstein-festung" },
      { item: "Snack stash — the fortress café lines are slow at peak; the lawns are made for a picnic", for: "kufstein-festung" },
      { item: "A light layer for the Riedel factory hall — cool inside, hot at the furnace viewing", for: "riedel-glass" }
    ],
    dayTips: [
      "Be on the Panoramabahn by 10:00 — tour groups arrive from 11 and the fortress top is nicest empty",
      "Stand a little away from the organ tower at noon — the Heldenorgel is genuinely loud up close, and Tom may have opinions",
      "The fortress is partly barrier-free thanks to the lift, but plan for 'carrier terrain' inside the towers and casemates",
      "Riedel is closed Sundays and holidays and its tours are weekday-only — today (Tuesday) works; still check the day's tour times before driving over",
      "Kufstein is your fuel-up recon: note the petrol stations by the A12 on-ramp for the airport run on Thursday"
    ],
    italianWords: [
      {
        word: "Festung",
        pronounce: "FES-toong",
        meaning: "Fortress",
        example: "Die Festung ist auf dem Berg.",
        exampleMeaning: "The fortress is on the mountain."
      },
      {
        word: "Ritter",
        pronounce: "RIT-ter",
        meaning: "Knight",
        example: "Hier wohnten Ritter!",
        exampleMeaning: "Knights lived here!"
      },
      {
        word: "Kanone",
        pronounce: "kah-NOH-neh",
        meaning: "Cannon",
        example: "Eins, zwei, drei Kanonen!",
        exampleMeaning: "One, two, three cannons!"
      },
      {
        word: "Turm",
        pronounce: "toorm",
        meaning: "Tower",
        example: "Der Turm ist sehr hoch.",
        exampleMeaning: "The tower is very tall."
      },
      {
        word: "Musik",
        pronounce: "moo-ZEEK",
        meaning: "Music",
        example: "Hörst du die Musik? Das ist die Orgel!",
        exampleMeaning: "Do you hear the music? That's the organ!"
      },
      {
        word: "Glas",
        pronounce: "glahs",
        meaning: "Glass",
        example: "Das Glas ist heiß und rot!",
        exampleMeaning: "The glass is hot and red!"
      }
    ],
    drinkOfTheDay: {
      name: "Zweigelt",
      type: "wine",
      pairing:
        "Austria's flagship red — juicy sour cherry, soft tannins, dangerously drinkable. On the day you watched Riedel's glassblowers, drink an Austrian red from the glass they designed for it. If the hotel has Riedel stemware (many Tyrolean hotels do), tonight's the night to notice.",
      servingNote: "Lightly cooled (16 °C) — Austrians never serve red warm — ideally in a Burgundy-ish bowl"
    }
  },
  {
    dayNumber: 9,
    date: "2026-08-19",
    weekday: "Wednesday",
    departureTime: "09:30",
    rideToFirst: { duration: "5 min", note: "just across the Inn — Rattenberg is our neighbor town" },
    region: "south",
    base: "Kramsach–Alpbachtal",
    title: "Glass-town morning, warm-lake afternoon",
    subtitle: "Rattenberg's glassmakers, a swim at the Reintalersee, and the suitcase shuffle",
    leadImage: "./images/rattenberg.jpg",
    activities: [
      {
        time: "09:45",
        title: "Rattenberg — Austria's smallest town, made of glass",
        description:
          "Five minutes from the hotel: a single medieval main street, about 400 residents, and glass shops end to end — Rattenberg has been a glass town for centuries. At Kisslinger Kristall-Glas the craft workshop is viewable on weekdays: glassblowers, cutters and engravers at their benches (note: the blow-your-own-bauble sessions run Mondays and Fridays only, so today is watching, not blowing). The street is car-free, flat and stroller-perfect; the ice cream is where the street bends.",
        attractionId: "rattenberg",
        tag: "village",
        rideToNext: { duration: "10 min", note: "back through Kramsach to the Reintalersee", departAt: "12:30" }
      },
      {
        time: "13:00",
        title: "Reintalersee — a swim in Tyrol's warmest water",
        description:
          "The Kramsach lakes are famously the warmest bathing lakes in Tyrol — the Reintalersee regularly hits 24 °C in August, a different sport from the bracing Achensee. The lido has lawns, shallow entries and a playground; this is the low-effort victory-lap swim. Naps in the shade count as swimming.",
        tag: "water"
      },
      {
        time: "17:00",
        title: "The great suitcase shuffle",
        description:
          "Back to the hotel early. Pack everything except tomorrow's clothes, snacks and the airport entertainment bag. Set aside the vignette-and-fuel plan for the morning, and confirm the Sixt return details: 13:00, Terminalstraße Mitte, Parkhaus P6."
      }
    ],
    driveNotes:
      "The shortest driving day of the trip, on purpose: base → Rattenberg ≈ 5 min, Rattenberg → Reintalersee ≈ 10 min, lake → hotel ≈ 5 min. Save the fuel; tomorrow needs it.",
    gear: [
      { item: "Stroller for the flat, car-free glass street", for: "rattenberg" },
      { item: "Swim kit one last time — it goes in the laundry bag afterwards, not back in the suitcase" },
      { item: "Cash for lakeside lido entry and ice creams" },
      { item: "A small padded box or bubble wrap if you buy glass — hand luggage, never the checked bag", for: "rattenberg" }
    ],
    dayTips: [
      "Glass shops + toddlers = one parent browses while the other runs perimeter defense outside. Alternate. The shops are genuinely worth a look",
      "A little glass animal each is the right souvenir from Rattenberg — Gili picks hers, you pick Tom's",
      "If you wanted to blow your own glass bauble at Kisslinger, that runs Mondays and Fridays — today you watch the masters instead, which is free",
      "Do the packing at 17:00, not 21:00 — tonight ends with a proper last dinner, not a suitcase argument",
      "Check out the fridge: leftover snacks become tomorrow's car provisions"
    ],
    italianWords: [
      {
        word: "Klein",
        pronounce: "kline",
        meaning: "Small",
        example: "Rattenberg ist die kleinste Stadt Österreichs.",
        exampleMeaning: "Rattenberg is Austria's smallest town."
      },
      {
        word: "Warm",
        pronounce: "varm",
        meaning: "Warm",
        example: "Der See ist warm!",
        exampleMeaning: "The lake is warm!"
      },
      {
        word: "Koffer",
        pronounce: "KOF-fer",
        meaning: "Suitcase",
        example: "Wir packen die Koffer.",
        exampleMeaning: "We're packing the suitcases."
      },
      {
        word: "Andenken",
        pronounce: "AHN-den-ken",
        meaning: "Souvenir, keepsake",
        example: "Ein Andenken aus Glas für Gili.",
        exampleMeaning: "A glass souvenir for Gili."
      },
      {
        word: "Vorsichtig!",
        pronounce: "FOR-zikh-tikh",
        meaning: "Careful! (the word of the day in a glass shop)",
        example: "Vorsichtig, das ist aus Glas!",
        exampleMeaning: "Careful, that's made of glass!"
      }
    ],
    drinkOfTheDay: {
      name: "Weißer Spritzer",
      type: "wine",
      pairing:
        "The Austrian evening default: Grüner Veltliner cut half-and-half with sparkling water. Light enough for a packing night before a driving day, and the most Austrian possible way to toast nine nights in the valley — in a Rattenberg glass, if you bought one.",
      servingNote: "Half dry white wine, half soda water, plenty of ice — 'a G'spritzter' if you want to order like a local"
    }
  },
  {
    dayNumber: 10,
    date: "2026-08-20",
    weekday: "Thursday",
    departureTime: "10:30",
    rideToFirst: { duration: "1 h 45", note: "A12 → A93 → A8 to Munich Airport, plus a fuel stop" },
    region: "transit",
    base: "Kramsach–Alpbachtal → home",
    title: "Servus, Tirol — the drive home",
    subtitle: "Sixt return 13:00 at Terminalstr. Mitte P6 · LY254 departs 16:30",
    leadImage: "./images/munich-airport.jpg",
    activities: [
      {
        time: "08:00",
        title: "Last alpine breakfast, load the car",
        description:
          "Unhurried breakfast, final sweep of the room (check under the beds — that's where Tom's other shoe lives), car loaded by 10:15. One last look at the mountains.",
        rideToNext: { duration: "1 h 45", note: "fuel up near Kufstein before the border", departAt: "10:30" }
      },
      {
        time: "12:45",
        title: "Fuel + Sixt return at Parkhaus P6",
        description:
          "Fill the tank before the airport (a station near the Kufstein on-ramp or at the last Autobahn services — airport fuel prices are punitive). Rental return is signposted 'Mietwagen-Rückgabe': Terminalstraße Mitte, Parkhaus P6. Return by 13:00, keep the receipt, and it's a short walk into the terminal.",
        attractionId: "munich-airport"
      },
      {
        time: "13:15",
        title: "Check-in, security, LY254 at 16:30",
        description:
          "El Al flights from Munich come with thorough security interviews — the 3.5-hour buffer is not padding, it's the plan. Once through, MUC is a comfortable airport to burn an hour in: the kids' play areas and the observation options beat sitting at the gate. Land in Tel Aviv tonight with 2,000 photos and one glass marmot.",
        attractionId: "munich-airport"
      }
    ],
    driveNotes:
      "Base → Munich Airport ≈ 1 h 45 (160 km): A12 east past Kufstein, over the border onto the A93, then the A8 toward Munich and the airport spur. Leave by 10:30 — that's the drive plus a fuel stop plus a toddler-emergency margin, landing you at Sixt right on the 13:00 return slot.",
    gear: [
      { item: "The entertainment bag, loaded fresh: snacks, water, one new small surprise toy each for the flight" },
      { item: "Passports + booking confirmations in the daypack, not the suitcase" },
      { item: "The glass souvenirs wrapped in clothes in the HAND luggage", for: "munich-airport" },
      { item: "Change of clothes for both kids in the carry-on — flight insurance of the practical kind" },
      { item: "Empty water bottles through security, refill at the gate" }
    ],
    dayTips: [
      "Fuel receipt from within ~20 min of the airport is your proof of a full tank if Sixt queries it",
      "P6 return: follow 'Mietwagen' signs, not 'Parken' — they split late and the loop back costs ten minutes",
      "Do a full car sweep at the fuel stop, not at P6 — calm beats frantic for finding pacifiers under seats",
      "El Al security at MUC interviews every family — with kids you're often waved toward the shorter line; budget the time anyway",
      "One parent drops the bags at check-in while the other takes the kids straight to the play area — divide and survive"
    ],
    italianWords: [
      {
        word: "Auf Wiedersehen",
        pronounce: "owf VEE-der-zayn",
        meaning: "Goodbye (formal — 'until we see each other again')",
        example: "Auf Wiedersehen, Tirol!",
        exampleMeaning: "Goodbye, Tyrol!"
      },
      {
        word: "Tschüss",
        pronounce: "chuess",
        meaning: "Bye! (the casual one — Gili's by now)",
        example: "Tschüss, Berge!",
        exampleMeaning: "Bye, mountains!"
      },
      {
        word: "Flugzeug",
        pronounce: "FLOOK-tsoyk",
        meaning: "Airplane",
        example: "Unser Flugzeug fliegt nach Hause.",
        exampleMeaning: "Our airplane flies home."
      },
      {
        word: "Nach Hause",
        pronounce: "nahkh HOW-zeh",
        meaning: "(Going) home",
        example: "Wir fliegen nach Hause.",
        exampleMeaning: "We're flying home."
      },
      {
        word: "Bis bald",
        pronounce: "bis BAHLT",
        meaning: "See you soon",
        example: "Bis bald, Österreich!",
        exampleMeaning: "See you soon, Austria!"
      },
      {
        word: "Danke schön",
        pronounce: "DAHN-keh shern",
        meaning: "Thank you very much",
        example: "Danke schön für alles!",
        exampleMeaning: "Thank you very much for everything!"
      }
    ],
    drinkOfTheDay: {
      name: "Wiener Melange",
      type: "coffee",
      pairing:
        "One last Austrian ritual before the gate: the Viennese classic — espresso stretched with steamed milk and a cap of foam, halfway between a cappuccino and a hug. Order it airside at MUC, toast the trip, and start the list for next time.",
      servingNote: "Served in a small cup with a glass of water on the side — the Austrian café way"
    }
  }
];
