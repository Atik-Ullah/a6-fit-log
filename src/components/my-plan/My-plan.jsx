"use client";

import React, { useContext, useState } from "react";
import Link from "next/link";
import { WorkoutContext } from "@/context/WorkoutContext";
import MyPlanCard from "../shared/MyPlanCard";

const MyPlan = () => {
  const { todayPlan, saveWorkouts } = useContext(WorkoutContext);

  const [activeTab, setActiveTab] = useState("today");

  const workouts = activeTab === "today" ? todayPlan : saveWorkouts;

  const totalMinutes = todayPlan.reduce(
    (total, workout) => total + workout.duration,
    0,
  );

  const totalCalories = todayPlan.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0,
  );
  const [sortby, setSortby] = useState("duration");
  const sortWorkout = (workout) => {
    const sortedWorkout = [...workout];
    if (sortby === "duration") {
      sortedWorkout.sort((a, b) => b.duration - a.duration);
    } else if (sortby === "calories") {
      sortedWorkout.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
    } else if (sortby === "rating") {
      sortedWorkout.sort((a, b) => b.rating - a.rating);
    }
    return sortedWorkout;
  };
  const sortedTodayPlan = sortWorkout(todayPlan);
  const sortedSaveWorkout = sortWorkout(saveWorkouts);

  return (
    <main className="min-h-screen bg-[#0d0f12] px-4 py-10 text-white">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-6">
          <h1 className="text-3xl font-black uppercase">MY PLAN</h1>

          <p className="mt-2 text-sm text-gray-500">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>
        <div className="mb-6 grid grid-cols-1 rounded-xl border border-gray-800 bg-[#12151b] md:grid-cols-3">
          <div className="border-b border-gray-800 p-6 md:border-b-0 md:border-r">
            <p className="text-xs text-gray-500">Exercises</p>

            <p className="mt-1 text-3xl font-bold text-[#ccff00]">
              {todayPlan.length}
            </p>
          </div>

          {/* Minutes */}
          <div className="border-b border-gray-800 p-6 md:border-b-0 md:border-r">
            <p className="text-xs text-gray-500">Minutes</p>

            <p className="mt-1 text-3xl font-bold">{totalMinutes}</p>
          </div>

          {/* Calories */}
          <div className="p-6">
            <p className="text-xs text-gray-500">Calories</p>

            <p className="mt-1 text-3xl font-bold">{totalCalories}</p>
          </div>
        </div>

        {/* Tabs + Sort */}
        <div className="mb-5 flex items-center justify-between gap-4">
          {/* Tabs */}
          <div className="flex rounded-lg border border-gray-800 bg-[#15181e] p-1">
            <button
              onClick={() => setActiveTab("today")}
              className={`rounded-md px-4 py-2 text-xs transition ${
                activeTab === "today"
                  ? "bg-[#252932] text-white"
                  : "text-gray-500 hover:text-white"
              }`}
            >
              Today's Plan
            </button>

            <button
              onClick={() => setActiveTab("saved")}
              className={`rounded-md px-4 py-2 text-xs transition ${
                activeTab === "saved"
                  ? "bg-[#252932] text-white"
                  : "text-gray-500 hover:text-white"
              }`}
            >
              Saved
            </button>
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <span className="hidden text-xs text-gray-500 sm:block">
              Sort By
            </span>

            <select
              value={sortby}
              onChange={(e) => setSortby(e.target.value)}
              className="rounded-lg border border-gray-800 bg-[#15181e] px-3 py-2 text-xs text-gray-300 outline-none"
            >
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>

        {/* Workout List */}
        {workouts.length > 0 ? (
          <div className="space-y-3">
            {(activeTab === "today" ? sortedTodayPlan : sortedSaveWorkout).map(
              (workout) => (
                <MyPlanCard key={workout.id} workout={workout} />
              ),
            )}
          </div>
        ) : (
          /* Empty State */
          <div className="flex min-h-[260px] flex-col items-center justify-center rounded-xl border border-dashed border-gray-800 bg-[#101217] text-center">
            <h2 className="text-lg font-bold uppercase">NOTHING HERE YET</h2>

            <p className="mt-2 text-xs text-gray-500">
              Browse the library and add a lift to get today moving.
            </p>

            <Link
              href="/#library"
              className="mt-5 rounded-full bg-[#ccff00] px-5 py-2.5 text-xs font-bold text-black transition hover:bg-[#b8e600]"
            >
              Go to workouts
            </Link>
          </div>
        )}
      </div>
    </main>
  );
};

export default MyPlan;
