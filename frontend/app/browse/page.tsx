import type { Metadata } from "next";
import Header from "@/components/Header";
import ListingCard from "@/components/ListingCard";
import { listings } from "@/data/listings";

export const metadata: Metadata = {
  title: "Browse Listings — CarryLink",
  description: "Browse products travelers are bringing from Japan to Hong Kong.",
};

export default function BrowsePage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="mb-8">
            <p className="text-sm font-medium text-gray-500">
              Japan → Hong Kong
            </p>
            <h1 className="mt-1 text-3xl font-bold tracking-tight text-gray-900">
              Browse Listings
            </h1>
            <p className="mt-2 text-gray-600">
              {listings.length} travelers currently offering baggage space
              from Japan to Hong Kong.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {listings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
