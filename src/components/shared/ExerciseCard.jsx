import Image from "next/image";

const ExerciseCard = ({ exercise }) => {

  return (
    <div className="overflow-hidden rounded-xl border border-gray-800 bg-[#15171c]">
      {/* Image */}
      <div className="relative h-48 w-full">
        <Image
          src={exercise.image}
          alt={exercise.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Categories */}
        <div className="mb-3 flex flex-wrap gap-2">
          {exercise.muscleGroups.map((category, index) => (
            <span
              key={index}
              className="rounded-full bg-[#ccff00] px-3 py-1 text-[10px] font-bold uppercase text-black"
            >
              {category}
            </span>
          ))}
        </div>

        {/* Workout name */}
        <h3 className="text-base font-black uppercase text-white">
          {exercise.name}
        </h3>

        {/* Equipment */}
        <p className="mt-1 text-xs text-gray-400">
          {exercise.equipment}
        </p>

        {/* Divider */}
        <div className="my-4 border-t border-gray-800"></div>

        {/* Stats */}
        <div className="flex items-center gap-4 text-xs text-gray-400">
          <span>◷ {exercise.duration} min</span>

          <span>● {exercise.calories} kcal</span>

          <span>☆ {exercise.rating}</span>
        </div>
      </div>
    </div>
  );
};

export default ExerciseCard;