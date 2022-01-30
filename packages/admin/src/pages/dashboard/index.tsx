import * as React from 'react';
import { Card } from '../../components';
import { Box } from '@adminjs/design-system'
import { WeeklyEntriesChart } from './components/weekly-entries-chart';
import { CountStatsCard } from './components/count-stats-card';


export default function Dashboard() {
    return (
        <React.Fragment>
            <Box flexDirection={'row'} display={'flex'}>
                <CountStatsCard title='Users count' count={1000} />
                <CountStatsCard title='Food Entries count' count={1500}/>
            </Box>
            <Card title='Number of added entries in the last 7 days vs. added entries the week before'>
                <WeeklyEntriesChart />
            </Card>
            <Card title='Number of added entries in the last 7 days vs. added entries the week before'>

            </Card>
        </React.Fragment>
    )
}