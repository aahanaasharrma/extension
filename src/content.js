  const obsceneWordsList = ["anal", "anus", "areole", "arian", "arrse", "arse", "arsehole", "asanchez", "ass", "assbang", "assbanged", "asses", "assfuck", "assfucker", "assfukka", "asshole", "assmunch", "asswhole", "autoerotic", "ballsack", "bastard", "bdsm", "beastial", "beastiality", "bellend", "bestial", "bestiality", "bimbo", "bimbos", "bitch", "bitches", "bitchin", "bitching", "blowjob", "blowjobs", "blue waffle", "bondage", "boner", "boob", "boobs", "booobs", "boooobs", "booooobs", "booooooobs", "booty call", "breasts", "brown shower", "brown showers", "buceta", "bukake", "bukkake", "bullshit", "busty", "butthole", "carpet muncher", "cawk", "chink", "cipa", "clit", "clitoris", "clits", "cnut", "cock", "cockface", "cockhead", "cockmunch", "cockmuncher", "cocks", "cocksuck", "cocksucked", "cocksucker", "cocksucking", "cocksucks", "cokmuncher", "coon", "cowgirl", "cowgirls", "crap", "crotch", "cum", "cuming", "cummer", "cumming", "cums", "cumshot", "cunilingus", "cunillingus", "cunnilingus", "cunt", "cuntlicker", "cuntlicking", "cunts", "damn", "deepthroat", "dick", "dickhead", "dildo", "dildos", "dink", "dinks", "dlck", "dog style", "dog-fucker", "doggiestyle", "doggin", "dogging", "doggystyle", "dong", "donkeyribber", "doofus", "doosh", "dopey", "douche", "douchebag", "douchebags", "douchey", "drunk", "duche", "dumass", "dumbass", "dumbasses", "dummy", "dyke", "dykes", "eatadick", "eathairpie", "ejaculate", "ejaculated", "ejaculates", "ejaculating", "ejaculatings", "ejaculation", "ejakulate", "enlargement", "erect", "erection", "erotic", "erotism", "essohbee", "extacy", "extasy", "facial", "fack", "fag", "fagg", "fagged", "fagging", "faggit", "faggitt", "faggot", "faggs", "fagot", "fagots", "fags", "faig", "faigt", "fanny", "fannybandit", "fannyflaps", "fannyfucker", "fanyy", "fart", "fartknocker", "fatass", "fcuk", "fcuker", "fcuking", "feck", "fecker", "felch", "felcher", "felching", "fellate", "fellatio", "feltch", "feltcher", "femdom", "fingerfuck", "fingerfucked", "fingerfucker", "fingerfuckers", "fingerfucking", "fingerfucks", "fingering", "fisted", "fistfuck", "fistfucked", "fistfucker", "fistfuckers", "fistfucking", "fistfuckings", "fistfucks", "fisting", "fisty", "flange", "flogthelog", "floozy", "foad", "fondle", "foobar", "fook", "fooker", "footjob", "foreskin", "freex", "frigg", "frigga", "fubar", "fuck", "fucka", "fuckass", "fuckbitch", "fucked", "fucker", "fuckers", "fuckface", "fuckhead", "fuckheads", "fuckhole", "fuckin", "fucking", "fuckings", "fuckingshitmotherfucker", "fuckme", "fuckmeat", "fucknugget", "fucknut", "fuckoff", "fuckpuppet", "fucks", "fucktard", "fucktoy", "fucktrophy", "fuckup", "fuckwad", "fuckwhit", "fuckwit", "fuckyomama", "fudgepacker", "fuk", "fuker", "fukker", "fukkin", "fukking", "fuks", "fukwhit", "fukwit", "futanari", "futanary", "fux", "fuxor", "fxck", "gangbang", "gangbanged", "gangbangs", "ganja", "gassyass", "gaylord", "gaysex", "gigolo", "glans", "goatse", "godamn", "godamnit", "goddam", "goddammit", "goddamn", "goddamned", "gokkun", "goldenshower", "gonad", "gonads", "gook", "gooks", "gringo", "gspot", "gtfo", "guido", "hamflap", "handjob", "hardcoresex", "hardon", "hebe", "heeb", "hell", "hemp", "hentai", "heroin", "herp", "herpes", "herpy", "heshe", "hitler", "hiv", "hoar", "hoare", "hobag", "hoer", "homey", "homo", "homoerotic", "homoey", "honky", "hooch", "hookah", "hooker", "hoor", "hootch", "hooter", "hooters", "hore", "horniest", "horny", "hotsex", "howtokill", "howtomurdep", "hump", "humped", "humping", "hussy", "hymen", "inbred", "incest", "injun", "jackass", "jackhole", "jackoff", "jap", "japs", "jerk", "jerked", "jerkoff", "jism", "jiz", "jizm", "jizz", "jizzed", "junkie", "junky", "kawk", "kike", "kikes", "kill", "kinbaku", "kinky", "kinkyJesus", "kkk", "klan", "knob", "knobead", "knobed", "knobend", "knobhead", "knobjocky", "knobjokey", "kock", "kondum", "kondums", "kooch", "kooches", "kootch", "kraut", "kum", "kummer", "kumming", "kums", "kunilingus", "kwif", "kyke", "l3itch", "labia", "lech", "len", "leper", "lesbians", "lesbo", "lesbos", "lez", "lezbian", "lezbians", "lezbo", "lezbos", "lezzie", "lezzies", "lezzy", "lmao", "lmfao", "loin", "loins", "lube", "lust", "lusting", "lusty", "m-fucking", "mafugly", "mams", "masochist", "massa", "masterb8", "masterbate", "masterbating", "masterbation", "masterbations", "masturbate", "masturbating", "masturbation", "maxi", "menses", "meth", "milf", "mofo", "molest", "moolie", "moron", "mothafuck", "mothafucka", "mothafuckas", "mothafuckaz", "mothafucked", "mothafucker", "mothafuckers", "mothafuckin", "mothafucking", "mothafuckings", "mothafucks", "motherfuck", "motherfucka", "motherfucked", "motherfucker", "motherfuckers", "motherfuckin", "motherfucking", "motherfuckings", "motherfuckka", "motherfucks", "mtherfucker", "mthrfucker", "mthrfucking", "muff", "muffdiver", "muffpuff", "murder", "mutha", "muthafecker", "muthafuckaz", "muthafucker", "muthafuckker", "muther", "mutherfucker", "mutherfucking", "muthrfucking", "nad", "nads", "naked", "napalm", "nappy", "nazi", "nazism", "needthedick", "negro", "nig", "nigg", "nigga", "niggah", "niggas", "niggaz", "nigger", "niggers", "niggle", "niglet", "nimrod", "ninny", "nipple", "nipples", "nob", "nobhead", "nobjocky", "nobjokey", "nooky", "nude", "nudes", "numbnuts", "nutbutter", "nutsack", "nympho", "opiate", "opium", "oral", "orally", "orgasim", "orgasims", "orgasm", "orgasmic", "orgasms", "orgies", "orgy", "paddy", "paki", "pantie", "panties", "panty", "pastie", "pasty", "pawn", "pcp", "pecker", "pedo", "pedophile", "pedophilia", "pedophiliac", "pee", "peepee", "penetrate", "penetration", "penial", "penile", "penis", "penisfucker", "perversion", "peyote", "phalli", "phallic", "phonesex", "phuck", "phuk", "phuked", "phuking", "phukked", "phukking", "phuks", "phuq", "pigfucker", "pillowbiter", "pimp", "pimpis", "pinko", "piss", "pissed", "pisser", "pissers", "pisses", "pissflaps", "pissin", "pissing", "pissoff", "playboy", "pms", "polack", "pollock", "poon", "poontang", "poop", "porn", "porno", "pornography", "pornos",  "potty", "prick", "pricks", "prig", "pron", "prude", "pube", "pubic", "pubis", "punkass", "punky", "puss", "pusse", "pussi", "pussies", "pussy", "pussyfart", "pussypalace", "pussypounder", "pussys", "puto", "queaf", "queef", "queer", "queero", "queers", "quicky", "quim", "racy", "rape", "raped", "raper", "raping", "rapist", "raunch", "rectal", "rectum", "rectus", "reefer", "reetard", "reich", "retard", "retarded", "revue", "rimjaw", "rimjob", "rimming", "ritard", "rtard", "rum", "rump", "rumprammer", "ruski", "sadism", "sadist", "sandbar", "sausagequeen", "scag", "scantily", "schizo", "schlong", "screw", "screwed", "screwing", "scroat", "scrog", "scrot", "scrote", "scrotum", "scrud", "scum", "seaman", "seamen", "seduce", "semen", "sex", "sexual", "shag", "shagger", "shaggin", "shagging", "shamedame", "shemale", "shibari", "shibary", "shit", "shitdick", "shite", "shiteater", "shited", "shitey", "shitface", "shitfuck", "shitfucker", "shitfull", "shithead", "shithole", "shithouse", "shiting", "shitings", "shits", "shitt", "shitted", "shitter", "shitters", "shitting", "shittings", "shitty", "shiz", "shota", "sissy", "skag", "skank", "slave", "sleaze", "sleazy", "slope", "slut", "slutbucket", "slutdumper", "slutkiss", "sluts", "smegma", "smut", "smutty", "snatch", "sniper", "snuff", "sob", "sodom", "son-of-a-bitch", "souse", "soused", "spac", "sperm", "spic", "spick", "spik", "spiks", "spooge", "spunk", "steamy", "stfu", "stiffy", "stoned", "strip", "strip club", "stripclub", "stroke", "stupid", "suck", "sucked", "sucking", "sumofabiatch", "tampon", "tard", "tawdry", "teabagging", "teat", "teets", "teez", "terd", "teste", "testee", "testes", "testical", "testicle", "testis", "threesome", "throating", "thrust", "thug", "tinkle", "tit", "titfuck", "titi", "tits", "titt", "tittiefucker", "titties", "titty", "tittyfuck", "tittyfucker", "tittywank", "titwank", "toke", "toots", "tosser", "tramp", "transsexual", "trashy", "tubgirl", "turd", "tush", "twat", "twathead", "twats", "twatty", "twunt", "twunter", "ugly", "undies",  "uzi", "vag", "vagina", "valium", "viagra", "vigra", "virgin", "vixen", "vodka", "voyeur", "vulgar", "vulva", "wad", "wang", "wank", "wanker", "wanky", "wazoo", "wedgie", "weed", "weenie", "weewee", "weiner", "weirdo", "wench", "wetback", "whitey", "whiz", "whoar", "whoralicious", "whore", "whorealicious", "whored", "whoreface", "whorehopper", "whorehouse", "whores", "whoring", "wigger", "willies", "willy", "woody", "woose", "wop", "wtf", "x-rated2g1c","xx", "xxx", "yaoi", "yury"]; // Replace with your list of obscene words

