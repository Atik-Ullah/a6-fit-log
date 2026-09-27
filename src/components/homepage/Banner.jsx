import Image from "next/image";
import banner from "@/app/assets/banner.png";

const Banner = () => {
  return (
    <section className="container mx-auto px-4 py-6 sm:px-6 lg:px-8">
      <div className="grid min-h-[500px] grid-cols-1 overflow-hidden rounded-2xl bg-[#15171c] lg:grid-cols-2">

        {/* Left Content */}
        <div className="flex flex-col justify-center p-5 sm:p-10 lg:p-14">
          <p className="mb-4 text-sm font-bold tracking-[0.2em] text-[#ccff00]">
            WORKOUT LIBRARY
          </p>

          <h1 className="max-w-xl text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            TRAIN WITH INTENT.
            <br />
            LOG EVERY SET.
          </h1>

          <p className="mt-5 max-w-lg text-sm leading-6 text-gray-400 sm:text-base">
            A focused workout library built to help you train smarter,
            track your progress, and stay consistent.
          </p>

          <div className="mt-7">
            <a
              href="#library"
              className="inline-flex items-center gap-2 rounded-lg bg-[#ccff00] px-5 py-3 text-sm font-bold text-black transition hover:bg-[#b8e600]"
            >
              BROWSE WORKOUTS
              <span>→</span>
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative min-h-[280px] sm:min-h-[350px] lg:min-h-full">
          <Image
            src={banner}
            alt="Workout"
            fill
            priority
            className="object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default Banner;