import Relexed from "/assets/images/lir_relaxed_pub_garden.webp";
import Glow from "/assets/images/lir_bar_warm_glow.webp";
import Sports from "/assets/images/lir_outside_sports.webp";
import Welcome from "/assets/images/lir_welcome.webp";
import Warm from "/assets/images/lir_outside_warm.webp";

const AnimatedPageSliderData = {
  en: [
    {
      id: 0,
      name: "Atmosphere Meets Excellence",
      tag: "Join us and experience it for yourself",
      url: "xs:bg-relaxed",
      urlsm: "bg-relaxedSm",
      desc: [
        "At The Lir, every visit is more than just a night out—it's an experience. From the warm glow of our lighting to the buzz of conversation in our vibrant outdoor seating, the energy is always just right. Whether you're here to unwind, celebrate, or catch the big game, our inviting atmosphere makes every moment special.",
        "Excellence is at the heart of everything we do, from expertly crafted cocktails and perfectly poured pints to friendly service and an unbeatable lineup of live sports and events. We don’t just serve drinks—we create memories.",
      ],
      btn1: "Sport Schedule",
      btn2: "Menu",
      btn1Link: "/sports",
      btn2Link: "/menu",
    },
    {
      id: 1,
      name: "Hidden in the Heart of the City",
      tag: "Experience the 'Craic' in One of Berlin's Best",
      url: "xs:bg-welcome",
      urlsm: "bg-welcomeSm",
      desc: [
        "The Lir blends traditional values of an Irish bar with the modern expectations of a good fresh food kitchen.",
        "Hidden away, but conveniently reached, in the heart of the city, we have created one of the more genuine insider highlights in Berlin.",
        "Set in a unique historical location, a combination of its natural polished stone interior with an open fireplace in winter and a leafy green palm tree beer garden in summer, has enabled us to organically grow this bar into one of Berlin's best establishments.",
      ],
      btn1: "Sport Schedule",
      btn2: "Menu",
      btn1Link: "/sports",
      btn2Link: "/menu",
    },
    {
      id: 2,
      name: "Welcome to Lir - Your Perfect Night Out",
      tag: "Visit us today and experience the magic of The Lir",
      url: "xs:bg-warmGlow",
      urlsm: "bg-warmGlowSm",
      desc: [
        "Immerse yourself in the warm glow of The Lir, where handcrafted cocktails, fine spirits, and a cozy ambiance set the scene. With exposed brick walls, golden lighting, and an impressive liquor selection, we offer the perfect spot to unwind, connect, and enjoy.",
        "Grab a seat, sip on expertly mixed drinks, and soak in the inviting atmosphere. Whether it's a casual night out or a special occasion, The Lir is the place to be",
      ],
      btn1: "Sport Schedule",
      btn2: "Menu",
      btn1Link: "/sports",
      btn2Link: "/menu",
    },

    {
      id: 3,
      name: "Experience the Magic of Lir",
      tag: "Join us today and let the good times flow!",
      url: "xs:bg-warmOutside",
      urlsm: "bg-warmOutsideSm",

      desc: [
        "Under the soft glow of lanterns and surrounded by lush greenery, The Lir is the perfect escape for unforgettable evenings. Enjoy craft cocktails, fine wines, and refreshing beers in our charming outdoor seating area, where laughter fills the air and every sip feels like a getaway.",
        "Whether you're catching up with friends or soaking in the vibrant atmosphere, your perfect night starts here.",
      ],
      btn1: "Sport Schedule",
      btn2: "Menu",
      btn1Link: "/sports",
      btn2Link: "/menu",
    },
    {
      id: 4,
      name: "Game On at The Lir",
      tag: "Don't just watch the game - feel the energy.",
      url: "xs:bg-sportsOutside",
      urlsm: "bg-sportsOutsideSm",
      desc: [
        "Join the electric atmosphere at [Your Bar Name], where sports, great drinks, and an unbeatable crowd come together. Whether it's football, basketball, or the biggest international matches, watch the action live on our big screens while enjoying ice-cold beers and delicious bites.",
        "With plenty of outdoor seating, lively fans, and an unmatched game-day vibe, this is the place to cheer, celebrate, and experience every thrilling moment.",
      ],
      btn1: "Sport Schedule",
      btn2: "Menu",
      btn1Link: "/sports",
      btn2Link: "/menu",
    },
    // {
    //   id: 5,
    //   name: "John Doe",
    //   url: "/assets/images/Lir6.webp",
    //   desc: [
    //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium totam cumque, voluptatibus quisquam dolores enim doloribus recusandae voluptas distinctio nemo!",
    //   ],
    //   btn1: "Sport Schedule",
    //   btn2: "Contact",
    //   btn1Link: "/sports",
    //   btn2Link: "/contact",
    // },
    // {
    //   id: 6,
    //   name: "Pete & Patel",
    //   url: "/assets/images/Lir7.webp",

    //   desc: [
    //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium totam cumque, voluptatibus quisquam dolores enim doloribus recusandae voluptas distinctio nemo!",
    //   ],
    //   btn1: "Sport Schedule",
    //   btn2: "Contact",
    //   btn1Link: "/sports",
    //   btn2Link: "/contact",
    // },
  ],
  de: [
    {
      id: 0,
      name: "Game On at The Lir",
      tag: "Sieh dir das Spiel nicht nur an - spüre die Energie.",
      url: "xs:bg-sportsOutside",
      urlsm: "bg-sportsOutsideSm",
      desc: [
        "Erlebe die elektrisierende Atmosphäre in [Name deiner Bar], wo Sport, tolle Drinks und ein unschlagbares Publikum zusammenkommen. Ob Fußball, Basketball oder die größten internationalen Spiele, verfolge die Action live auf unseren großen Bildschirmen und genieße dabei eiskalte Biere und leckere Häppchen.",
        "Mit vielen Sitzgelegenheiten im Freien, lebhaften Fans und einer unvergleichlichen Atmosphäre am Spieltag ist dies der Ort zum Jubeln, Feiern und Erleben jedes spannenden Moments.",
      ],
      btn1: "Sporttermine",
      btn2: "Menü",
      btn1Link: "/sports",
      btn2Link: "/menu",
    },
    {
      id: 1,
      name: "Willkommen im Lir - Ihr perfekter Abend",
      tag: "Besuchen Sie uns heute und erleben Sie den Zauber des Lir",
      url: "xs:bg-warmGlow",
      urlsm: "bg-warmGlowSm",
      desc: [
        "Tauchen Sie ein in das warme Licht von The Lir, wo handgefertigte Cocktails, edle Spirituosen und ein gemütliches Ambiente die Szene bestimmen. Mit freiliegenden Ziegelwänden, goldener Beleuchtung und einer beeindruckenden Auswahl an Spirituosen bieten wir den perfekten Ort, um zu entspannen, Kontakte zu knüpfen und zu genießen.",
        "Nehmen Sie Platz, nippen Sie an fachmännisch gemixten Getränken und genießen Sie die einladende Atmosphäre. Egal, ob es sich um einen zwanglosen Abend oder einen besonderen Anlass handelt, das Lir ist der richtige Ort",
      ],
      btn1: "Sporttermine",
      btn2: "Menü",
      btn1Link: "/sports",
      btn2Link: "/menu",
    },
    {
      id: 2,
      name: "Versteckt im Herz der Stadt",
      tag: "Erleben Sie den „Craic“ in einer der besten Adressen Berlins",
      url: "xs:bg-welcome",
      urlsm: "bg-welcomeSm",
      desc: [
        "Das Lir verbindet die traditionellen Werte einer irischen Bar mit den modernen Ansprüchen an eine gute Frischküche.",
        "Versteckt, aber bequem erreichbar, im Herzen der Stadt, haben wir eines der echten Insider-Highlights in Berlin geschaffen.",
        "Durch die Kombination von poliertem Naturstein-Interieur mit offenem Kamin im Winter und einem grünen Palmen-Biergarten im Sommer ist es uns gelungen, diese Bar organisch zu einem der besten Lokale Berlins zu entwickeln.",
      ],
      btn1: "Sporttermine",
      btn2: "Menü",
      btn1Link: "/sports",
      btn2Link: "/menu",
    },
    {
      id: 3,
      name: "Atmosphäre trifft auf Exzellenz",
      tag: "Kommen Sie zu uns und erleben Sie es selbst",
      url: "xs:bg-relaxed",
      urlsm: "bg-relaxedSm",
      desc: [
        "Im Lir ist jeder Besuch mehr als nur ein Abend - er ist ein Erlebnis. Vom warmen Schein unserer Beleuchtung bis hin zu den lebhaften Gesprächen in unserem lebhaften Außenbereich ist die Energie immer genau richtig. Ob Sie nun hier sind, um zu entspannen, zu feiern oder das große Spiel zu sehen, unsere einladende Atmosphäre macht jeden Moment zu etwas Besonderem.",
        "Exzellenz ist das Herzstück von allem, was wir tun, von fachmännisch zubereiteten Cocktails und perfekt eingeschenkten Pints bis hin zu freundlichem Service und einem unschlagbaren Angebot an Live-Sport und Veranstaltungen. Wir servieren nicht nur Getränke - wir schaffen Erinnerungen.",
      ],
      btn1: "Sporttermine",
      btn2: "Menü",
      btn1Link: "/sports",
      btn2Link: "/menu",
    },
    {
      id: 4,
      name: "Erlebe die Magie von Lir",
      tag: "Kommen Sie noch heute zu uns und lassen Sie die gute Zeit beginnen!",
      url: "xs:bg-warmOutside",
      urlsm: "bg-warmOutsideSm",
      desc: [
        "Im sanften Schein von Laternen und umgeben von üppigem Grün ist The Lir der perfekte Ort für unvergessliche Abende. Genießen Sie handwerklich hergestellte Cocktails, erlesene Weine und erfrischende Biere in unserem charmanten Außenbereich, wo Lachen die Luft erfüllt und sich jeder Schluck wie eine Flucht anfühlt.",
        "Egal, ob Sie sich mit Freunden treffen oder die lebhafte Atmosphäre genießen wollen, Ihr perfekter Abend beginnt hier.",
      ],
      btn1: "Sporttermine",
      btn2: "Menü",
      btn1Link: "/sports",
      btn2Link: "/menu",
    },
  ],
};
export default AnimatedPageSliderData;