function censorText(text, obsceneWordsList) {
  let censoredText = text;
  obsceneWordsList.forEach((obsceneWord) => {
    const regex = new RegExp(`(?<!\\w)${escapeRegExp(obsceneWord)}(?![\\w*])`, 'gi');
    censoredText = censoredText.replace(regex, '*'.repeat(obsceneWord.length));
  });
  return censoredText;
}

function isInStyleElement(node) {
  let currentNode = node.parentElement;
  while (currentNode !== null) {
    if (currentNode.nodeName === 'STYLE') {
      return true;
    }
    currentNode = currentNode.parentElement;
  }
  return false;
}

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function replaceTextContent(obsceneWordsList) {
  const textWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let currentNode;

  while ((currentNode = textWalker.nextNode())) {
    if (!isInStyleElement(currentNode)) {
      const text = currentNode.textContent.trim();
      const censoredText = censorText(text, obsceneWordsList);
      if (text !== censoredText) {
        currentNode.textContent = censoredText;
      }
    }
  }
}

function sendTextForProcessing(node, text) {
  const censoredText = censorText(text, obsceneWordsList);
  if (text !== censoredText) {
    node.textContent = censoredText;
  }
}

function sendAllText() {
  const textWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let currentNode;

  while ((currentNode = textWalker.nextNode())) {
    const text = currentNode.textContent.trim();
    if (text !== '') {
      sendTextForProcessing(currentNode, text);
    }
  }
}

