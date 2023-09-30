import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { InputAdornment } from '@mui/material';


export  function BasicTextFields({
        id,
        classes,
        label,
        variant,
        required,
        defaultText,
        type,
        fullWidth,
        maxRows,
        minRows,
        multiline,
        onChange,
        name,
        value,
        placeholder,
        rows,
        readOnly,
        icon,
    }) {
  return (
    // <Box
    //   component="div"
    //    >
      <TextField
        id='outlined-required' 
        label={label} 
        required={required}
        className={classes}
        defaultValue={defaultText}
        type={type} /*text || number || password */
        fullWidth={fullWidth}
        variant={variant} /*variant ="outlined || filled || standard"*/
        maxRows={maxRows}
        minRows={minRows}
        multiline={multiline}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        readOnly={readOnly}
        InputProps={{
            startAdornment: (
              <InputAdornment
               position="start">
                {icon}
              </InputAdornment>
            ),
          }}
    /> 
        
    // </Box>
  );
}
export function TestInput(){
    return(
        <>
            <BasicTextFields 
                id="outlined-basic" 
                classes="" 
                required={true} 
                variant="outlined" 
                label="Input"
                defaultText="Hello"
                type="text"
                icon={<AccountCircle/>} //<AccountCircle/> || text
             
            />
        </>
    )
}