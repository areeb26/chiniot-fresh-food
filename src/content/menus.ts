export type Package = {
  name: string;
  price: string;
  groups: { title: string; items: string[] }[];
};

export const menuHub = [
  {
    href: "/wedding-reception-menu",
    title: "Wedding & Reception Menu",
    image: "/images/food/banquet.jpg",
    text: "Biryani, karahi, live tandoor and dessert — priced per head from Rs 1,300. Built for nikkah dinners and baraat halls in Karachi.",
  },
  {
    href: "/hi-tea-menu",
    title: "Hi-Tea Menu",
    image: "/images/food/tea.jpg",
    text: "Continental and fusion trays for bridal showers, office afternoons, and drawing-room gatherings. From Rs 1,400 per head.",
  },
  {
    href: "/mehendi-menu",
    title: "Mehendi Menu",
    image: "/images/food/grill.jpg",
    text: "Chaat counters, BBQ, doodh patti and live tandoor for mehendi nights that run late. From Rs 950 per head.",
  },
  {
    href: "/breakfast-menu",
    title: "Breakfast Menu",
    image: "/images/food/breakfast.jpg",
    text: "Halwa puri, nehari, omelette stations and continental trays for morning nikkahs and office starts. From Rs 600 per head.",
  },
  {
    href: "/corporate-lunch-dinner-menu",
    title: "Corporate Lunch & Dinner",
    image: "/images/food/service.jpg",
    text: "Timed buffet and plated lines for AGMs, showroom openings and board lunches. From Rs 1,600 per head.",
  },
  {
    href: "/customize",
    title: "Customize Your Own Menu",
    image: "/images/food/karahi.jpg",
    text: "Pick drinks, appetizers, gravy, rice and dessert. We cook it from the DHA kitchen and send a crew to the venue.",
  },
];

