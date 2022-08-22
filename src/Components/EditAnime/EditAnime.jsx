import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { animeContext } from "../../ContextProvider/HomeContextProvider";
import "./EditAnime.css";

const EditAnime = () => {
  const { animeDetails, editAnime, getOneAnime } = useContext(animeContext);
  const { id } = useParams();

  useEffect(() => {
    getOneAnime(id);
  }, [id]);

  console.log(animeDetails);
  const [editName, setEditName] = useState(animeDetails.name);
  const [editDesc, setEditDesc] = useState(animeDetails.desc);
  const [editUrl, setEditUrl] = useState(animeDetails.url);
  const [editType, setEditType] = useState(animeDetails.type);

  function handleClick() {
    if (!editName || !editDesc || !editUrl || !editType) {
      alert("Введите все инпуты");
      return;
    }

    let anime = {
      name: editName,
      desc: editDesc,
      url: editUrl,
      type: editType,
    };

    editAnime(id, anime);
  }

  return (
    <div>
      {animeDetails ? (
        <div className="lastAddAnime">
          <div className="addanime">
            <TextField
              sx={{ m: 1 }}
              className="inputAddAnime"
              label="Введите название"
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
            />

            <TextField
              sx={{ m: 1 }}
              className="inputAddAnime"
              label="Введите описание"
              value={editDesc}
              onChange={(e) => setEditDesc(e.target.value)}
            />
            <TextField
              sx={{ m: 1 }}
              className="inputAddAnime"
              label="Вставьте ссылку на картинку"
              value={editUrl}
              onChange={(e) => setEditUrl(e.target.value)}
            />
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Type</InputLabel>
              <Select
                sx={{ m: 1 }}
                className="inputAddAnime"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={editType}
                label="Type"
              >
                <MenuItem value={"OVA"}>OVA</MenuItem>
                <MenuItem value={"TV"}>TV</MenuItem>
                <MenuItem value={"ONA"}>ONA</MenuItem>
                <MenuItem value={"film"}>Полнометражный фильм</MenuItem>
              </Select>
            </FormControl>
            <Button variant="contained" color="success" onClick={handleClick}>
              Изменить
            </Button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default EditAnime;
