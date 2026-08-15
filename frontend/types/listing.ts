export type ListingStatus = "available" | "limited" | "full";

export interface Traveler {
  id: string;
  name: string;
  rating: number;
  verified: boolean;
}

export interface Listing {
  id: string;
  productName: string;
  category: string;
  description: string;
  image: string;
  price: number;
  currency: string;
  traveler: Traveler;
  departureLocation: string;
  arrivalLocation: string;
  departureDate: string;
  availableCapacity: string;
  status: ListingStatus;
}

export type ProductRequestStatus = "pending" | "accepted" | "rejected";

export interface ProductRequest {
  id: string;
  listingId: string;
  buyerName: string;
  message: string;
  status: ProductRequestStatus;
  createdAt: string;
}