export const weddingMenus: Package[] = [
  {
    name: "Menu 1",
    price: "Rs 1,300 per head",
    groups: [
      { title: "The Royal Feast", items: ["Beef Hyderabadi Biryani", "Chicken Chaska Karahi"] },
      { title: "Flames & Smoke", items: ["Chicken Peri Peri Tikka", "Chicken Mint Rolls"] },
      { title: "Artisan Bread & Tandoor", items: ["Live Tandoor", "Roghni Kulcha"] },
      { title: "Garden Fresh", items: ["Fresh Green Salad Platter", "Raita"] },
      { title: "Sweet Tooth", items: ["Roasted Almond Ice Cream"] },
    ],
  },
  {
    name: "Menu 2",
    price: "Rs 1,500 per head",
    groups: [
      { title: "Signature Starter", items: ["Fresh Juice"] },
      { title: "The Royal Feast", items: ["Chicken White Bombay Biryani", "Beef Tawa Qeema", "Chicken Achari Karahi"] },
      { title: "Flames & Smoke", items: ["BBQ Angara Boti"] },
      { title: "Artisan Bread & Tandoor", items: ["Live Tandoor", "Roghni Kulcha"] },
      { title: "Garden Fresh", items: ["Fresh Green Salad Platter", "Green Raita"] },
      { title: "Sweet Tooth", items: ["Ice Cream", "Strawberry Cheesecake"] },
    ],
  },
  {
    name: "Menu 3",
    price: "Rs 1,600 per head",
    groups: [
      { title: "The Royal Feast", items: ["Chicken Zafrani Biryani", "Mutton Peshawari Karahi"] },
      { title: "Flames & Smoke", items: ["Chicken Rajasthani Tikka", "Chicken Smoky Puffs"] },
      { title: "Artisan Bread & Tandoor", items: ["Live Tandoor", "Assorted Bread"] },
      { title: "Garden Fresh", items: ["Fresh Green Salad Platter", "Green Raita"] },
      { title: "Sweet Tooth", items: ["Pineapple Delight"] },
    ],
  },
  {
    name: "Menu 4",
    price: "Rs 1,650 per head",
    groups: [
      { title: "The Royal Feast", items: ["Chicken Sindhi Biryani", "Chicken Cheese Handi", "Beef Tawa Qeema"] },
      { title: "Flames & Smoke", items: ["Angara Kabab", "Chicken Cheese Tempura"] },
      { title: "Artisan Bread & Tandoor", items: ["Live Tandoor", "Roghni Kulcha"] },
      { title: "Garden Fresh", items: ["Fresh Green Salad Platter", "Raita"] },
      { title: "Sweet Tooth", items: ["Fruit Alaska"] },
      { title: "Brew Lounge", items: ["Live Tea & Green Tea"] },
    ],
  },
  {
    name: "Menu 5",
    price: "Rs 1,950 per head",
    groups: [
      { title: "Signature Starter", items: ["Chicken Dynamite Shots"] },
      { title: "The Royal Feast", items: ["Chicken Hara Masala Pulao", "Mutton Peshawari Karahi"] },
      { title: "Flames & Smoke", items: ["Hunzai Kabab", "Chicken Cheese Strips"] },
      { title: "Garden Fresh", items: ["Assorted Continental & Arabic Salad", "Raita"] },
      { title: "Artisan Bread & Tandoor", items: ["Live Tandoor", "Roghni Kulcha"] },
      { title: "Sweet Indulgence", items: ["Matka Kulfi", "Mini Gulab Jamun"] },
      { title: "Brew Lounge", items: ["Live Tea"] },
    ],
  },
  {
    name: "Menu 6",
    price: "Rs 2,300 per head",
    groups: [
      { title: "Welcome Sips & Bites", items: ["Mint Lemonade", "Korean Chicken"] },
      { title: "The Royal Feast", items: ["Beef Matka Biryani", "Chicken Mughlai Handi (Boneless)"] },
      { title: "Chargrilled & Crunch", items: ["BBQ Lebanese Boti", "Beef Pencil Kabab", "Chicken Mongolian Strips"] },
      { title: "Artisan Bread & Tandoor", items: ["Live Tandoor", "Roghni Kulcha"] },
      { title: "Garden Fresh", items: ["Assorted Salads", "Raita"] },
      { title: "Sweet Indulgence", items: ["Rabri Kheer", "Live Thin & Crispy Jalebi"] },
      { title: "Brew Lounge", items: ["Kashmiri Chai"] },
    ],
  },
  {
    name: "Menu 7",
    price: "Rs 2,900 per head",
    groups: [
      { title: "Warm Beginnings", items: ["Hot n Sour Soup With Crackers"] },
      { title: "The Royal Feast", items: ["Mutton Zafrani Biryani", "Brain Masala Katakat", "Chicken Balochi Karahi", "Fish n Chips With Tartar Sauce"] },
      { title: "Flames & Smoke", items: ["Turkish Kabab", "Chicken Chops"] },
      { title: "Artisan Bread & Tandoor", items: ["Live Tandoor", "Roghni Kulcha / Milky Naan"] },
      { title: "Garden Fresh", items: ["Assorted Continental & Arabic Salad", "Raita"] },
      { title: "Sweet Indulgence", items: ["Assorted Dessert Shots", "Gajar ka Halwa"] },
      { title: "Brew Lounge", items: ["Tea & Kehwa"] },
    ],
  },
  {
    name: "Menu 8",
    price: "Rs 2,900 per head",
    groups: [
      { title: "Welcome Sips & Bites", items: ["Fresh Seasonal Juice", "Peri Bites With Dips"] },
      { title: "The Royal Feast", items: ["Mutton Mandi", "Beef Karahi Qeema", "Chicken Shinwari Karahi"] },
      { title: "Flames & Smoke", items: ["Beef/Chicken Cocktail Kabab", "BBQ Chicken Balochi Tikka With Fries", "Fried Mexican Chicken"] },
      { title: "Artisan Bread & Tandoor", items: ["Live Tandoor", "Roghni Kulcha / Milky Naan"] },
      { title: "Garden Fresh", items: ["Assorted Continental & Arabic Salad", "Raita"] },
      { title: "Sweet Indulgence", items: ["Frosti Fills Ice Cream", "Mini Gulab Jamun"] },
      { title: "Brew Lounge", items: ["Tea & Kehwa"] },
    ],
  },
];

