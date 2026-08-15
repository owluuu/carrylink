import Link from "next/link";
import type { Listing } from "@/types/listing";
import ListingImage from "./ListingImage";
import StatusBadge from "./StatusBadge";
import Avatar from "./Avatar";

export default function ListingCard({ listing }: { listing: Listing }) {
  return (
    <Link
      href={`/listings/${listing.id}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gray-200/60"
    >
      <ListingImage
        emoji={listing.image}
        label={listing.productName}
        className="h-40 w-full"
      />
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="line-clamp-1 font-semibold text-gray-900">
            {listing.productName}
          </h3>
          <StatusBadge status={listing.status} />
        </div>

        <p className="line-clamp-2 text-sm text-gray-500">
          {listing.description}
        </p>

        <div className="mt-auto flex items-center justify-between pt-2">
          <span className="text-lg font-semibold text-gray-900">
            {listing.currency} {listing.price.toLocaleString()}
          </span>
          <span className="text-xs text-gray-500">
            {listing.departureDate}
          </span>
        </div>

        <p className="border-t border-gray-100 pt-3 text-xs text-gray-500">
          {listing.departureLocation} → {listing.arrivalLocation}
        </p>

        <div className="flex items-center gap-2 text-xs text-gray-600">
          <Avatar name={listing.traveler.name} size="sm" />
          {listing.traveler.name}
        </div>
      </div>
    </Link>
  );
}
