interface ListingImageProps {
  emoji: string;
  label: string;
  className?: string;
}

export default function ListingImage({
  emoji,
  label,
  className = "",
}: ListingImageProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`flex items-center justify-center bg-gradient-to-br from-rose-50 via-amber-50 to-sky-50 ${className}`}
    >
      <span className="text-5xl" aria-hidden>
        {emoji}
      </span>
    </div>
  );
}