export const hiTeaMenus: Package[] = [
  {
    name: "Classical Continental",
    price: "Rs 1,400 per head",
    groups: [
      { title: "Welcome", items: ["Fresh Mint Lemonade"] },
      { title: "Tea Sandwiches", items: ["Egg & Cheese Sandwich"] },
      { title: "Chef’s Savouries", items: ["Mini Chicken Patties", "Vegetable Spring Rolls", "Crispy Chicken Popcorn"] },
      { title: "Hot Kitchen", items: ["Chicken Penne Alfredo"] },
      { title: "Sweet", items: ["Chocolate Brownie", "Vanilla Fruit Trifle Shots"] },
      { title: "Beverage", items: ["Tea", "Labor & Transport"] },
    ],
  },
  {
    name: "Executive Continental",
    price: "Rs 2,450 per head",
    groups: [
      { title: "Welcome", items: ["Peach Iced Tea"] },
      { title: "Artisan Sandwiches", items: ["Smoked Chicken Croissant", "Chicken Caesar Wrap"] },
      { title: "Gourmet Savouries", items: ["Chicken Shashlik Sticks", "Crispy Fish Fingers", "Chicken Tarts"] },
      { title: "Hot Selection", items: ["Chicken Alfredo Pasta", "Herb Rice", "Grilled Chicken with Mushroom Sauce"] },
      { title: "Sweet Studio", items: ["Lotus Cheesecake", "Mini Fruit Tart"] },
      { title: "Beverage", items: ["Tea & Coffee", "Labor & Transport"] },
    ],
  },
  {
    name: "Signature Continental",
    price: "Rs 3,300 per head",
    groups: [
      { title: "Welcome", items: ["Fresh Orange Juice", "Signature Mint Cooler"] },
      { title: "Live", items: ["Live Gourmet Pizza Station"] },
      { title: "Signature Savouries", items: ["Chicken Vol-au-Vents", "Chicken Parmesan Sliders", "Chicken Quesadillas", "Garlic Butter Fish Goujons"] },
      { title: "Chef’s Kitchen", items: ["Herb Grilled Chicken", "Creamy Alfredo Pasta"] },
      { title: "Dessert Atelier", items: ["Tiramisu Cups", "Lotus Cheesecake", "Mini Éclairs", "Fresh Fruit Tartlets"] },
      { title: "Beverage", items: ["Iced, Espresso, Frappe", "Labor & Transport"] },
    ],
  },
  {
    name: "Classic Fusion",
    price: "Rs 1,450 per head",
    groups: [
      { title: "Welcome", items: ["Mint Lemonade"] },
      { title: "Street Bites", items: ["Bun Kabab", "Fried Chicken", "Cheese Roll", "Chana Chaat"] },
      { title: "Fusion Kitchen", items: ["Chicken Fried Rice", "Chicken Manchurian"] },
      { title: "Sweet", items: ["Stick Kulfi", "Chocolate Brownie"] },
      { title: "Beverage", items: ["Tea", "Labor & Transport"] },
    ],
  },
  {
    name: "Executive Fusion",
    price: "Rs 1,900 per head",
    groups: [
      { title: "Welcome", items: ["Fresh Lime", "Peach Iced Tea"] },
      { title: "Street Food Corner", items: ["Dahi Baray", "Pani Puri", "Mini Chicken Shawarma"] },
      { title: "Continental", items: ["Chicken Tikka Quesadilla", "Crispy Fish Fingers"] },
      { title: "Hot Kitchen", items: ["Chicken Alfredo Pasta"] },
      { title: "Sweet Studio", items: ["Jalebi with Rabri", "Assorted Pastries"] },
      { title: "Beverage", items: ["Tea & Coffee", "Labor & Transport"] },
    ],
  },
  {
    name: "Signature Fusion",
    price: "Rs 2,900 per head",
    groups: [
      { title: "Welcome", items: ["Signature Mint Cooler", "Fresh Seasonal Juice"] },
      { title: "Live", items: ["Live Shawarma Station"] },
      { title: "Gourmet Street Bites", items: ["Mini Bun Kabab Sliders", "Chicken Tikka Tacos", "Chicken Caesar Salad Cups", "Dynamite Prawn Shots", "Crispy Chicken Goujons"] },
      { title: "Chef’s Kitchen", items: ["Live Alfredo Pasta", "Chicken Fajita Pizza", "Loaded Masala Fries"] },
      { title: "Desserts", items: ["Lotus Cheesecake", "Kunafa Cups", "Mini Fruit Tart"] },
      { title: "Beverage", items: ["Cardamom Tea", "Espresso", "Traditional Kehwa", "Labor & Transport"] },
    ],
  },
];

