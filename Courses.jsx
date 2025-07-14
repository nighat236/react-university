import React from 'react'

function Courses({ courses }) {
  return (
    <div>  
      {
        courses.map((course, index) => (
          <div key={index}>
            <h2>Course: {course.courseName}</h2>
            <p>Duration: {course.duration}</p>
            <p>Semester Fee: {course.semfee}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Courses
