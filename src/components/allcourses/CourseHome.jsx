import React from 'react'
import Back from "../common/back/Back.jsx"
import CoursesCard from './CoursesCard.jsx'
import "./courses.css"
import OnlineCurses from './OnlineCurses.jsx'

const CourseHome = () => {
  return (
    <>
        <Back title="Explore Courses" />
        <CoursesCard />
        <OnlineCurses />
    </>
  )
}

export default CourseHome