import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export  function ComboBox({
    autoHighlight,
    autoSelect,
    className,
    clearOnEscape,
    disableClearable,
    disabled,
    fullWidth,
    multiple,
    onChange,
    label,
    datasource,
    name
}
)
{
  const defaultProps = {
    options: datasource,
    getOptionLabel: (option) => option.name,
  }; 
  return (
    <Autocomplete
    {...defaultProps}
      disablePortal
      id="combo-box-demo"
      // options={datasource}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label={name} />}
      autoHighlight={autoHighlight}
      autoSelect={autoSelect}
      className={className}
      clearOnEscape={clearOnEscape}
      disableClearable={disableClearable}
      disabled={disabled}
      fullWidth={fullWidth}
      multiple={multiple}
      onChange={onChange}
      autoComplete
    />
  );
}



export function TestCombo(){
    return(
        <ComboBox 
            autoHighlight={true}
            autoSelect={true}
            className=""
            clearOnEscape={true}
            disableClearable={false}
            disabled={false}
            fullWidth={false}
            multiple={false}
            onChange={()=>console.log('Kalim')}
        />
    )
}