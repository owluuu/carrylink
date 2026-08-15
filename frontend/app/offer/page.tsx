import type { Metadata } from "next";
import Header from "@/components/Header";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Offer Baggage Space — CarryLink",
  description: "List your available baggage space for your next trip from Japan to Hong Kong.",
};

export default function OfferPage() {
  return (
    <>
      <Header />
      <main className="flex flex-1 items-center justify-center bg-gray-50">
        <div className="mx-auto max-w-lg px-6 py-20 text-center">
          <p className="text-sm font-medium text-gray-500">
            Japan → Hong Kong
          </p>
          <h1 className="mt-1 text-3xl font-bold tracking-tight text-gray-900">
            Offer Baggage Space
          </h1>
          <p className="mt-4 text-gray-600">
            This is where travelers will list their available baggage space
            for an upcoming trip. This flow is coming in a later phase of the
            CarryLink prototype.
          </p>
          <div className="mt-8">
            <Button href="/browse" variant="secondary">
              Browse Listings Instead
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}
