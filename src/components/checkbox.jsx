import { Checkbox ,FormControlLabel} from "@mui/material";

export default function CustomCheckbox({
    defaultChecked,
    disabled ,
    required, 
    lable,
    color , 
    colorbeforeChecked ,
    colorafterChecked,
    icon,
    checkedIcon,
    indeterminate,
    method,
    error
}) {
  return(
  <div>
    <FormControlLabel
        control={
            <Checkbox
                defaultChecked={defaultChecked}  //true||false
                color={color} // success || secondary || default
                sx={{color:colorbeforeChecked, '&.Mui-checked': {   //any color with class
                    color: colorafterChecked,
                  },
                }}
                icon={icon}
                name={lable.toLowerCase()}
                value={lable.toLowerCase()}
                checkedIcon={checkedIcon}
                indeterminate={indeterminate}
                onChange={method}
                error={[error]}
                />
            }
        disabled={disabled}
        required={required}
        label={lable}
    />
  </div>
  ) 
}
