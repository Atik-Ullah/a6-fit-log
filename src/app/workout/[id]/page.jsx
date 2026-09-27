import AddTodayPlan from "@/components/workoutdetail/Add-today-plan";
import SaveForLater from "@/components/workoutdetail/Save-for-later";
import Image from "next/image";

const getWorkout = async (id) => {
  const res = await fetch(
    `https://api.api-store.workers.dev/api/fitlog/${id}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch workout data");
  }

  return res.json();
};

const ExerciseDetailPage = async ({ params }) => {
  const { id } = await params;

  const workout = await getWorkout(id);

  return (
    <main className="min-h-screen bg-[#0d1015] px-4 py-6 text-white md:px-6 md:py-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2">

          {/* LEFT - IMAGE */}
          <div>
            <Image
              src={workout.image}
              alt={workout.name}
              width={800}
              height={800}
              className="h-[400px] w-full rounded-xl object-cover md:h-[650px]"
            />
          </div>

          {/* RIGHT - DETAILS */}
          <div className="flex flex-col">

            {/* Title */}
            <h1 className="text-2xl font-black uppercase tracking-tight md:text-3xl">
              {workout.name}
            </h1>

            {/* Description */}
            <p className="mt-2 text-sm leading-6 text-gray-400">
              {workout.description}
            </p>

            {/* Muscle Groups */}
            <div className="mt-4 flex flex-wrap gap-2">
              {workout.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="rounded-full bg-[#ccff00] px-3 py-1 text-[10px] font-bold text-black"
                >
                  {muscle}
                </span>
              ))}
            </div>

            {/* Specs */}
            <div className="mt-5 overflow-hidden rounded-xl bg-[#171b23]">

              {/* Equipment */}
              <div className="flex justify-between border-b border-gray-700 px-4 py-3">
                <span className="text-[10px] uppercase text-gray-400">
                  Equipment
                </span>

                <span className="text-xs">
                  {workout.equipment}
                </span>
              </div>

              {/* Difficulty */}
              <div className="flex justify-between border-b border-gray-700 px-4 py-3">
                <span className="text-[10px] uppercase text-gray-400">
                  Difficulty
                </span>

                <span className="text-xs">
                  {workout.difficulty}
                </span>
              </div>

              {/* Sets */}
              <div className="flex justify-between border-b border-gray-700 px-4 py-3">
                <span className="text-[10px] uppercase text-gray-400">
                  Sets
                </span>

                <span className="text-xs">
                  {workout.sets}
                </span>
              </div>

              {/* Reps */}
              <div className="flex justify-between border-b border-gray-700 px-4 py-3">
                <span className="text-[10px] uppercase text-gray-400">
                  Reps
                </span>

                <span className="text-xs">
                  {workout.reps}
                </span>
              </div>

              {/* Duration */}
              <div className="flex justify-between border-b border-gray-700 px-4 py-3">
                <span className="text-[10px] uppercase text-gray-400">
                  Duration
                </span>

                <span className="text-xs">
                  {workout.duration} min
                </span>
              </div>

              {/* Calories */}
              <div className="flex justify-between border-b border-gray-700 px-4 py-3">
                <span className="text-[10px] uppercase text-gray-400">
                  Calories
                </span>

                <span className="text-xs">
                  {workout.caloriesBurned} kcal
                </span>
              </div>

              {/* Rating */}
              <div className="flex justify-between px-4 py-3">
                <span className="text-[10px] uppercase text-gray-400">
                  Rating
                </span>

                <span className="text-xs">
                  {workout.rating}
                </span>
              </div>

            </div>

            {/* Instructions */}
            <div className="mt-5">

              <h2 className="text-sm font-black uppercase">
                Instructions
              </h2>

              <ol className="mt-3 space-y-3 text-xs leading-5 text-gray-400">
                {workout.instructions.map((instruction, index) => (
                  <li
                    key={index}
                    className="flex gap-3"
                  >
                    <span className="text-gray-500">
                      {index + 1}.
                    </span>

                    <span>
                      {instruction}
                    </span>
                  </li>
                ))}
              </ol>

            </div>

            {/* Buttons */}
            <div className="mt-6 flex flex-wrap gap-3">

              <AddTodayPlan workout={workout}></AddTodayPlan>
              <SaveForLater workout={workout}></SaveForLater>

            </div>

          </div>
        </div>
      </div>
    </main>
  );
};

export default ExerciseDetailPage;