import React from 'react'
import Card from "./Card";
import { useState } from 'react';

const Cards = (props) => {
  let courses = props.courses;
  let category = props.category;
  const [likedCourses, setLikedCourses] = useState([]);

  function getCourses() {
    if(category === "All") {
      let allCourses = [];
      Object.values(courses).forEach(array => {
          array.forEach(courseData => {
              allCourses.push(courseData);
          })
      })
      return allCourses;
  }
  else {
      return courses[category];      
  }
  }

  return (
    <div className="w-11/12 max-w-[1200px] mx-auto flex justify-center items-center min-h-[50vh]">
      <div className="flex flex-wrap justify-center gap-4 mb-4">
        {
          getCourses().map( (course) => (
            <Card key={course.id} 
            course = {course}
            likedCourses={likedCourses}
            setLikedCourses={setLikedCourses}/>
        ))
        }
      </div>
    </div>
  )
}

export default Cards