export const mehendiMenus: Package[] = [
  {
    name: "Menu 1",
    price: "Rs 950 per head",
    groups: [
      { title: "Jashn-e-Khaas", items: ["Chicken Sindhi Biryani", "Chicken Chaska Karahi", "Dahi Baray"] },
      { title: "Tandoor Beat", items: ["Roghni Kulcha"] },
      { title: "Sweet Street", items: ["Mini Gulab Jamun"] },
      { title: "Sides", items: ["Fresh Green Salad", "Raita"] },
      { title: "Hot Brew", items: ["Doodh Patti", "Labor & Transport"] },
    ],
  },
  {
    name: "Menu 2",
    price: "Rs 1,850 per head",
    groups: [
      { title: "Mehendi Mela Street", items: ["Pani Puri Shots", "Chola Mix Chaat"] },
      { title: "Jashn-e-Khaas", items: ["Chicken Yakhni Pulao", "Chicken Peshawari Karahi", "Beef Behari Boti", "Mini Spring Rolls"] },
      { title: "Tandoor Beat", items: ["Milky Naan", "Roghni Kulcha"] },
      { title: "Sides", items: ["Fresh Green Salad", "Raita"] },
      { title: "Sweet Street", items: ["Malpura with Rabri"] },
      { title: "Hot Brew", items: ["Doodh Patti", "Labor & Transport"] },
    ],
  },
  {
    name: "Menu 3",
    price: "Rs 2,650 per head",
    groups: [
      { title: "Mehendi Mela Street", items: ["Limca", "Samosa Chaat", "Bun Kabab", "Masala Dosa"] },
      { title: "Jashn-e-Khaas", items: ["Beef Matka Biryani", "Chicken Makhni Handi", "BBQ Angara Boti", "Turkish Kabab", "Chicken Cheese Samosa"] },
      { title: "Tandoor Beat", items: ["Roghni Kulcha", "Fry Paratha", "Milky Naan"] },
      { title: "Sides", items: ["Assorted Salad Bowls", "Raita"] },
      { title: "Sweet Street", items: ["Stick Kulfi", "Thin Crispy Jalebi"] },
      { title: "Hot Brew", items: ["Doodh Patti", "Green Tea", "Labor & Transport"] },
    ],
  },
  {
    name: "Menu 4",
    price: "Rs 2,400 per head",
    groups: [
      { title: "Mehendi Mela Street", items: ["Fresh Seasonal Juice", "Firecracker Prawn", "Chicken Shawarma", "Garlic Mayo Fries"] },
      { title: "Jashn-e-Khaas", items: ["Singaporean Rice", "Beef Haleem", "Daal Wali Kachori With Tarkari", "Kofta Kabab", "Chicken Cheese Tempura"] },
      { title: "Tandoor Beat", items: ["Live Milky Naan", "Fry Paratha"] },
      { title: "Sides", items: ["Assorted Salad Bowl", "Assorted Sauces"] },
      { title: "Sweet Street", items: ["Ice Cream With Waffle Cone", "Live Imarti"] },
      { title: "Hot Brew", items: ["Kashmiri Chai", "Kehwa", "Labor & Transport"] },
    ],
  },
  {
    name: "Menu 5",
    price: "Rs 3,200 per head",
    groups: [
      { title: "Mehendi Mela Street", items: ["Sugarcane Juice", "Chaat Station (chana, bhel, pani puri, meethi puri)", "Dahi Baray", "Chicken Chatni Roll", "Buttered Desi Corn", "Dynamite Chicken Shots"] },
      { title: "Jashn-e-Khaas", items: ["Chicken Tikka Biryani", "Chicken Tawa Qeema", "Beef Bong Nehari", "Grilled Shahi Tikka", "Golden Melt Strips"] },
      { title: "Sides", items: ["Assorted Continental & Arabic Salad", "Raita"] },
      { title: "Tandoor Beat", items: ["Live Garlic & Milky Naan", "Live Tandoor Rumali / Shahi Chapati"] },
      { title: "Sweet Street", items: ["Waffle & Pancakes", "Gola Ganda"] },
      { title: "Hot Brew", items: ["Espresso", "Tea", "Green Tea", "Labor & Transport"] },
    ],
  },
  {
    name: "Menu 6",
    price: "Rs 5,400 per head",
    groups: [
      { title: "Mehendi Mela Street", items: ["Chicken Corn Soup with Eggs & Slims", "Live Pizza", "Live Mocktail Shots", "Chicken Khausa", "Chicken & Beef Sliders", "French Fries Station"] },
      { title: "Jashn-e-Khaas", items: ["Mutton Madhbi With Rice", "Mutton Namkeen Boti", "Chicken Chaska Karahi", "Beef Nalki Kabab", "Chicken Balochi Chargha", "Beef Tawa Qeema", "Lahori Finger Fish"] },
      { title: "Tandoor Beat", items: ["Live Garlic Naan", "Live Mani Kulcha"] },
      { title: "Sides", items: ["Assorted Continental & Arabic Salad", "Tomato Sauce", "Mint Raita"] },
      { title: "Sweet Street", items: ["Live Kunafa", "Matka Rasmalai", "Assorted Three Milk Cake Shots"] },
      { title: "Brew Studio", items: ["Iced / Espresso / Frappe", "Labor & Transport"] },
    ],
  },
  {
    name: "Menu 7",
    price: "Rs 2,650 per head",
    groups: [
      { title: "Mehendi Mela Street", items: ["Chicken Hot & Sour Soup With Crackers", "Mini Spring Rolls", "Veg Dynamite Balls", "Arabic Paratha", "Pani Puri Shots"] },
      { title: "Jashn-e-Khaas", items: ["Veg Egg Fried Rice", "Chicken Kung Pao", "Mughlai Handi", "Prawn Tempura", "Chicken Chowmein", "Vegetable Stir Fry with Oyster Sauce"] },
      { title: "Tandoor Beat", items: ["Live Roghni Kulcha & Garlic Tandoor"] },
      { title: "Sides", items: ["Chili Garlic, Soy & Sweet Chili Dips", "Chinese Cabbage / Chicken Salad"] },
      { title: "Sweet Street", items: ["Molten Lava Cake With Vanilla Ice Cream"] },
      { title: "Hot Brew", items: ["Espresso Coffee", "Green Tea"] },
    ],
  },
];

