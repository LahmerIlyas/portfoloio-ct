import * as React from 'react';
import { Card } from '../../components';
import { Box } from '@adminjs/design-system'
import { WeeklyEntriesChart } from './components/weekly-entries-chart';
import { CountStatsCard } from './components/count-stats-card';
import { ApiClient } from 'adminjs';


export default function Dashboard() {
    const api = React.useRef(new ApiClient());
    const [data, setData] = React.useState({
        usersCount: 0,
        foodEntriesCount: 0,
        currentWeek: [],
        previousWeek: []
    });

    React.useEffect(() => {
        api.current.getDashboard().then(({data}) => {
            setData(data);
        })
    }, []);

    return (
        <React.Fragment>
            <Box flexDirection={'row'} display={'flex'}>
                <CountStatsCard title='Users count' count={data.usersCount} />
                <CountStatsCard title='Food Entries count' count={data.foodEntriesCount}/>
            </Box>
            <Card title='Number of added entries in the last 7 days vs. added entries the week before'>
                <WeeklyEntriesChart currentWeek={data.currentWeek} previousWeek={data.previousWeek}/>
            </Card>
            <Card title='Number of added entries in the last 7 days vs. added entries the week before'>

            </Card>
        </React.Fragment>
    )
}