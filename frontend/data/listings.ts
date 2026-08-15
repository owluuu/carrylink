import type { Listing } from "@/types/listing";

export const listings: Listing[] = [
  {
    id: "1",
    productName: "Shiseido Skincare Gift Set",
    category: "Beauty & Cosmetics",
    description:
      "A curated set of Shiseido skincare essentials, sealed and purchased directly from a department store in Tokyo.",
    image: "🧴",
    price: 980,
    currency: "HKD",
    traveler: { id: "t1", name: "Yuki Tanaka", rating: 4.9, verified: true },
    departureLocation: "Tokyo (Narita)",
    arrivalLocation: "Hong Kong (Chek Lap Kok)",
    departureDate: "2026-08-22",
    availableCapacity: "3 kg available",
    status: "available",
  },
  {
    id: "2",
    productName: "Royce' Chocolate Assortment",
    category: "Snacks & Food",
    description:
      "Popular Hokkaido chocolate brand, great for gifting. Kept in a temperature-controlled bag during transit.",
    image: "🍫",
    price: 220,
    currency: "HKD",
    traveler: { id: "t2", name: "Kenji Sato", rating: 4.7, verified: true },
    departureLocation: "Sapporo (New Chitose)",
    arrivalLocation: "Hong Kong (Chek Lap Kok)",
    departureDate: "2026-08-25",
    availableCapacity: "2 kg available",
    status: "limited",
  },
  {
    id: "3",
    productName: "Nintendo Switch Accessories Bundle",
    category: "Electronics",
    description:
      "Genuine Nintendo accessories bought from Yodobashi Camera, including a carrying case and screen protectors.",
    image: "🎮",
    price: 560,
    currency: "HKD",
    traveler: { id: "t3", name: "Aiko Yamamoto", rating: 5.0, verified: true },
    departureLocation: "Osaka (Kansai)",
    arrivalLocation: "Hong Kong (Chek Lap Kok)",
    departureDate: "2026-08-19",
    availableCapacity: "1.5 kg available",
    status: "available",
  },
  {
    id: "4",
    productName: "Uniqlo Autumn Essentials",
    category: "Fashion & Apparel",
    description:
      "A small bundle of Uniqlo basics in colours only sold in Japan this season.",
    image: "🧥",
    price: 340,
    currency: "HKD",
    traveler: { id: "t4", name: "Haruto Suzuki", rating: 4.6, verified: false },
    departureLocation: "Nagoya (Chubu Centrair)",
    arrivalLocation: "Hong Kong (Chek Lap Kok)",
    departureDate: "2026-08-28",
    availableCapacity: "4 kg available",
    status: "available",
  },
  {
    id: "5",
    productName: "Pokémon Center Exclusive Plush",
    category: "Toys & Collectibles",
    description:
      "Limited-edition plush only sold at Pokémon Center Japan, bought on release day.",
    image: "🧸",
    price: 260,
    currency: "HKD",
    traveler: { id: "t5", name: "Mei Kobayashi", rating: 4.8, verified: true },
    departureLocation: "Fukuoka",
    arrivalLocation: "Hong Kong (Chek Lap Kok)",
    departureDate: "2026-08-30",
    availableCapacity: "0.5 kg available",
    status: "limited",
  },
  {
    id: "6",
    productName: "Dassai Junmai Daiginjo Sake",
    category: "Sake & Beverages",
    description:
      "A bottle of premium Dassai 23 sake, carefully packed for travel in protective foam.",
    image: "🍶",
    price: 480,
    currency: "HKD",
    traveler: { id: "t6", name: "Ren Watanabe", rating: 4.9, verified: true },
    departureLocation: "Kyoto → Osaka (Kansai)",
    arrivalLocation: "Hong Kong (Chek Lap Kok)",
    departureDate: "2026-08-21",
    availableCapacity: "0 kg available",
    status: "full",
  },
];

export function getListingById(id: string): Listing | undefined {
  return listings.find((listing) => listing.id === id);
}
