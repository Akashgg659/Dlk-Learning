import React, { useState } from 'react';
import SampleHome from '../SampleHome';

const RatingComponent = () => {
  const [ratings, setRatings] = useState([]); // Store all user ratings
  const [currentRating, setCurrentRating] = useState(null); // Store the rating selected by the user
  const [averageRating, setAverageRating] = useState(0); // Store the calculated average rating

  // Function to handle the rating change
  const handleRatingChange = (e) => {
    setCurrentRating(Number(e.target.value)); // Update the selected rating
  };

  // Function to submit the rating
  const handleSubmit = () => {
    if (currentRating === null) {
      alert("Please select a rating before submitting!");
      console.log(currentRating)
      return;
    }

    // Add the new rating to the ratings array
    const updatedRatings = [...ratings, currentRating];
    setRatings(updatedRatings);

    // Recalculate the average rating
    const sum = updatedRatings.reduce((acc, rating) => acc + rating, 0);
    const average = (sum / updatedRatings.length).toFixed(1); // Round to 1 decimal place
    setAverageRating(average);
    console.log(average)
    console.log(average.length)

    // Reset current rating after submission
    setCurrentRating(null);
  };

  // Calculate the average rating based on the ratings array length
  const calculateAverageRating = () => {
    if (ratings.length === 0) return 0;
    const sum = ratings.reduce((acc, rating) => acc + rating, 0);
    console.log(sum)
    return (sum / ratings.length).toFixed(1); // Calculate the average and round it to 1 decimal
  };

  const count = () =>{
   
  }

  return (
    <div>


      <div className="rating">
        {/* Render radio buttons for rating */}
        {[5, 4, 3, 2, 1].map((value) => (
          <React.Fragment key={value}>
            <input
              type="radio"
              name="rating"
              value={value}
              id={`rating-${value}`}
              checked={currentRating === value}
              onChange={handleRatingChange}
            />
            <label htmlFor={`rating-${value}`}>☆</label>
          </React.Fragment>
        ))}
      </div>

      {/* Submit button */}
      <button onClick={handleSubmit}>Submit</button>

      {/* Display the average rating and the total number of ratings */}
      <h3>Average Rating: {calculateAverageRating()}</h3>
      <h4>Total Ratings: {ratings.length}</h4>

    </div>
  );
};

export default RatingComponent;
