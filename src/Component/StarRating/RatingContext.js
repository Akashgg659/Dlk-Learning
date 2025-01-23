import React, { createContext, useState } from "react";

// Create the context
export const RatingContext = createContext();

// Context provider
export const RatingProvider = ({ children }) => {
  const [ratings, setRatings] = useState([]);
  const [averageRating, setAverageRating] = useState(0);

  const addRating = (newRating) => {
    const updatedRatings = [...ratings, newRating];
    setRatings(updatedRatings);

    // Calculate average rating
    const sum = updatedRatings.reduce((acc, rating) => acc + rating, 0);
    const average = (sum / updatedRatings.length).toFixed(1);
    setAverageRating(average);
  };

  return (
    <RatingContext.Provider value={{ ratings, averageRating, addRating }}>
      {children}
    </RatingContext.Provider>
  );
};
