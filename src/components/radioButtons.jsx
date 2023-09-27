import { FormControl } from "@mui/base";
import { FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";

function CustomRadioButtons({ data, defaultValue ,value,handleChange,label }) {
  return (
    <>
      <FormLabel id="demo-controlled-radio-buttons-group">{label}</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
        defaultValue={defaultValue.toLowerCase()}
        value={value}
        onChange={handleChange}
      >
        {data.map((x) => {
          return (
            <FormControlLabel
              value={x.label.toLowerCase()}
              control={<Radio />}
              label={x.label}
            />
          );
        })}
      </RadioGroup>
    </>
  );
}

export default function TestRadioButtons() {
  let radios = [
    {
      label: "Male",
    },
    {
      label: "Female",
    },
  ];
  return(
  <FormControl>
      <CustomRadioButtons label="Gender" data={radios} defaultValue="Male" handleChange={(e)=>console.log('Clicked me',e.target.value)}/>;
    </FormControl>
  )
}
