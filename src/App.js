import React, {useState, useEffect} from 'react'
import { Container, Typography } from '@material-ui/core'
import CountrySelector from './components/CountrySelector/CountrySelector';
import Highlight from './components/Highlight/Highlight';
import Summary from './components/Summary/Summary';
import { getCountrys } from '../src/components/apis/API'

function App() {
  const [countrys, setCountrys] = useState([]);

  useEffect(() => {
    getCountrys()
      .then((res) => {
        setCountrys(res.data)
      })
  }, [])

  return (
    <Container style={{marginTop: 20}}>
      <Typography variant='h2' component='h2'>
        Số liệu COVID-19
      </Typography>
      <CountrySelector
        countries={countrys}
      />
      <Highlight/>
      <Summary/>
    </Container>
  );
}

export default App;
