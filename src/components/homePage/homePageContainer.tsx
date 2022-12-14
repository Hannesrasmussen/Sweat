import React from 'react'

// Components
import RecentWorkouts from './RecentWorkouts'
import WorkoutProgress from './WorkoutProgress'

// Stylesheet
import './style.css'


export default function homePageContainer() {
  return (
    <div id="homePageContainer">
        <div id="homePage">
          <div id="homePageDivisions">
            <RecentWorkouts/>
            <WorkoutProgress/>
          </div>
        </div>
    </div>
  )
}
