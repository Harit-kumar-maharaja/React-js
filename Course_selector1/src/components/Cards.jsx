import React from 'react';
import Card from './Card';

function Cards({ courses }) {
  // Ensure courses is initialized properly
  if (!courses) return null;

  let allcourses = [];

  const getcourses = () => {
    Object.values(courses).forEach((courseCategory) => {
      courseCategory.forEach((course) => {
        allcourses.push(course);
      });
    });
    return allcourses;
  };

  return (
    <div>
      {getcourses().map((course) => (
        <Card key={course.id} course={course} />
      ))}
    </div>
  );
}

export default Cards;
