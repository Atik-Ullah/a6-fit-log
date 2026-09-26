import React from "react";
import ExerciseCard from "../shared/ExerciseCard";

const getExercise = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  return res.json();
};

const Exercise = async () => {
  const exerciseData = await getExercise();

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold">THE LIBRARY</h2>

      <p className="text-[#9CA3AF]">
        Twelve lifts covering every major muscle group.
      </p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {exerciseData.map((exercise) => {
          return (
            <ExerciseCard
              key={exercise.id}
              exercise={exercise}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Exercise;