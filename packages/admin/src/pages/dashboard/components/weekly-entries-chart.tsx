import 'chartjs-adapter-moment';
import * as React from 'react';
import { Bar } from 'react-chartjs-2';

type WeeklyEntriesChartProps = {
  currentWeek: Array<any>;
  previousWeek: Array<any>;
}

export const WeeklyEntriesChart: React.FC<WeeklyEntriesChartProps> = (props) => {
const data = {
  datasets: [{
      label: 'This Week',
      backgroundColor: 'red',
      data: props.currentWeek
  },
  {
    label: 'Previous week',
    backgroundColor: 'blue',
    data: props.previousWeek
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