export const site = {
  name: "Chiniot Fresh Food Catering",
  shortName: "Chiniot",
  tagline: "Event Planner — Event Services",
  principal: "Haji Fayyaz Ahmed",
  principalNote: "Chiniot 7 Star",
  email: "chiniotfreshfood@gmail.com",
  address: "13-E, Shop # 4, Sunset Lane # 4, DHA Phase 2 Ext. Karachi",
  phones: [
    { name: "Amir Fayyaz", tel: "0300-3396288", e164: "923003396288" },
    { name: "Fahad Fayyaz", tel: "0305-2506538", e164: "923052506538" },
  ],
} as const;

export const whatsappHref = `https://wa.me/${site.phones[0].e164}`;
export const telHref = `tel:+${site.phones[0].e164}`;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/our-services", label: "Services" },
  {
    href: "/menu",
    label: "Menu",
    children: [
      { href: "/wedding-reception-menu", label: "Wedding/Reception Menu" },
      { href: "/hi-tea-menu", label: "Hi-Tea Menu" },
      { href: "/mehendi-menu", label: "Mehendi Menus" },
      { href: "/corporate-lunch-dinner-menu", label: "Corporate Lunch/ Dinner" },
      { href: "/breakfast-menu", label: "Breakfast Menu" },
      { href: "/customize", label: "Customize Your Own Menu" },
    ],
  },
  { href: "/our-clients", label: "Our Clients" },
  { href: "/blogs", label: "Blogs" },
  { href: "/contact", label: "Contact Us" },
] as const;

export const terms = [
  "All menus apply on a minimum of 100 persons.",
  "Rates are exclusive of taxes, if applicable.",
  "Rates are exclusive of mineral water and soft drinks.",
  "Prices can change with market rates and seasonal supply.",
  "Some items are available on a seasonal basis.",
];

export const clients = [
  "DHA Phase 2 family baraats",
  "Clifton mehendi nights",
  "Defence club lunches",
  "Showroom openings, Korangi",
  "Office iftar in PECHS",
  "Nikkah breakfasts, Phase 8",
  "Bank branch inaugurations",
  "Factory staff lunches",
  "Apartment housewarmings",
  "School annual days",
  "Clinic staff dinners",
  "Warehouse Eid spreads",
];
