export interface MenuItem {
  id: string;
  name: string;
  category: 'antipasti' | 'pasta' | 'pizza' | 'mains' | 'dessert' | 'wine';
  description: string;
  price: number;
  priceFormatted: string;
  image?: string;
  isPopular?: boolean;
  isChefSpecial?: boolean;
  dietary?: ('vegetarian' | 'vegan' | 'gluten-free' | 'dairy-free')[];
  pairing?: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  avatar: string;
  quote: string;
  rating: number;
  date: string;
  source: 'Google' | 'TripAdvisor' | 'Yelp' | 'OpenTable';
}

export const RESTAURANT_INFO = {
  name: 'Fresco.',
  subtitle: 'Italian Specialities',
  tagline: 'Good Food | Good wine',
  since: '1978',
  phone: '+123-456-1010',
  formattedPhone: '(123) 456-1010',
  email: 'reservations@fresco-ristorante.com',
  address: '428 Via Della Spiga, Little Italy, NY 10013',
  hours: {
    weekday: 'Monday - Saturday | 9AM - 1PM',
    weekend: 'Saturday - Sunday | 9AM - 4AM',
    dinnerWeekday: 'Mon - Fri: 5:00 PM - 11:00 PM',
    dinnerWeekend: 'Sat - Sun: 4:30 PM - 12:00 AM',
  },
  happyHour: {
    day: 'Wednesdays Means',
    title: 'Happy Hours!',
    highlight: 'Half Price Bottles of Wine and Six Tasty Lunches for $9',
    description: 'Congue, gravida. Placeat nibh sunt semper elementum anim! Integer lectus debitis auctor. Nunc quisquam adipisicing leo, tempora ipsam pede nostrum. Turpis tempus fusce, sed, orci eligendi.',
    discounts: [
      '50% Off All Chianti Classico & Pinot Grigio Bottles',
      '6 Artisan Italian Express Lunches for only $9',
      'Complimentary House Baked Focaccia & Herb Butter',
      'Aperol Spritz & Negroni Sbagliato for $7',
    ],
  },
};

export const CHECKERBOARD_ITEMS = [
  {
    type: 'content',
    title: 'Ham and Fontina',
    description: 'Roasted eggplant spread, marinated tomatoes.',
    price: '$29.5',
    category: 'Antipasti',
  },
  {
    type: 'image',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop',
    alt: 'Italian Panino and rustic potato wedges',
    title: 'Gourmet Panino Rustico',
  },
  {
    type: 'content',
    title: 'Chicken Italiano',
    description: 'Tristique perferen possimus neque fermentum vel.',
    price: '$11',
    category: 'Mains',
  },
  {
    type: 'image',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=800&auto=format&fit=crop',
    alt: 'Fresh seafood linguine with prawns and herbs',
    title: 'Linguine Frutti di Mare',
  },
  {
    type: 'content',
    title: 'Spaghetti Delle',
    description: 'Rustic baguette toasted with herb-garlic butter & parmesan.',
    price: '$28',
    category: 'Pasta',
  },
  {
    type: 'image',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=800&auto=format&fit=crop',
    alt: 'Herb roasted chicken with fresh baby arugula salad and shaved parmesan',
    title: 'Insalata di Pollo con Parmigiano',
  },
  {
    type: 'content',
    title: 'Crumbled Sausage',
    description: 'Natural unpressed ham, fontina, provolone, aïoli, fresh tomato.',
    price: '$12.5',
    category: 'Pizza',
  },
  {
    type: 'image',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=800&auto=format&fit=crop',
    alt: 'Wood-fired Neapolitan pizza with mozzarella, prosciutto, and arugula',
    title: 'Pizza Rustica al Forno',
  },
  {
    type: 'content',
    title: 'Baked Meatballs',
    description: 'Our handmade meatballs baked in savory marinara with melted cheese.',
    price: '$32.5',
    category: 'Primi',
  },
];

