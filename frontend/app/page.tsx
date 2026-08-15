import { Fragment } from "react";
import Header from "@/components/Header";
import Button from "@/components/Button";

const STEPS = [
  {
    emoji: "🇯🇵",
    title: "Buy in Japan",
    description:
      "Browse products travelers are already bringing back from Japan.",
  },
  {
    emoji: "✈️",
    title: "Carried by a traveler",
    description:
      "A real traveler carries your item using their spare baggage space.",
  },
  {
    emoji: "🇭🇰",
    title: "Delivered in Hong Kong",
    description: "Arrange a handoff once your traveler lands in Hong Kong.",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-gray-50">
        <section className="mx-auto max-w-5xl px-6 pt-16 pb-16 text-center sm:pt-20 sm:pb-20">
          <p className="text-sm font-medium text-gray-500">
            Japan 🇯🇵 → Hong Kong 🇭🇰
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Anything from Japan, carried home by someone already flying
            there.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            CarryLink connects Hong Kong buyers with Japan-bound travelers
            willing to bring back the products they want — turning spare
            luggage space into a simple way to get authentic Japanese goods.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button href="/browse" variant="primary">
              Find a Product
            </Button>
            <Button href="/offer" variant="secondary">
              Offer Baggage Space
            </Button>
          </div>
        </section>

        <section className="border-t border-gray-200">
          <div className="mx-auto max-w-5xl px-6 py-16">
            <p className="text-center text-sm font-medium text-gray-500">
              How it works
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-stretch">
              {STEPS.map((step, index) => (
                <Fragment key={step.title}>
                  <div className="flex-1 rounded-2xl border border-gray-200 bg-white p-6 text-center sm:text-left">
                    <span className="text-3xl" aria-hidden>
                      {step.emoji}
                    </span>
                    <h3 className="mt-4 font-semibold text-gray-900">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">
                      {step.description}
                    </p>
                  </div>
                  {index < STEPS.length - 1 && (
                    <span
                      aria-hidden
                      className="hidden items-center justify-center text-xl text-gray-300 sm:flex"
                    >
                      →
                    </span>
                  )}
                </Fragment>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
