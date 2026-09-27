"use client";
import { WorkoutContext } from "@/context/WorkoutContext";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const AddTodayPlan = ({ workout }) => {
  const { addToPlan, todayPlan } = useContext(WorkoutContext);
  const alreadyAdded = todayPlan.find(
      (item) => item.id === workout.id
    );
  const handleAdd = () => {
    const result = addToPlan(workout);

    if (result) {
      toast.success(`${workout.name} added to today's plan!`);
    } else {
      toast.warning("Workout already added to today's plan!");
    }
  };
  return (
    <div>
      <button
        onClick={handleAdd}
        disabled={alreadyAdded}
        className={`rounded-lg px-5 py-3 text-xs font-bold transition ${
          alreadyAdded
            ? "bg-gray-600 text-gray-300"
            : "bg-[#ccff00] text-black hover:bg-[#b8e600]"
        }`}
      >
        {alreadyAdded
          ? "✓ Added to Plan"
          : "➕ Add to today's plan"}
      </button>
    </div>
  );
};

export default AddTodayPlan;
