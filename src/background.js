// background.js

// Constant array of default blocked websites
const defaultBlockedWebsites = [
  "www.instagram.com",
  "www.facebook.com",
  "www.pornhub.com",
  "www.wikihow.com",
  "alexadevsrm.com",
  "www.srmkzilla.net"
];

// Set up the default blocked websites on installation
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ blockedWebsites: defaultBlockedWebsites }, () => {
    console.log("Default blocked websites set:", defaultBlockedWebsites);
  });
});

// Function to check if a website is blocked
function isWebsiteBlocked(hostname, callback) {
  chrome.storage.sync.get("blockedWebsites", (data) => {
    const blockedWebsites = data.blockedWebsites || [];

    const isBlocked = blockedWebsites.some((blockedSite) => {
      const regex = new RegExp(`^${blockedSite.replace(/\./g, "\\.")}$`);
      return regex.test(hostname);
    });

    const isDefaultBlocked = defaultBlockedWebsites.some((blockedSite) => {
      const regex = new RegExp(`^${blockedSite.replace(/\./g, "\\.")}$`);
      return regex.test(hostname);
    });

    callback(isBlocked || isDefaultBlocked);
  });
}

// Function to check if the URL contains any obscene word
function isURLBlocked(url) {
  const lowerCaseURL = url.toLowerCase();
  const obsceneWordsList = ["anal", "anus", "areole", "arian", "arrse", "arse", "arsehole", "asanchez", "ass", "assbang", "assbanged", "asses", "assfuck", "assfucker", "assfukka", "asshole", "assmunch", "asswhole", "autoerotic", "ballsack", "bastard", "bdsm", "beastial", "beastiality", "bellend", "bestial", "bestiality", "bimbo", "bimbos", "bitch", "bitches", "bitchin", "bitching", "blowjob", "blowjobs", "blue waffle", "bondage", "boner", "boob", "boobs", "booobs", "boooobs", "booooobs", "booooooobs", "booty call", "breasts", "brown shower", "brown showers", "buceta", "bukake", "bukkake", "bullshit", "busty", "butthole", "carpet muncher", "cawk", "chink", "cipa", "clit", "clitoris", "clits", "cnut", "cock", "cockface", "cockhead", "cockmunch", "cockmuncher", "cocks", "cocksuck", "cocksucked", "cocksucker", "cocksucking", "cocksucks", "cokmuncher", "coon", "cowgirl", "cowgirls", "crap", "crotch", "cum", "cuming", "cummer", "cumming", "cums", "cumshot", "cunilingus", "cunillingus", "cunnilingus", "cunt", "cuntlicker", "cuntlicking", "cunts", "damn", "deepthroat", "dick", "dickhead", "dildo", "dildos", "dink", "dinks", "dlck", "dog style", "dog-fucker", "doggiestyle", "doggin", "dogging", "doggystyle", "dong", "donkeyribber", "doofus", "doosh", "dopey", "douche", "douchebag", "douchebags", "douchey", "drunk", "duche", "dumass", "dumbass", "dumbasses", "dummy", "dyke", "dykes", "eatadick", "eathairpie", "ejaculate", "ejaculated", "ejaculates", "ejaculating", "ejaculatings", "ejaculation", "ejakulate", "enlargement", "erect", "erection", "erotic", "erotism", "essohbee", "extacy", "extasy", "facial", "fack", "fag", "fagg", "fagged", "fagging", "faggit", "faggitt", "faggot", "faggs", "fagot", "fagots", "fags", "faig", "faigt", "fanny", "fannybandit", "fannyflaps", "fannyfucker", "fanyy", "fart", "fartknocker", "fatass", "fcuk", "fcuker", "fcuking", "feck", "fecker", "felch", "felcher", "felching", "fellate", "fellatio", "feltch", "feltcher", "femdom", "fingerfuck", "fingerfucked", "fingerfucker", "fingerfuckers", "fingerfucking", "fingerfucks", "fingering", "fisted", "fistfuck", "fistfucked", "fistfucker", "fistfuckers", "fistfucking", "fistfuckings", "fistfucks", "fisting", "fisty", "flange", "flogthelog", "floozy", "foad", "fondle", "foobar", "fook", "fooker", "footjob", "foreskin", "freex", "frigg", "frigga", "fubar", "fuck", "fucka", "fuckass", "fuckbitch", "fucked", "fucker", "fuckers", "fuckface", "fuckhead", "fuckheads", "fuckhole", "fuckin", "fucking", "fuckings", "fuckingshitmotherfucker", "fuckme", "fuckmeat", "fucknugget", "fucknut", "fuckoff", "fuckpuppet", "fucks", "fucktard", "fucktoy", "fucktrophy", "fuckup", "fuckwad", "fuckwhit", "fuckwit", "fuckyomama", "fudgepacker", "fuk", "fuker", "fukker", "fukkin", "fukking", "fuks", "fukwhit", "fukwit", "futanari", "futanary", "fux", "fuxor", "fxck", "gangbang", "gangbanged", "gangbangs", "ganja", "gassyass", "gaylord", "gaysex", "gigolo", "glans", "goatse", "godamn", "godamnit", "goddam", "goddammit", "goddamn", "goddamned", "gokkun", "goldenshower", "gonad", "gonads", "gook", "gooks", "gringo", "gspot", "gtfo", "guido", "hamflap", "handjob", "hardcoresex", "hardon", "hebe", "heeb", "hell", "hemp", "hentai", "heroin", "herp", "herpes", "herpy", "heshe", "hitler", "hiv", "hoar", "hoare", "hobag", "hoer", "homey", "homo", "homoerotic", "homoey", "honky", "hooch", "hookah", "hooker", "hoor", "hootch", "hooter", "hooters", "hore", "horniest", "horny", "hotsex", "howtokill", "howtomurdep", "hump", "humped", "humping", "hussy", "hymen", "inbred", "incest", "injun", "jackass", "jackhole", "jackoff", "jap", "japs", "jerk", "jerked", "jerkoff", "jism", "jiz", "jizm", "jizz", "jizzed", "junkie", "junky", "kawk", "kike", "kikes", "kill", "kinbaku", "kinky", "kinkyJesus", "kkk", "klan", "knob", "knobead", "knobed", "knobend", "knobhead", "knobjocky", "knobjokey", "kock", "kondum", "kondums", "kooch", "kooches", "kootch", "kraut", "kum", "kummer", "kumming", "kums", "kunilingus", "kwif", "kyke", "l3itch", "labia", "lech", "len", "leper", "lesbians", "lesbo", "lesbos", "lez", "lezbian", "lezbians", "lezbo", "lezbos", "lezzie", "lezzies", "lezzy", "lmao", "lmfao", "loin", "loins", "lube", "lust", "lusting", "lusty", "m-fucking", "mafugly", "mams", "masochist", "massa", "masterb8", "masterbate", "masterbating", "masterbation", "masterbations", "masturbate", "masturbating", "masturbation", "maxi", "menses", "meth", "milf", "mofo", "molest", "moolie", "moron", "mothafuck", "mothafucka", "mothafuckas", "mothafuckaz", "mothafucked", "mothafucker", "mothafuckers", "mothafuckin", "mothafucking", "mothafuckings", "mothafucks", "motherfuck", "motherfucka", "motherfucked", "motherfucker", "motherfuckers", "motherfuckin", "motherfucking", "motherfuckings", "motherfuckka", "motherfucks", "mtherfucker", "mthrfucker", "mthrfucking", "muff", "muffdiver", "muffpuff", "murder", "mutha", "muthafecker", "muthafuckaz", "muthafucker", "muthafuckker", "muther", "mutherfucker", "mutherfucking", "muthrfucking", "nad", "nads", "naked", "napalm", "nappy", "nazi", "nazism", "needthedick", "negro", "nig", "nigg", "nigga", "niggah", "niggas", "niggaz", "nigger", "niggers", "niggle", "niglet", "nimrod", "ninny", "nipple", "nipples", "nob", "nobhead", "nobjocky", "nobjokey", "nooky", "nude", "nudes", "numbnuts", "nutbutter", "nutsack", "nympho", "opiate", "opium", "oral", "orally", "orgasim", "orgasims", "orgasm", "orgasmic", "orgasms", "orgies", "orgy", "paddy", "paki", "pantie", "panties", "panty", "pastie", "pasty", "pawn", "pcp", "pecker", "pedo", "pedophile", "pedophilia", "pedophiliac", "pee", "peepee", "penetrate", "penetration", "penial", "penile", "penis", "penisfucker", "perversion", "peyote", "phalli", "phallic", "phonesex", "phuck", "phuk", "phuked", "phuking", "phukked", "phukking", "phuks", "phuq", "pigfucker", "pillowbiter", "pimp", "pimpis", "pinko", "piss", "pissed", "pisser", "pissers", "pisses", "pissflaps", "pissin", "pissing", "pissoff", "playboy", "pms", "polack", "pollock", "poon", "poontang", "poop", "porn", "porno", "pornography", "pornos",  "potty", "prick", "pricks", "prig", "pron", "prude", "pube", "pubic", "pubis", "punkass", "punky", "puss", "pusse", "pussi", "pussies", "pussy", "pussyfart", "pussypalace", "pussypounder", "pussys", "puto", "queaf", "queef", "queer", "queero", "queers", "quicky", "quim", "racy", "rape", "raped", "raper", "raping", "rapist", "raunch", "rectal", "rectum", "rectus", "reefer", "reetard", "reich", "retard", "retarded", "revue", "rimjaw", "rimjob", "rimming", "ritard", "rtard", "rum", "rump", "rumprammer", "ruski", "sadism", "sadist", "sandbar", "sausagequeen", "scag", "scantily", "schizo", "schlong", "screw", "screwed", "screwing", "scroat", "scrog", "scrot", "scrote", "scrotum", "scrud", "scum", "seaman", "seamen", "seduce", "semen", "sex", "sexual", "shag", "shagger", "shaggin", "shagging", "shamedame", "shemale", "shibari", "shibary", "shit", "shitdick", "shite", "shiteater", "shited", "shitey", "shitface", "shitfuck", "shitfucker", "shitfull", "shithead", "shithole", "shithouse", "shiting", "shitings", "shits", "shitt", "shitted", "shitter", "shitters", "shitting", "shittings", "shitty", "shiz", "shota", "sissy", "skag", "skank", "slave", "sleaze", "sleazy", "slope", "slut", "slutbucket", "slutdumper", "slutkiss", "sluts", "smegma", "smut", "smutty", "snatch", "sniper", "snuff", "sob", "sodom", "son-of-a-bitch", "souse", "soused", "spac", "sperm", "spic", "spick", "spik", "spiks", "spooge", "spunk", "steamy", "stfu", "stiffy", "stoned", "strip", "strip club", "stripclub", "stroke", "stupid", "suck", "sucked", "sucking", "sumofabiatch", "tampon", "tard", "tawdry", "teabagging", "teat", "teets", "teez", "terd", "teste", "testee", "testes", "testical", "testicle", "testis", "threesome", "throating", "thrust", "thug", "tinkle", "tit", "titfuck", "titi", "tits", "titt", "tittiefucker", "titties", "titty", "tittyfuck", "tittyfucker", "tittywank", "titwank", "toke", "toots", "tosser", "tramp", "transsexual", "trashy", "tubgirl", "turd", "tush", "twat", "twathead", "twats", "twatty", "twunt", "twunter", "ugly", "undies",  "uzi", "vag", "vagina", "valium", "viagra", "vigra", "virgin", "vixen", "vodka", "voyeur", "vulgar", "vulva", "wad", "wang", "wank", "wanker", "wanky", "wazoo", "wedgie", "weed", "weenie", "weewee", "weiner", "weirdo", "wench", "wetback", "whitey", "whiz", "whoar", "whoralicious", "whore", "whorealicious", "whored", "whoreface", "whorehopper", "whorehouse", "whores", "whoring", "wigger", "willies", "willy", "womb", "woody", "woose", "wop", "wtf", "x-rated2g1c", "xx", "xxx", "yaoi", "yury"]; // Replace with your list of obscene words
  return obsceneWordsList.some(word => lowerCaseURL.includes(word));
}

