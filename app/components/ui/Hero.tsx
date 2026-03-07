import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-screen">

      <Image
        src="/hero-bg.jpg"
        alt="hero"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">

        <h1 className="text-6xl font-black text-white mb-6">
          Your Future,
          <br />
          <span className="text-blue-400">Globally Designed.</span>
        </h1>

        <p className="text-xl text-gray-200 max-w-xl mb-10">
          Ezone makes your study abroad dreams a reality with expert consulting.
        </p>

        <button className="bg-blue-600 px-10 py-4 rounded-full text-lg font-semibold">
          Explore Destinations
        </button>

      </div>

    </section>
  );
}