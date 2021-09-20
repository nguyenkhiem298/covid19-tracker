import { Grid } from '@material-ui/core'
import React from 'react'
import LineChart from './Charts/LineChart/LineChart'

export default function Summary({report}) {


    return (
        <Grid container spacing={3}>
            <Grid item sm={7} xs={12}>
                <LineChart data={report}/>
            </Grid>
            <Grid item sm={5} xs={12}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, officia. Earum eos nesciunt quasi qui est sint nihil, ipsam suscipit eius doloremque ullam iste corrupti illo veritatis pariatur officiis nostrum?
            </Grid>
        </Grid>
    )
}
