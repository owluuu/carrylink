import type { ListingStatus } from "@/types/listing";

const STATUS_STYLES: Record<ListingStatus, string> = {
  available: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
  limited: "bg-amber-50 text-amber-700 ring-amber-600/20",
  full: "bg-gray-100 text-gray-500 ring-gray-500/10",
};

const STATUS_LABELS: Record<ListingStatus, string> = {
  available: "Available",
  limited: "Limited Space",
  full: "Full",
};

export default function StatusBadge({ status }: { status: ListingStatus }) {
  return (
    <span
      className={`inline-flex shrink-0 items-center rounded-full px-2.5 py-1 text-xs font-medium ring-1 ring-inset ${STATUS_STYLES[status]}`}
    >
      {STATUS_LABELS[status]}
    </span>
  );
}
