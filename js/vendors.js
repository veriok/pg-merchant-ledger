export const FAVOR_LEVELS = ['Neutral','Comfortable','Friends','Close Friends','Best Friends','Like Family','Soul Mates'];
export const FAVOR_STEP   = [100, 200, 300, 600, 800, 1000];  // favor to go from level i to i+1
export const ITEM_TYPES   = ['Food','Potions','Phlog','Gems','Tools','Skins','Leather','Equipment','Jewelry','Monster Parts', 'Skulls', 'Recipes', 'Cloth Armor', 'Carpentry', 'Augument'];
export const TYPE_ICON    = {Food:'🍖',Potions:'🧪',Phlog:'✨',Gems:'💎',Tools:'🔨',Skins:'🦊',Leather:'🟫',Equipment:'⚔',Jewelry:'💍','Monster Parts':'🏹','Skulls':'💀', 'Recipes':'📄', 'Cloth Armor':'👚', 'Carpentry':'🪑', 'Augument':'⚪'};
export const SEVEN_DAYS   = 7 * 24 * 60 * 60 * 1000;
export const REGION_ICON  = {'Serbule':'🏰','Eltibule':'🏟️','Serbule Hills':'🌄','Red Wing Casino':'🐦','Kur Mountains':'⛰️','Sun Vale':'☀️','Ilmari':'🏜️','New Prestibule':'🏛️','Statehelm':'👑','Rahu':'⛓️','Fae Realm':'🧚‍♀️'};
export const REGION_ORDER = Object.keys(REGION_ICON);

