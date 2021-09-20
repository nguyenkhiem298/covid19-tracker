import React, {useState, useEffect} from 'react'
import { Container, Typography } from '@material-ui/core'
import CountrySelector from './components/CountrySelector/CountrySelector';
import Highlight from './components/Highlight/Highlight';
import Summary from './components/Summary/Summary';
import { getCountrys, getReportByCountry} from '../src/components/apis/API'

function App() {
  const [countrys, setCountrys] = useState([]);
  const [selectCountryId, setSelectCountryId] = useState('')
  const [report, setReport] = useState([])

  useEffect(() => {
    getCountrys()
      .then((res) => {
        setCountrys(res.data)
        setSelectCountryId('VN');
      })
  }, [])

  const handleOnChange = (e) => {
    // Lấy value được chọn bên function CountrySelector.jsx
    // console.log(e.target.value);
    setSelectCountryId(e.target.value);
  }

  useEffect(() => {
    if(selectCountryId) {
      const {Slug} = countrys.find(country => country.ISO2 === selectCountryId)
  
      getReportByCountry(Slug)
        .then((res) => {
          // Xoa item cuoi cung
          res.data.pop();
          setReport(res.data)
          // console.log({res});
        })
    }
  }, [selectCountryId, countrys])
  

  return (
    <Container style={{marginTop: 20}}>
      <Typography variant='h2' component='h2'>
        Số liệu COVID-19
      </Typography>
      <CountrySelector
        value={selectCountryId}
        countries={countrys}
        handleOnChange={handleOnChange}
      />
      <Highlight
        report={report}
      />
      <Summary
        report={report}
      />
    </Container>
  );
}

export default App;
