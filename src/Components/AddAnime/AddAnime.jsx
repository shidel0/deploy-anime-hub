import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { animeContext } from "../../ContextProvider/HomeContextProvider";
import "./AddAnime.css";
const AddAnime = () => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [url, setUrl] = useState("");
  const [type, setType] = useState("");

  const { addAnime } = useContext(animeContext);

  function handleClick() {
    let newDate = {
      name,
      desc,
      url,
      type,
    };

    addAnime(newDate);
    setName("");
    setDesc("");
    setUrl("");
    setType("");
  }
  const handleType = (e) => {
    setType(e.target.value);
  };

  return (
    <div className="lastAddAnime">
      <div className="addanime">
        <TextField
          sx={{ m: 1 }}
          className="inputAddAnime"
          label="Введите название"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <TextField
          sx={{ m: 1 }}
          className="inputAddAnime"
          label="Введите описание"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <TextField
          sx={{ m: 1 }}
          className="inputAddAnime"
          label="Вставьте ссылку на картинку"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Type</InputLabel>
          <Select
            sx={{ m: 1 }}
            className="inputAddAnime"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={type}
            label="Type"
            onChange={handleType}
          >
            <MenuItem value={"OVA"}>OVA</MenuItem>
            <MenuItem value={"TV"}>TV</MenuItem>
            <MenuItem value={"ONA"}>ONA</MenuItem>
            <MenuItem value={"film"}>Полнометражный фильм</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" color="success" onClick={handleClick}>
          Добавить аниме
        </Button>
      </div>
    </div>
  );
};

export default AddAnime;
