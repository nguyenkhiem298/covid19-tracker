import React from 'react'
import { CardContent, Card, Typography, Grid} from '@material-ui/core'

export default function Highlight() {
    return (
        <Grid container spacing={3}>
            <Grid item sm={4} xs={12}>
                <Card >
                    <CardContent>
                        <Typography component="p" variant="body2">Số ca mắc</Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item sm={4} xs={12}>
                <Card >
                    <CardContent>
                        <Typography component="p" variant="body2">Số ca mắc</Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item sm={4} xs={12}>
                <Card >
                    <CardContent>
                        <Typography component="p" variant="body2">Số ca mắc</Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}
