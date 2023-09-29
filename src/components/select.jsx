import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Customselect({ data,label,value, autowidth , required ,fullWidth,handleChange,age,size }) {
  return (
    <>
      <FormControl fullWidth={fullWidth} size={size}>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label={label}
          autowidth={autowidth}
          onChange={handleChange}
        >{
          required != true ? 
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
          :
            null
          }
          {
            data.map((x)=>{
              return(
                <MenuItem value={x.value}>{x.name}</MenuItem>
              )
            })
          }

        </Select>
      </FormControl>

    </>
  );
}

export default function TestSelect() {
  let data=[
    {
      name:'Orange',
      value:32
    },
    {
      name:'Mango',
      value:1
    }
  ]
  return(
      <Customselect required={true} label="Ages" value="32" size="small" fullWidth={false} data={data}/>
     )
}