function observeDynamicText() {
  const observer = new MutationObserver(mutationsList => {
    mutationsList.forEach(mutation => {
      mutation.addedNodes.forEach(node => {
        traverseNodeAndProcessText(node);
      });
    });
  });

  observer.observe(document.body, { childList: true, subtree: true });
}

function traverseNodeAndProcessText(node) {
  if (node.nodeType === Node.TEXT_NODE) {
    const text = node.textContent.trim();
    if (text !== '') {
      sendTextForProcessing(node, text);
    }
  } else if (node.nodeType === Node.ELEMENT_NODE) {
    const childNodes = node.childNodes;
    for (const childNode of childNodes) {
      traverseNodeAndProcessText(childNode);
    }
  }
}

function sendUrl(url) {
  const imageData = {
    url: url,
    raw: false,
    dir: false,
    hostname: ''
  };

  const jsonPayload = JSON.stringify(imageData);

  fetch('http://localhost:8000/process', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: jsonPayload
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(response => {
      console.log('Image sent to server successfully!');
      if (response.blur === true) {
        const srcImgElements = document.querySelectorAll(`img[src="${response.url}"]`);
        const dataSrcImgElements = document.querySelectorAll(`img[data-src="${response.url}"]`);
        const imgElements = [...srcImgElements, ...dataSrcImgElements];

        imgElements.forEach(imgElement => {
          imgElement.style.filter = 'blur(50px)';
          let isImageClicked = false;
          console.log(imgElement);

          imgElement.addEventListener('click', function (event) {
            event.preventDefault();
            const parentLink = imgElement.parentNode;
            if (!isImageClicked) {
              imgElement.style.filter = 'blur(0)';
              isImageClicked = true;
            } else if (parentLink && parentLink.tagName === 'A') {
              isImageClicked = false;
              window.location.href = parentLink.href;
            }
          });
        });
      }  
    })
    .catch(error => {
      console.error('Error sending image to server:', error);
    });
}

function sendAllImages() {
  const imageUrls = [];
  const imgs = [...document.getElementsByTagName('img')];
  
  for (let i = 0; i < imgs.length; i++) {
    const dataSrc = imgs[i].getAttribute('data-src');
    const src = imgs[i].getAttribute('src');
    
    if (dataSrc) {
      imageUrls.push(dataSrc);
    }
    
    if (src) {
      imageUrls.push(src);
    }
  }  
  console.log(imgs)

  for (const url of imageUrls) {
    sendUrl(url);
  }
}

function observeDynamicImages() {
  const observer = new MutationObserver(mutationsList => {
    mutationsList.forEach(mutation => {
      mutation.addedNodes.forEach(node => {
        if (typeof node.getElementsByTagName !== 'function') {
          return;
        }

        const images = node.getElementsByTagName('img');
        for (const img of images) {
          const dataSrc = img.getAttribute('data-src');
          const src = img.getAttribute('src');

          if (dataSrc) {
            sendUrl(dataSrc);
          }

          if (src) {
            sendUrl(src);
          }
        }
      })
    });
  });

  observer.observe(document.body, { childList: true, subtree: true });
}

function isURLBlocked(url) {
  const lowerCaseURL = url.toLowerCase();
  const containsObceneWord = obsceneWordsList.some(word => lowerCaseURL.includes(word));
  const containsSpecialCharacter = /[\=\+\-\\\/]/.test(url);
  return containsObceneWord && containsSpecialCharacter;
}

document.addEventListener('DOMContentLoaded', function () {
  console.log("DOM loaded");

  // Send a message to the background script to check if the page is blocked
  chrome.runtime.sendMessage({ action: "checkPageBlocked", url: window.location.href }, (response) => {
    if (response && response.isBlocked) {
      // Block the page content if the website is blocked
      document.documentElement.innerHTML = "<h1>This search page is blocked by the extension!</h1>";
    } else {
      // Process images and text as usual
      
      sendAllImages();
      sendAllText();
      observeDynamicImages();
      observeDynamicText();
    }
  });
});