export const FULL_MENU_ITEMS: MenuItem[] = [
  // Antipasti
  {
    id: 'anti-1',
    name: 'Ham and Fontina',
    category: 'antipasti',
    description: 'Roasted eggplant spread, marinated heirloom tomatoes, San Daniele prosciutto, aged fontina val d’aosta.',
    price: 29.5,
    priceFormatted: '$29.5',
    image: 'https://images.unsplash.com/photo-1541529086526-db283c563270?q=80&w=600&auto=format&fit=crop',
    isPopular: true,
    dietary: ['gluten-free'],
    pairing: 'Pinot Grigio delle Venezie',
  },
  {
    id: 'anti-2',
    name: 'Crumbled Sausage Crostini',
    category: 'antipasti',
    description: 'Natural unpressed ham, fontina, sharp provolone, black garlic aïoli, fresh tomato compote.',
    price: 12.5,
    priceFormatted: '$12.5',
    image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?q=80&w=600&auto=format&fit=crop',
    isChefSpecial: true,
    pairing: 'Chianti Superiore DOCG',
  },
  {
    id: 'anti-3',
    name: 'Burrata Pugliese con Fichi',
    category: 'antipasti',
    description: 'Fresh creamy Puglia burrata, balsamic caramelized black mission figs, wild baby arugula, cold-pressed olive oil.',
    price: 18.0,
    priceFormatted: '$18.0',
    image: 'https://images.unsplash.com/photo-1592417817098-8f3d6910985c?q=80&w=600&auto=format&fit=crop',
    dietary: ['vegetarian', 'gluten-free'],
    pairing: 'Prosecco di Valdobbiadene',
  },
  {
    id: 'anti-4',
    name: 'Calamari Fritti al Limone',
    category: 'antipasti',
    description: 'Crispy flash-fried Monterey squid, lemon caper remoulade, charred Meyer lemon wedge.',
    price: 19.5,
    priceFormatted: '$19.5',
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=600&auto=format&fit=crop',
    pairing: 'Vermentino di Sardegna',
  },

  // Pasta
  {
    id: 'pasta-1',
    name: 'Spaghetti Delle',
    category: 'pasta',
    description: 'Hand-extruded bronze-die spaghetti, rustic toasted herb-garlic butter crumbs, 24-month Parmigiano-Reggiano, Sicilian chili crunch.',
    price: 28.0,
    priceFormatted: '$28.0',
    image: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281691?q=80&w=600&auto=format&fit=crop',
    isPopular: true,
    dietary: ['vegetarian'],
    pairing: 'Gavi di Gavi DOCG',
  },
  {
    id: 'pasta-2',
    name: 'Baked Meatballs Rigatoni',
    category: 'pasta',
    description: 'Handmade heritage beef & veal meatballs, slow-simmered San Marzano marinara, baked mozzarella di bufala.',
    price: 32.5,
    priceFormatted: '$32.5',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=600&auto=format&fit=crop',
    isChefSpecial: true,
    pairing: 'Brunello di Montalcino',
  },
  {
    id: 'pasta-3',
    name: 'Pappardelle al Cinghiale',
    category: 'pasta',
    description: 'Wide Tuscan egg ribbon pasta, 8-hour braised wild boar ragù, juniper berries, rosemary, pecorino toscano.',
    price: 34.0,
    priceFormatted: '$34.0',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=600&auto=format&fit=crop',
    pairing: 'Barolo Riserva',
  },
  {
    id: 'pasta-4',
    name: 'Ravioli di Zucca',
    category: 'pasta',
    description: 'Handmade butternut squash and amaretto ravioli, brown butter sage emulsion, toasted piedmont hazelnuts.',
    price: 26.0,
    priceFormatted: '$26.0',
    image: 'https://images.unsplash.com/photo-1587740908075-9e245070dfaa?q=80&w=600&auto=format&fit=crop',
    dietary: ['vegetarian'],
    pairing: 'Chardonnay Langhe',
  },

  // Wood-Fired Pizza
  {
    id: 'pizza-1',
    name: 'Pizza Margherita Antica',
    category: 'pizza',
    description: 'DOP San Marzano tomato sauce, fior di latte mozzarella, fresh sweet basil, extra virgin olive oil.',
    price: 22.0,
    priceFormatted: '$22.0',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=600&auto=format&fit=crop',
    dietary: ['vegetarian'],
    pairing: 'Moretti Draft or Chianti',
  },
  {
    id: 'pizza-2',
    name: 'Pizza Diavola & Salsiccia',
    category: 'pizza',
    description: 'Spicy Calabrian salami, house fennel sausage, smoked scamorza, chili-infused organic wildflower honey.',
    price: 26.5,
    priceFormatted: '$26.5',
    image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=600&auto=format&fit=crop',
    isPopular: true,
    pairing: 'Nero d’Avola',
  },
  {
    id: 'pizza-3',
    name: 'Pizza Tartufo e Funghi',
    category: 'pizza',
    description: 'Black summer truffle cream base, wild chanterelles, fontina fonduta, fresh baby arugula.',
    price: 29.0,
    priceFormatted: '$29.0',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600&auto=format&fit=crop',
    dietary: ['vegetarian'],
    pairing: 'Barbaresco DOCG',
  },

  // Mains (Secondi)
  {
    id: 'mains-1',
    name: 'Chicken Italiano',
    category: 'mains',
    description: 'Pan-seared tender chicken breast, prosciutto crudo, sage reduction, creamy polenta bramata, roasted broccolini.',
    price: 11.0,
    priceFormatted: '$11.0',
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=600&auto=format&fit=crop',
    isChefSpecial: true,
    pairing: 'Trebbiano d’Abruzzo',
  },
  {
    id: 'mains-2',
    name: 'Bistecca alla Fiorentina (For Two)',
    category: 'mains',
    description: '36oz dry-aged Prime Porterhouse grilled over oak wood, rosemary sea salt, grilled lemon, roasted garlic.',
    price: 88.0,
    priceFormatted: '$88.0',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop',
    pairing: 'Super Tuscan Ornellaia',
  },
  {
    id: 'mains-3',
    name: 'Branzino al Forno',
    category: 'mains',
    description: 'Whole Mediterranean sea bass baked with fresh lemon, thyme, Castelvetrano olives, caperberries, fennel.',
    price: 39.0,
    priceFormatted: '$39.0',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=600&auto=format&fit=crop',
    dietary: ['gluten-free'],
    pairing: 'Greco di Tufo',
  },

  // Desserts (Dolci)
  {
    id: 'dessert-1',
    name: 'Tiramisù Tradizionale',
    category: 'dessert',
    description: 'Savoiardi ladyfingers soaked in Illy espresso & dark rum, whipped mascarpone zabaione, Valrhona cocoa.',
    price: 12.0,
    priceFormatted: '$12.0',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=600&auto=format&fit=crop',
    isPopular: true,
    dietary: ['vegetarian'],
    pairing: 'Vin Santo del Chianti',
  },
  {
    id: 'dessert-2',
    name: 'Cannoli Siciliani Croccanti',
    category: 'dessert',
    description: 'Crispy fried pastry shells stuffed with sweet sheep ricotta, candied orange peel, Bronte pistachios.',
    price: 10.5,
    priceFormatted: '$10.5',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=600&auto=format&fit=crop',
    dietary: ['vegetarian'],
    pairing: 'Limoncello di Sorrento',
  },
];

export const TESTIMONIALS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Shamika Smith',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop',
    quote: 'Aliquip habitant ea suscipit ea varius cras habitasse ligula doloremque cepteur vehicula iste nibb, mattis assumenda massa',
    rating: 5,
    date: '2 days ago',
    source: 'Google',
  },
  {
    id: 'rev-2',
    author: 'Jose Hatts',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop',
    quote: 'Aliquip habitant ea suscipit ea varius cras habitasse ligula doloremque. Fuga reprehenderit quis unde soluta.',
    rating: 5,
    date: '1 week ago',
    source: 'TripAdvisor',
  },
  {
    id: 'rev-3',
    author: 'Monica Tata',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=300&auto=format&fit=crop',
    quote: 'Aliquip habitant ea suscipit ea varius cras habitasse ligula doloremque',
    rating: 5,
    date: '2 weeks ago',
    source: 'Yelp',
  },
];
