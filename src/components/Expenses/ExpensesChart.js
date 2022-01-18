import React from 'react';

import Chart from '../Chart/Chart';

const ExpensesChart = props => {

    const chartDataPoints = [
        {label: 'Jan', value: 0},
        {label: 'Feb', value: 0},
        {label: 'Mar', value: 0},
        {label: 'Apr', value: 0},
        {label: 'May', value: 0},
        {label: 'Jun', value: 0},
        {label: 'Jul', value: 0},
        {label: 'Aug', value: 0},
        {label: 'Sep', value: 0},
        {label: 'Oct', value: 0},
        {label: 'Nov', value: 0},
        {label: 'Dec', value: 0},
    ];

    // for in loops vs for of loop, the first is to loop through an object, the second is to loop through an array
    //We will use the ExpensesChart Component in Expenses.js
    for (const expense of props.expenses) {
        const expenseMonth = expense.date.getMonth(); // Months start at 0 => Jan => 0, luckily we can use it as the index for the array
        //To update the value in the above array from the initial value set:
        // They will have the summed up values for the given month's expenses
        // It will keep looping through the filtered expenses array keeps updating the value as it finds it in the mounts of each item
        chartDataPoints[expenseMonth].value += expense.amount;

    }

    //this is the updated chartDataPoints obvi
    // We'll send dataPoints to Chart.js first
    return <Chart dataPoints={chartDataPoints} />
};

export default ExpensesChart;