import * as React from 'react';
import { Bar } from 'react-chartjs-2';

type AverageCaloriesCountPerUserProps = {
    data: Array<any>;
}

export const AverageCaloriesCountPerUser: React.FC<AverageCaloriesCountPerUserProps> = (props) => {
    return (
    <Bar
      style={{ maxHeight: 500, paddingTop: 24, paddingBottom: 24 }}
      options={{
        responsive: true,
        plugins: {
          legend: {
            position: 'left',
          }
        },
      }}
      data={{
        datasets: [{
          label: 'Calories count',
          backgroundColor: 'green',
          data: props.data
        },
        ]
      }}
    />
        
    )
}