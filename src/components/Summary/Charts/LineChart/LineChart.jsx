import React, {useState, useEffect} from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Button  } from '@material-ui/core';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import moment from 'moment';

const generateOptions  = (data) => {
    const categories = data.map((item) => moment(item.Date).format('DD/MM/YYYY'));

    return {
        chart: {
            height: '500',
        },
        title: {
            text: 'Tổng ca nhiễm'
        },
        xAxis: {
            categories: categories,
            crosshair: true,
        },
        colors: ['#F3585B'],
        yAxis: {
            min: 0,
            title: {
                text: null,
            },
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat:
            '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y} ca</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true,
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0,
            },
        },
        series: [
            {
              name: 'Tổng Ca nhiễm',
              data: data.map((item) => item.Confirmed),
            },
        ],
    }
  }
  

export default function LineChart({data}) {
    const [options, setOptions] = useState({});
    const [styleButton, setStyleButton] = useState('all');
    

    console.log({data});

    useEffect(() => {
        let customData  = [];
        switch (styleButton) {
            case 'all':
                customData = data; 
                break;
            case '7': 
                customData = data.slice(Math.max(data.length - 7, 1));
                break;
            case '30': 
                customData = data.slice(Math.max(data.length - 30, 1));
                break;
            default:
                customData = data;
        }

        
        setOptions(generateOptions(customData));
    }, [data, styleButton])


    return (
        <div>
            <ButtonGroup color="primary" aria-label="outlined primary button group">
                <Button 
                    color={styleButton === '7' ? 'secondary' : ''}
                    onClick={() => setStyleButton('7')}> 
                    1 Tuần
                </Button>
                <Button
                    color={styleButton === '30' ? 'secondary' : ''}
                    onClick={() => setStyleButton('30')}>
                    1 Tháng
                </Button>
                <Button
                    color={styleButton === 'all' ? 'secondary' : ''}
                    onClick={() => setStyleButton('all')}>
                    Tất Cả
                </Button>
            </ButtonGroup>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </div>
    )
}
