import type { Dish } from "./types";

// Austria '26 — Tyrolean & Austrian food the family will actually meet.
// region: "north"/"south" for a base-side lean, "tyrol" for the
// everywhere-classics. Kid-friendliness is called out in the copy —
// Kaiserschmarrn and Pommes are the toddler currency of the Alps.
export const dishes: Dish[] = [
  {
    id: "wiener-schnitzel",
    name: "Wiener Schnitzel",
    italianName: "Wiener Schnitzel",
    region: "tyrol",
    category: "main",
    description:
      "The national icon: a thin veal cutlet (pork is the everyday version, sold as 'Schnitzel vom Schwein') breaded and fried golden, with a lemon wedge and potatoes or cranberry. Mild and crispy — a reliable win for kids who'll happily share a plate with parents.",
    tryIt: "Any gasthof terrace — a safe, kid-pleasing lunch across the region.",
    image: "./images/food-wiener-schnitzel.jpg"
  },
  {
    id: "kaiserschmarrn",
    name: "Kaiserschmarrn",
    italianName: "Kaiserschmarrn",
    region: "tyrol",
    category: "dessert",
    description:
      "A fluffy pancake torn into caramelised pieces, dusted with icing sugar and served with plum or apple compote. Named for Emperor Franz Joseph, it's the ultimate mountain-hut reward and pure toddler bait — Gili will demand it, and honestly so will everyone else. Often big enough to be lunch.",
    tryIt: "Any summit hut — the Spieljoch or Reither Kogel terraces do a classic one.",
    image: "./images/food-kaiserschmarrn.jpg"
  },
  {
    id: "tiroler-groestl",
    name: "Tiroler Gröstl",
    italianName: "Tiroler Gröstl",
    region: "tyrol",
    category: "main",
    description:
      "The Tyrolean skillet supper: pan-fried potatoes, onions and beef or pork, crisped up and crowned with a fried egg. Hearty, unfussy mountain food born from using up leftovers — filling after a day on the trails, and easy to share small forkfuls with the kids.",
    tryIt: "Hut lunches and village gasthöfe throughout Tyrol.",
    image: "./images/food-tiroler-groestl.jpg"
  },
  {
    id: "kaesespaetzle",
    name: "Kasspatzln (Cheese Spätzle)",
    italianName: "Kasspatzln",
    region: "north",
    category: "main",
    description:
      "Soft egg noodle-dumplings tossed with mountain cheese and crispy fried onions — the Alpine answer to mac-and-cheese, and therefore a near-guaranteed hit with small children. Rich and warming; a plain buttered portion is easy to ask for if the cheese is too strong for Tom.",
    tryIt: "Almost any Tyrolean menu; especially good at mountain huts.",
    image: "./images/food-kaesespaetzle.jpg"
  },
  {
    id: "speckknoedel",
    name: "Speckknödel",
    italianName: "Speckknödel",
    region: "tyrol",
    category: "starter",
    description:
      "Big bread dumplings studded with speck (cured ham), served either in a clear beef broth (Speckknödelsuppe) or with sauerkraut. The soup version is gentle and kid-approachable — a warming starter on a cool mountain day.",
    tryIt: "Gasthof menus everywhere; the soup version suits little ones.",
    image: "./images/food-speckknoedel.jpg"
  },
  {
    id: "apfelstrudel",
    name: "Apfelstrudel",
    italianName: "Apfelstrudel",
    region: "tyrol",
    category: "dessert",
    description:
      "Wafer-thin pastry wrapped around cinnamon apples, raisins and breadcrumbs, served warm with vanilla sauce or cream. The Austrian café classic — a calmer alternative to Kaiserschmarrn and just as beloved. A slice shared with a coffee is the perfect old-town pause.",
    tryIt: "Café terraces in Hall, Kufstein and Innsbruck.",
    image: "./images/food-apfelstrudel.jpg"
  },
  {
    id: "germknoedel",
    name: "Germknödel",
    italianName: "Germknödel",
    region: "south",
    category: "dessert",
    description:
      "A fluffy steamed yeast dumpling filled with spiced plum jam (Powidl), drenched in melted butter and dusted with poppy seeds and sugar. A hut favourite — sweet, pillowy and enormous. Kids love the soft dough; go easy on the poppy topping for the littlest.",
    tryIt: "Mountain huts on the Spieljoch, Söll and Alpbach lifts.",
    image: "./images/food-germknoedel.jpg"
  },
  {
    id: "marillenknoedel",
    name: "Marillenknödel",
    italianName: "Marillenknödel",
    region: "tyrol",
    category: "dessert",
    description:
      "Whole apricots wrapped in a potato-dough dumpling, boiled and rolled in buttery sweet breadcrumbs — a summer special when Austrian apricots (Marillen) are in season, which August is. Not too sweet, fun to cut open; a lovely seasonal treat.",
    tryIt: "Look for the summer special on dessert boards in August.",
    image: "./images/food-marillenknoedel.jpg"
  },
  {
    id: "brettljause",
    name: "Brettljause",
    italianName: "Brettljause",
    region: "tyrol",
    category: "snack",
    description:
      "A wooden board of cold cuts, speck, mountain cheese, spreads, pickles and dark bread — the classic hut or farm snack, meant for sharing. Great for a family: parents graze the speck and cheese while the kids pick at bread, butter and mild cheese.",
    tryIt: "Alpine huts (Almen) and farm-café stops — perfect shared grazing.",
    image: "./images/food-brettljause.jpg"
  },
  {
    id: "graukaese",
    name: "Tiroler Graukäse",
    italianName: "Graukas",
    region: "south",
    category: "starter",
    description:
      "A pungent, low-fat sour-milk cheese from the Zillertal, protected by EU origin rules and traditionally dressed with onions, vinegar and oil (Sauerkäse). Very much an adventurous-adult taste — sharp and aromatic. One for Yuval and Hila to brave; the kids will not be volunteering.",
    tryIt: "Zillertal gasthöfe — ask for it dressed as 'Sauerkäse'.",
    image: "./images/food-graukaese.jpg"
  },
  {
    id: "almdudler",
    name: "Almdudler",
    italianName: "Almdudler",
    region: "tyrol",
    category: "drink",
    description:
      "Austria's cult herbal soda — a lightly fizzy, alpine-herb lemonade that's been the national soft drink since 1957. Non-alcoholic, not too sweet, and genuinely everywhere. A fun 'grown-up-looking' fizzy treat for Gili and the default table drink for the whole family.",
    tryIt: "Every restaurant, hut and supermarket fridge in the country.",
    image: "./images/food-almdudler.jpg"
  },
  {
    id: "skiwasser",
    name: "Skiwasser",
    italianName: "Skiwasser",
    region: "tyrol",
    category: "drink",
    description:
      "A raspberry-and-lemon squash mixed with water — the standard kids' (and hikers') thirst-quencher on every mountain, sweet-tart and pink. Cheap, refillable and universally loved by children; ask for it wherever you'd order a drink up a mountain.",
    tryIt: "Any hut or gasthof — the go-to drink for the kids.",
    image: "./images/food-skiwasser.jpg"
  }
];

export const dishesByRegion = (r: "north" | "south" | "tyrol") =>
  dishes.filter(d => d.region === r);
