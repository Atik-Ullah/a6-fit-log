"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { WorkoutContext } from "@/context/WorkoutContext";

const MyPlanCard = ({ workout, isSaved }) => {
  const { removeFromPlan, removeFromSaved } = useContext(WorkoutContext);

  return (
    <div className="flex items-center gap-4 rounded-xl border border-gray-800 bg-[#14171d] p-3">
      <div className="relative h-16 w-28 shrink-0 overflow-hidden rounded-lg">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="truncate text-sm font-bold uppercase text-white">
          {workout.name}
        </h3>

        <p className="mt-1 text-xs text-gray-500">{workout.equipment}</p>
        <div className="mt-2 flex items-center gap-3 text-[11px] text-gray-400">
          <span>◷ {workout.duration} min</span>

          <span>🔥 {workout.caloriesBurned} kcal</span>

          <span>☆ {workout.rating}</span>
        </div>
      </div>
      <div className="flex shrink-0 items-center gap-2">
        <Link
          href={`/workout/${workout.id}`}
          className="hidden rounded-full border border-gray-700 px-4 py-2 text-[11px] text-gray-300 transition hover:border-[#ccff00] hover:text-[#ccff00] sm:block"
        >
          View Details
        </Link>
        <button className="hidden rounded-full bg-[#ccff00] px-4 py-2 text-[11px] font-bold text-black transition hover:bg-[#b8e600] sm:block">
          ✓ Mark as Done
        </button>
        <button
          onClick={() =>
            isSaved ? removeFromSaved(workout.id) : removeFromPlan(workout.id)
          }
          className="flex h-8 w-8 items-center justify-center rounded-full text-gray-500 transition hover:text-red-500"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default MyPlanCard;
