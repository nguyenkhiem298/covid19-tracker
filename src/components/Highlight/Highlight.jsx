import React from 'react'
import { CardContent, Card, Typography, Grid} from '@material-ui/core'
import CardItem from './CardItem';

export default function Highlight({report}) {

    const data = report && report.length ? report[report.length - 1] : [];

    const summary = [
        {
            title: 'Số ca nhiễm',
            count: data.Confirmed,
            type: 'confirmed'
        },
        {
            title: 'Khỏi',
            count: data.Recovered,
            type: 'recovered'
        },
        {
            title: 'Tử vong',
            count: data.Deaths,
            type: 'deaths'
        }
    ]

    // console.log(data);

    return (
        <Grid container spacing={3}>
            
            {
                summary.map(item =>
                    <CardItem 
                        title={item.title} 
                        count={item.count}
                        type={item.type}
                    />
                )
            }
        </Grid>
    )
}