// Block the page content if the website is blocked or contains any obscene word
chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
  if (changeInfo.url) {
    const currentHostname = new URL(changeInfo.url).hostname.toLowerCase();
    isWebsiteBlocked(currentHostname, (isBlocked) => {
      if (isBlocked || isURLBlocked(changeInfo.url)) {
        // Block the page by redirecting it to the blocked page (using an absolute path)
        const blockedPage = chrome.runtime.getURL("/src/blocked.html");
        chrome.tabs.update(tabId, { url: blockedPage });
      }
    });
  }
});

// Listen for messages from the popup (popup.js)
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "addBlockedWebsite") {
    const websiteToAdd = message.website;
    if (websiteToAdd) {
      chrome.storage.sync.get("blockedWebsites", (data) => {
        const blockedWebsites = data.blockedWebsites || [];
        if (!blockedWebsites.includes(websiteToAdd)) {
          blockedWebsites.push(websiteToAdd);
          chrome.storage.sync.set({ blockedWebsites }, () => {
            sendResponse({ success: true });
          });
        } else {
          sendResponse({ success: false, message: "Website is already blocked." });
        }
      });
    }
  } else if (message.action === "removeBlockedWebsite") {
    const websiteToRemove = message.website;
    if (websiteToRemove) {
      chrome.storage.sync.get("blockedWebsites", (data) => {
        let blockedWebsites = data.blockedWebsites || [];
        if (defaultBlockedWebsites.includes(websiteToRemove)) {
          sendResponse({ success: false, message: "This site cannot be unblocked." });
        } else {
          blockedWebsites = blockedWebsites.filter((blockedSite) => blockedSite !== websiteToRemove);
          chrome.storage.sync.set({ blockedWebsites }, () => {
            sendResponse({ success: true });
          });
        }
      });
    }
  }
  return true; // Indicates that the response will be sent asynchronously
});
