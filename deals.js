/*
 * near.by — sample deal data.
 *
 * NOTE: This is sample/demo data for development of the search UI. The offers
 * below are illustrative, not verified listings. Replace this file (or swap the
 * DEALS global for a fetch of the real deals API) before shipping to users.
 *
 * Coordinates are approximate and hand-placed around Kimball Junction, Utah.
 *
 * Shape of a deal:
 *   id        unique string
 *   business  business name
 *   category  key from CATEGORIES below
 *   title     short offer headline
 *   detail    one-line description
 *   days      weekday numbers the deal runs (0 = Sunday), or null for every day
 *   window    human-readable time window, or null
 *   address   street address, shown under the business name
 *   lat, lng  used to sort by distance
 */

const CATEGORIES = {
  movies:  { label: 'Movie Theaters', emoji: '\u{1F3AC}' },
  food:    { label: 'Food & Drink',   emoji: '\u{1F37D}\uFE0F' },
  coffee:  { label: 'Coffee',         emoji: '☕' },
  fitness: { label: 'Fitness',        emoji: '\u{1F3CB}\uFE0F' },
  retail:  { label: 'Retail',         emoji: '\u{1F6CD}\uFE0F' },
  outdoor: { label: 'Outdoors',       emoji: '\u{1F3D4}\uFE0F' }
};

// Fallback map center when the browser will not share a location:
// Kimball Junction, Park City, Utah.
const DEFAULT_LOCATION = { lat: 40.7205, lng: -111.5385, label: 'Kimball Junction' };