export const corporateMenus: Package[] = [
  {
    name: "Corporate Continental 1",
    price: "Rs 1,650 per head",
    groups: [
      { title: "Starters", items: ["Fresh Seasonal Juice"] },
      { title: "Main", items: ["Chicken Fajita Wrap", "BBQ Angara Boti", "Garlic Rice", "Chicken Shashlik"] },
      { title: "Dessert", items: ["Chocolate Mousse Shots"] },
    ],
  },
  {
    name: "Corporate Continental 2",
    price: "Rs 1,600 per head",
    groups: [
      { title: "Starters", items: ["Chicken Caesar Salad", "Dynamite Chicken Shots"] },
      { title: "Main", items: ["Veg Egg Fried Rice", "Chicken Schezwan", "BBQ Grilled Shahi Chicken", "Veg Chowmein"] },
      { title: "Dessert", items: ["Mini Banoffee Pie"] },
    ],
  },
  {
    name: "Corporate Continental 3",
    price: "Rs 2,300 per head",
    groups: [
      { title: "Starters", items: ["Cream of Mushroom Soup with Garlic Bread"] },
      { title: "Main", items: ["Jasmine Rice", "Thai Red Curry", "Grilled Mutton Chops", "Chicken Strips", "Alfredo Penne Pasta"] },
      { title: "Dessert", items: ["Caramel Bread Pudding", "Mini Donut Bites"] },
    ],
  },
  {
    name: "Corporate Continental 4",
    price: "Rs 2,150 per head",
    groups: [
      { title: "Starters", items: ["Mint Lemonade", "Firecracker Prawn Shots"] },
      { title: "Main", items: ["Continental Salad Bar", "Chicken Alfredo Pasta", "Beef Mongolian", "Veg Egg Fried Rice", "BBQ Lebanese Boti", "Chicken Vegetable Spring Rolls"] },
      { title: "Dessert", items: ["Oreo Cream Trifle", "Iceberg Ice Cream"] },
    ],
  },
  {
    name: "Corporate Continental 5",
    price: "Rs 3,450 per head",
    groups: [
      { title: "Starters", items: ["Mojitos", "Mozzarella Cheese Sticks", "Dynamite Prawn Shots"] },
      { title: "Main", items: ["Greek Fettuccine Salad", "Garlic Rice", "Beef Chilli Dry", "Peri Peri Tikka", "Fish & Chips", "Parmesan Chicken Steak with Mashed Potato"] },
      { title: "Dessert", items: ["Vanilla Frappe", "Tiramisu Shots", "Three Milk Cake Shots"] },
    ],
  },
  {
    name: "Corporate Continental 6",
    price: "Rs 3,700 per head",
    groups: [
      { title: "Starters", items: ["Fresh Seasonal Juice", "Thai Sweet Chilli Chicken"] },
      { title: "Main", items: ["Parmesan Salad with Rocket & Pomo", "Mutton Hunzai Kabab", "Chicken Grilled Chops", "Prawn Tempura", "Beef Moroccan Steak with Sautéed Veg", "Egg Veg Fried Rice", "Kung Pao Chicken"] },
      { title: "Dessert", items: ["Peach Iced Tea", "Ice Cream with Waffle Cone"] },
    ],
  },
];

