"use client";
import React, { createContext, useState } from "react";
export const WorkoutContext = createContext({});
const WorkoutProvider = ({ children }) => {
  const [todayPlan, setTodayPlan] = useState([]);
  const [saveWorkouts, setSaveWorkouts] = useState([]);
  const addToPlan = (workout) => {
    const alreadyAdded = todayPlan.find((item) => item.id === workout.id);

    if (alreadyAdded) {
      return false;
    }

    setTodayPlan([...todayPlan, workout]);
    return true;
  };
  const saveWorkout = (workout) => {
    const alreadySaved = saveWorkouts.find((item) => item.id === workout.id);

    if (alreadySaved) {
      return false;
    }

    setSaveWorkouts([...saveWorkouts, workout]);
    return true;
  };
  const removeFromPlan = (id) => {
    setTodayPlan((plan) => plan.filter((workout) => workout.id !== id));
  };
  const removeFromSaved = (id) => {
    setSaveWorkouts((saved) => saved.filter((workout) => workout.id !== id));
  };
  const markAsDone = (id, isSaved) => {
    if (isSaved) {
      setSaveWorkouts((saved) => saved.filter((workout) => workout.id !== id));
    } else {
      setTodayPlan((plan) => plan.filter((workout) => workout.id !== id));
    }
  };
  const sharedData = {
    todayPlan,
    setTodayPlan,
    addToPlan,
    saveWorkouts,
    setSaveWorkouts,
    saveWorkout,
    removeFromPlan,
    removeFromSaved,
    markAsDone,
  };

  return (
    <WorkoutContext.Provider value={sharedData}>
      {children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutProvider;
