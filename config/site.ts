export const siteConfig = {
  brand: {
    name: "HAN Döner",
    slogan: "Authentischer Geschmack vom Grill",
    description:
      "Frisch geschnittenes Dönerfleisch, knackiges Gemüse und hausgemachte Saucen mitten in Berlin.",
    heroImage:
      "https://images.unsplash.com/photo-1561758033-7e924f619b47?auto=format&fit=crop&w=1400&q=80",
  },
  contact: {
    phone: "+49 30 1234 5678",
    whatsapp: "+49 30 1234 5678",
    email: "info@handoener.de",
  },
  location: {
    addressLine: "Oranienstrasse 42, 10999 Berlin",
    mapsUrl: "https://maps.google.com/?q=Oranienstrasse+42+10999+Berlin",
    mapsEmbedUrl: "https://www.google.com/maps?q=Berlin+Mitte&output=embed",
  },
  hours: [
    { day: "Montag - Donnerstag", time: "11:00 - 23:00" },
    { day: "Freitag - Samstag", time: "11:00 - 00:00" },
    { day: "Sonntag", time: "12:00 - 22:00" },
  ],
  heroBadges: ["Täglich Frisch", "Hausgemachte Saucen", "Schneller Service"],
  menu: [
    {
      category: "Döner Spezialitäten",
      items: [
        {
          name: "Döner im Brot",
          trName: "Ekmek Arası Döner",
          desc: "Saftiges Fleisch, Salatmix und Spezialsoße",
          price: "8.90 EUR",
          image:
            "https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=1200&q=80",
          bestSeller: true,
        },
        {
          name: "Dürüm Döner",
          trName: "Lavaş Döner",
          desc: "Gerollter Fladen mit frischen Kräutern",
          price: "9.40 EUR",
          image:
            "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=1200&q=80",
          bestSeller: false,
        },
        {
          name: "Dönerteller",
          trName: "Porsiyon Döner",
          desc: "Mit Reis oder Pommes nach Wahl",
          price: "12.90 EUR",
          image:
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
          bestSeller: true,
        },
        {
          name: "Hähnchen Döner",
          trName: "Tavuk Döner",
          desc: "Zartes Hähnchenfleisch mit frischem Salat",
          price: "8.60 EUR",
          image:
            "https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=1200&q=80",
          bestSeller: false,
        },
        {
          name: "XXL Döner",
          trName: "Büyük Döner",
          desc: "Extra Fleisch, extra Soße, extra Genuss",
          price: "10.90 EUR",
          image:
            "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=1200&q=80",
          bestSeller: true,
        },
        {
          name: "Döner Box",
          trName: "Döner Kutu",
          desc: "Mit Pommes oder Reis im praktischen Becher",
          price: "9.90 EUR",
          image:
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
          bestSeller: false,
        },
      ],
    },
    {
      category: "Wraps & Teller",
      items: [
        {
          name: "Scharfer Dürüm",
          trName: "Acılı Döner Dürüm",
          desc: "Mit hausgemachter scharfer Soße",
          price: "9.90 EUR",
          image:
            "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=1200&q=80",
          bestSeller: false,
        },
        {
          name: "Döner mit Käse",
          trName: "Kaşarlı Döner",
          desc: "Mit geschmolzenem Käse und extra Geschmack",
          price: "10.40 EUR",
          image:
            "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
          bestSeller: true,
        },
        {
          name: "Han Spezialteller",
          trName: "Usta Tabağı",
          desc: "Gemischtes Fleisch mit Grillgemüse",
          price: "14.90 EUR",
          image:
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
          bestSeller: false,
        },
        {
          name: "Falafel Dürüm",
          trName: "Falafel Dürüm",
          desc: "Knusprige Falafel mit Tahini und Salat",
          price: "8.40 EUR",
          image:
            "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=1200&q=80",
          bestSeller: false,
        },
        {
          name: "Iskender Teller",
          trName: "İskender Tabağı",
          desc: "Döner auf Brot mit Joghurtsauce und Butter",
          price: "15.40 EUR",
          image:
            "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
          bestSeller: true,
        },
        {
          name: "Vegetarischer Teller",
          trName: "Vejetaryen Tabak",
          desc: "Gegrilltes Gemüse, Salat und Saucen",
          price: "11.20 EUR",
          image:
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
          bestSeller: false,
        },
      ],
    },
    {
      category: "Getränke",
      items: [
        {
          name: "Ayran",
          trName: "Ayran",
          desc: "300 ml",
          price: "2.00 EUR",
          image:
            "https://images.unsplash.com/photo-1528736235302-52922df5c122?auto=format&fit=crop&w=1200&q=80",
          bestSeller: false,
        },
        {
          name: "Salgam",
          trName: "Şalgam",
          desc: "Scharf oder mild",
          price: "2.50 EUR",
          image:
            "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=1200&q=80",
          bestSeller: false,
        },
        {
          name: "Cola",
          trName: "Kola",
          desc: "330 ml Dose",
          price: "2.50 EUR",
          image:
            "https://images.unsplash.com/photo-1581636625402-29b2a704ef13?auto=format&fit=crop&w=1200&q=80",
          bestSeller: false,
        },
        {
          name: "Fanta",
          trName: "Fanta",
          desc: "330 ml Dose",
          price: "2.50 EUR",
          image:
            "https://images.unsplash.com/photo-1581636625402-29b2a704ef13?auto=format&fit=crop&w=1200&q=80",
          bestSeller: false,
        },
        {
          name: "Uludag Gazoz",
          trName: "Uludağ Gazoz",
          desc: "330 ml Dose",
          price: "2.80 EUR",
          image:
            "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=1200&q=80",
          bestSeller: false,
        },
        {
          name: "Wasser",
          trName: "Su",
          desc: "500 ml",
          price: "1.80 EUR",
          image:
            "https://images.unsplash.com/photo-1528736235302-52922df5c122?auto=format&fit=crop&w=1200&q=80",
          bestSeller: false,
        },
      ],
    },
  ],
} as const;

export const navigation = [
  { href: "/", label: "Startseite" },
  { href: "/menu", label: "Speisekarte" },
  { href: "/iletisim", label: "Kontakt" },
] as const;