export const breakfastMenus: Package[] = [
  {
    name: "Pakistani Menu 1",
    price: "Rs 600 per head",
    groups: [
      {
        title: "Spread",
        items: [
          "Puri with Aloo Tarkari & Chana",
          "Egg Station (half fry, omelette)",
          "Lachha Paratha",
          "Butter Jam Bread Station",
          "Suji ka Halwa",
          "Tea",
        ],
      },
    ],
  },
  {
    name: "Pakistani Menu 2",
    price: "Rs 950 per head",
    groups: [
      {
        title: "Spread",
        items: [
          "Pakistani Omelette",
          "Beef Bong Nehari",
          "Lacha Paratha",
          "Milky Naan",
          "Doodh Patti",
          "Namkeen / Sweet Lassi",
          "Bread Basket",
          "Marble & Butter Cake",
          "Butter / Jam",
        ],
      },
    ],
  },
  {
    name: "Fusion Menu 1",
    price: "Rs 1,100 per head",
    groups: [
      {
        title: "Spread",
        items: [
          "Paratha Station (Nutella, potato, chicken cheese, plain)",
          "Egg Station (half fry, omelette)",
          "Croissants and Bread Station",
          "Sausages with Sautéed Potatoes",
          "Seasonal Milk Shake",
          "Coffee & Tea Bar (latte, cappuccino, espresso, long black, cardamom tea)",
        ],
      },
    ],
  },
  {
    name: "Fusion Menu 2",
    price: "Rs 1,450 per head",
    groups: [
      {
        title: "Spread",
        items: [
          "Desi Toast Station (cheese omelette, keema, French, Nutella banana)",
          "Breakfast Sliders (anda shami, chicken fajita, aloo tikki)",
          "Muffin Station (egg and cheese)",
          "Freshly Baked Cheesy Buns",
          "Stuffed Hash Patties",
          "Iced Rose Milk, Doodh Patti, Saffron Elaichi Coffee",
          "Flavoured Yogurt Bowls",
        ],
      },
    ],
  },
  {
    name: "Continental Menu 1",
    price: "Rs 1,300 per head",
    groups: [
      {
        title: "Spread",
        items: [
          "Mushroom Cheese Omelette with Herb Toast",
          "French Toast with Honey & Maple",
          "Crispy Hash Browns with Grilled Chicken Sausages",
          "Fresh Fruit Salad",
          "Assorted Muffins (banana, chocolate, blueberry)",
          "Orange Juice",
          "Black Coffee",
          "Tea",
        ],
      },
    ],
  },
  {
    name: "Continental Menu 2",
    price: "Rs 2,500 per head",
    groups: [
      {
        title: "Spread",
        items: [
          "Live Omelette Station (cheese, chicken, veg)",
          "Chicken Grilled Croissant Sandwich",
          "Scrambled Eggs with Bread",
          "Breakfast Sliders (chicken sausage & egg, hash brown, spinach & feta)",
          "Mini Pancakes with Honey & Maple",
          "Roasted Veg with Olive Oil, Spicy Baked Beans & Roasted Tomatoes",
          "Chicken Sausages & Grilled Mushrooms",
          "Fresh Cheese Platter",
          "Caramel Latte, Spanish Latte, Saffron Milk Tea, Green Tea, Fresh Juices",
        ],
      },
    ],
  },
];
