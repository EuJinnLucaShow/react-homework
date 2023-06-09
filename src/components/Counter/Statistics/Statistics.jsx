import React from "react";

const Statistics = ({ good, neutral, bad, total, positivePercentage  }) => (
    <><h2>Statistics</h2>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total Feedback: {total}</p>
        <p>Positive Feedback: {positivePercentage}%</p>
    </>
)

export default Statistics;