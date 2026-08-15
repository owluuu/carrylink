type AvatarSize = "sm" | "md";

const SIZE_STYLES: Record<AvatarSize, string> = {
  sm: "h-6 w-6 text-[10px]",
  md: "h-10 w-10 text-sm",
};

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function Avatar({
  name,
  size = "sm",
}: {
  name: string;
  size?: AvatarSize;
}) {
  return (
    <span
      className={`flex shrink-0 items-center justify-center rounded-full bg-gray-900 font-medium text-white ${SIZE_STYLES[size]}`}
    >
      {getInitials(name)}
    </span>
  );
}
