import type { Day } from "./types";

// TYROL 2026 — Hila's plan, merged and pressure-tested against real drive times.
// The rhythm is hers and it is deliberately built for a 3-year-old and a
// 1.5-year-old: one morning anchor at ~08:30 (a lift, a play world, water),
// lunch around 12:30, the nap in the car during the transfer, a gentler
// afternoon, home by ~17:00. Play parks, gondolas and lakes — no museums.
//
// Base for seven of the nine nights: the Aparthotel Stacherhof in Fügen
// (Kleinboden), Zillertal — booked, check-in Wed 12 Aug, check-out Wed 19 Aug,
// breakfast included, natural swimming pond and playground on site, free
// underground garage with a 2.20 m height limit. Night 1 is the Hilton at
// Munich Airport; the night of 19→20 Aug is in the Freising / Munich-airport
// area — decided, but the specific hotel is still being booked, so Day 9 and
// Day 10 stay deliberately hotel-agnostic.
//
// Every drive time in this file was measured on a routing engine, and where a
// measurement disagreed with the original plan the file says so out loud
// (Hintersteiner See is 65 min not 40, Söll is 52 not 35, Waidring is 76 not
// 55, the drive to Freising is a full 2 h). Three standing notes run through
// every day: the nap is planned into the transfer, the permanent kit lives in
// the car, and the Austrian vignette has to be valid before Kufstein.
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
      "No driving today — the Hilton is connected to the terminal, so land, walk over, and rest. You pick up the Sixt car tomorrow morning and drive into the Zillertal then (Munich Airport → Fügen is a measured 1 h 50, 185 km). Do buy the Austrian digital vignette online tonight so it's already sorted before you cross the border in the morning.",
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
    departureTime: "08:30",
    rideToFirst: { duration: "1 h 50", note: "Sixt pickup at MUC Airport Center, then the A8/A93 south over the Kufstein border and up the B169 — 185 km" },
    region: "transit",
    base: "Munich → Fügen (Zillertal)",
    title: "Into the Alps — a car, a gondola, and home for a week",
    subtitle: "Sixt pickup at MUC · Spieljoch's summit play world above our own village · check in at the Stacherhof · an easy river ride before dinner",
    leadImage: "./images/spieljoch-fuegen.jpg",
    activities: [
      {
        time: "08:00",
        title: "Breakfast, then Sixt pickup at MUC Airport Center",
        description:
          "Unhurried hotel breakfast, then walk to the Sixt desk in the Airport Center between Terminals 1 and 2. Three things before you leave the garage: both child seats actually installed and actually fitting, the car's height noted (the Stacherhof garage tops out at 2.20 m), and the Austrian vignette confirmed — a German rental doesn't include one. This is also where the car's permanent kit gets built, because it lives there for the whole week: swimwear for four, towels, spare clothes for both kids, the back carrier, water. Then set the nav for Fügen and roll.",
        attractionId: "munich-airport",
        rideToNext: { duration: "1 h 50", note: "A8 south, A93 over the Kufstein border, A12 west, then the B169 up the Zillertal — 185 km, motorway the whole way", departAt: "08:30" }
      },
      {
        time: "10:30",
        title: "Spieljochbahn Fügen — gondola straight up to the play world",
        description:
          "One of Hila's own picks, and she's been: our village's family mountain, with the valley station a measured six minutes from the hotel. The gondola lifts you to a summit that has been built entirely around small children — inflatable trampolines, water-play pools with little channels and boats, a big adventure playground, and the kind of view that makes the flight feel worth it. Nobody has to hike anywhere: it's all within a couple of hundred metres of the top station and its restaurant. Gili will find the trampolines in under a minute; Tom will pick one water channel and stay there. Check the day's first ascent and last descent at the valley station so the afternoon doesn't get decided for you.",
        attractionId: "spieljoch-fuegen",
        tag: "family",
        rideToNext: { duration: "6 min", note: "gondola down, then a couple of minutes into Fügen village", departAt: "13:30" }
      },
      {
        time: "13:30",
        title: "Lunch in Fügen",
        description:
          "Eat up at the mountain restaurant if the kids are still in flow, or come down and take a gasthaus table in Fügen — either works, and the six-minute drive is short enough that you're not committing to anything. Keep it simple: the goal is fed kids and a calm handover into check-in, not a long meal."
      },
      {
        time: "14:15",
        title: "Check in at the Stacherhof — home for seven nights",
        description:
          "The chalet suite has two bedrooms, a kitchen, two bathrooms and a balcony, and the underground garage is free and monitored (2.20 m height limit — worth remembering if Sixt handed you something tall). Breakfast is included every morning, so there's nothing you have to shop for tonight. Unpack properly today rather than living out of bags for a week, and take the half hour: a short nap in a real room now is what makes the late afternoon pleasant. The sauna and wellness area is 14+, so that one isn't for Gili and Tom — the natural swimming pond and the playground, steps from the door, very much are."
      },
      {
        time: "15:00",
        title: "The Ziller valley cycle path — a first flat spin along the river",
        description:
          "The Zillertal's cycle path runs flat and paved along the river right out of Fügen, which makes it the gentlest possible way to meet the valley you'll be living in. Ask the Stacherhof reception for the nearest rental — bikes or e-bikes plus a child trailer or seats — and just head out along the water, turning back the moment the kids have had enough. No route, no distance target, no summit. Finish at the hotel's swimming pond and the playground, then a first quiet dinner and an early night.",
        attractionId: "ziller-radweg",
        tag: "nature"
      }
    ],
    driveNotes:
      "One real drive today and it's all motorway: Munich Airport → Fügen is a measured 1 h 50 (185 km) — the A8 south, the A93 down to Kufstein, over the border, the A12 west to the Zillertal exit, then the B169 up the valley. The vignette has to be active before Kufstein. Once you're here the day shrinks to nothing: the Spieljochbahn valley station is 6 minutes from the hotel and the cycle path starts in the village, so everything after lunch is on the doorstep. That's also your safety margin — if the morning slips, nothing downstream breaks.",
    gear: [
      { item: "Passports, driving licence and the Sixt booking confirmation handy for pickup" },
      { item: "The car's permanent kit, assembled at pickup and never unpacked: swimwear, towels, spare clothes for both kids, the back carrier, water" },
      { item: "Snacks and full water bottles for the 1 h 50 run south — the fewer stops, the better the nap" },
      { item: "A change of clothes and a small towel each for the summit water play — this is a wet stop, not a maybe", for: "spieljoch-fuegen" },
      { item: "Fleece layers — the summit runs a good 10 °C cooler than the valley", for: "spieljoch-fuegen" },
      { item: "Sunscreen and hats — alpine sun above the treeline is fierce even at 20 °C", for: "spieljoch-fuegen" },
      { item: "Helmets for both kids if the rental doesn't include them — ask when you book the trailer", for: "ziller-radweg" }
    ],
    dayTips: [
      "Honest look at the clock: to start at Spieljoch by 10:30 you'd have to be rolling by ~08:30, and a rental desk with two toddlers rarely takes under 30–45 minutes. Treat 11:00–11:30 at the lift as the realistic version — or flip the order and check in first (it's 6 min away), lift after lunch. Everything today is on the doorstep, so the order is genuinely flexible",
      "The Austrian digital vignette must be active BEFORE Kufstein — a German rental doesn't include it, so buy it online this morning if last night got away from you",
      "Build the car kit at the Sixt garage and leave it in the boot all week: swimwear, towels, spare clothes, the back carrier, water. Half the days on this trip end wetter than they started",
      "The nap is part of the plan, not an accident — every transfer this week is timed so the kids sleep in the car. Today's is the 1 h 50 down to the valley",
      "If you want a real break on the drive south instead, BergTierPark Blindham (petting zoo plus a big indoor play barn) is about 40 min from the airport — but it costs you the Spieljoch slot. It's an either/or, not an add-on",
      "Check both child seats in the Sixt garage, not on the A8 shoulder — and note the car's height for the 2.20 m garage while you're standing there"
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
        word: "Berg",
        pronounce: "behrk",
        meaning: "Mountain",
        example: "Die Berge sind so hoch!",
        exampleMeaning: "The mountains are so tall!"
      },
      {
        word: "Hüpfburg",
        pronounce: "HUEPF-boork",
        meaning: "Bouncy castle, inflatable trampoline",
        example: "Gili springt auf der Hüpfburg.",
        exampleMeaning: "Gili is jumping on the bouncy castle."
      },
      {
        word: "Fahrrad",
        pronounce: "FAHR-raht",
        meaning: "Bicycle",
        example: "Wir fahren mit dem Fahrrad am Fluss.",
        exampleMeaning: "We're cycling along the river."
      },
      {
        word: "Wasser",
        pronounce: "VAH-ser",
        meaning: "Water",
        example: "Das Wasser ist kalt!",
        exampleMeaning: "The water is cold!"
      },
      {
        word: "Schlüssel",
        pronounce: "SHLUE-sel",
        meaning: "Key (the one word you need at check-in)",
        example: "Hier ist der Schlüssel für die Suite.",
        exampleMeaning: "Here's the key for the suite."
      }
    ],
    drinkOfTheDay: {
      name: "Zillertal Bier",
      type: "beer",
      pairing:
        "Brewed in Zell am Ziller since 1500, a few kilometres up the valley you've just moved into. First night at the Stacherhof, balcony, mountains going pink — the Weißbier is cloudy, cold and about as local as a beer gets on this trip.",
      servingNote: "Weißbier glass, poured slowly, yeast swirled in at the end"
    }
  },
  {
    dayNumber: 3,
    date: "2026-08-13",
    weekday: "Thursday",
    departureTime: "08:30",
    rideToFirst: { duration: "22 min", note: "B169 down to Strass, A12 west one junction to Wiesing, then the climb up to Maurach" },
    region: "north",
    base: "Fügen (Zillertal)",
    title: "The eagle's nest, then Tyrol's big turquoise lake",
    subtitle: "Rofan cable car high above the Achensee in the morning · Pertisau's promenade, playground, ducks and the 1887 steamer in the afternoon",
    leadImage: "./images/achensee.jpg",
    activities: [
      {
        time: "~08:55",
        title: "Rofan Seilbahn — up to the eagle's nest",
        description:
          "A measured 22 minutes from the hotel, and then the cable car does all the climbing. At the top you're looking straight down onto the Achensee from the Adlerhorst — the 'eagle's nest' viewing platform that hangs out over the drop, glass-fronted and safely railed, which is exactly the sort of thing a 3-year-old finds thrilling and a 1.5-year-old finds mildly interesting. The real reason to stay a while is the big wooden alpine playground by the top station: towers, slides and climbing frames a hundred metres from the cabin, with a hut for coffee. Check the day's first and last cabin at the valley station — and if it's blowing hard up there, the lift staff will tell you straight.",
        attractionId: "rofan-seilbahn",
        tag: "view",
        rideToNext: { duration: "8 min", note: "cable car down, then the shore road to a lakeside table at Maurach", departAt: "12:30" }
      },
      {
        time: "12:30",
        title: "Lunch by the water",
        description:
          "Down the cable car and straight to the lake for lunch — the Maurach and Pertisau shores are lined with places that have a terrace, a view and a high chair. Don't over-plan it: pick the one with a free table in the shade and let the kids eat slowly, because the afternoon is deliberately gentle."
      },
      {
        time: "13:30",
        title: "The nap lap — a slow loop round the lake",
        description:
          "Honest version: the Rofan valley station to Pertisau is only about six minutes, so the scenic loop is the point, not the distance. If both kids are asleep by the time you reach Pertisau — and they will be, three minutes in — just keep driving the shore road north toward Achenkirch and turn around whenever they surface. Same lake, same view, an hour of sleep banked, and you arrive at the promenade with two children who can actually enjoy it."
      },
      {
        time: "14:30",
        title: "Pertisau promenade & the Spielplatz am Achensee",
        description:
          "Flat, paved, pram-perfect promenade along the water, with the Karwendel doing the scenery on one side and ducks doing the entertainment on the other (bring nothing to feed them but bread crusts from breakfast — or better, just watch, since half the lakes here ask you not to feed them at all). The Spielplatz am Achensee sits right by the shore: climbing frames, swings, sand, and grass to collapse onto. This is the whole afternoon if you want it to be. The lake is drinking-water clear and famously brisk; Gili will go in anyway, so the swim kit comes out of the car.",
        attractionId: "spielplatz-achensee",
        tag: "family"
      },
      {
        time: "~15:45",
        title: "The 1887 steamer from the Pertisau dock",
        description:
          "The Achensee ships have sailed since 1887 and still work the lake's docks in summer. A short leg out of Pertisau is plenty — whistle, open top deck, big water, back before anyone melts — and under-6s ride free, so this is a cheap thrill for two. Confirm the day's timetable at the dock itself rather than planning around a printed schedule, and only go if the sailing lines up with the kids instead of against them. The promenade and the playground are a complete afternoon on their own.",
        attractionId: "achensee",
        tag: "water",
        optional: true,
        rideToNext: { duration: "22 min", note: "back down the mountain road to Wiesing, one junction east on the A12, then the B169 home", departAt: "16:40" }
      },
      {
        time: "~17:00",
        title: "Down the mountain road, home for dinner",
        description:
          "The winding descent to Wiesing does what it always does — everyone asleep before the motorway. Home in Fügen with damp feet and nothing left to organise: the Stacherhof pond is warmer than the lake was, the playground is right there, and dinner can be as simple as you like."
      }
    ],
    driveNotes:
      "A short-drive day, which is why it works so well after the travel day. Fügen → Rofan Seilbahn at Maurach is a measured 22 min: ten minutes down the B169 to the A12 at Strass, one junction west to Wiesing, then the climb up toward the Achensee — a proper mountain road for about ten minutes, smooth but curvy, and the only bit of today a car-sick toddler might notice. Rofan → Pertisau is a measured 6 min, so the afternoon 'transfer' is really a nap loop you drive on purpose. Same road home, and the descent is a reliable nap-maker.",
    gear: [
      { item: "Fleece layers and a windproof top each — the Rofan summit is exposed and a lot colder than the lake shore", for: "rofan-seilbahn" },
      { item: "Carrier for Tom at the top — the playground is right by the station but the ground is gravel and uneven", for: "rofan-seilbahn" },
      { item: "Swim kit and towels out of the car kit — the lake shallows at Pertisau are shallow, clear and freezing, and Gili will not be talked out of it", for: "achensee" },
      { item: "Pram for the promenade — it's flat, paved and made for it", for: "spielplatz-achensee" },
      { item: "Sun hats and SPF50 — the light off the water at 930 m is stronger than it feels" },
      { item: "Cash in small notes for the boat tickets, the kiosk and ice creams", for: "achensee" }
    ],
    dayTips: [
      "The 'scenic drive round the lake' is only 6 measured minutes end to end — so drive the nap, don't schedule it: carry on up the shore toward Achenkirch and turn around when the kids wake",
      "Under-6s sail free on the Achensee ships. Buy at the dock and confirm the day's departures there — timetables shift with the season and the weather",
      "The lake sits around 930 m: mornings can start at 15 °C even when the afternoon hits 27 °C, so layer both kids and let the sun warm the shallows before any serious paddling",
      "Rainy-day backup for the whole trip, and it's the lift days that need one: Swarovski Kristallwelten in Wattens — indoor Chambers of Wonder plus a covered play tower. Book a time slot online before you drive over",
      "Innsbruck with the Alpenzoo is only about 40 min from base if you ever want a city-and-animals day instead of a park day. Worth knowing about — but genuinely, the park and water days suit Gili and Tom better, so treat it as an option rather than a recommendation",
      "Restock the car kit tonight while you remember: wet swimwear out, dry spares in. Tomorrow ends at a lake too"
    ],
    italianWords: [
      {
        word: "Adler",
        pronounce: "AHD-ler",
        meaning: "Eagle (Tyrol's symbol — and the name of the viewing platform up top)",
        example: "Der Adler fliegt über den See.",
        exampleMeaning: "The eagle flies over the lake."
      },
      {
        word: "Seilbahn",
        pronounce: "ZILE-bahn",
        meaning: "Cable car",
        example: "Die Seilbahn fährt ganz nach oben.",
        exampleMeaning: "The cable car goes all the way up."
      },
      {
        word: "See",
        pronounce: "zay",
        meaning: "Lake (der See — not 'sea'!)",
        example: "Der Achensee ist der größte See in Tirol.",
        exampleMeaning: "The Achensee is the biggest lake in Tyrol."
      },
      {
        word: "Ente",
        pronounce: "EN-teh",
        meaning: "Duck",
        example: "Schau, die Enten schwimmen!",
        exampleMeaning: "Look, the ducks are swimming!"
      },
      {
        word: "Schiff",
        pronounce: "shif",
        meaning: "Ship, boat",
        example: "Das Schiff kommt zum Steg.",
        exampleMeaning: "The boat is coming to the dock."
      },
      {
        word: "Wolke",
        pronounce: "VOL-keh",
        meaning: "Cloud",
        example: "Wir sind über den Wolken!",
        exampleMeaning: "We're above the clouds!"
      }
    ],
    drinkOfTheDay: {
      name: "Grüner Veltliner",
      type: "wine",
      pairing:
        "Austria's signature white — white pepper, green apple, crystal-crisp acidity — and the standard pour with Achensee whitefish, which is on half the lakeside menus you walked past today. Order it by the Achtel or the Viertel like a local and it arrives properly cold.",
      servingNote: "Well-chilled (8–10 °C); a Grüner from a 'DAC' region is a safe pick"
    }
  },
  {
    dayNumber: 4,
    date: "2026-08-14",
    weekday: "Friday",
    departureTime: "08:30",
    rideToFirst: { duration: "15 min", note: "B169 up the valley to the Zillertal Arena valley station at Zell am Ziller" },
    region: "south",
    base: "Fügen (Zillertal)",
    title: "A wooden castle in the sky, then a turquoise lake",
    subtitle: "Fichtenschloss play world above Zell am Ziller · the Hintersteiner See in the afternoon (65 min away, not 40) · supermarket run before tomorrow's holiday",
    leadImage: "./images/hintersteiner-see.jpg",
    activities: [
      {
        time: "~08:45",
        title: "Zillertal Arena — gondola up from Zell am Ziller",
        description:
          "A measured 15 minutes up the valley to the Zell am Ziller valley station, then the gondola takes over and does the altitude for you. Buy the family ticket, load the pram straight into the cabin (they take prams without folding gymnastics), and watch the valley you've been driving all week drop away below. Check the day's first ascent and last descent at the counter and give yourselves a clear hour of margin at the end — you don't want to be the family running for the final cabin.",
        attractionId: "zillertal-arena",
        tag: "family"
      },
      {
        time: "~09:15",
        title: "Fichtenschloss Rosenalm — the spruce castle",
        description:
          "A whole play world built out of spruce at the Rosenalm top station: a big wooden castle with towers and bridges, trampolines sunk into the ground, water channels with dams and gates to open, and the kind of climbing structures that a 3-year-old can do unaided. It's a few minutes' walk from the gondola, all of it flat, and there's a hut right there for coffee and an early lunch. Tom's version of this is one water channel and a lot of stones; Gili's version is the castle, twice. Both count as a complete morning.",
        attractionId: "fichtenschloss-rosenalm",
        tag: "family"
      },
      {
        time: "12:30",
        title: "Lunch — up top or back down in Zell",
        description:
          "Eat at the Rosenalm hut if the kids are still going, or ride down and take a table in Zell am Ziller. Either way, start the transfer at 13:30 rather than 14:00: today's afternoon drive is longer than it looks and the nap needs the room.",
        rideToNext: { duration: "1 h 5", note: "gondola down, B169 to Strass, A12 east to Wörgl, then up to Scheffau and the Hintersteiner See — a measured 65 min, not the 40 in the original plan", departAt: "13:30" }
      },
      {
        time: "14:35",
        title: "Hintersteiner See — an easy walk by turquoise water",
        description:
          "One of the great postcard lakes of Tyrol, sitting under the Wilder Kaiser's rock wall: genuinely turquoise, ringed by a shaded, easy path that a pram can mostly handle and a 3-year-old can definitely handle in pieces. You do not have to walk the whole way round — go out along the shore, find a flat rock or a jetty, let them throw stones in, and come back. The water is warm enough by mid-August that swimming is a real option; the car kit already has what you need. Parking is in paid lots above the lake with a short walk down, so bring coins and check the machine's rules when you park.",
        attractionId: "hintersteiner-see",
        tag: "nature",
        optional: false
      },
      {
        time: "Alternative, not an add-on",
        title: "Kufstein old town instead of the lake",
        description:
          "This corner of Tyrol is Hila's own alternative for the afternoon, and it's a fair swap: Kufstein is close by from Scheffau, and instead of a second lake you get a real town — car-free lanes, a proper café, ice cream, and the 800-year-old fortress glowering over everything from its rock (there's a barrier-free glass lift up to it if the mood takes you, but the town at pram pace is the point). Pick one: lake or town. Both in one afternoon would break the nap and the 17:00 finish.",
        attractionId: "kufstein-festung",
        tag: "village",
        optional: true
      },
      {
        time: "~16:45",
        title: "Home via the supermarket",
        description:
          "The drive home retraces the A12 west and comes in a bit under the outbound hour, since Fügen sits about fifteen minutes down-valley from Zell. Stop at the supermarket on the way in and do a proper shop tonight — tomorrow is Mariä Himmelfahrt, a national holiday, and Austrian supermarkets close for it. Breakfast is included at the hotel, so what you actually need is snacks, fruit, drinks and something easy for tomorrow's dinner."
      }
    ],
    driveNotes:
      "Fügen → Zell am Ziller valley station is a measured 15 min straight up the B169 — the easy part. Then the correction that matters: Zell am Ziller → Hintersteiner See is a measured 1 h 5, not the 40 min in the original plan. Route is B169 down to Strass, A12 east past Wörgl, then up to Scheffau on the Wilder Kaiser. That's the longest single leg of the week so far, so it earns its place as the nap transfer — leave at 13:30, not 14:00. Coming home is the same road in reverse and lands a little under the hour, since Fügen is down-valley of Zell. If you take the Kufstein alternative instead, you're on the same A12 corridor either way.",
    gear: [
      { item: "A change of clothes each for the Fichtenschloss water channels — the dams always win", for: "fichtenschloss-rosenalm" },
      { item: "Fleece layers for the Rosenalm — a lot cooler at the top station than in Zell", for: "zillertal-arena" },
      { item: "Swimwear and towels from the car kit — the Hintersteiner See is warm enough to swim in by mid-August", for: "hintersteiner-see" },
      { item: "Carrier for Tom on the lake path — parts of it are rooty even where the pram copes", for: "hintersteiner-see" },
      { item: "Coins for the Hintersteiner See parking machines", for: "hintersteiner-see" },
      { item: "Sunscreen, hats, and a full water bottle each — the top station is above the treeline" },
      { item: "The cool bag in the boot for tonight's supermarket run — tomorrow everything is shut" }
    ],
    dayTips: [
      "Correction worth knowing before you commit: Zell am Ziller → Hintersteiner See is a measured 65 min, not 40. Leaving lunch at 13:30 gets you there around 14:35 with the nap intact — leaving at 14:00 gets you there tired",
      "Do the supermarket run TODAY. Tomorrow, Sat 15 Aug, is Mariä Himmelfahrt — a national holiday in Austria, and the supermarkets close",
      "Designated rainy-day backup, and today's gondola is exactly the kind of morning that gets rained off: Swarovski Kristallwelten in Wattens. Indoor and covered, and slots should be pre-booked online",
      "Prams ride the gondola cabins as they are — no folding required. Wheel in, wheel out at the top",
      "The nap is the transfer: 13:30 out of Zell, both asleep by the A12, awake at the lake. It's the longest leg of the week so far and it's doing a job",
      "Vignette check while you're thinking about the motorway: a 10-day vignette bought on the 11th runs through the 20th, which covers the whole trip. If you bought a shorter one, look at the end date now rather than on Monday's long run"
    ],
    italianWords: [
      {
        word: "Schloss",
        pronounce: "shloss",
        meaning: "Castle",
        example: "Das Schloss ist aus Holz!",
        exampleMeaning: "The castle is made of wood!"
      },
      {
        word: "Trampolin",
        pronounce: "tram-po-LEEN",
        meaning: "Trampoline",
        example: "Noch einmal auf dem Trampolin!",
        exampleMeaning: "One more time on the trampoline!"
      },
      {
        word: "Ritter",
        pronounce: "RIT-ter",
        meaning: "Knight",
        example: "Gili ist ein Ritter im Schloss.",
        exampleMeaning: "Gili is a knight in the castle."
      },
      {
        word: "Tanne",
        pronounce: "TAH-neh",
        meaning: "Spruce, fir (the 'Fichte' in Fichtenschloss is the spruce it's built from)",
        example: "Das Schloss riecht nach Tanne.",
        exampleMeaning: "The castle smells of spruce."
      },
      {
        word: "Türkis",
        pronounce: "tuer-KEES",
        meaning: "Turquoise (the colour of this afternoon's lake)",
        example: "Der See ist türkis!",
        exampleMeaning: "The lake is turquoise!"
      },
      {
        word: "Einkaufen",
        pronounce: "INE-kow-fen",
        meaning: "To shop, to do the shopping",
        example: "Heute müssen wir einkaufen — morgen ist Feiertag.",
        exampleMeaning: "We have to shop today — tomorrow is a holiday."
      }
    ],
    drinkOfTheDay: {
      name: "Obstler",
      type: "digestif",
      pairing:
        "The Tyrolean farmhouse schnaps — clear fruit brandy off apples and pears, and every gasthof around the Wilder Kaiser pours a homemade one. After a gondola morning and an hour on the road to a turquoise lake, one small glass 'für die Verdauung' is the local liturgy.",
      servingNote: "A tiny stem glass, room temperature, sipped — never shot"
    }
  },
  {
    dayNumber: 5,
    date: "2026-08-15",
    weekday: "Saturday",
    departureTime: "08:15",
    rideToFirst: { duration: "52 min", note: "B169 to Strass, A12 east to Wörgl-Ost, then the B178 up to Söll — a measured 52 min, not the 35 in the original plan" },
    region: "south",
    base: "Fügen (Zillertal)",
    title: "Barefoot with the witches",
    subtitle: "Hexenwasser Söll — a whole mountain of water play · Rattenberg in the afternoon, with an honest warning about the holiday",
    leadImage: "./images/hexenwasser-soell.jpg",
    activities: [
      {
        time: "~09:10",
        title: "Hexenwasser Söll — gondola up into the witches' water",
        description:
          "The single best three-year-old attraction in Tyrol, and it's Hila's for a reason. Seventy-plus hands-on stations spread across the mountainside above Söll: a long barefoot trail through mud, moss, gravel and spring water; witch-themed channels with gates, dams and little mills that Gili can operate herself; a giant sundial; bees behind glass; and bread baking at the witches' bakery. Everything at the top is included in the lift ticket — no coin-operated anything. Tom will find the first water channel and never leave it, which is a completely successful visit. Ride up early: the barefoot trail is nearly empty before 10:30 and the mountain restaurants at Hochsöll are entirely used to soaked toddlers. Check the day's gondola hours at the valley station before you go up.",
        attractionId: "hexenwasser-soell",
        tag: "water"
      },
      {
        time: "12:30",
        title: "Lunch at Hochsöll, then down",
        description:
          "Eat at the top — it's easier than herding two wet children into a car first, and the huts up here expect exactly this crowd. Buy the fresh witch-bakery bread on the way out for tonight (breakfast is included at the hotel, so this becomes dinner bread), get everyone into the dry spare clothes at the car, and start the transfer at 13:30.",
        rideToNext: { duration: "35 min", note: "gondola down, B178 to Wörgl, then the A12 west one junction to Rattenberg — a measured 35 min, not 25", departAt: "13:30" }
      },
      {
        time: "14:05",
        title: "Rattenberg — Austria's smallest town (read the holiday note first)",
        description:
          "A single medieval main street, about 400 residents, car-free, flat and pram-perfect, with a bend in the road where the ice cream is. Here's the honest part: Rattenberg's whole draw is its glass — the workshops where you watch blowers, cutters and engravers at the bench, and the shops that sell what they make. Today is Mariä Himmelfahrt, a national holiday, and those workshops and shops will very likely be shut. Cafés and restaurants do open on Austrian holidays, so the fallback is real and pleasant: a pretty car-free stroll, a coffee, a slice of apple strudel, and a look at dark medieval walls with the Rat mountain behind them. But it will not be a shopping afternoon. If the glass is what you wanted, swap this afternoon with Friday's or Tuesday's so Rattenberg lands on a working day — the drive from Söll is 35 min either way.",
        attractionId: "rattenberg",
        tag: "village",
        rideToNext: { duration: "25 min", note: "A12 west to Strass, then the B169 up the Zillertal home", departAt: "16:15" }
      },
      {
        time: "~16:40",
        title: "Home, and everything wet into the wash",
        description:
          "Short hop back up the valley. Tonight's whole job is laundry logistics: wet swimwear, muddy clothes and soaked shoes out of the car, dry spares back in for tomorrow. Then the pond, the playground, the witch bread and an early night — today was a lot of mountain."
      }
    ],
    driveNotes:
      "Two corrections on today's numbers, both upward. Fügen → Söll is a measured 52 min (not 35): B169 down to Strass, A12 east toward Kufstein, exit Wörgl-Ost, then the B178 up to the Hexenwasser gondola's big car park. Leave at 08:15 and you're on an early cabin. Söll → Rattenberg is a measured 35 min (not 25): back down the B178 to Wörgl and one junction west on the A12. Rattenberg → Fügen is a short 25 min up the valley. All motorway and valley road, no mountain passes — the gondola does the climbing today.",
    gear: [
      { item: "Towels and a FULL change of clothes for both kids — at Hexenwasser this is non-negotiable, not a precaution", for: "hexenwasser-soell" },
      { item: "Crocs or sandals that can be soaked, for the walks between barefoot stations", for: "hexenwasser-soell" },
      { item: "Carrier for Tom — the paths are gravel and gently sloped, and prams manage the main loop but the carrier is easier", for: "hexenwasser-soell" },
      { item: "A big plastic bag for the wet everything, so the car survives the transfer", for: "hexenwasser-soell" },
      { item: "Sunscreen and hats — most of the water stations sit in open meadow", for: "hexenwasser-soell" },
      { item: "Cash for the holiday café in Rattenberg and for ice cream — small places, closed banks", for: "rattenberg" }
    ],
    dayTips: [
      "Correction: Fügen → Söll is a measured 52 min, not 35. Leave around 08:15 to be on an early gondola with the barefoot trail still empty",
      "Rattenberg on a national holiday: the glass workshops and shops will very likely be closed. Either take it as a pretty car-free stroll with a café and strudel — those do open — or swap this afternoon with Friday's or Tuesday's so Rattenberg lands on a working day. Don't drive over expecting to shop",
      "Everything on the mountain at Hexenwasser is included in the lift ticket, which makes it the easiest 'yes' of the week: no wallet, no queues, no coin slots",
      "Today is Mariä Himmelfahrt: supermarkets shut (you shopped yesterday), cafés and restaurants open, lifts running, locals out in force. Expect a busy gondola from about 10:30",
      "Söll → Rattenberg is a measured 35 min, which is the nap. Get everyone changed into dry clothes at the car before you set off — a wet toddler doesn't sleep",
      "Restock the car kit tonight: today empties it completely. Dry towels, dry spares, dry shoes back in the boot for tomorrow's pool day"
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
        word: "Nass",
        pronounce: "nahs",
        meaning: "Wet",
        example: "Alle sind nass!",
        exampleMeaning: "Everyone is wet!"
      },
      {
        word: "Brot",
        pronounce: "broht",
        meaning: "Bread",
        example: "Das Brot ist noch warm!",
        exampleMeaning: "The bread is still warm!"
      },
      {
        word: "Feiertag",
        pronounce: "FYE-er-tahk",
        meaning: "Public holiday (today's word — and today's problem)",
        example: "Heute ist Feiertag, die Geschäfte sind zu.",
        exampleMeaning: "Today is a holiday, the shops are closed."
      }
    ],
    drinkOfTheDay: {
      name: "Skiwasser",
      type: "other",
      pairing:
        "Tyrol's own invention — raspberry syrup, lemon and cold water, born on these slopes for thirsty skiers. On the day everyone spent four hours in mountain spring water, the family toast is the local water-based classic. Order it at the mountain hut; make it again at home all winter.",
      servingNote: "Tall glass, lots of ice, roughly 1 part raspberry syrup to 5 parts water, big lemon squeeze"
    }
  },
  {
    dayNumber: 6,
    date: "2026-08-16",
    weekday: "Sunday",
    departureTime: "08:30",
    rideToFirst: { duration: "40 min", note: "B169 to Strass, A12 east to Wörgl, then over to the Hopfgarten valley station" },
    region: "south",
    base: "Fügen (Zillertal)",
    title: "A 360° summit, then a whole afternoon in the water",
    subtitle: "Gipfelalm Hohe Salve for the panorama · Salvenaland Hopfgarten for swimming, trampolines and lawns — with a bonus hour, because the transfer is 4 minutes",
    leadImage: "./images/salvenaland-hopfgarten.jpg",
    activities: [
      {
        time: "~09:10",
        title: "Gipfelalm Hohe Salve — the 360° morning",
        description:
          "A measured 40 minutes to the Hopfgarten valley station, then the gondola carries you up to what locals call the most beautiful viewpoint in Tyrol — and on a clear morning it's not marketing: you can see the whole Kitzbühel Alps one way and the Wilder Kaiser's wall the other, a full circle from one spot. There's a tiny pilgrimage chapel at the summit, the Gipfelalm hut for a second breakfast with that view, and enough flat ground around the top station for two small children to run without anyone's heart rate rising. Go up early while the air is still clear — summits haze over by midday in August. Check the day's first ascent and last descent at the valley station.",
        attractionId: "gipfelalm-hohe-salve",
        tag: "view"
      },
      {
        time: "12:00",
        title: "Lunch — the Gipfelalm up top or down in Hopfgarten",
        description:
          "Eat at the summit hut if the view has everyone in a good mood, or ride down and eat in Hopfgarten. Either way, don't linger past 13:00: the afternoon has just quietly gained an hour and it would be a shame to spend it on dessert.",
        rideToNext: { duration: "4 min", note: "Salvenaland is essentially across the road from the Hohe Salve valley station — a measured 4 min, not the 15 in the original plan", departAt: "13:10" }
      },
      {
        time: "~13:15",
        title: "Salvenaland Hopfgarten — the long, lazy water afternoon",
        description:
          "Good news you get to keep: the transfer from the gondola to the pool is a measured four minutes, so instead of arriving at 14:00 you're through the turnstile just after 13:15 — nearly a whole extra hour in the water. Salvenaland is the leisure complex the region built for families: a swimming lake with a gently shelving entry, a separate shaded children's pool at proper toddler depth, trampolines, big lawns to spread a towel on, slides for Gili, and enough shade that Tom can nap on a blanket. Confirm the day's opening hours and any Sunday specifics at the entrance, and take coins for a locker. Then stop planning: this is the afternoon where you don't move again.",
        attractionId: "salvenaland-hopfgarten",
        tag: "water",
        rideToNext: { duration: "40 min", note: "back over to Wörgl, A12 west to Strass, then the B169 up the Zillertal", departAt: "16:20" }
      },
      {
        time: "~16:20",
        title: "Dry off and drive home",
        description:
          "Straight choice, made in advance so nobody argues at the poolside: leave around 16:20 and you're home by about 17:00 in the usual rhythm, or stay until the light goes and accept a later dinner. Either is fine — you're not driving a mountain pass, it's motorway and valley road, and both kids will sleep the whole way after a day in the water."
      }
    ],
    driveNotes:
      "Fügen → Hopfgarten (Hohe Salve valley station) is a measured 40 min: B169 down to Strass, A12 east to the Wörgl exits, then across to Hopfgarten. The nice surprise is the afternoon: the Hohe Salve valley station → Salvenaland is a measured 4 min, not the 15 the original plan allowed — so today's 'transfer' isn't a nap drive at all, it's a hop, and the hour it saves goes straight into the pool. Which means today's nap has to happen either on the 40-minute drive out or on the way home, or on a towel in the shade at Salvenaland. Same 40 min home.",
    gear: [
      { item: "Swim kit for all four, swim diaper for Tom, and two towels each — today is entirely wet", for: "salvenaland-hopfgarten" },
      { item: "Coins for the lockers and the changing rooms", for: "salvenaland-hopfgarten" },
      { item: "A blanket or towel for a shaded lawn nap — Tom's sleep has to happen somewhere today", for: "salvenaland-hopfgarten" },
      { item: "Water shoes — poolside and the lake entry are easier on small feet with them", for: "salvenaland-hopfgarten" },
      { item: "Fleece layers for the summit — the Hohe Salve is exposed and windy even on a hot day", for: "gipfelalm-hohe-salve" },
      { item: "SPF50, hats and a long-sleeve rash top each — a full afternoon in open water is a lot of sun" }
    ],
    dayTips: [
      "Bonus, not a correction for once: the gondola-to-pool transfer is a measured 4 minutes rather than 15, so you get nearly an extra hour at Salvenaland. Spend it in the water, not on the road",
      "Which means the nap needs re-planning today: use the 40-minute drive out, or the drive home, or a blanket in the shade at the pool. Don't count on the transfer — it's four minutes long",
      "Rainy-day backup, again flagged on a lift day because the lift is the vulnerable half: Swarovski Kristallwelten in Wattens, indoor and covered, slots pre-booked online. If the summit is in cloud, this is the swap",
      "Go up the Hohe Salve early — the 360° view is a morning thing, and August afternoons haze over",
      "It's Sunday: the pool will fill from midday and locals come out in force. Arriving just after 13:15 still beats the worst of it, and the shaded lawn spots go first",
      "Take the car kit seriously today — you'll use every towel in it. Dry clothes for the drive home, and a bag for the wet pile"
    ],
    italianWords: [
      {
        word: "Gipfel",
        pronounce: "GIP-fel",
        meaning: "Summit, mountain top",
        example: "Wir sind auf dem Gipfel!",
        exampleMeaning: "We're on the summit!"
      },
      {
        word: "Aussicht",
        pronounce: "OWS-zikht",
        meaning: "View, panorama",
        example: "Die Aussicht ist wunderschön.",
        exampleMeaning: "The view is beautiful."
      },
      {
        word: "Schwimmen",
        pronounce: "SHVIM-men",
        meaning: "To swim",
        example: "Gili will schwimmen gehen.",
        exampleMeaning: "Gili wants to go swimming."
      },
      {
        word: "Handtuch",
        pronounce: "HANT-tookh",
        meaning: "Towel",
        example: "Wo ist mein Handtuch?",
        exampleMeaning: "Where is my towel?"
      },
      {
        word: "Sonne",
        pronounce: "ZON-neh",
        meaning: "Sun",
        example: "Die Sonne ist heiß heute!",
        exampleMeaning: "The sun is hot today!"
      },
      {
        word: "Bad",
        pronounce: "baht",
        meaning: "Pool, baths (Salvenaland is a 'Freibad' — an open-air pool)",
        example: "Wir gehen ins Bad!",
        exampleMeaning: "We're going to the pool!"
      }
    ],
    drinkOfTheDay: {
      name: "Radler",
      type: "beer",
      pairing:
        "Beer cut with lemonade, invented for cyclists who still had to get home — which is roughly your situation after a summit and five hours of swimming. Light, sweet-sharp, barely alcoholic, and the only thing that tastes right on a lawn next to a pool.",
      servingNote: "Half lager, half citrus lemonade, in a tall glass, colder than you think"
    }
  },
  {
    dayNumber: 7,
    date: "2026-08-17",
    weekday: "Monday",
    departureTime: "08:00",
    rideToFirst: { duration: "1 h 16", note: "B169 to Strass, A12 east to Wörgl, B178 over St. Johann in Tirol, then on to Waidring — a measured 76 min, not the 55 in the original plan" },
    region: "south",
    base: "Fügen (Zillertal)",
    title: "Dinosaurs on a mountain, then a lake to row on",
    subtitle: "Triassic Park at Waidring (76 min away — leave at 08:00) · the Pillersee, moved here from Tuesday because from this corner it's 20 minutes instead of two hours",
    leadImage: "./images/triassic-park.jpg",
    activities: [
      {
        time: "~09:20",
        title: "Triassic Park Waidring — a dinosaur world on the Steinplatte",
        description:
          "The furthest corner of the trip and worth the drive: the Steinplatte above Waidring was a coral reef 220 million years ago, and the whole mountain has been turned into a dinosaur adventure world on the back of it. Gondola up, then a themed trail with life-size dinosaurs, a fossil-digging pit where kids sift sand for 'finds' and keep them, water and mud stations, inflatables and slides, and a glass viewing terrace out over the drop that's more thrilling than frightening. Gili's dream morning, honestly. Tom will do sand, water and one very large dinosaur foot. Check the day's gondola hours at the valley station, and expect to leave with sand in places you didn't know had places.",
        attractionId: "triassic-park",
        tag: "family"
      },
      {
        time: "12:30",
        title: "Lunch at the top or back at the valley station",
        description:
          "Eat where you are — the mountain restaurant up top is set up for exactly this — then get everyone brushed off and back into the car by 13:30. Today's afternoon transfer is short, which is the entire reason the Pillersee now sits on this day.",
        rideToNext: { duration: "20 min", note: "down to Waidring and on to the Pillersee at St. Ulrich — 20 min from this corner, versus roughly 2 h from the Zillertal", departAt: "13:30" }
      },
      {
        time: "13:50",
        title: "Pillersee — a flat lap and a rowing boat",
        description:
          "A long, quiet lake in a wooded bowl, and the path round it is flat, wide and pram-friendly the whole way — the easiest walking of the entire trip. There are rowing boats and pedal boats for hire at the shore, which for a 3-year-old is a genuinely big event: sitting in a real boat that a parent rows. Ask about the day's hours and prices at the hire hut when you arrive rather than counting on anything. An hour on the water, an hour on the path, a stone-throwing session, done. The lake is famously cold and deep, so this is a paddle-and-row afternoon rather than a swim.",
        attractionId: "pillersee",
        tag: "nature",
        optional: false
      },
      {
        time: "Instead of the Pillersee, not as well as",
        title: "Kundler Klamm — the flat gorge walk",
        description:
          "This was the original afternoon for today and it's still a lovely one: a wide, flat, pram-friendly path through a gorge along the Wildschönauer Ache, cool and shaded even in high summer. The arithmetic is the problem — from Waidring it's about 56 minutes back toward home, versus 20 minutes to the Pillersee, so it's one or the other. Here's the useful part: the Kundler Klamm is only about 26 minutes from the hotel. That makes it the perfect swap-in for any day the weather ruins, or any day when what you want is something flat, shaded and easy with no lift involved.",
        attractionId: "kundler-klamm",
        tag: "nature",
        optional: true,
        rideToNext: { duration: "1 h 15", note: "back through St. Johann and Wörgl, A12 west to Strass, then the B169 up the Zillertal", departAt: "15:00" }
      },
      {
        time: "~16:15",
        title: "The long drive home",
        description:
          "About an hour and a quarter back from that corner of Tyrol — the longest homeward run of the week, and after a dinosaur morning and a boat it will be a silent car. Snacks within reach, one podcast for the grown-ups, and dinner at the Stacherhof when you land."
      }
    ],
    driveNotes:
      "Today is the geography day, and the numbers drive the plan. Fügen → Waidring is a measured 1 h 16 (not the 55 min originally penciled in): B169 to Strass, A12 east to Wörgl, B178 over toward St. Johann in Tirol, then on to Waidring. Leave at 08:00. From Waidring, the Pillersee is a measured 20 min — which is exactly why it moved onto this day; from the Zillertal base it's roughly two hours, so pairing it with Mayrhofen on Tuesday was never physically possible. Kundler Klamm from Waidring is about 56 min back toward home, so it's Pillersee OR the Klamm. Home from that corner is about 1 h 15. Longest total road day of the week — the kit and the nap earn their keep today.",
    gear: [
      { item: "A full change of clothes each — the fossil dig is sand and the water stations are water", for: "triassic-park" },
      { item: "Closed shoes for the dinosaur trail and the dig pit; sandals for the lake afterwards", for: "triassic-park" },
      { item: "Carrier for Tom on the mountain, pram for the flat Pillersee lap — today genuinely wants both", for: "pillersee" },
      { item: "Cash for the boat hire at the Pillersee", for: "pillersee" },
      { item: "Sun hats and SPF50 — the Steinplatte trail is high and mostly open", for: "triassic-park" },
      { item: "Double snacks and full water bottles — the longest drive of the week, out and back" }
    ],
    dayTips: [
      "Correction: Fügen → Waidring is a measured 76 min, not 55. Leave at 08:00 and the morning still starts on time",
      "Why the Pillersee moved here from Tuesday: it's a measured 20 min from Waidring but roughly 2 hours from the Zillertal base. Paired with Mayrhofen it simply didn't fit on the map; paired with Triassic Park it's a natural, easy add",
      "Pillersee OR Kundler Klamm, not both: from Waidring the Klamm is about 56 min back toward home versus 20 min to the lake",
      "Keep the Kundler Klamm in your pocket though — it's only about 26 min from the hotel, flat, shaded and pram-friendly, which makes it the ideal swap for a rained-off day or a day when nobody wants a lift",
      "Longest road day of the week: this is the one where the car kit and the planned nap really pay off. Change of clothes in the boot, snacks within arm's reach, and leave the fossil-digging sand outside the car if you can",
      "Ask at the boat hut about the day's hours and prices for the rowing boats rather than promising Gili anything on the drive over"
    ],
    italianWords: [
      {
        word: "Dinosaurier",
        pronounce: "dee-no-ZOW-ree-er",
        meaning: "Dinosaur",
        example: "Der Dinosaurier ist riesig!",
        exampleMeaning: "The dinosaur is enormous!"
      },
      {
        word: "Knochen",
        pronounce: "KNOKH-en",
        meaning: "Bone",
        example: "Wir suchen Knochen im Sand.",
        exampleMeaning: "We're digging for bones in the sand."
      },
      {
        word: "Sand",
        pronounce: "zahnt",
        meaning: "Sand",
        example: "Tom sitzt im Sand.",
        exampleMeaning: "Tom is sitting in the sand."
      },
      {
        word: "Stein",
        pronounce: "shtine",
        meaning: "Stone, rock",
        example: "Wirf den Stein ins Wasser!",
        exampleMeaning: "Throw the stone in the water!"
      },
      {
        word: "Boot",
        pronounce: "boht",
        meaning: "Boat",
        example: "Wir fahren mit dem Boot auf dem See.",
        exampleMeaning: "We're going out on the lake in a boat."
      },
      {
        word: "Riesig",
        pronounce: "REE-zikh",
        meaning: "Huge, giant",
        example: "Alles hier ist riesig!",
        exampleMeaning: "Everything here is huge!"
      }
    ],
    drinkOfTheDay: {
      name: "Hugo",
      type: "cocktail",
      pairing:
        "The Alps' summer spritz — prosecco, elderflower syrup, mint and soda, invented just over the ridge in South Tyrol. After 150 kilometres of driving, a mountain of dinosaurs and a rowing boat, its light floral fizz on the Stacherhof balcony is the correct reward.",
      servingNote: "Big wine glass, lots of ice, a mint sprig and a squeeze of lime"
    }
  },
  {
    dayNumber: 8,
    date: "2026-08-18",
    weekday: "Tuesday",
    departureTime: "08:30",
    rideToFirst: { duration: "21 min", note: "B169 up the valley past Zell to the Erlebnissennerei at Mayrhofen" },
    region: "south",
    base: "Fügen (Zillertal)",
    title: "Cheese, tractors, and a Mayrhofen afternoon",
    subtitle: "The show dairy at Mayrhofen with animals to pet and cheese to taste · the Erlebnisbad · then the flat main street, ice cream and playgrounds",
    leadImage: "./images/erlebnissennerei-zillertal.jpg",
    activities: [
      {
        time: "~08:50",
        title: "Erlebnissennerei Zillertal — the show dairy",
        description:
          "A measured 21 minutes up the valley, and the last easy morning of the trip. This is a working dairy that decided to let families in: glass windows onto the production floor where you watch milk become cheese, a farm yard with animals to pet, toy tractors that Gili will monopolise, a big playground, and a shop with tastings at the end. Straightforward, indoor-ish and completely toddler-proof — a good choice for a day when everyone's legs have had enough mountains. On the food: this is one of the few stops where the allergies genuinely matter. Gili can't have sesame and Tom can't have banana, and a dairy shop means bakery items at the counter and fruit yoghurts, smoothies and milkshakes at the tasting bar. Read the labels, and ask staff before either kid tastes anything — 'Enthält das Sesam?' and 'Ist da Banane drin?' do the job.",
        attractionId: "erlebnissennerei-zillertal",
        tag: "food",
        rideToNext: { duration: "5 min", note: "a couple of minutes on into Mayrhofen", departAt: "11:30" }
      },
      {
        time: "11:30",
        title: "Erlebnisbad Mayrhofen — a swim before lunch",
        description:
          "Hila's own pick, and it fills the slot the Pillersee vacated when it moved to Monday: Mayrhofen's outdoor pool complex, with a shallow toddler area, big lawns to lie on, slides for Gili and enough space that nobody feels watched. Ninety minutes is exactly the right dose before lunch — in and out, not a full pool day (you already had one of those on Sunday). Check the day's opening hours and prices at the entrance, and take coins for a locker.",
        attractionId: "erlebnisbad-mayrhofen",
        tag: "water"
      },
      {
        time: "The quieter alternative",
        title: "An easy riverside stretch of the Ziller path instead",
        description:
          "If nobody has the appetite for another pool, swap in the gentle version: the Ziller cycle and walking path runs flat along the river at Mayrhofen too, and an out-and-back stroll with the pram — water on one side, mountains straight ahead — is a completely respectable way to spend ninety minutes. Cooler than the pool, no changing rooms, and it costs nothing.",
        attractionId: "ziller-radweg",
        tag: "nature",
        optional: true
      },
      {
        time: "13:00",
        title: "Lunch, and the nap you have to engineer today",
        description:
          "Lunch in Mayrhofen, and then a small honest problem: every stop today is minutes apart, so there's no long transfer to sleep through. Two options that work. One, drive the nap on purpose — head a little further up the valley toward Ginzling on the quiet road and turn back when they're out; it's beautiful and it's exactly the kind of road that puts children to sleep. Two, accept a pram nap: Mayrhofen's main street is flat and shaded in places, so one parent walks laps while the other sits with a coffee. Either is fine. Skipping the nap on the second-to-last day is not."
      },
      {
        time: "14:00",
        title: "Mayrhofen village — flat streets, cafés, ice cream, playgrounds",
        description:
          "The Zillertal's big resort village, and in August it's an easy, cheerful place to spend an afternoon at toddler pace: a flat main street you can do with the pram, cafés with terraces, several playgrounds tucked between the hotels, ice cream in more than one place, and shop windows full of the kind of Tyrolean tat that makes a good souvenir. Park once and walk. There's no sight to tick off here, which is the point — this is the afternoon where nothing is scheduled and you all wind down toward the last day.",
        attractionId: "mayrhofen-town",
        tag: "village",
        optional: false,
        rideToNext: { duration: "21 min", note: "back down the B169 through Zell to Fügen", departAt: "16:40" }
      }
    ],
    driveNotes:
      "The gentlest driving day of the whole week, and deliberately so before tomorrow's transfer. Fügen → Erlebnissennerei Zillertal at Mayrhofen is a measured 21 min straight up the B169 through Zell. Everything after that is inside Mayrhofen — the pool and the village are minutes apart, so the car mostly sits. Home is the same 21 min back down the valley. The flip side of all these short hops is that today's nap has no transfer to hide in, so it has to be driven deliberately (the quiet road up toward Ginzling) or done in the pram.",
    gear: [
      { item: "Snacks you've already checked the labels on — Gili sesame, Tom banana — so the tasting counter isn't the only option", for: "erlebnissennerei-zillertal" },
      { item: "A cool bag in the boot for the cheese you'll buy at the dairy shop", for: "erlebnissennerei-zillertal" },
      { item: "Wet wipes and hand gel — there's a farm yard with animals to pet", for: "erlebnissennerei-zillertal" },
      { item: "Swim kit, swim diaper for Tom, towels, and coins for a locker", for: "erlebnisbad-mayrhofen" },
      { item: "Pram for the flat main street and for the fallback pram nap", for: "mayrhofen-town" },
      { item: "Cash for ice cream, the playground kiosk and small shops" }
    ],
    dayTips: [
      "The one stop where the allergies really matter: a dairy shop means bakery goods (sesame) and fruit yoghurts, smoothies and milkshakes (banana). Read labels, ask staff, and have safe snacks of your own in the bag before anyone starts tasting",
      "Buy the cheese here rather than at the supermarket — it's the trip's best edible souvenir. Cool bag in the boot, and it survives to Munich",
      "Today's nap has no long transfer to hide in: drive it on purpose up the quiet valley road toward Ginzling, or do a pram nap on the main street. Don't let it slide — tomorrow is a two-hour drive to Germany",
      "If you swapped Saturday's Rattenberg to today because of the holiday, this is the afternoon to do it: it's a working Tuesday, the glass workshops and shops will be open, and Rattenberg is a short hop down the valley from Fügen",
      "Check the Erlebnisbad's hours and prices at the entrance — outdoor pools in the Alps change their timetable with the weather",
      "Second-to-last night: start the sort tonight. Wet things washed, souvenirs wrapped, and the car kit slimmed down to what you actually need for tomorrow's drive"
    ],
    italianWords: [
      {
        word: "Käse",
        pronounce: "KAY-zeh",
        meaning: "Cheese",
        example: "Der Käse kommt von dieser Kuh!",
        exampleMeaning: "The cheese comes from this cow!"
      },
      {
        word: "Kuh",
        pronounce: "koo",
        meaning: "Cow (you hear the bells before you see them)",
        example: "Die Kuh hat eine Glocke.",
        exampleMeaning: "The cow has a bell."
      },
      {
        word: "Milch",
        pronounce: "milkh",
        meaning: "Milk",
        example: "Frische Milch für Tom, bitte.",
        exampleMeaning: "Fresh milk for Tom, please."
      },
      {
        word: "Traktor",
        pronounce: "TRAHK-tor",
        meaning: "Tractor",
        example: "Gili fährt den Traktor!",
        exampleMeaning: "Gili is driving the tractor!"
      },
      {
        word: "Eis",
        pronounce: "ice",
        meaning: "Ice cream (also 'ice')",
        example: "Ein Eis für Gili, bitte.",
        exampleMeaning: "One ice cream for Gili, please."
      },
      {
        word: "Enthält das Sesam?",
        pronounce: "ent-HELT dahs ZAY-zahm",
        meaning: "Does this contain sesame? (the one phrase worth memorising — and 'Ist da Banane drin?' for Tom)",
        example: "Entschuldigung, enthält das Sesam?",
        exampleMeaning: "Excuse me, does this contain sesame?"
      }
    ],
    drinkOfTheDay: {
      name: "Zweigelt",
      type: "wine",
      pairing:
        "Austria's flagship red — juicy sour cherry, soft tannins, dangerously drinkable — and the obvious partner for the cheese you carried home from the dairy this morning. Buy a bottle in the village, cut some Zillertal Bergkäse, and call it dinner on the balcony.",
      servingNote: "Lightly cooled (16 °C) — Austrians never serve red warm"
    }
  },
  {
    dayNumber: 9,
    date: "2026-08-19",
    weekday: "Wednesday",
    departureTime: "08:30",
    rideToFirst: { duration: "24 min", note: "B169 down to Strass, A12 east one junction to Kramsach, then up into the Alpbachtal to Reith" },
    region: "transit",
    base: "Fügen (check-out) → Freising / Munich",
    title: "One last Austrian morning, then north to Germany",
    subtitle: "Check out of the Stacherhof · Lauserland's wooden play park in the Alpbachtal · a 2-hour drive to the Freising / Munich-airport area (with an optional Chiemsee swim on the way)",
    leadImage: "./images/lauserland.jpg",
    activities: [
      {
        time: "08:00",
        title: "Last included breakfast, check out, load the car",
        description:
          "Seven nights done. Take the last breakfast properly — it's included and it's the last one you don't have to make — then the full sweep: pack everything, check under the beds (that's where Tom's other shoe lives), empty the apartment fridge into the car snack bag, and get the boot loaded before you go anywhere. Two things packed where you can reach them: the swim kit, in case you take the Chiemsee stop, and one night's clothes for all four of you, because you unpack almost nothing tonight. Aim to be rolling by 08:30.",
        rideToNext: { duration: "24 min", note: "B169 down to Strass, A12 east one junction to Kramsach, then up into the Alpbachtal to Reith", departAt: "08:30" }
      },
      {
        time: "~09:00",
        title: "Lauserland — the wooden play park at Reith im Alpbachtal",
        description:
          "A measured 24 minutes and a perfect last Austrian morning: a big adventure play park at the Reitherkogel base, built out of wood and water and pitched squarely at little ones. Wooden climbing structures at toddler scale, water channels and dams, sand, slides, animal figures to sit on, a hut for coffee, and grass to run on — no lift, no hike, no queue, and nothing here that Tom is too small for. Give it until about 12:30 and let it be unhurried; nobody wants to hurry a child on the last morning. Note the separate Lauser-Sauser alpine coaster at the same base station: from age 3 a child rides in front of an adult, so Gili qualifies and Tom doesn't — one parent takes her down, the other waits at the bottom with Tom. Check the day's hours and the height rules at the base station.",
        attractionId: "lauserland",
        tag: "family"
      },
      {
        time: "12:30",
        title: "Lunch in the Alpbachtal — last Austrian meal",
        description:
          "Eat at the play park's hut or drop into Reith or Alpbach village for a proper last Tyrolean lunch — Kaiserschmarrn, if you haven't had it yet, is the correct final order. Then get everyone into the car by 13:30, because the afternoon is a real drive and the nap has a job to do.",
        rideToNext: { duration: "2 h", note: "A12 north over the Kufstein border, A93 then A8 toward Munich, then north to Freising — a measured 2 h and 170 km, not the 1.5 h in the original plan", departAt: "13:30" }
      },
      {
        time: "Optional leg-stretch",
        title: "Chiemsee — Strandbad Feldwies at Übersee",
        description:
          "Five minutes off the A8 at the Übersee exit, on the Chiemsee's southern shore: shallow, warm, gently shelving water that Tom can walk into on his own feet, a lawn, and a playground. It's directly on the route, so it costs you nothing but the time you spend there — and it would be the last swim of the trip. Decide it in the car: if the kids wake early and get restless, take it and let them run the trip's energy out in Bavarian water. If they're both asleep and you'd rather bank the hour and arrive relaxed, drive on without guilt. Check the day's opening and lifeguard hours at the entrance if you stop.",
        attractionId: "chiemsee-uebersee",
        tag: "water",
        optional: true,
        rideToNext: { duration: "1 h", note: "back onto the A8 north-west, round Munich and on to Freising" }
      },
      {
        time: "15:30",
        title: "Arrive at the Freising / Munich-airport-area hotel",
        description:
          "Tonight you sleep near the airport — that part is decided; the specific hotel is still being booked, so check the Lists section for the confirmed address before you set the nav after lunch. Whatever it turns out to be, an airport-area bed is what makes tomorrow calm: the 13:00 Sixt return stops being a race and becomes an errand. Unpack exactly one night's worth and no more, then repack the airport bag on top — passports, boarding passes, the cheese wrapped in a cool bag, anything fragile in hand luggage, and the flight entertainment. Then a relaxed evening: hotel dinner, early bath, and a first look through 2,000 photos."
      }
    ],
    driveNotes:
      "Check-out morning, so the car gets loaded before anything else happens, then two legs. Fügen → Lauserland at Reith im Alpbachtal is a measured 24 min: B169 down to Strass, A12 east one junction to Kramsach, then up into the Alpbachtal. The correction that reshapes the afternoon: Lauserland → Freising is a measured 2 h and 170 km, not the 1.5 h originally assumed — A12 north over the Kufstein border, the A93, then the A8 toward Munich and north to Freising. All motorway. The Chiemsee at Übersee sits directly on that route about five minutes off the A8, so it's a free option rather than a detour: taking it splits the drive into roughly 1 h + a swim + 1 h.",
    gear: [
      { item: "Swim kit and towels packed where you can actually reach them — the Chiemsee decision gets made in the car", for: "chiemsee-uebersee" },
      { item: "One night's clothes for all four of you on top of the load — you unpack almost nothing at the hotel tonight" },
      { item: "A change of clothes each for Lauserland's water channels — the last wet stop of the trip", for: "lauserland" },
      { item: "The cool bag with yesterday's cheese, kept in the shade of the boot" },
      { item: "Double snacks and full water bottles for the 2-hour run north — this is the longest single leg of the trip" },
      { item: "Euro coins for German parking machines and the lido entry — you're in Bavaria from mid-afternoon" }
    ],
    dayTips: [
      "Correction: Lauserland → Freising is a measured 2 h (170 km), not 1.5 h. Leaving at 13:30 puts you at the hotel around 15:30 without the Chiemsee, later with it",
      "Lauser-Sauser at the same base station: from age 3 a child rides in front of an adult, so Gili can and Tom can't. Parents alternate, and check the day's hours and rules at the base station rather than promising anything",
      "The Chiemsee is a genuinely free option — five minutes off the A8, directly on the route. Take it if the kids wake up restless; skip it if they're asleep and you'd rather bank the hour",
      "Tonight's hotel is in the Freising / Munich-airport area — decided, but still being booked. Check the Lists section for the confirmed address before you set the nav, and don't invent one at the roadside",
      "An airport-area hotel is the whole reason tomorrow works: the 13:00 Sixt return and El Al's long security become comfortable instead of tight",
      "Last check-out sweep: under the beds, the balcony, the bathroom hooks, the fridge. Then the car kit gets retired — wet things into a laundry bag, not back into a suitcase"
    ],
    italianWords: [
      {
        word: "Rutsche",
        pronounce: "ROOT-sheh",
        meaning: "Slide",
        example: "Noch einmal die Rutsche!",
        exampleMeaning: "The slide again!"
      },
      {
        word: "Spielplatz",
        pronounce: "SHPEEL-plats",
        meaning: "Playground",
        example: "Das ist der schönste Spielplatz!",
        exampleMeaning: "This is the best playground!"
      },
      {
        word: "Grenze",
        pronounce: "GREN-tseh",
        meaning: "Border",
        example: "Jetzt fahren wir über die Grenze.",
        exampleMeaning: "Now we're crossing the border."
      },
      {
        word: "Autobahn",
        pronounce: "OW-toh-bahn",
        meaning: "Motorway",
        example: "Die Autobahn ist lang heute.",
        exampleMeaning: "The motorway is long today."
      },
      {
        word: "Müde",
        pronounce: "MUE-deh",
        meaning: "Tired",
        example: "Alle sind müde im Auto.",
        exampleMeaning: "Everyone is tired in the car."
      },
      {
        word: "Koffer",
        pronounce: "KOF-fer",
        meaning: "Suitcase",
        example: "Wir packen die Koffer.",
        exampleMeaning: "We're packing the suitcases."
      }
    ],
    drinkOfTheDay: {
      name: "Weißer Spritzer",
      type: "wine",
      pairing:
        "The Austrian evening default: Grüner Veltliner cut half-and-half with sparkling water — the most Austrian possible way to toast seven nights in the Zillertal, even though you're drinking it in Bavaria. Ask for a 'Weinschorle' here and you'll get exactly the same thing.",
      servingNote: "Half dry white wine, half soda water, plenty of ice — 'a G'spritzter' if you want to order like a local"
    }
  },
  {
    dayNumber: 10,
    date: "2026-08-20",
    weekday: "Thursday",
    departureTime: "08:30",
    rideToFirst: { duration: "32 min", note: "Freising down to Munich and across to the Olympiapark — a measured 32 min" },
    region: "transit",
    base: "Munich → home",
    title: "Auf Wiedersehen — a Munich morning, then home",
    subtitle: "Olympiapark lawns, the lake and the tower · leave the park by 11:15 · Sixt return 13:00 at Terminalstr. Mitte P6 · LY254 departs 16:30",
    leadImage: "./images/olympiapark-munich.jpg",
    activities: [
      {
        time: "~07:45",
        title: "Breakfast, final sweep, load the car",
        description:
          "Last hotel breakfast of the trip, and there's time for a real one. Do the room sweep while the kids eat (under the beds — that's where Tom's other shoe lives), get the boot loaded, and keep the airport bag on the back seat rather than buried: passports, boarding passes, snacks, the flight surprises. Rolling by 08:30 gives the morning its whole shape.",
        rideToNext: { duration: "32 min", note: "Freising down toward Munich and across to the Olympiapark — park in the Olympiapark garage", departAt: "08:30" }
      },
      {
        time: "~09:05",
        title: "Olympiapark München — lawns, ducks, and one last big view",
        description:
          "Hila's choice for the last morning and a good one: the 1972 Olympic park is essentially a giant landscaped playground — huge rolling lawns to run down, a lake with ducks and swans that will hold Tom's attention longer than anything in a museum, the tented stadium roof to point at, and paved paths that make the whole thing easy with a pram. If there's appetite for one more altitude hit, the Olympiaturm lift goes up the tower for a farewell view over Munich to the Alps you were standing in yesterday — check the day's hours and ticket prices at the tower entrance. Otherwise just walk the lake, buy an ice cream, and let the trip end gently. Two and a half hours here is plenty.",
        attractionId: "olympiapark-munich",
        tag: "family",
        rideToNext: { duration: "28 min", note: "Mittlerer Ring to the A9 north and the airport spur — fuel up before you get there, never at the airport", departAt: "11:15" }
      },
      {
        time: "~11:45",
        title: "Fuel, then the Sixt return at Parkhaus P6",
        description:
          "Fill the tank a few minutes short of the airport — never at the airport itself, where the prices are punitive — and do the full car sweep there rather than at the return desk: seat pockets, under the seats, the boot corners where a pacifier and one sock are definitely hiding. Then the rental return, signposted 'Mietwagen-Rückgabe': Terminalstraße Mitte, Parkhaus P6. Hand back by 13:00, keep the fuel receipt and the return paperwork, and it's a short walk into the terminal.",
        attractionId: "munich-airport",
        optional: false
      },
      {
        time: "~13:00",
        title: "Check-in, security, LY254 at 16:30",
        description:
          "El Al flights out of Munich come with thorough security interviews — the buffer isn't padding, it's the plan. One parent drops the bags while the other takes the kids straight to the play area; divide and survive. Once you're through, MUC is a comfortable airport to burn an hour in: kids' play areas, plane-watching windows, and a last Wiener Melange. Land in Tel Aviv tonight with 2,000 photos, a bag of Zillertal cheese, and a three-year-old who now says 'Gondel'.",
        attractionId: "munich-airport",
        optional: false
      }
    ],
    driveNotes:
      "Two measured drives and one hard deadline, which is why the timing is worth reading twice. Freising → Olympiapark is 32 min, so leaving the hotel at 08:30 puts you on the grass just after 09:00. Olympiapark → Munich Airport is a measured 28 min, and the Sixt return is a hard 13:00 with a fuel stop needed first. Leaving the park at 12:00 as originally planned leaves essentially zero slack — one wrong turn on the Mittlerer Ring and you're late for the car and then hurried through El Al security. Leave by 11:15 instead: it still gives you a good two and a half hours in the park, and it turns the rest of the day into a walk rather than a run.",
    gear: [
      { item: "The entertainment bag, loaded fresh: snacks, water, one new small surprise toy each for the flight" },
      { item: "Flight snacks you've read the labels on — Gili sesame, Tom banana — because airport food gets bought in a hurry" },
      { item: "Passports and booking confirmations in the daypack, not the suitcase" },
      { item: "The cheese and anything fragile in HAND luggage, wrapped in clothes", for: "munich-airport" },
      { item: "A change of clothes for both kids in the carry-on — flight insurance of the practical kind" },
      { item: "Empty water bottles through security, refilled at the gate" },
      { item: "Pram right up to the gate — most airlines take it there, and MUC is a long walk", for: "olympiapark-munich" }
    ],
    dayTips: [
      "The one timing change worth taking seriously today: leave the Olympiapark by 11:15, not 12:00. It's a measured 28 min to MUC, you still need fuel, and the 13:00 Sixt return doesn't move. You'd still get a full two and a half hours in the park",
      "Fuel a few minutes short of the airport and keep the receipt — it's your proof of a full tank if Sixt queries it",
      "At the airport follow 'Mietwagen' signs, not 'Parken' — they split late and the loop back costs ten minutes you won't have",
      "The Olympiaturm lift is the optional flourish, not the plan: check the day's hours and prices at the entrance, and skip it without regret if the lawns and the ducks are working",
      "El Al security at MUC interviews every family. With small kids you're often waved toward the shorter line — budget the full time anyway",
      "Do the car sweep at the petrol station, not at P6: calm beats frantic for finding pacifiers under seats, and P6 is where the clock is loudest"
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