const DEALS = [
  /* ---------- Movie theaters ---------- */
  {
    id: 'redstone-discount-tuesday',
    business: 'Megaplex Theatres at Redstone',
    category: 'movies',
    title: 'Discount Tuesday — $6 tickets',
    detail: 'Every seat, every showtime, all day. 3D and large-format add-ons priced separately.',
    days: [2],
    window: 'All day',
    address: '6030 Market St, Park City, UT 84098',
    lat: 40.7196, lng: -111.5399
  },
  {
    id: 'redstone-matinee',
    business: 'Megaplex Theatres at Redstone',
    category: 'movies',
    title: 'Matinee pricing before 4pm',
    detail: 'Any showtime starting before 4:00pm is matinee priced, seven days a week.',
    days: null,
    window: 'Showtimes before 4:00pm',
    address: '6030 Market St, Park City, UT 84098',
    lat: 40.7196, lng: -111.5399
  },
  {
    id: 'redstone-family-combo',
    business: 'Megaplex Theatres at Redstone',
    category: 'movies',
    title: 'Family night combo',
    detail: 'Four tickets, a large popcorn and four drinks bundled at one price. Sunday and Monday.',
    days: [0, 1],
    window: 'After 4:00pm',
    address: '6030 Market St, Park City, UT 84098',
    lat: 40.7196, lng: -111.5399
  },
  {
    id: 'redstone-student-senior',
    business: 'Megaplex Theatres at Redstone',
    category: 'movies',
    title: 'Student & senior discount',
    detail: 'Reduced admission with a valid student ID or for guests 62 and over. Ask at the box office.',
    days: null,
    window: 'All showtimes',
    address: '6030 Market St, Park City, UT 84098',
    lat: 40.7196, lng: -111.5399
  },
  {
    id: 'redstone-popcorn-refill',
    business: 'Megaplex Theatres at Redstone',
    category: 'movies',
    title: 'Free large popcorn refill',
    detail: 'One refill per large popcorn, same visit. Rewards members get a second refill.',
    days: null,
    window: 'All day',
    address: '6030 Market St, Park City, UT 84098',
    lat: 40.7196, lng: -111.5399
  },
  {
    id: 'redstone-early-bird',
    business: 'Megaplex Theatres at Redstone',
    category: 'movies',
    title: 'Early bird — first show of the day',
    detail: 'The first screening on each screen is the cheapest ticket of the day. Weekends included.',
    days: null,
    window: 'First showtime',
    address: '6030 Market St, Park City, UT 84098',
    lat: 40.7196, lng: -111.5399
  },
  {
    id: 'silverscreen-double-feature',
    business: 'Silver Screen Cinemas',
    category: 'movies',
    title: 'Thursday double feature',
    detail: 'Two back-to-back features on one ticket. Second film starts around 9:30pm.',
    days: [4],
    window: 'From 7:00pm',
    address: '1120 Main St, Heber City, UT 84032',
    lat: 40.5069, lng: -111.4133
  },

  /* ---------- Food & drink ---------- */
  {
    id: 'newpark-taphouse-happy-hour',
    business: 'Newpark Tap House',
    category: 'food',
    title: 'Happy hour — half-price appetizers',
    detail: 'Appetizer menu at half price at the bar and on the patio.',
    days: [1, 2, 3, 4, 5],
    window: '3:00–6:00pm',
    address: '1385 Center Dr, Park City, UT 84098',
    lat: 40.7228, lng: -111.5368
  },
  {
    id: 'junction-taqueria-tuesday',
    business: 'Junction Taqueria',
    category: 'food',
    title: 'Taco Tuesday — $2 street tacos',
    detail: 'All street tacos $2 each, dine-in or takeout. Minimum three per order.',
    days: [2],
    window: '11:00am–close',
    address: '6580 N Landmark Dr, Park City, UT 84098',
    lat: 40.7163, lng: -111.5448
  },
  {
    id: 'basin-pizza-slice-deal',
    business: 'Basin Slice Co.',
    category: 'food',
    title: 'Slice + drink for $7',
    detail: 'Any slice with a fountain drink. Good for the lunch rush.',
    days: null,
    window: '11:00am–2:00pm',
    address: '1241 Center Dr, Park City, UT 84098',
    lat: 40.7238, lng: -111.5355
  },

  /* ---------- Coffee ---------- */
  {
    id: 'junction-coffee-early',
    business: 'Junction Coffee Co.',
    category: 'coffee',
    title: 'Dollar off before 8am',
    detail: 'Any espresso drink, a dollar off for the early crowd.',
    days: [1, 2, 3, 4, 5],
    window: 'Open–8:00am',
    address: '1745 Redstone Center Dr, Park City, UT 84098',
    lat: 40.7188, lng: -111.5412
  },
  {
    id: 'summit-roasters-punch',
    business: 'Summit Roasters',
    category: 'coffee',
    title: 'Tenth coffee free',
    detail: 'Digital punch card in the app. Any size, any drink.',
    days: null,
    window: 'All day',
    address: '6300 N Sagewood Dr, Park City, UT 84098',
    lat: 40.7272, lng: -111.5335
  },

  /* ---------- Fitness ---------- */
  {
    id: 'summit-climb-first-visit',
    business: 'Summit Climb + Fitness',
    category: 'fitness',
    title: 'First day pass free',
    detail: 'Day pass and gear rental waived on your first visit. One per person.',
    days: null,
    window: 'All day',
    address: '5445 N Silver Creek Dr, Park City, UT 84098',
    lat: 40.7334, lng: -111.5215
  },
  {
    id: 'kj-yoga-community-class',
    business: 'Kimball Junction Yoga',
    category: 'fitness',
    title: 'Sunday community class — pay what you can',
    detail: 'All levels, mats provided. Arrive ten minutes early for a spot.',
    days: [0],
    window: '9:00am',
    address: '1780 Ute Blvd, Park City, UT 84098',
    lat: 40.7183, lng: -111.5334
  },

  /* ---------- Retail & outdoors ---------- */
  {
    id: 'basin-outfitters-demo',
    business: 'Basin Outfitters',
    category: 'outdoor',
    title: 'Demo ski credit toward purchase',
    detail: 'Demo rental fee applies toward the same skis if you buy them that season.',
    days: null,
    window: 'Store hours',
    address: '6415 N Business Park Loop Rd, Park City, UT 84098',
    lat: 40.7255, lng: -111.5476
  },
  {
    id: 'silver-creek-books-used',
    business: 'Silver Creek Books',
    category: 'retail',
    title: 'Buy two used books, third free',
    detail: 'Lowest-priced book is the free one. Used stock only.',
    days: [6, 0],
    window: 'Store hours',
    address: '1776 Park Ave, Park City, UT 84060',
    lat: 40.6497, lng: -111.4978
  }
];
