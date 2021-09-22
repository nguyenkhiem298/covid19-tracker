import React from 'react'
import { FormControl, InputLabel, NativeSelect, FormHelperText} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: `${theme.spacing(3)}px 0`,
      minWidth: 120,
    },
  }));

export default function CountrySelector({countries, handleOnChange, value}) {
    const classes = useStyles();

    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel shrink htmlFor="country-selector">Quốc Gia</InputLabel>
                <NativeSelect
                    value={value}
                    onChange={handleOnChange}
                    inputProps = {{
                        name: 'country',
                        id: 'country-selector'
                    }}
                >
                    {
                        countries.map((country) => (
                            <option key={country.ISO2} value={country.ISO2}>
                                {country.Country}   
                            </option>
                        ))
                    }
                </NativeSelect>
                <FormHelperText>Lựa chọn quốc gia</FormHelperText>
            </FormControl>
        </div>
    );
}