// limits array index matches FAVOR_LEVELS index
// {c: capPerItem, p: weeklyPool}  null = unknown/won't buy at that level
export const VENDORS_DATA = [
  { id:"azalak", name:"Azalak", region:"Serbule", location:"North from Town", beastSpeak:true,
    buyTypes:[{t:"Potions",m:100}, {t:"Skulls",m:100}],
    limits:[{c:null,p:null}, {c:null,p:null}, {c:null,p:25000}, {c:null,p:null}, {c:null,p:null}, {c:null,p:35000}, {c:null,p:35000}],
    loves:["Gems", "Flowers", "Books", "Head Gear"], likes:[], hates:[] },

  { id:"charles_thompson", name:"Charles Thompson", region:"Serbule", location:"Tent Southwest from Town", beastSpeak:true,
    buyTypes:[{t:"Potions",m:100}, {t:"Monster Parts",m:100} ],
    limits:[{c:null,p:null}, {c:150,p:7500}, {c:300,p:15000}, {c:450,p:20000}, {c:636,p:35000}, {c:null,p:45000}, {c:null,p:60000}],
    loves:["Mushrooms of all Types", "Combat Beakers and Flasks", "Rare Alchemy Recipes"], likes:[], hates:[] },

  { id:"elahil", name:"Elahil", region:"Serbule", location:"City Center", beastSpeak:false,
    buyTypes:[{t:"Equipment",m:100}],
    limits:[{c:100,p:5000}, {c:100,p:5000}, {c:200,p:10000}, {c:400,p:20000}, {c:800,p:40000}, {c:1000,p:50000}, {c:1300,p:65000}],
    loves:["Magical Bows"], likes:["Prepared Food", "Rings"], hates:["Drugs"] },

  { id:"fainor", name:"Fainor", region:"Serbule", location:"Inn", beastSpeak:true,
    buyTypes:[{t:"Food",m:100}, {t:"Recipes",m:100}],
    limits:[{c:50,p:2500}, {c:50,p:2500}, {c:400,p:20000}, {c:null,p:null}, {c:null,p:null}, {c:500,p:25000}, {c:null,p:30000}],
    loves:[], likes:[], hates:[] },

  { id:"flia", name:"Flia", region:"Serbule", location:"East from Town", beastSpeak:true,
    buyTypes:[{t:"Phlog",m:100}, {t:"Potions",m:100}, {t:"Recipes",m:100}],
    limits:[{c:null,p:null}, {c:200,p:10000}, {c:400,p:20000}, {c:800,p:40000}, {c:1600,p:80000}, {c:2000,p:100000}, {c:2400,p:120000}],
    loves:["Rare Recipes and Knowledge", "Items With Interesting History"], likes:["Potions"], hates:["Food"] },

  { id:"harry_the_wolf", name:"Harry the Wolf", region:"Serbule", location:"Farm", beastSpeak:true,
    buyTypes:[{t:"Potions",m:100}, {t:"Food",m:100}, {t:"Gems",m:100}, {t:"Phlog",m:100}, {t:"Leather",m:100}, {t:"Skins",m:100}, {t:"Tools",m:100}, {t:"Equipment",m:100}, {t:"Jewelry",m:100}, {t:"Monster Parts",m:100}, {t:"Augument",m:100}],
    limits:[{c:75,p:3750}, {c:null,p:null}, {c:null,p:null}, {c:null,p:null}, {c:null,p:null}, {c:null,p:null}, {c:null,p:null}],
    loves:[], likes:[], hates:[] },

  { id:"hulon", name:"Hulon", region:"Serbule", location:"City Center", beastSpeak:true,
    buyTypes:[{t:"Recipes",m:100}],
    limits:[{c:100,p:5000}, {c:119,p:5000}, {c:200,p:10000}, {c:400,p:20000}, {c:800,p:40000}, {c:1000,p:50000}, {c:1200,p:60000}],
    loves:["Seeds", "Seedlings"], likes:["Prepared Food", "Cooking Recipes"], hates:["Poetry"] },

  { id:"joeh", name:"Joeh", region:"Serbule", location:"City Center", beastSpeak:false,
    buyTypes:[{t:"Equipment",m:100}],
    limits:[{c:100,p:5000}, {c:100,p:5000}, {c:800,p:40000}, {c:null,p:null}, {c:null,p:null}, {c:1000,p:50000}, {c:1200,p:60000}],
    loves:["Swords", "Shields"], likes:[], hates:["Jewelry"] },

  { id:"larsan", name:"Larsan", region:"Serbule", location:"City Center", beastSpeak:true,
    buyTypes:[{t:"Gems",m:100}, {t:"Jewelry",m:100}],
    limits:[{c:100,p:5000}, {c:100,p:5000}, {c:800,p:40000}, {c:null,p:null}, {c:null,p:null}, {c:1000,p:50000}, {c:1000,p:50000}],
    loves:["Fancy Rings", "Precious Gems", "Figurines"], likes:[], hates:[] },

  { id:"leonard_allenson", name:"Leonard Allenson", region:"Serbule", location:"East near Dungeon", beastSpeak:true,
    buyTypes:[{t:"Recipes",m:100}],
    limits:[{c:200,p:10000}, {c:200,p:10000}, {c:1600,p:80000}, {c:null,p:null}, {c:null,p:null}, {c:2000,p:100000}, {c:2400,p:120000}],
    loves:["Equipment with Battle Chemistry prerequisites"], likes:[], hates:[] },

  { id:"marna", name:"Marna", region:"Serbule", location:"City Center", beastSpeak:false,
    buyTypes:[{t:"Phlog",m:100}, {t:"Potions",m:100}, {t:"Food",m:100}, {t:"Gems",m:100}, {t:"Leather",m:100}, {t:"Skins",m:100}, {t:"Tools",m:100}, {t:"Equipment",m:100}, {t:"Jewelry",m:100}, {t:"Monster Parts",m:100}],
    limits:[{c:500,p:2000}, {c:500,p:2000}, {c:800,p:3200}, {c:null,p:null}, {c:null,p:null}, {c:900,p:3600}, {c:1000,p:4000}],
    loves:["Rare Recipes", "Vegetarian Food", "Fire Staves"], likes:["Animal Skins"], hates:["Meat"] },

  { id:"mushroom_jack", name:"Mushroom Jack", region:"Serbule", location:"City Center", beastSpeak:true,
    buyTypes:[{t:"Monster Parts",m:100}],
    limits:[{c:null,p:null}, {c:null,p:null}, {c:100,p:5000}, {c:200,p:10000}, {c:400,p:20000}, {c:400,p:40000}, {c:400,p:60000}],
    loves:["Body Parts"], likes:["Miscellaneous Junk"], hates:[] },

  { id:"roshun_the_traitor", name:"Roshun the Traitor", region:"Serbule", location:"North from Town", beastSpeak:true,
    buyTypes:[{t:"Equipment",m:100}, {t:"Jewelry",m:100}],
    limits:[{c:150,p:5000}, {c:150,p:7500}, {c:null,p:50000}, {c:null,p:null}, {c:null,p:null}, {c:null,p:65000}, {c:null,p:75000}],
    loves:["Staves", "Orcish Cultural Artifacts", "Gur-Horta"], likes:[], hates:["Nature"] },

  { id:"sir_coth", name:"Sir Coth", region:"Serbule", location:"City Center", beastSpeak:false,
    buyTypes:[{t:"Monster Parts",m:100}],
    limits:[{c:null,p:null}, {c:100,p:5000}, {c:800,p:40000}, {c:null,p:null}, {c:null,p:null}, {c:1000,p:50000}, {c:1200,p:60000}],
    loves:["All Art", "Flawless Animal Skins", "Ivory"], likes:[], hates:["Potions"] },

  { id:"tadion", name:"Tadion", region:"Serbule", location:"Marketplace", beastSpeak:false,
    buyTypes:[{t:"Equipment",m:100}],
    limits:[{c:null,p:null}, {c:null,p:5000}, {c:null,p:10000}, {c:400,p:20000}, {c:800,p:40000}, {c:null,p:50000}, {c:null,p:60000}],
    loves:["Good Metal Slabs (or higher)", "Ancient Coins"], likes:["Metal Armor", "Snail Shells"], hates:[] },

  { id:"therese", name:"Therese", region:"Serbule", location:"Farm", beastSpeak:true,
    buyTypes:[{t:"Food",m:100}, {t:"Phlog",m:10}, {t:"Potions",m:10}, {t:"Gems",m:10}, {t:"Leather",m:10}, {t:"Skins",m:10}, {t:"Tools",m:10}, {t:"Equipment",m:10}, {t:"Jewelry",m:10}, {t:"Monster Parts",m:10}],
    limits:[{c:50,p:2500}, {c:50,p:2500}, {c:null,p:20000}, {c:null,p:null}, {c:null,p:null}, {c:null,p:40000}, {c:null,p:60000}],
    loves:["Necklaces"], likes:["Seeds"], hates:["Meat and Meat Dishes", "Fish and Fish Dishes"] },

  { id:"velkort", name:"Velkort", region:"Serbule", location:"City Center", beastSpeak:true,
    buyTypes:[],
    limits:[{c:null,p:null}, {c:50,p:2500}, {c:400,p:20000}, {c:null,p:null}, {c:null,p:null}, {c:800,p:40000}, {c:1300,p:65000}],
    loves:[], likes:[], hates:["Food"] },

  { id:"sir_arif", name:"Sir Arif", region:"Serbule", location:"Serbule Crypt", beastSpeak:true,
    buyTypes:[{t:"Food",m:100}, {t:"Potions",m:100}],
    limits:[{c:null,p:null}, {c:100,p:5000}, {c:800,p:40000}, {c:null,p:null}, {c:null,p:null}, {c:1000,p:50000}, {c:null,p:null}],
    loves:["Staves"], likes:["Anything Else Edible"], hates:["Fish"] },

  { id:"way", name:"Way", region:"Serbule", location:"Myconian Cave", beastSpeak:true,
    buyTypes:[{t:"Phlog",m:100}, {t:"Potions",m:100}, {t:"Food",m:100}, {t:"Gems",m:100}, {t:"Leather",m:100}, {t:"Skins",m:100}, {t:"Tools",m:100}, {t:"Equipment",m:100}, {t:"Jewelry",m:100}, {t:"Monster Parts",m:100}],
    limits:[{c:125,p:6250}, {c:150,p:7500}, {c:300,p:12500}, {c:null,p:null}, {c:null,p:null}, {c:null,p:15000}, {c:null,p:17500}],
    loves:[], likes:["Vendor Trash", "Storage Crates", "Textiles"], hates:[] },

  { id:"baroness_marith_felgard", name:"Baroness Marith Felgard", region:"Serbule Hills", location:"Serbule Hills", beastSpeak:true,
    buyTypes:[{t:"Phlog",m:100}, {t:"Potions",m:100}, {t:"Food",m:100}, {t:"Gems",m:100}, {t:"Leather",m:100}, {t:"Skins",m:100}, {t:"Tools",m:100}, {t:"Equipment",m:100}, {t:"Jewelry",m:100}, {t:"Monster Parts",m:100}],
    limits:[{c:null,p:null}, {c:500,p:2000}, {c:800,p:3200}, {c:null,p:null}, {c:null,p:null}, {c:900,p:3600}, {c:1000,p:4000}],
    loves:[], likes:["Rings", "Fashionable Clothing", "Topaz Gems"], hates:[] },

  { id:"brianna_willer", name:"Brianna Willer", region:"Serbule Hills", location:"Serbule Hills", beastSpeak:true,
    buyTypes:[{t:"Monster Parts",m:100}],
    limits:[{c:null,p:null}, {c:null,p:null}, {c:null,p:20000}, {c:null,p:null}, {c:null,p:null}, {c:null,p:null}, {c:null,p:25000}],
    loves:["Dahlias", "Moss Agates", "Barrels"], likes:[], hates:[] },

  { id:"cleo_conyer", name:"Cleo Conyer", region:"Serbule Hills", location:"Serbule Hills", beastSpeak:true,
    buyTypes:[{t:"Phlog",m:100}, {t:"Potions",m:100}, {t:"Food",m:100}, {t:"Gems",m:100}, {t:"Leather",m:100}, {t:"Skins",m:100}, {t:"Tools",m:100}, {t:"Equipment",m:100}, {t:"Jewelry",m:100}, {t:"Monster Parts",m:100}],
    limits:[{c:200,p:1500}, {c:300,p:3000}, {c:600,p:7500}, {c:null,p:null}, {c:null,p:null}, {c:null,p:null}, {c:800,p:10500}],
    loves:[], likes:[], hates:[] },

  { id:"durstin_tallow", name:"Durstin Tallow", region:"Serbule Hills", location:"Serbule Hills", beastSpeak:true,
    buyTypes:[{t:"Food",m:100}],
    limits:[{c:50,p:2500}, {c:50,p:2500}, {c:null,p:20000}, {c:null,p:null}, {c:null,p:null}, {c:500,p:25000}, {c:600,p:30000}],
    loves:[], likes:[], hates:[] },

  { id:"sammie_grimspine", name:"Sammie Grimspine", region:"Serbule Hills", location:"Serbule Hills", beastSpeak:true,
    buyTypes:[{t:"Equipment",m:100}, {t:"Jewelry",m:100}],
    limits:[{c:50,p:2500}, {c:100,p:5000}, {c:880,p:40000}, {c:null,p:null}, {c:null,p:null}, {c:null,p:60000}, {c:null,p:80000}],
    loves:["Calligraphy Benches", "Grapes"], likes:["Raw Meat"], hates:[] },

  { id:"paul_vaughn", name:"Paul Vaughn", region:"Serbule Hills", location:"Serbule Hills", beastSpeak:true,
    buyTypes:[{t:"Carpentry",m:100}],
    limits:[{c:50,p:2500}, {c:100,p:3750}, {c:null,p:20000}, {c:null,p:null}, {c:null,p:null}, {c:600,p:30000}, {c:720,p:40000}],
    loves:["Perfect Pieces of Wood", "Dessert Meals"], likes:["Beer"], hates:[] },

  { id:"helena_veilmoor", name:"Helena Veilmoor", region:"Eltibule", location:"Eltibule", beastSpeak:false,
    buyTypes:[{t:"Equipment",m:100}, {t:"Phlog",m:20}, {t:"Potions",m:20}, {t:"Food",m:20}, {t:"Gems",m:20}, {t:"Leather",m:20}, {t:"Skins",m:20}, {t:"Tools",m:20}, {t:"Jewelry",m:20}, {t:"Monster Parts",m:20}],
    limits:[{c:200,p:10000}, {c:200,p:10000}, {c:1600,p:80000}, {c:null,p:null}, {c:null,p:null}, {c:2000,p:100000}, {c:2400,p:120000}],
    loves:["Poetry", "Extremely Valuable Things", "Obsidian"], likes:[], hates:["Stupid Crap", "Gross Monster Bits"] },

  { id:"hogan", name:"Hogan", region:"Eltibule", location:"Eltibule", beastSpeak:true,
    buyTypes:[{t:"Equipment",m:100}],
    limits:[{c:150,p:7500}, {c:150,p:7500}, {c:800,p:40000}, {c:null,p:null}, {c:null,p:null}, {c:1000,p:60000}, {c:null,p:80000}],
    loves:["Staves"], likes:[], hates:[] },

  { id:"jesina", name:"Jesina", region:"Eltibule", location:"Eltibule", beastSpeak:true,
    buyTypes:[{t:"Potions",m:100}, {t:"Food",m:100}],
    limits:[{c:200,p:10000}, {c:400,p:15000}, {c:1600,p:80000}, {c:null,p:null}, {c:null,p:null}, {c:null,p:100000}, {c:null,p:120000}],
    loves:["Clothing and Cloth Armor", "Paintings"], likes:["Cooking Recipes"], hates:["Grisly Monster Trophies"] },

  { id:"jumjab", name:"Jumjab", region:"Eltibule", location:"Eltibule", beastSpeak:true,
    buyTypes:[{t:"Phlog",m:100}, {t:"Potions",m:100}, {t:"Food",m:100}, {t:"Gems",m:100}, {t:"Leather",m:100}, {t:"Skins",m:100}, {t:"Tools",m:100}, {t:"Equipment",m:100}, {t:"Jewelry",m:100}, {t:"Monster Parts",m:100}],
    limits:[{c:null,p:null}, {c:20,p:1000}, {c:50,p:2500}, {c:null,p:null}, {c:null,p:null}, {c:60,p:3000}, {c:null,p:3500}],
    loves:["Hearts"], likes:["Bones", "Equipment with Necromancy Prerequisites"], hates:[] },

  { id:"kalaba", name:"Kalaba", region:"Eltibule", location:"Eltibule", beastSpeak:false,
    buyTypes:[{t:"Equipment",m:100}],
    limits:[{c:150,p:7500}, {c:150,p:7500}, {c:null,p:50000}, {c:null,p:null}, {c:null,p:null}, {c:null,p:75000}, {c:2000,p:100000}],
    loves:[], likes:["Gauntlets and Gloves"], hates:[] },

  { id:"kleave", name:"Kleave", region:"Eltibule", location:"Eltibule", beastSpeak:true,
    buyTypes:[{t:"Skins",m:100}, {t:"Leather",m:100}],
    limits:[{c:null,p:null}, {c:100,p:5000}, {c:800,p:40000}, {c:null,p:null}, {c:null,p:null}, {c:null,p:50000}, {c:2400,p:60000}],
    loves:["Onyx"], likes:["Skins", "Potions"], hates:["Artwork"] },

  { id:"sie_antry", name:"Sie Antry", region:"Eltibule", location:"Eltibule", beastSpeak:true,
    buyTypes:[{t:"Equipment",m:100}, {t:"Skins",m:100}, {t:"Phlog",m:100}, {t:"Augument",m:100}],
    limits:[{c:null,p:null}, {c:100,p:5000}, {c:800,p:40000}, {c:null,p:null}, {c:null,p:null}, {c:1000,p:50000}, {c:null,p:50000}],
    loves:[], likes:[], hates:[] },

  { id:"suspicious_cow", name:"Suspicious_Cow", region:"Eltibule", location:"Eltibule", beastSpeak:true,
    buyTypes:[{t:"Phlog",m:100}, {t:"Potions",m:100}, {t:"Food",m:100}, {t:"Gems",m:100}, {t:"Leather",m:100}, {t:"Skins",m:100}, {t:"Tools",m:100}, {t:"Equipment",m:100}, {t:"Jewelry",m:100}, {t:"Monster Parts",m:100}],
    limits:[{c:50,p:2500}, {c:75,p:3750}, {c:100,p:5000}, {c:125,p:6250}, {c:150,p:7500}, {c:175,p:8750}, {c:200,p:10000}],
    loves:["Poetry", "Extremely Valuable Things", "Obsidian"], likes:[], hates:["Stupid Crap", "Gross Monster Bits"] },

  { id:"yetta", name:"Yetta", region:"Eltibule", location:"Eltibule", beastSpeak:false,
    buyTypes:[{t:"Phlog",m:100}, {t:"Potions",m:100}, {t:"Food",m:100}, {t:"Gems",m:100}, {t:"Leather",m:100}, {t:"Skins",m:100}, {t:"Tools",m:100}, {t:"Equipment",m:100}, {t:"Jewelry",m:100}, {t:"Monster Parts",m:100}],
    limits:[{c:100,p:5000}, {c:125,p:6250}, {c:200,p:10000}, {c:null,p:null}, {c:null,p:null}, {c:250,p:12500}, {c:300,p:15000}],
    loves:["Lapis Lazuli", "Mushrooms"], likes:["Amulets"], hates:[] },

  { id:"agrashab", name:"Agrashab", region:"Sun Vale", location:"Sun Vale", beastSpeak:true,
    buyTypes:[{t:"Skins",m:100}, {t:"Equipment",m:100}],
    limits:[{c:100,p:5000}, {c:100,p:5000}, {c:null,p:40000}, {c:null,p:null}, {c:null,p:null}, {c:null,p:50000}, {c:null,p:60000}],
    loves:["Fairy Wings", "Magic Clubs", "Ancient Coins"], likes:[], hates:["Troll Flesh"] },

  { id:"eleme", name:"Eleme", region:"Sun Vale", location:"Sun Vale", beastSpeak:true,
    buyTypes:[{t:"Equipment",m:100}],
    limits:[{c:100,p:5000}, {c:100,p:5000}, {c:null,p:40000}, {c:null,p:null}, {c:null,p:null}, {c:null,p:50000}, {c:null,p:50000}],
    loves:["Magic Swords", "Cooked Vegetable Meals", "Winter Court Armor"], likes:[], hates:[] },

  { id:"hiral", name:"Hiral", region:"Sun Vale", location:"Sun Vale", beastSpeak:true,
    buyTypes:[{t:"Food",m:100}],
    limits:[{c:100,p:5000}, {c:100,p:5000}, {c:null,p:25000}, {c:null,p:null}, {c:null,p:null}, {c:null,p:null}, {c:null,p:null}],
    loves:[], likes:[], hates:[] },

  { id:"kodan", name:"Kodan", region:"Sun Vale", location:"Sun Vale", beastSpeak:true,
    buyTypes:[{t:"Phlog",m:10}, {t:"Potions",m:10}, {t:"Food",m:10}, {t:"Gems",m:10}, {t:"Leather",m:10}, {t:"Skins",m:10}, {t:"Tools",m:10}, {t:"Equipment",m:100}, {t:"Jewelry",m:10}, {t:"Monster Parts",m:10}],
    limits:[{c:null,p:10000}, {c:null,p:10000}, {c:null,p:80000}, {c:null,p:null}, {c:null,p:null}, {c:null,p:100000}, {c:null,p:null}],
    loves:["Figurines"], likes:["Good Metal Slabs (or higher)"], hates:[] },

  { id:"norbert", name:"Norbert", region:"Sun Vale", location:"Sun Vale", beastSpeak:true,
    buyTypes:[{t:"Food",m:100}, {t:"Monster Parts",m:100}, {t:"Potions",m:100}],
    limits:[{c:50,p:2500}, {c:null,p:5000}, {c:null,p:40000}, {c:null,p:null}, {c:null,p:null}, {c:null,p:50000}, {c:null,p:60000}],
    loves:[], likes:["Mushrooms", "Necklaces"], hates:[] },

  { id:"preta", name:"Preta", region:"Sun Vale", location:"Sun Vale", beastSpeak:true,
    buyTypes:[],
    limits:[{c:100,p:5000}, {c:null,p:5000}, {c:500,p:25000}, {c:null,p:null}, {c:null,p:null}, {c:700,p:35000}, {c:800,p:40000}],
    loves:["Odd Scrolls"], likes:[], hates:[] },

  { id:"spot", name:"Spot", region:"Sun Vale", location:"Sun Vale", beastSpeak:false,
    buyTypes:[{t:"Phlog",m:100}, {t:"Potions",m:100}, {t:"Food",m:100}, {t:"Gems",m:100}, {t:"Leather",m:100}, {t:"Skins",m:100}, {t:"Tools",m:100}, {t:"Equipment",m:100}, {t:"Jewelry",m:100}, {t:"Monster Parts",m:100}],
    limits:[{c:null,p:2000}, {c:null,p:2000}, {c:null,p:null}, {c:null,p:null}, {c:null,p:null}, {c:null,p:null}, {c:null,p:null}],
    loves:[], likes:["Raw Meat", "Shiny Crystals"], hates:[] },

  { id:"the_wombat", name:"The Wombat", region:"Sun Vale", location:"Sun Vale", beastSpeak:true,
    buyTypes:[{t:"Monster Parts",m:100}, {t:"Carpentry",m:100}],
    limits:[{c:25,p:1250}, {c:null,p:5000}, {c:null,p:40000}, {c:null,p:null}, {c:null,p:null}, {c:null,p:50000}, {c:null,p:null}],
    loves:[], likes:[], hates:[] },

  { id:"yavazek", name:"Yavazek", region:"Sun Vale", location:"Sun Vale", beastSpeak:true,
    buyTypes:[{t:"Food",m:100}],
    limits:[{c:150,p:7500}, {c:null,p:null}, {c:1300,p:60000}, {c:null,p:null}, {c:null,p:null}, {c:null,p:80000}, {c:null,p:110000}],
    loves:["Racial-Slot Equipment"], likes:["Restorative Potions"], hates:[] },

  { id:"yogzi", name:"Yogzi", region:"Sun Vale", location:"Sun Vale", beastSpeak:true,
    buyTypes:[{t:"Tools",m:100}, {t:"Carpentry",m:100}],
    limits:[{c:25,p:1250}, {c:100,p:5000}, {c:null,p:40000}, {c:null,p:null}, {c:null,p:null}, {c:null,p:50000}, {c:null,p:50000}],
    loves:["Magic Rings", "Skulls"], likes:[], hates:[] },

  { id:"corey_the_croaker", name:"Corey The Croaker", region:"Winter Nexus", location:"Winter Nexus", beastSpeak:true,
    buyTypes:[{t:"Skins",m:100}],
    limits:[{c:null,p:5000}, {c:null,p:null}, {c:585,p:25000}, {c:null,p:null}, {c:null,p:null}, {c:819,p:35000}, {c:936,p:40000}],
    loves:["Fairy Wings"], likes:["Weird Junk", "Cloth Armor"], hates:[] },

  { id:"fazzi", name:"Fazzi", region:"Winter Nexus", location:"Winter Nexus", beastSpeak:true,
    buyTypes:[{t:"Potions",m:100}, {t:"Food",m:100}, {t:"Gems",m:100}],
    limits:[{c:null,p:null}, {c:null,p:10000}, {c:null,p:80000}, {c:null,p:null}, {c:null,p:null}, {c:null,p:null}, {c:null,p:null}],
    loves:[], likes:["Orange and Red Gems", "Flowers"], hates:[] },

  { id:"jace_soral", name:"Jace Soral", region:"Kur Mountains", location:"Kur Mountains", beastSpeak:true,
    buyTypes:[{t:"Potions",m:100}, {t:"Phlog",m:100}, {t:"Food",m:100}, {t:"Gems",m:100}, {t:"Leather",m:100}, {t:"Skins",m:100}, {t:"Tools",m:100}, {t:"Equipment",m:100}, {t:"Jewelry",m:100}, {t:"Monster Parts",m:100}],
    limits:[{c:50,p:2500}, {c:50,p:2500}, {c:null,p:null}, {c:null,p:null}, {c:null,p:null}, {c:null,p:40000}, {c:500,p:60000}],
    loves:[], likes:["Werewolf Oriented Magic Items", "Raw Fish", "Max-Health-Boosting Potions"], hates:[] },

  { id:"lamashu", name:"Lamashu", region:"Kur Mountains", location:"Kur Mountains", beastSpeak:false,
    buyTypes:[{t:"Carpentry",m:100}, {t:"Skins",m:100}, {t:"Leather",m:100}, {t:"Tools",m:100}],
    limits:[{c:null,p:10000}, {c:null,p:10000}, {c:null,p:20000}, {c:null,p:35000}, {c:null,p:50000}, {c:null,p:65000}, {c:null,p:85000}],
    loves:['Magic Oils', 'Onyx', 'Wood', 'Sexy Clothes', 'Fashonable Shoes'], likes:[], hates:[] },

  { id:"laura_neth", name:"Laura Neth", region:"Kur Mountains", location:"Kur Mountains", beastSpeak:false,
    buyTypes:[{t:"Food",m:100}, {t:"Phlog",m:10}, {t:"Potions",m:10}, {t:"Gems",m:10}, {t:"Leather",m:10}, {t:"Skins",m:10}, {t:"Tools",m:10}, {t:"Equipment",m:10}, {t:"Jewelry",m:10}, {t:"Monster Parts",m:10}],
    limits:[{c:50,p:2500}, {c:50,p:2500}, {c:null,p:20000}, {c:null,p:null}, {c:null,p:null}, {c:null,p:40000}, {c:null,p:65000}],
    loves:["Anything Edible", "Desserts", "Paintings"], likes:[], hates:[] },

  { id:"syndra", name:"Syndra", region:"Kur Mountains", location:"Kur Mountains", beastSpeak:true,
    buyTypes:[],
    limits:[{c:null,p:7500}, {c:null,p:10000}, {c:null,p:50000}, {c:null,p:null}, {c:null,p:null}, {c:null,p:null}, {c:null,p:75000}],
    loves:["Wood", "Furniture", "Leather Rolls"], likes:[], hates:[] },

  { id:"ukorga", name:"Ukorga", region:"Kur Mountains", location:"Kur Mountains", beastSpeak:false,
    buyTypes:[{t:"Equipment",m:100}, {t:"Jewelry",m:100}],
    limits:[{c:150,p:7500}, {c:150,p:7500}, {c:null,p:50000}, {c:null,p:null}, {c:null,p:null}, {c:null,p:75000}, {c:null,p:75000}],
    loves:["Trophy Animal Skins", "Meaty Meals", "Ancient Coins"], likes:["Snail Shells"], hates:["Citrus"] },

  { id:"glajur", name:"Glajur", region:"Kur Tower", location:"Kur Tower", beastSpeak:true,
    buyTypes:[{t:"Monster Parts",m:100}],
    limits:[{c:null,p:2500}, {c:null,p:2500}, {c:null,p:20000}, {c:null,p:null}, {c:null,p:null}, {c:null,p:50000}, {c:null,p:65000}],
    loves:["Skulls of All Types", "Brains of All Types"], likes:["Cloth Armor"], hates:[] },

  { id:"arlan", name:"Arlan", region:"Ilmari", location:"Ilmari", beastSpeak:false,
    buyTypes:[{t:"Food",m:100}, {t:"Phlog",m:100}, {t:"Potions",m:100}, {t:"Augument",m:100}],
    limits:[{c:0,p:0}, {c:200,p:10000}, {c:1300,p:65000}, {c:null,p:null}, {c:null,p:null}, {c:1800,p:90000}, {c:2100,p:105000}],
    loves:["Skulls of All Types", "Brains of All Types", "Dragon Scales"], likes:[], hates:[] },

  { id:"firaki", name:"Firaki", region:"Ilmari", location:"Ilmari", beastSpeak:false,
    buyTypes:[{t:"Phlog",m:100}, {t:"Potions",m:100}, {t:"Food",m:100}, {t:"Gems",m:100}, {t:"Leather",m:100}, {t:"Skins",m:100}, {t:"Tools",m:100}, {t:"Equipment",m:100}, {t:"Jewelry",m:100}, {t:"Monster Parts",m:100}],
    limits:[{c:100,p:5000}, {c:200,p:10000}, {c:350,p:17500}, {c:null,p:null}, {c:null,p:null}, {c:400,p:20000}, {c:500,p:25000}],
    loves:["Paintings", "Fish Dishes", "Silver Items"], likes:[], hates:[] },

  { id:"lumpfuzz", name:"Lumpfuzz", region:"Ilmari", location:"Ilmari", beastSpeak:false,
    buyTypes:[{t:"Phlog",m:100}, {t:"Potions",m:100}, {t:"Food",m:100}, {t:"Gems",m:100}, {t:"Leather",m:100}, {t:"Skins",m:100}, {t:"Tools",m:100}, {t:"Equipment",m:100}, {t:"Jewelry",m:100}, {t:"Monster Parts",m:100}],
    limits:[{c:500,p:2000}, {c:null,p:null}, {c:null,p:3200}, {c:null,p:null}, {c:null,p:null}, {c:null,p:null}, {c:null,p:4000}],
    loves:["Raw Meat", "Bounceweed", "Spleens"], likes:[], hates:[] },

  { id:"selaxi", name:"Selaxi", region:"Ilmari", location:"Ilmari", beastSpeak:false,
    buyTypes:[{t:"Food",m:100}],
    limits:[{c:50,p:2500}, {c:100,p:5000}, {c:null,p:20000}, {c:null,p:null}, {c:null,p:null}, {c:null,p:null}, {c:null,p:null}],
    loves:["Piles of Raw Meat", "Ice Cores", "Bloodstones", "Exotic Cooking Recipes"], likes:[], hates:[] },

  { id:"urzab", name:"Urzab", region:"Ilmari", location:"Ilmari", beastSpeak:false,
    buyTypes:[{t:"Gems",m:100}, {t:"Jewelry",m:100}, {t:"Phlog",m:100}, {t:"Augument",m:100}],
    limits:[{c:200,p:10000}, {c:200,p:10000}, {c:1000,p:50000}, {c:null,p:null}, {c:null,p:null}, {c:2100,p:100000}, {c:null,p:100000}],
    loves:["Gems"], likes:["Crystals", "Jewelry"], hates:[] },

  { id:"amutasa", name:"Amutasa", region:"Rahu", location:"Rahu", beastSpeak:true,
    buyTypes:[{t:"Tools",m:100}, {t:"Gems",m:100}, {t:"Potions",m:100}, {t:"Carpentry",m:100}],
    limits:[{c:50,p:2500}, {c:50,p:5000}, {c:400,p:20000}, {c:null,p:null}, {c:null,p:null}, {c:800,p:40000}, {c:1300,p:65000}],
    loves:[], likes:[], hates:[] },

  { id:"ashk_the_answerer", name:"Ashk", region:"Rahu", location:"Rahu City (peaceful)", beastSpeak:true,
    buyTypes:[{t:"Equipment",m:100}, {t:"Phlog",m:100}, {t:"Monster Parts",m:100}, {t:"Augument",m:100}],
    limits:[{c:25,p:1250}, {c:100,p:5000}, {c:200,p:10000}, {c:400,p:20000}, {c:800,p:40000}, {c:1100,p:50000}, {c:1100,p:50000}],
    loves:["Magic Equipment with", "Animal Horns", "Animal Stingers", "Animal Teeth"], likes:[], hates:[] },

  { id:"hirochi_the_booklord", name:"Hirochi the Booklord", region:"Rahu", location:"Rahu", beastSpeak:true,
    buyTypes:[],
    limits:[{c:50,p:2500}, {c:null,p:7500}, {c:750,p:30000}, {c:null,p:null}, {c:null,p:null}, {c:null,p:45000}, {c:null,p:60000}],
    loves:["New combat textbooks (for any combat skill)"], likes:[], hates:[] },

  { id:"ichin_the_ice_master", name:"Ichin the Ice Master", region:"Rahu", location:"Rahu", beastSpeak:true,
    buyTypes:[{t:"Potions",m:100}, {t:"Monster Parts",m:100}],
    limits:[{c:50,p:2500}, {c:null,p:null}, {c:null,p:null}, {c:null,p:null}, {c:null,p:null}, {c:null,p:45000}, {c:1200,p:60000}],
    loves:["Mushrooms of all types", "Equipment with Ice Magic prerequisites", "Ice Cores", "Tundra Lichen"], likes:[], hates:[] },

  { id:"nishika", name:"Nishika", region:"Rahu", location:"Rahu", beastSpeak:true,
    buyTypes:[{t:"Food",m:100}],
    limits:[{c:50,p:2500}, {c:50,p:2500}, {c:null,p:20000}, {c:null,p:null}, {c:null,p:null}, {c:null,p:40000}, {c:null,p:65000}],
    loves:["Raw Vegetables", "Bloodstones", "Leather Armor with Archery Prerequisites"], likes:[], hates:[] },

  { id:"rugen", name:"Rugen", region:"Rahu", location:"Rahu", beastSpeak:true,
    buyTypes:[{t:"Food",m:100}],
    limits:[{c:50,p:2500}, {c:50,p:2500}, {c:null,p:10000}, {c:null,p:null}, {c:null,p:null}, {c:null,p:15000}, {c:null,p:null}],
    loves:["Raw Fish", "Magic Daggers"], likes:["Paintings"], hates:[] },

  { id:"sirine", name:"Sirine", region:"Rahu", location:"Rahu", beastSpeak:true,
    buyTypes:[],
    limits:[{c:null,p:5000}, {c:null,p:null}, {c:null,p:40000}, {c:null,p:null}, {c:null,p:null}, {c:null,p:50000}, {c:null,p:60000}],
    loves:["Cheese"], likes:["Skins"], hates:[] },

  { id:"wintria_irasce", name:"Wintria Irasce", region:"Rahu", location:"Rahu", beastSpeak:true,
    buyTypes:[],
    limits:[{c:50,p:2500}, {c:null,p:7500}, {c:750,p:30000}, {c:null,p:null}, {c:null,p:null}, {c:1125,p:45000}, {c:null,p:60000}],
    loves:["New textbooks (for any skill EXCEPT combat skills)"], likes:[], hates:[] },

  { id:"zhao", name:"Zhao", region:"Rahu", location:"Rahu", beastSpeak:true,
    buyTypes:[],
    limits:[{c:50,p:2500}, {c:150,p:7500}, {c:null,p:30000}, {c:null,p:null}, {c:null,p:null}, {c:null,p:45000}, {c:null,p:null}],
    loves:["Flower Seeds", "Paladium Ore", "Pyrite Ore"], likes:["Flowers, Arrangements & Displays"], hates:[] },

  { id:"bellema_deftwhisper", name:"Bellema Deftwhisper", region:"New Prestonbule Cave", location:"New Prestonbule Cave", beastSpeak:false,
    buyTypes:[{t:"Equipment",m:100}],
    limits:[{c:100,p:5000}, {c:100,p:5000}, {c:600,p:30000}, {c:null,p:null}, {c:null,p:null}, {c:null,p:50000}, {c:null,p:70000}],
    loves:["Drinks", "Magic Crossbows"], likes:[], hates:[] },

  { id:"rick_snapley", name:"Rick Snapley", region:"New Prestonbule Cave", location:"New Prestonbule Cave", beastSpeak:false,
    buyTypes:[{t:"Phlog",m:100}, {t:"Potions",m:100}, {t:"Food",m:100}, {t:"Gems",m:100}, {t:"Leather",m:100}, {t:"Skins",m:100}, {t:"Tools",m:100}, {t:"Equipment",m:100}, {t:"Jewelry",m:100}, {t:"Monster Parts",m:100}],
    limits:[{c:100,p:5000}, {c:200,p:10000}, {c:350,p:17500}, {c:null,p:null}, {c:null,p:null}, {c:null,p:20000}, {c:500,p:25000}],
    loves:["Poisons", "Poisoned Food and Drink", "Magic Knives"], likes:[], hates:[] },

  { id:"sona", name:"Sona", region:"New Prestonbule Cave", location:"New Prestonbule Cave", beastSpeak:false,
    buyTypes:[{t:"Phlog",m:100}, {t:"Potions",m:100}, {t:"Gems",m:100}, {t:"Augument",m:100}],
    limits:[{c:50,p:2500}, {c:null,p:5000}, {c:287,p:12500}, {c:null,p:null}, {c:null,p:null}, {c:null,p:15000}, {c:null,p:null}],
    loves:["Clothing and Cloth Armor", "Phlogiston"], likes:[], hates:[] },

  { id:"eveline_rastin", name:"Eveline Rastin", region:"Red Wing Casino", location:"Red Wing Casino", beastSpeak:false,
    buyTypes:[],
    limits:[{c:null,p:5000}, {c:null,p:5000}, {c:null,p:null}, {c:null,p:null}, {c:null,p:null}, {c:null,p:null}, {c:null,p:60000}],
    loves:["All Art", "Carded Cotton"], likes:[], hates:[] },

  { id:"kib_the_unkillable", name:"Kib the Unkillable", region:"Red Wing Casino", location:"Red Wing Casino", beastSpeak:true,
    buyTypes:[{t:"Equipment",m:100}],
    limits:[{c:100,p:5000}, {c:200,p:7500}, {c:300,p:10000}, {c:400,p:20000}, {c:1000,p:40000}, {c:1100,p:50000}, {c:1200,p:60000}],
    loves:["Swords", "Shields", "Fire Staves", "Trophy Animal Hides"], likes:[], hates:[] },

  { id:"mandibles", name:"Mandibles", region:"Red Wing Casino", location:"Red Wing Casino", beastSpeak:true,
    buyTypes:[],
    limits:[{c:50,p:2500}, {c:null,p:null}, {c:null,p:35000}, {c:null,p:null}, {c:null,p:null}, {c:null,p:null}, {c:null,p:70000}],
    loves:["Cooking Recipe Scrolls", "Cooking Ingredients"], likes:[], hates:[] },

  { id:"otis", name:"Otis", region:"Red Wing Casino", location:"Red Wing Casino", beastSpeak:true,
    buyTypes:[{t:"Phlog",m:100}, {t:"Potions",m:100}, {t:"Food",m:100}, {t:"Gems",m:100}, {t:"Leather",m:100}, {t:"Skins",m:100}, {t:"Tools",m:100}, {t:"Equipment",m:100}, {t:"Jewelry",m:100}, {t:"Monster Parts",m:100}],
    limits:[{c:500,p:2000}, {c:500,p:2000}, {c:600,p:2500}, {c:700,p:3000}, {c:800,p:3500}, {c:900,p:4000}, {c:1000,p:4500}],
    loves:["Meat-Heavy Prepared Meals", "Clubs", "Hammers"], likes:[], hates:[] },

  { id:"ragabir", name:"Ragabir", region:"Red Wing Casino", location:"Red Wing Casino", beastSpeak:true,
    buyTypes:[{t:"Potions",m:100}, {t:"Monster Parts",m:100}, {t:"Food",m:100}],
    limits:[{c:50,p:2500}, {c:150,p:7500}, {c:300,p:15000}, {c:450,p:22500}, {c:600,p:30000}, {c:750,p:45000}, {c:1200,p:60000}],
    loves:["Alchemy Recipes", "Bones", "Alchemy Ingredients"], likes:[], hates:[] },

  { id:"tavilak", name:"Tavilak", region:"Red Wing Casino", location:"Red Wing Casino", beastSpeak:true,
    buyTypes:[{t:"Food",m:100}, {t:"Phlog",m:10}, {t:"Potions",m:10}, {t:"Gems",m:10}, {t:"Leather",m:10}, {t:"Skins",m:10}, {t:"Tools",m:10}, {t:"Equipment",m:10}, {t:"Jewelry",m:10}, {t:"Monster Parts",m:10}],
    limits:[{c:50,p:2500}, {c:null,p:2500}, {c:null,p:5000}, {c:50,p:10000}, {c:null,p:20000}, {c:null,p:40000}, {c:null,p:60000}],
    loves:["Fresh"], likes:[], hates:[] },

  { id:"willem_fangblade", name:"Willem Fangblade", region:"Red Wing Casino", location:"Red Wing Casino", beastSpeak:true,
    buyTypes:[{t:"Gems",m:100}, {t:"Jewelry",m:100}, {t:"Phlog",m:100}, {t:"Augument",m:100}],
    limits:[{c:200,p:10000}, {c:200,p:10000}, {c:1000,p:50000}, {c:null,p:null}, {c:null,p:null}, {c:2000,p:100000}, {c:null,p:100000}],
    loves:["Green Crystals", "Brass Items"], likes:[], hates:[] },

  { id:"bendith_the_banished", name:"Bendith the Banished", region:"Fae Realm", location:"Fae Realm", beastSpeak:true,
    buyTypes:[{t:"Food",m:100}, {t:"Potions",m:100}],
    limits:[{c:50,p:2500}, {c:null,p:null}, {c:null,p:null}, {c:null,p:null}, {c:null,p:null}, {c:null,p:null}, {c:null,p:60000}],
    loves:["Brined Cheese"], likes:[], hates:[] },

  { id:"felmer", name:"Felmer", region:"Fae Realm", location:"Fae Realm", beastSpeak:true,
    buyTypes:[],
    limits:[{c:null,p:5000}, {c:null,p:5000}, {c:null,p:40000}, {c:null,p:null}, {c:null,p:null}, {c:null,p:null}, {c:null,p:null}],
    loves:["Enchanted Elvish Jewelry", "Enchanted Elvish-Style Armor and Weapons"], likes:[], hates:[] },

  { id:"floxie", name:"Floxie", region:"Fae Realm", location:"Fae Realm", beastSpeak:true,
    buyTypes:[],
    limits:[{c:50,p:2500}, {c:null,p:null}, {c:null,p:null}, {c:null,p:null}, {c:null,p:null}, {c:null,p:40000}, {c:null,p:null}],
    loves:["Cooked Vegetarian Meals", "Magic Bows", "Magic Crossbows"], likes:[], hates:[] },

  { id:"pegast", name:"Pegast", region:"Fae Realm", location:"Fae Realm", beastSpeak:true,
    buyTypes:[{t:"Equipment",m:100}],
    limits:[{c:150,p:null}, {c:null,p:7500}, {c:null,p:null}, {c:null,p:null}, {c:null,p:null}, {c:null,p:100000}, {c:null,p:100000}],
    loves:["Magical Dirks", "Metal Helms", "Beer"], likes:[], hates:[] },

  { id:"raina", name:"Raina", region:"Fae Realm", location:"Fae Realm", beastSpeak:true,
    buyTypes:[{t:"Phlog",m:100}, {t:"Potions",m:100}, {t:"Food",m:100}, {t:"Gems",m:100}, {t:"Leather",m:100}, {t:"Skins",m:100}, {t:"Tools",m:100}, {t:"Equipment",m:100}, {t:"Jewelry",m:100}, {t:"Monster Parts",m:100}],
    limits:[{c:500,p:10000}, {c:620,p:10000}, {c:null,p:null}, {c:null,p:null}, {c:null,p:null}, {c:null,p:null}, {c:null,p:null}],
    loves:[], likes:[], hates:[] },

  { id:"solgribue", name:"Solgribue", region:"Fae Realm", location:"Fae Realm", beastSpeak:true,
    buyTypes:[{t:"Tools",m:100}, {t:"Jewelry",m:100}],
    limits:[{c:100,p:5000}, {c:200,p:10000}, {c:400,p:20000}, {c:600,p:30000}, {c:800,p:40000}, {c:1000,p:50000}, {c:1200,p:60000}],
    loves:["Necklaces", "Rings"], likes:[], hates:[] },

  { id:"dachak_the_digger", name:"Dachak the Digger", region:"Povus", location:"Povus", beastSpeak:true,
    buyTypes:[{t:"Food",m:100}, {t:"Monster Parts",m:100}],
    limits:[{c:50,p:2500}, {c:50,p:2500}, {c:null,p:null}, {c:null,p:null}, {c:null,p:null}, {c:null,p:null}, {c:null,p:null}],
    loves:[], likes:[], hates:[] },

  { id:"dog_ear", name:"Dog Ear", region:"Povus", location:"Povus", beastSpeak:true,
    buyTypes:[{t:"Potions",m:100}, {t:"Food",m:100}],
    limits:[{c:50,p:2500}, {c:null,p:null}, {c:null,p:null}, {c:null,p:null}, {c:null,p:null}, {c:null,p:null}, {c:900,p:65000}],
    loves:[], likes:[], hates:[] },

  { id:"errruka_the_benefactor", name:"Errruka the Benefactor", region:"Povus", location:"Povus", beastSpeak:false,
    buyTypes:[{t:"Gems",m:100}, {t:"Food",m:100}],
    limits:[{c:null,p:2500}, {c:null,p:null}, {c:null,p:null}, {c:null,p:null}, {c:null,p:null}, {c:null,p:40000}, {c:null,p:null}],
    loves:["Live Frogs"], likes:["Remains of Deceased Scray"], hates:[] },

  { id:"ferand_deftwhisper", name:"Ferand Deftwhisper", region:"Povus", location:"Povus", beastSpeak:false,
    buyTypes:[],
    limits:[{c:100,p:5000}, {c:100,p:5000}, {c:null,p:50000}, {c:null,p:null}, {c:null,p:null}, {c:null,p:75000}, {c:null,p:100000}],
    loves:[], likes:[], hates:[] },

  { id:"gerrux", name:"Gerrux", region:"Povus", location:"Povus", beastSpeak:false,
    buyTypes:[{t:"Equipment",m:100}],
    limits:[{c:null,p:null}, {c:null,p:null}, {c:null,p:50000}, {c:null,p:null}, {c:null,p:null}, {c:null,p:75000}, {c:null,p:100000}],
    loves:[], likes:[], hates:[] },

  { id:"tryaka", name:"Tryaka", region:"Povus", location:"Povus", beastSpeak:false,
    buyTypes:[{t:"Phlog",m:100}, {t:"Potions",m:100}, {t:"Food",m:100}, {t:"Gems",m:100}, {t:"Leather",m:100}, {t:"Skins",m:100}, {t:"Tools",m:100}, {t:"Equipment",m:100}, {t:"Jewelry",m:100}, {t:"Monster Parts",m:100}],
    limits:[{c:100,p:5000}, {c:null,p:null}, {c:null,p:null}, {c:null,p:null}, {c:null,p:null}, {c:null,p:null}, {c:null,p:null}],
    loves:[], likes:[], hates:[] },

  { id:"chancellor_algest", name:"Chancellor Algest", region:"Statehelm", location:"Statehelm Bank", beastSpeak:true,
    buyTypes:[{t:"Recipes",m:100}],
    limits:[{c:1000,p:50000}, {c:1000,p:50000}, {c:1000,p:50000}, {c:1000,p:50000}, {c:1000,p:50000}, {c:1000,p:50000}, {c:1000,p:50000}],
    loves:[], likes:[], hates:[] },

  { id:"classic_jim", name:"Classic Jim", region:"Statehelm", location:"Marketplace", beastSpeak:true,
    buyTypes:[{t:"Food",m:100}],
    limits:[{c:null,p:5000}, {c:null,p:5000}, {c:null,p:25000}, {c:null,p:50000}, {c:null,p:75000}, {c:null,p:100000}, {c:null,p:125000}],
    loves:[], likes:['Meaty Dishes'], hates:[] },

  { id:"deville_neth", name:"Deville Neth", region:"Statehelm", location:"Bakery", beastSpeak:false,
    buyTypes:[{t:"Food",m:100}],
    limits:[{c:null,p:5000}, {c:null,p:5000}, {c:null,p:15000}, {c:null,p:25000}, {c:null,p:50000}, {c:null,p:75000}, {c:null,p:100000}],
    loves:[], likes:[], hates:[] },

  { id:"elune", name:"Elune", region:"Statehelm", location:"Central District", beastSpeak:false,
    buyTypes:[{t:"Jewelry",m:100}, {t:"Gems",m:100}],
    limits:[{c:null,p:5000}, {c:null,p:5000}, {c:null,p:15000}, {c:null,p:30000}, {c:null,p:60000}, {c:null,p:90000}, {c:null,p:120000}],
    loves:[], likes:['Jewelry'], hates:[] },

  { id:"farsight_flemmings", name:"Farsight Flemmings", region:"Statehelm", location:"Marketplace", beastSpeak:false,
    buyTypes:[{t:"Monster Parts",m:100}],
    limits:[{c:null,p:5000}, {c:null,p:10000}, {c:null,p:20000}, {c:null,p:40000}, {c:null,p:75000}, {c:null,p:100000}, {c:null,p:120000}],
    loves:[], likes:[], hates:[] },

  { id:"grim_jim", name:"Grim Jim", region:"Statehelm", location:"Marketplace", beastSpeak:true,
    buyTypes:[{t:"Skins",m:100}],
    limits:[{c:null,p:5000}, {c:null,p:5000}, {c:null,p:25000}, {c:null,p:50000}, {c:null,p:75000}, {c:null,p:100000}, {c:null,p:125000}],
    loves:[], likes:[], hates:[] },

  { id:"jerasen", name:"Jerasen", region:"Statehelm", location:"Marketplace", beastSpeak:true,
    buyTypes:[{t:"Cloth Armor",m:100}],
    limits:[{c:null,p:5000}, {c:null,p:5000}, {c:null,p:25000}, {c:null,p:50000}, {c:null,p:75000}, {c:null,p:100000}, {c:null,p:125000}],
    loves:[], likes:[], hates:[] },

  { id:"jurl_blackhammer", name:"Jurl Blackhammer", region:"Statehelm", location:"Marketplace", beastSpeak:true,
    buyTypes:[{t:"Tools",m:100}],
    limits:[{c:null,p:5000}, {c:null,p:5000}, {c:500,p:25000}, {c:null,p:50000}, {c:null,p:75000}, {c:null,p:100000}, {c:null,p:125000}],
    loves:[], likes:['Tools'], hates:[] },

  { id:"mara_woodwright", name:"Mara Woodwright", region:"Statehelm", location:"Marketplace", beastSpeak:true,
    buyTypes:[{t:"Carpentry",m:100}],
    limits:[{c:null,p:5000}, {c:null,p:10000}, {c:null,p:20000}, {c:null,p:40000}, {c:null,p:75000}, {c:null,p:100000}, {c:null,p:125000}],
    loves:[], likes:['Tools'], hates:[] },

  { id:"michael_irasce", name:"Michael Irasce", region:"Statehelm", location:"Marketplace", beastSpeak:true,
    buyTypes:[{t:"Recipes",m:100}],
    limits:[{c:null,p:25000}, {c:null,p:25000}, {c:800,p:40000}, {c:null,p:60000}, {c:null,p:80000}, {c:null,p:100000}, {c:null,p:125000}],
    loves:[], likes:['Tools'], hates:[] },

  { id:"pumza", name:"Pumza", region:"Statehelm", location:"Marketplace", beastSpeak:true,
    buyTypes:[{t:"Equipment",m:100}],
    limits:[{c:null,p:5000}, {c:null,p:5000}, {c:null,p:25000}, {c:null,p:50000}, {c:null,p:75000}, {c:null,p:100000}, {c:null,p:125000}],
    loves:[], likes:[], hates:[] },

  { id:"sam_veilmoor", name:"Sam Veilmoor", region:"Statehelm", location:"Marketplace", beastSpeak:true,
    buyTypes:[{t:"Equipment",m:100}],
    limits:[{c:null,p:5000}, {c:null,p:5000}, {c:null,p:25000}, {c:null,p:50000}, {c:null,p:75000}, {c:null,p:100000}, {c:null,p:125000}],
    loves:[], likes:[], hates:[] },

  { id:"sulafa", name:"Sulafa", region:"Statehelm", location:"Marketplace", beastSpeak:true,
    buyTypes:[{t:"Augument",m:100}],
    limits:[{c:null,p:5000}, {c:null,p:5000}, {c:null,p:25000}, {c:null,p:50000}, {c:null,p:75000}, {c:null,p:100000}, {c:null,p:125000}],
    loves:[], likes:['Phlogiston'], hates:[] }
];
