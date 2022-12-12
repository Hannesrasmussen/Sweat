import React from 'react'

// Components
import RecentPayments from './recentPayments'

// Stylesheet
import './style.css'


export default function homePageContainer() {
  return (
    <div id="homePageContainer">
        <div id="homePage">
        <RecentPayments></RecentPayments>
        </div>
    </div>
  )
}
