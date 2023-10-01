import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { useTheme } from '@mui/material/styles';
import { Box, Chip } from '@mui/material';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

//Multiple Select chip
function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
const chiprenderMethod=(selected) => (
  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
    {selected.map((value) => (
      <Chip key={value} label={value} />
      ))}
  </Box>
)

export function MultipleSelectCheckmarks({data,isChipStyle,label}) {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">{label}</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id={isChipStyle ?  'demo-multiple-chip' : 'demo-multiple-checkbox'}
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput id={isChipStyle ? 'select-multiple-chip' : null} label={label} />}
          renderValue={isChipStyle ? (selected)=> chiprenderMethod(selected) : (selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {data.map((x) => (
            isChipStyle ? 
            <MenuItem
            key={x?.id}
            value={x?.name}
            style={getStyles(x.name, personName, theme)}
          >
            {x?.name}
          </MenuItem>
          :
          <MenuItem key={x.id} value={x.name}>
            <Checkbox checked={personName.indexOf(x) > -1} />
            <ListItemText primary={x.name} />
          </MenuItem>
          ))}
        </Select>
      </FormControl>
  );
}

export  function CustomMultiCheck(){
  const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ]
  return(
    <>
    </>
    // <MultipleSelectCheckmarks data={names} isChipStyle={false} label="Tags"/>
  )
}