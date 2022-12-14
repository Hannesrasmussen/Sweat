import React from 'react'
import { useState, useEffect } from 'react';

// Models
import { IWorkoutItem } from '../../models/models'

// A list of 'recently' added payments. 20 or so will be displayed on the homepage.
export default function RecentWorkouts() {

    // trigger state change if any changes are made to the list.
    const [ WorkoutItems, setWorkoutItems ] = useState<Array<IWorkoutItem>>([])

    // Called on first render
    useEffect(() => {
        getWorkouts();
    }, []);

    // Gets the recent payments stored in localStorage
    function getWorkouts() {
        let recentWorkouts = localStorage.getItem('recentPayments')
        console.log("Gimme the last 10 workouts or less!")

    }

    // const listItems = numbers.map((number) =>
    //  <li>{number}</li>
    // );
  return (
     <div id='recentWorkouts' className='homePageDivision'>
        <h1>Recent Payments</h1>
        <h2>An overview of the last 10 days</h2>
        <p>This is some sample text.</p>
    </div>

  )
}
