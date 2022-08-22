import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Slider,
} from "@mui/material";
import React from "react";

const Filter = ({ type, setType }) => {
  // console.log(price);
  return (
    <div>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">По типам</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="all"
          name="radio-buttons-group"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <FormControlLabel value="ONA" control={<Radio />} label="Сериалы" />
          <FormControlLabel
            value="OVA"
            control={<Radio />}
            label="Спец. Выпуски"
          />
          <FormControlLabel value="TV" control={<Radio />} label="Детские" />
          <FormControlLabel
            value="film"
            control={<Radio />}
            label="полнометражные"
          />
          <FormControlLabel
            value="all"
            control={<Radio />}
            label="Все релизы"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default Filter;
