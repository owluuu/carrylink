import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Button from "@/components/Button";
import ListingImage from "@/components/ListingImage";
import StatusBadge from "@/components/StatusBadge";
import Avatar from "@/components/Avatar";
import { getListingById } from "@/data/listings";

export async function generateMetadata(
  props: PageProps<"/listings/[id]">
): Promise<Metadata> {
  const { id } = await props.params;
  const listing = getListingById(id);

  return {
    title: listing
      ? `${listing.productName} — CarryLink`
      : "Listing Not Found — CarryLink",
  };
}

export default async function ListingDetailPage(
  props: PageProps<"/listings/[id]">
) {
  const { id } = await props.params;
  const listing = getListingById(id);

  if (!listing) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="flex-1 bg-gray-50">
        <div className="mx-auto max-w-5xl px-6 py-10">
          <Button href="/browse" variant="secondary" className="mb-6">
            ← Back to Browse
          </Button>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <ListingImage
              emoji={listing.image}
              label={listing.productName}
              className="h-80 w-full rounded-2xl"
            />

            <div>
              <div className="flex items-center justify-between gap-2">
                <p className="text-sm font-medium text-gray-500">
                  {listing.category}
                </p>
                <StatusBadge status={listing.status} />
              </div>

              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
                {listing.productName}
              </h1>

              <p className="mt-4 text-gray-600">{listing.description}</p>

              <div className="mt-6 text-3xl font-semibold text-gray-900">
                {listing.currency} {listing.price.toLocaleString()}
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4 rounded-2xl border border-gray-200 bg-white p-5">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                    Departs
                  </p>
                  <p className="mt-1 font-medium text-gray-900">
                    {listing.departureLocation}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                    Arrives
                  </p>
                  <p className="mt-1 font-medium text-gray-900">
                    {listing.arrivalLocation}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                    Departure Date
                  </p>
                  <p className="mt-1 font-medium text-gray-900">
                    {listing.departureDate}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                    Available Space
                  </p>
                  <p className="mt-1 font-medium text-gray-900">
                    {listing.availableCapacity}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-3 rounded-2xl border border-gray-200 bg-white p-4">
                <Avatar name={listing.traveler.name} size="md" />
                <div>
                  <p className="font-medium text-gray-900">
                    {listing.traveler.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    ⭐ {listing.traveler.rating.toFixed(1)}
                    {listing.traveler.verified && " · Verified Traveler"}
                  </p>
                </div>
              </div>

              <Button
                variant="primary"
                className="mt-8 w-full"
                disabled={listing.status === "full"}
              >
                {listing.status === "full" ? "Fully Booked" : "Request Item"}
              </Button>
              <p className="mt-2 text-center text-xs text-gray-400">
                Checkout and request flow coming in a later phase.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
