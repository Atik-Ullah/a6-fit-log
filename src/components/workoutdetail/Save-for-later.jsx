"use client";
import { WorkoutContext } from "@/context/WorkoutContext";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const SaveForLater = ({ workout }) => {
  const { saveWorkout, saveWorkouts } = useContext(WorkoutContext);
  const alreadySaved = saveWorkouts.find((item) => item.id === workout.id);
  const handleSave = () => {
    const result = saveWorkout(workout);

    if (result) {
      toast.success(`${workout.name} added to today's plan!`);
    } else {
      toast.warning("Workout already added to today's plan!");
    }
  };
  return (
    <div>
     <button
      onClick={handleSave}
      disabled={alreadySaved}
      className={`rounded-lg border px-5 py-3 text-xs transition ${
        alreadySaved
          ? "border-gray-700 bg-gray-700 text-gray-400"
          : "border-gray-700 text-gray-300 hover:border-[#ccff00] hover:text-[#ccff00]"
      }`}
    >
      {alreadySaved ? "✓ Saved for later" : "♡ Save for later"}
    </button>
    </div>
  );
};

export default SaveForLater;
