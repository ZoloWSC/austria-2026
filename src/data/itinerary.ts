import type { Day } from "./types";

// TYROL 2026 — the Zillertal & the Lower Inn Valley with two toddlers.
// One anchor activity per day, naps are sacred, no drive over ~50 min
// except the two airport transfers. Base for seven of the nine nights: the
// Aparthotel Stacherhof in Fügen (Kleinboden), Zillertal — booked, check-in
// Wed 12 Aug, check-out Wed 19 Aug. Night 1 is the Hilton at Munich Airport;
// the night of 19→20 Aug is near Munich — decided, but the specific hotel is
// still being booked, so Day 9 and Day 10 deliberately stay hotel-agnostic.
export const itinerary: Day[] = [
  {
    dayNumber: 1,
    date: "2026-08-11",
    weekday: "Tuesday",
    region: "transit",
    base: "Munich Airport (Hilton)",
    title: "Land in Munich, sleep at the airport",
    subtitle: "LY351 lands 18:50 · dinner & a soft bed at the Hilton Munich Airport — no driving tonight",
    leadImage: "./images/munich-airport.jpg",
    activities: [
      {
        time: "18:50",
        title: "Land at Munich Airport (MUC)",
        description:
          "LY351 touches down at 18:50. Passport control with two tired toddlers takes a while — split up: one parent grabs the bags, the other keeps Gili and Tom moving. No rush and no rental car tonight: the hotel is a two-minute covered walk from the terminal.",
        attractionId: "munich-airport"
      },
      {
        time: "~19:45",
        title: "Check in at the Hilton Munich Airport",
        description:
          "The Hilton sits right at the airport, connected to the terminals by a covered walkway — wheel the bags and the kids straight over, no shuttle, no car. Dinner at the hotel, warm baths, everyone into bed. Tonight's whole job is simple: let Gili and Tom sleep off the travel day before the drive into the Zillertal tomorrow."
      }
    ],
    driveNotes:
      "No driving today — the Hilton is connected to the terminal, so land, walk over, and rest. You pick up the Sixt car tomorrow morning and drive into the Zillertal then (Munich Airport → Fügen is ≈ 1 h 50). Do buy the Austrian digital vignette online tonight so it's already sorted before you cross the border in the morning.",
    gear: [
      { item: "Passports and the Hilton confirmation handy in the daypack" },
      { item: "Pyjamas, toothbrushes and one comfort toy each at the top of a bag for a zero-search bedtime" },
      { item: "Light jackets over the carry-on — Munich evenings run cooler than Tel Aviv" },
      { item: "Milk, water and a few snacks for the room (there's an Edeka in the MAC Forum between the terminals) — no need to stock up on breakfast, the Stacherhof includes it" }
    ],
    dayTips: [
      "The Hilton is a covered two-minute walk from the terminals — you don't need the car or a shuttle tonight",
      "Buy the Austrian digital vignette (asfinag.at) tonight so tomorrow's border crossing is one less stop",
      "Keep some euros in coins for tomorrow — small Tyrolean kiosks and parking machines still love cash",
      "Eat early at the hotel or order room service — the kids will fade fast after the flight"
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
        "Austria's beloved herbal-lemonade — alpine herbs, fizzy, zero alcohol. The right welcome-to-the-Alps toast after a travel day, with an early night ahead and no car keys to worry about. It's on every menu here; consider it your arrival ritual.",
      servingNote: "Ice-cold from the bottle, or over ice with a lemon slice"
    }
  },
  {
    dayNumber: 2,
    date: "2026-08-12",
    weekday: "Wednesday",
    departureTime: "09:00",
    rideToFirst: { duration: "40 min", note: "Sixt pickup at MUC, then the A8 south to exit 96 Hofoldinger Forst" },
    region: "north",
    base: "Munich → Fügen (Zillertal)",
    title: "Into the Alps — a car, an animal park, and home for a week",
    subtitle: "Morning Sixt pickup at MUC · BergTierPark Blindham on the way south · check in at the Stacherhof mid-afternoon",
    leadImage: "./images/bergtierpark-blindham.jpg",
    activities: [
      {
        time: "09:00",
        title: "Breakfast, then Sixt pickup at MUC Airport Center",
        description:
          "Unhurried hotel breakfast, then walk to the Sixt desk in the Airport Center between Terminals 1 and 2. Confirm both child seats are installed and actually fit before you leave the garage, and note the car's height while you're at it — the Stacherhof garage tops out at 2.20 m. Make sure the Austrian vignette is sorted (buy it online now if you didn't last night), set the nav for Blindham, and roll by about 10:00.",
        attractionId: "munich-airport",
        rideToNext: { duration: "40 min", note: "A8 south toward Salzburg, exit 96 Hofoldinger Forst, then village lanes to Blindham near Aying", departAt: "10:00" }
      },
      {
        time: "~10:45",
        title: "BergTierPark Blindham — sheep to feed, a barn to run wild in",
        description:
          "The day's one real activity, and it's the right one: a small hill-animal park forty minutes south of the airport where the kids do the touching. A petting enclosure where Gili can feed and stroke the sheep, then deer, wild boar and beavers along a stroller-friendly loop of about 2 km with playgrounds dotted down it. Hire one of the pull-along wagons at the entrance (around €3) and Tom rides while Gili pulls. If the Bavarian sky turns — and it might — the SpielStadl indoor play barn is some 2,000 m² of toddler area, sandpit and ride-on cars, so the day survives rain intact. Lunch at the cafeteria on site. Budget two to two and a half hours and let them burn every last bit of energy here; the long stretch south comes next. Check the day's opening hours before you set off.",
        attractionId: "bergtierpark-blindham",
        tag: "family",
        rideToNext: { duration: "1 h 30", note: "back onto the A8, then the A93 over the Kufstein border, the A12 west and the B169 up the Zillertal", departAt: "14:00" }
      },
      {
        time: "~15:30",
        title: "Arrive in Fügen and settle into the Stacherhof",
        description:
          "Both kids should be asleep before the border, which is exactly the plan. Check into the Stacherhof in Fügen, home for the next seven nights: the chalet suite has two bedrooms, a kitchen, two bathrooms and a balcony, and the underground garage is free and monitored (2.20 m height limit — worth remembering if Sixt handed you something tall). Breakfast is included, so there's nothing to shop for tonight. Unpack properly today instead of living out of bags, then go find the natural swimming pond and the new playground — they're steps from the door. The sauna and wellness area is 14+, so that one's not for Gili and Tom. Easy first dinner, early night."
      }
    ],
    driveNotes:
      "Two legs with a long play stop between them, which is the whole point. Munich Airport → BergTierPark Blindham ≈ 40 min: the A8 south toward Salzburg, exit 96 Hofoldinger Forst, then a few minutes of village lanes near Aying. Blindham → Fügen ≈ 1 h 30: back onto the A8, south on the A93, across the Austrian border at Kufstein, west on the A12 to the Zillertal exit, then the B169 up the valley (Fügen is about 10 min off the motorway). The vignette has to be active before Kufstein. No mountain roads anywhere today — motorway plus the valley run in, with a nap-shaped gap in the middle.",
    gear: [
      { item: "Passports, driving licence and the Sixt booking confirmation handy for pickup" },
      { item: "Cash in small notes for the park entry, the pull-along wagon (~€3) and the cafeteria", for: "bergtierpark-blindham" },
      { item: "Closed shoes for both kids plus wet wipes and hand gel — there's a petting enclosure and a sandpit", for: "bergtierpark-blindham" },
      { item: "A light rain layer each — if the sky turns, the indoor SpielStadl becomes the whole plan", for: "bergtierpark-blindham" },
      { item: "Snacks and full water bottles for the 1 h 30 leg south — the fewer stops after Blindham, the better" },
      { item: "Swim gear near the top of a bag — the Stacherhof's swimming pond is the first thing Gili will spot" }
    ],
    dayTips: [
      "The Austrian digital vignette has to be active BEFORE you cross at Kufstein — a German rental doesn't include it, so buy it online this morning if last night got away from you",
      "Check both child seats in the Sixt garage, not on the A8 shoulder — five calm minutes now saves an ugly stop later",
      "BergTierPark is today's whole job: it burns the kids' energy before the long stretch south, and the indoor play barn means rain doesn't cancel anything. Check the day's opening hours before you set off",
      "Ask about the pull-along wagons at the entrance (a couple of euros) — with Tom riding, the 2 km loop stops being a negotiation",
      "Aim to be back in the car by 14:00: the drive down is a nap, and a ~15:30 check-in leaves a whole easy evening for the pond, the playground and a first quiet dinner",
      "Don't add anything else today — travel day plus one animal park is the plan, and unpacking properly tonight pays off all week"
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
      name: "Hugo",
      type: "cocktail",
      pairing:
        "The Alps' summer spritz — prosecco, elderflower syrup, mint and soda. Elderflower grows on the Bavarian meadows you walked through this morning, and after a day of sheep, a play barn and an hour and a half of Autobahn, its light floral fizz on the Stacherhof balcony is exactly right.",
      servingNote: "Big wine glass, lots of ice, a mint sprig and a squeeze of lime"
    }
  },
  {
    dayNumber: 3,
    date: "2026-08-13",
    weekday: "Thursday",
    departureTime: "09:00",
    rideToFirst: { duration: "25 min", note: "B169 down to Strass, then the A12 west to the Wattens exit" },
    region: "north",
    base: "Fügen (Zillertal)",
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
          "Half an hour back east on the A12 and up the Zillertal. If the kids are asleep, stretch the last bit on the valley road rather than waking them — and once you're back, the Stacherhof's swimming pond and playground are the whole afternoon plan."
      }
    ],
    driveNotes:
      "Fügen → Wattens ≈ 25 min: ten minutes down the B169 to the A12 at Strass, then west to the Wattens exit. Wattens → Hall in Tirol ≈ 15 min, Hall → Fügen ≈ 30 min. Almost all flat valley motorway plus the short Zillertal hop at each end — the easiest driving day of the trip.",
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
    departureTime: "08:50",
    rideToFirst: { duration: "5 min", note: "the Spieljochbahn valley station is in our own village — five minutes down the hill" },
    region: "south",
    base: "Fügen (Zillertal)",
    title: "Family mountain morning, Alpbachtal afternoon",
    subtitle: "Spieljoch Fügen gondola at 1,860 m, then Juppi's enchanted forest above Reith — the fullest day of the week, with three cut-first extras",
    leadImage: "./images/spieljoch-fuegen.jpg",
    activities: [
      {
        time: "09:00",
        title: "Spieljochbahn up the family mountain",
        description:
          "Our own village's certified family mountain — the valley station is five minutes from the Stacherhof, so the morning needs no real drive at all. The gondola runs daily in peak season (first ascent 09:00, last descent 17:00 through late August). At the top station you get a toddler jackpot: a water play area, barefoot path, a walk-in show mine, and a big adventure playground, all within a hundred meters of the lift and the Mountain Loft restaurant. Gili roams free, Tom paddles at the water channels; nobody has to hike anywhere. Eat an early lunch up top at the Mountain Loft so the afternoon can start straight from the valley station.",
        attractionId: "spieljoch-fuegen",
        tag: "family",
        rideToNext: { duration: "25 min", note: "down the B169 to Strass, one junction east on the A12 to Kramsach, then up into the Alpbachtal to Reith", departAt: "12:45" }
      },
      {
        time: "13:15",
        title: "Juppi Zauberwald — the enchanted forest on the Reither Kogel",
        description:
          "The valley next door, and the softest afternoon in the region. Ride the Reitherkogelbahn up (it runs daily except its Wednesday rest day — today is Friday, we're fine; last descent is around 16:30–17:00, so check the board at the valley station and give yourselves a clear hour of margin). At the top, Juppi's Zauberwald is a shaded 2.5 km loop of play stations — witch's house, wooden xylophones, balance trails, water wheels — pitched exactly at Gili's speed, and entry is included in the lift ticket. You do not have to finish the loop: after a mountain morning, half of it plus a bench and a snack is a complete success.",
        attractionId: "juppi-zauberwald",
        tag: "family",
        rideToNext: { duration: "10 min", note: "over the hill into Alpbach village", departAt: "15:45" }
      },
      {
        time: "16:00",
        title: "Alpbach — Austria's prettiest village, at nap pace",
        description:
          "Alpbach's wooden farmhouses drip with geraniums — the village has won 'most beautiful in Austria' honors and every balcony shows why. Lunch already happened on the mountain, so this is the short version: park once, walk a slow lap, ice cream, the playground by the school, and the photos that end up framed. Ten minutes or an hour, whatever the kids have left.",
        attractionId: "alpbach-village",
        tag: "village",
        optional: true,
        rideToNext: { duration: "5 min", note: "up the valley to the Wiedersbergerhorn gondola at Inneralpbach" }
      },
      {
        time: "Only if the day is flying",
        title: "Lauser-Sauser alpine coaster — parents alternate",
        description:
          "The year-round rail coaster at the Wiedersbergerhorn gondola drops 134 m over 1.4 km, including Austria's highest loop-carousel. From age 3 kids may ride as a passenger in front of an adult, so Gili qualifies; from 8 (and 1.30 m) they ride alone. Tom can't ride, so parents alternate: one takes Gili down squealing, the other has a coffee at the valley station with Tom. Check the gondola's summer hours at the base station before riding up — and be honest about the clock: after a gondola morning and the Zauberwald, this is the extra that most likely waits for another trip.",
        attractionId: "lauser-sauser",
        tag: "extreme",
        optional: true,
        rideToNext: { duration: "30 min", note: "down the Alpbachtal to Kramsach, west on the A12 to Wiesing, then the B169 home — Jenbach station is right on the way" }
      },
      {
        time: "Swap-in, not an add-on",
        title: "Zillertalbahn steam train",
        description:
          "The narrow-gauge Zillertalbahn still runs a real steam locomotive with wooden carriages between Jenbach and Mayrhofen — in summer it operates Tuesday to Saturday, so today qualifies. A short hop (Jenbach → Fügen) is plenty for the kids: whistle, smoke, clickety-clack, done in half an hour. Now that the Alpbachtal sits in this afternoon, treat the steam train as the first thing to cut — or as the swap if the Reitherkogelbahn is closed or the weather turns and you come home early. Check the day's departures at Jenbach station or zillertalbahn.at rather than building anything around it.",
        attractionId: "zillertalbahn",
        tag: "family",
        optional: true,
        rideToNext: { duration: "15 min", note: "Jenbach up the B169 to Fügen" }
      },
      {
        time: "~17:30",
        title: "Back to base, swimming pond and dinner",
        description:
          "Half an hour home from Alpbach, fifteen minutes from Jenbach, five straight from the gondola if you cut the whole afternoon. Whatever you managed, the Stacherhof's natural swimming pond and new playground close out the day, and there's a ball-games lawn if anyone somehow still has legs."
      }
    ],
    driveNotes:
      "The morning is the home-valley day: the Spieljochbahn valley station is ≈ 5 min from the Stacherhof, down the hill and through Fügen — the shortest drive of the whole trip, and genuinely walkable if you're feeling energetic. The afternoon is the valley next door: Spieljoch → Reith im Alpbachtal ≈ 25–30 min (B169 down to Strass, one junction east on the A12 to Kramsach, then up into the Alpbachtal), Reith → Alpbach ≈ 10 min, Alpbach → Fügen ≈ 30 min. Jenbach station, if the steam train tempts you, is right on the way home (≈ 15 min out of Fügen). No single leg is over half an hour and there's no proper mountain-road driving — but this is the fullest day of the week, so bank on naps happening in the car and cut from the bottom of the list without guilt.",
    gear: [
      { item: "Change of clothes and a small towel for the summit water play area", for: "spieljoch-fuegen" },
      { item: "A second change of clothes — the Zauberwald's water-wheel stations always win", for: "juppi-zauberwald" },
      { item: "Carrier for Tom, or the all-terrain stroller — gravel at 1,860 m and a gravel forest loop in the afternoon", for: "juppi-zauberwald" },
      { item: "Fleece layers — it's 10 °C cooler at 1,860 m than in the valley", for: "spieljoch-fuegen" },
      { item: "Closed shoes for the show mine (cool and dim inside) — the same pair does for the coaster", for: "spieljoch-fuegen" },
      { item: "Picnic snacks for the Zauberwald's benches — you'll want a sit-down halfway round", for: "juppi-zauberwald" },
      { item: "Sunscreen — alpine sun above the treeline is fierce even at 20 °C" }
    ],
    dayTips: [
      "Ride up before 09:30 — clear morning views, empty playground, and you're eating an early lunch at the Mountain Loft while the crowds arrive",
      "This is now a two-anchor day, which is one more than our usual rule: the honest cut order is steam train first, then Lauser-Sauser, then Alpbach village. Getting the gondola and the Zauberwald is a full, happy day",
      "The Reitherkogelbahn rests on Wednesdays — today is Friday, so it runs; just don't ever move this pair onto a Wednesday",
      "The gondola cabins take strollers, no problem — no folding gymnastics required, at either lift",
      "If clouds sit low on the peaks in the morning, flip the halves: the Zauberwald is shaded forest and copes with grey far better than a summit does",
      "The Alpbachtal Card that covers the Reitherkogelbahn comes with Alpbachtal accommodation — we're in the Zillertal, so assume you're paying at the counter, and ask the Stacherhof reception which Zillertal card covers the Spieljoch"
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
        "Brewed in Zell am Ziller since 1500, a few kilometers up the valley you played in this morning. After the longest day of the week — a family mountain, a magic forest and two valleys — the Zillertal Weißbier is banana-y, cloudy, cold, and as local as a beer pairing gets on this trip.",
      servingNote: "Weißbier glass, poured slowly, yeast swirled in at the end"
    }
  },
  {
    dayNumber: 5,
    date: "2026-08-15",
    weekday: "Saturday",
    departureTime: "09:00",
    rideToFirst: { duration: "40 min", note: "B169 down to Strass, then the A12 west to Innsbruck" },
    region: "north",
    base: "Fügen (Zillertal)",
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
      "Fügen → Innsbruck ≈ 40 min: ten minutes down the B169 to the A12 at Strass, then straight west up the Inn valley. One of the two long day-trip drives of the week (Monday's Söll run is the other), timed against morning energy. Park once at the Congress/Hungerburgbahn garage and let the funicular handle the hill; driving up to the zoo directly is possible but the small lot fills fast on holidays.",
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
    rideToFirst: { duration: "40 min", note: "B169 down to Strass, A12 west to Wiesing, then the switchback climb up to Pertisau" },
    region: "south",
    base: "Fügen (Zillertal)",
    title: "Achensee Sunday — Tyrol's big turquoise lake",
    subtitle: "Strandbad Pertisau: lawn, pirate ship, shallow water · the 1887 steamer from the dock if the timetable plays along",
    leadImage: "./images/achensee.jpg",
    activities: [
      {
        time: "~10:15",
        title: "Strandbad Pertisau — beach, playground, shallow water",
        description:
          "The lakeside lido on the Pertisau shore is built for exactly this crew: a huge lawn, a pirate-ship playground with slide and sandbox, a shallow children's pool, and a gently shelving lake entry that a one-and-a-half-year-old can walk into. The water is drinking-water clear and famously brisk — Gili will be in it anyway. Grab a shaded spot under the sun sails and let the whole morning go: the Karwendel peaks do the view work while you do the lifeguarding. The lake sits at about 950 m, so the water and the air both need the sun to get going — the later half of the morning is the warmer half.",
        attractionId: "achensee",
        tag: "water",
        rideToNext: { duration: "5 min", note: "short hop along the shore to the Pertisau dock" }
      },
      {
        time: "Early afternoon",
        title: "Boat ride on the lake",
        description:
          "The Achensee ships have run since 1887 and sail in summer between the lake's docks. Hop on at Pertisau for a short leg — kids under 6 ride free, and the top deck is toddler-thrilling without being scary. Confirm the boat timetable at the dock (or on achenseeschifffahrt.at) before you plan around it, and only go if the sailing lines up with the kids rather than against them; the beach is a perfectly good afternoon on its own.",
        attractionId: "achensee",
        tag: "water",
        optional: true,
        rideToNext: { duration: "40 min", note: "down the switchbacks to Wiesing, one junction east on the A12, then the B169 into the Zillertal to Fügen" }
      },
      {
        time: "~16:00",
        title: "Down the mountain road, home for dinner",
        description:
          "The winding descent does what it does best — both kids asleep before Wiesing. Forty minutes later you're back in Fügen with sandy feet and nothing left to organise: the Stacherhof's swimming pond is warmer than the lake was, the playground is right there, and Sunday dinner can be as simple as you like.",
      }
    ],
    driveNotes:
      "Fügen → Pertisau ≈ 35–40 min: ten minutes down the B169 to the A12 at Strass, west one junction to Wiesing, then the switchback climb up to the Achensee — a proper mountain road for about ten minutes, smooth but curvy, and the one bit of today that a car-sick toddler might notice. From the top it's flat shore road along the lake into Pertisau, with big car parks at the Strandbad. Same road home, and the descent is a reliable nap-maker.",
    gear: [
      { item: "Swim gear, swim diaper for Tom, and a full change of clothes for everyone", for: "achensee" },
      { item: "Water shoes — the lake entry is pebbly in places", for: "achensee" },
      { item: "Sun hats and SPF50 — mountain sun at 950 m is stronger than it feels", for: "achensee" },
      { item: "A windbreaker layer each for the boat deck — it's breezy on the water even in August", for: "achensee" },
      { item: "Cash for the Strandbad entry, the boat tickets and ice creams — small Tyrolean kiosks still love it" }
    ],
    dayTips: [
      "The lake sits at ~950 m: the morning can start at 15 °C even when the afternoon hits 27 °C, so layer the kids and let the sun warm the shallows before the serious swimming",
      "Kids under 6 sail free on the Achensee ships — buy tickets right at the dock, and confirm the day's timetable there rather than trusting a printed schedule",
      "Afternoon thunderstorms are an Alpine summer classic: do the water first, keep the boat flexible, and don't be on the top deck when the sky goes dark",
      "August Sundays fill the Strandbad by midday — arriving around 10:00 gets you a shaded spot and a parking space near the entrance",
      "The drive up and down is the only mountain road of the week: ten curvy minutes each way, so keep a snack and a bag within reach and take the descent slowly if anyone's asleep"
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
      name: "Obstler",
      type: "digestif",
      pairing:
        "The Tyrolean farmhouse schnaps — clear fruit brandy distilled from apples and pears, and every gasthof around the Achensee pours a homemade one. After a Sunday of cold turquoise water and a boat deck, one small glass 'für die Verdauung' is the local liturgy.",
      servingNote: "A tiny stem glass, room temperature, sipped — never shot"
    }
  },
  {
    dayNumber: 7,
    date: "2026-08-17",
    weekday: "Monday",
    departureTime: "08:30",
    rideToFirst: { duration: "50 min", note: "B169 to Strass, A12 east toward Kufstein, exit Wörgl-Ost, then the B178 up to Söll" },
    region: "south",
    base: "Fügen (Zillertal)",
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
          "Buy the fresh witch-bakery bread on the way out — breakfast at the Stacherhof is included, so make this tonight's dinner bread instead. Then fifty minutes of valley motorway does the rest; nobody will be awake past Wörgl."
      }
    ],
    driveNotes:
      "Fügen → Söll ≈ 50 min: ten minutes down the B169 to the A12 at Strass, east toward Kufstein, exit at Wörgl-Ost, then the B178 to the Hexenwasser gondola's big free car park. It's the longest day-trip drive of the week now that we're based in the Zillertal — leave by 08:30 and it's done before anyone notices. Same directions in reverse for the sleepy ride home.",
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
    departureTime: "08:45",
    rideToFirst: { duration: "45 min", note: "B169 down to Strass, then the A12 north-east to Kufstein" },
    region: "south",
    base: "Fügen (Zillertal)",
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
      "Fügen → Kufstein ≈ 45 min: ten minutes down the B169 to the A12 at Strass, then straight north-east down the Inn valley (Kufstein is the last town before the German border — you'll drive this same stretch to the airport on Thursday, so today doubles as a dry run). Park at the City Parkgarage or the Riedel car park; both are a short walk from the fortress visitor center.",
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
    rideToFirst: { duration: "20 min", note: "B169 down to Strass, then one junction east on the A12 to Rattenberg" },
    region: "south",
    base: "Fügen (check-out) → Munich",
    title: "Check out, glass town, one last lake",
    subtitle: "Out of the Stacherhof, an hour in Rattenberg, lunch and a long swim at the Chiemsee, then a Munich hotel for the night",
    leadImage: "./images/chiemsee-uebersee.jpg",
    activities: [
      {
        time: "08:00",
        title: "Last breakfast, check out, load the car",
        description:
          "Seven nights done. Last included breakfast, then the full sweep: pack everything, check under the beds (that's where Tom's other shoe lives), empty the apartment fridge into the car snack bag, and get the boot loaded before you go anywhere — you want to be rolling by about 09:30. Pack the swim kit and one night's clothes for all four of you on top of the load; everything else can stay buried until Tel Aviv. From here on the car is home base until the Munich hotel tonight.",
      },
      {
        time: "09:50",
        title: "Rattenberg — Austria's smallest town, made of glass",
        description:
          "Twenty minutes down the valley and directly on the way out: a single medieval main street, about 400 residents, and glass shops end to end — Rattenberg has been a glass town for centuries. At Kisslinger Kristall-Glas the craft workshop is viewable on weekdays: glassblowers, cutters and engravers at their benches. Keep it light — the car is already loaded and an hour here is plenty. The street is car-free, flat and stroller-perfect, the ice cream is where the street bends, and a little glass animal each is the right souvenir of the week.",
        attractionId: "rattenberg",
        tag: "village",
        rideToNext: { duration: "1 h 15", note: "A12 north-east over the Kufstein border onto the A93, then the A8 toward Munich and off at Übersee", departAt: "11:15" }
      },
      {
        time: "~12:30",
        title: "Chiemsee at Übersee — lunch and the last real swim",
        description:
          "Five minutes off the A8's Übersee exit, on the Chiemsee's southern shore: the Feldwieser Bucht and the Strandbad at Übersee, where the Bavarian sea shelves so gently that Tom can wade in on his own two feet. Big lawns, food on site, and a playground with carousels, climbing frames, slides and swings for when swimming stops being enough. This is the last real play of the trip, so give it the whole afternoon — lunch first, then let them run it into the ground. Check the day's opening and lifeguard hours at the entrance, and pick your lawn spot with some shade in it.",
        attractionId: "chiemsee-uebersee",
        tag: "water",
        rideToNext: { duration: "1 h", note: "back onto the A8 north-west toward Munich", departAt: "16:00" }
      },
      {
        time: "Late afternoon",
        title: "Check in at the Munich hotel",
        description:
          "Tonight you sleep near Munich — that part is decided; the specific hotel is still being booked, so check the Lists section for the confirmed address before you set the nav after the lake. Wherever it lands, unpack exactly one night's worth and no more, then repack the airport bag on top: passports, boarding passes, the glass souvenirs wrapped in clothes, and the flight entertainment. Tomorrow's fixed points don't move — Sixt return by 13:00 at Terminalstraße Mitte, Parkhaus P6, and LY254 at 16:30 — but from a Munich bed they're suddenly relaxed instead of tight.",
      }
    ],
    driveNotes:
      "Check-out morning, so the car gets loaded before anything else happens — and today the driving actually adds up, split into three friendly pieces. Fügen → Rattenberg ≈ 20 min (B169 down to Strass, then one junction east on the A12). Rattenberg → Chiemsee/Übersee ≈ 1 h 15: on north-east past Kufstein, over the German border onto the A93, then the A8 toward Munich and off at the Übersee exit, with the lido about five minutes from the motorway. Übersee → Munich ≈ 1 h back up the A8. All motorway, no mountain roads, and the long swim in the middle is what keeps the day from feeling like a transfer.",
    gear: [
      { item: "Swim kit and towels packed where you can reach them — they go into the laundry bag after the Chiemsee, not back into a suitcase" },
      { item: "One night's clothes for all four of you on top of the load — you unpack almost nothing at the Munich hotel" },
      { item: "Stroller for the flat, car-free glass street", for: "rattenberg" },
      { item: "A small padded box or bubble wrap if you buy glass — hand luggage, never the checked bag", for: "rattenberg" },
      { item: "Cash and coins for the lido entry, ice creams and German parking machines — you're in Bavaria from lunchtime on" }
    ],
    dayTips: [
      "Check-out is this morning, not tonight — load the car before Rattenberg and the whole day stays easy",
      "Tonight is near Munich: that's decided, but the hotel itself is still being booked — check the Lists section for the confirmed address before you set the nav after the lake",
      "Rattenberg is the light stop, not an outing: an hour on the glass street with the car already packed, then move on to the lake while the kids still have an afternoon in them",
      "Glass shops + toddlers = one parent browses while the other runs perimeter defense outside. Alternate. The shops are genuinely worth a look",
      "The Chiemsee is the last swim of the trip — plan the day so it gets four unhurried hours, not the leftovers",
      "Empty the apartment fridge at check-out: leftover snacks become today's car provisions, and there's a real drive today"
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
        "The Austrian evening default: Grüner Veltliner cut half-and-half with sparkling water. Light enough for a day that ends with a hotel check-in, and the most Austrian possible way to toast seven nights in the Zillertal — from a Rattenberg glass, if you bought one. You're in Bavaria by dinner, so ask for a 'Weinschorle' and you'll get the same thing.",
      servingNote: "Half dry white wine, half soda water, plenty of ice — 'a G'spritzter' if you want to order like a local"
    }
  },
  {
    dayNumber: 10,
    date: "2026-08-20",
    weekday: "Thursday",
    departureTime: "10:45",
    rideToFirst: { duration: "short — depends on the hotel", note: "a fuel stop, then the airport spur; from an airport hotel it's minutes" },
    region: "transit",
    base: "Munich → home",
    title: "Auf Wiedersehen — a slow morning, then home",
    subtitle: "Sixt return 13:00 at Terminalstr. Mitte P6 · LY254 departs 16:30",
    leadImage: "./images/munich-airport.jpg",
    activities: [
      {
        time: "~09:00",
        title: "A proper hotel breakfast — there's finally time for one",
        description:
          "Sleeping near Munich buys you the one thing every previous morning lacked: no drive to speak of. Have the full breakfast, let the kids take it slowly, do the final room sweep (check under the beds — that's where Tom's other shoe lives), and have the car loaded by around 10:30. One last coffee while Gili tells you which animal was her favourite.",
        rideToNext: { duration: "short — depends on the hotel", note: "fuel up on the way, not at the airport", departAt: "10:45" }
      },
      {
        time: "12:15",
        title: "Fuel + Sixt return at Parkhaus P6",
        description:
          "Fill the tank on the way in — a station a few minutes short of the airport, never the airport itself, where the prices are punitive. Rental return is signposted 'Mietwagen-Rückgabe': Terminalstraße Mitte, Parkhaus P6. Return by 13:00, keep the fuel receipt and the return paperwork, and it's a short walk into the terminal. Do the full car sweep at the petrol station rather than at P6 — calm beats frantic for finding pacifiers under seats.",
        attractionId: "munich-airport"
      },
      {
        time: "13:15",
        title: "Check-in, security, LY254 at 16:30",
        description:
          "El Al flights from Munich come with thorough security interviews — the 3.5-hour buffer is not padding, it's the plan. Once through, MUC is a comfortable airport to burn an hour in: the kids' play areas and the plane-watching beat sitting at the gate. Land in Tel Aviv tonight with 2,000 photos and one glass marmot.",
        attractionId: "munich-airport"
      }
    ],
    driveNotes:
      "Today's drive is short — how short depends on which Munich hotel gets booked. If it's an airport hotel, the transfer is a matter of minutes; from the city or the A8 side of Munich, budget 30–45 minutes plus the fuel stop and the usual toddler margin. Either way this is the calmest last morning of the trip: yesterday's drive up from the Zillertal did all the hard work, so leaving around 10:45 lands you at Sixt comfortably inside the 13:00 return slot with time for a real breakfast first. Once the hotel is confirmed, check its actual airport transfer — several of the Munich-area hotels run a shuttle, which is worth knowing if the return of the car and the walk to check-in ever feel tight.",
    gear: [
      { item: "The entertainment bag, loaded fresh: snacks, water, one new small surprise toy each for the flight" },
      { item: "Passports + booking confirmations in the daypack, not the suitcase" },
      { item: "The glass souvenirs wrapped in clothes in the HAND luggage", for: "munich-airport" },
      { item: "Change of clothes for both kids in the carry-on — flight insurance of the practical kind" },
      { item: "Empty water bottles through security, refill at the gate" }
    ],
    dayTips: [
      "You're starting from Munich, so today has something no other morning had: time. A full hotel breakfast, no rushing the kids, and still at Sixt well before 13:00",
      "Fuel receipt from within ~20 min of the airport is your proof of a full tank if Sixt queries it",
      "P6 return: follow 'Mietwagen' signs, not 'Parken' — they split late and the loop back costs ten minutes",
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
        "One last Alpine ritual before the gate: the Viennese classic — espresso stretched with steamed milk and a cap of foam, halfway between a cappuccino and a hug. You left Austria yesterday, but MUC still pours one; order it airside, toast the trip, and start the list for next time.",
      servingNote: "Served in a small cup with a glass of water on the side — the Austrian café way"
    }
  }
];
