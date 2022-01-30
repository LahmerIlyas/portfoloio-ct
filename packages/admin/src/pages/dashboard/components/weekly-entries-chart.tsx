import 'chartjs-adapter-moment';
import * as React from 'react';
import { Bar } from 'react-chartjs-2';

export const WeeklyEntriesChart: React.FC = () => {
const data = {
  datasets: [{
      label: 'This Week',
      backgroundColor: 'red',
      data: [
        { x: '12-01-2021', y: 10 },
        { x: '13-01-2021', y: 12},
        { x: '14-01-2021', y: 9 },
        { x: '15-01-2021', y: 17 },
        { x: '16-01-2021', y: 14 },
        { x: '17-01-2021', y: 15 },
        { x: '18-01-2021', y: 16 },
      ]
  },
  {
    label: 'Previous week',
    backgroundColor: 'blue',
    data: [
        { x: '12-01-2021', y: 10 },
        { x: '13-01-2021', y: 12},
        { x: '14-01-2021', y: 9 },
        { x: '15-01-2021', y: 17 },
        { x: '16-01-2021', y: 14 },
        { x: '17-01-2021', y: 15 },
        { x: '18-01-2021', y: 16 },
      ]
  }]
};


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
      data={data}
    />
        
    )
}