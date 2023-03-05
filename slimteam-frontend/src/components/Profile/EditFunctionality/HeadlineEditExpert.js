import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import EditSharpIcon from "@mui/icons-material/EditSharp";
import { useEffect, useState } from "react";
import axios from "axios";
import "../profile.css";

export default function HeadlineEdit({
  name,
  id_expert,
  first_name,
  last_name,
  street,
  city,
  nationality,
  skills,
  hourly_rate,
  setPortfolio,
  setName,
}) {
  const [open, setOpen] = React.useState(false);
  const [inputFirstName, setInputFirstName] = useState();
  const [inputLastName, setInputLastName] = useState();
  const [inputStreet, setInputStreet] = useState();
  const [inputCity, setInputCity] = useState();
  const [inputNationality, setInputNationality] = useState();
  const [inputSkills, setInputSkills] = useState();
  const [inputHourlyRate, setInputHourlyRate] = useState();
  
  console.log(
    id_expert,
    first_name,
    last_name,
    street,
    city,
    nationality,
    skills,
    hourly_rate
  );

  // to capitalize first letter of the word
  const capitalizeWords = (str) => {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const handleOnChangeFirstName = (e) => {
    if(!e.target.value) {
        setInputFirstName(capitalizeWords(first_name));
    } else {
        setInputFirstName(capitalizeWords(e.target.value));
    }
  };

  const handleOnChangeLastName = (e) => {
    if(!e.target.value) {
        setInputLastName(capitalizeWords(last_name));
    } else {
        setInputLastName(capitalizeWords(e.target.value));
    }
  };

  const handleOnChangeStreet = (e) => {
    if(!e.target.value) {
        setInputStreet(capitalizeWords(street));
    } else {
        setInputStreet(capitalizeWords(e.target.value));
    }
  };

  const handleOnChangeCity = (e) => {
    if(!e.target.value) {
        setInputCity(capitalizeWords(city));
    } else {
        setInputCity(capitalizeWords(e.target.value));
    }
  };

  const handleOnChangeNationality = (e) => {
    if(!e.target.value) {
        setInputNationality(capitalizeWords(nationality));
    } else {
        setInputNationality(capitalizeWords(e.target.value));
    }
  };
  
  const handleOnChangeSkills = (e) => {
    if(!e.target.value) {
        setInputSkills(capitalizeWords(skills));
    } else {
        setInputSkills(capitalizeWords(e.target.value));
    }
  };

  const handleOnChangeHourlyRate = (e) => {
    if(!e.target.value) {
        setInputHourlyRate(capitalizeWords(hourly_rate));
    } else {
        setInputHourlyRate(capitalizeWords(e.target.value));
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const personal_details = {
    personal_details: {
      first_name: inputFirstName,
      last_name: inputLastName,
      address: {
        street: inputStreet,
        city: inputCity,
      },
      nationality: inputNationality,
      skills: inputSkills,
      hourly_rate: inputHourlyRate,
    },
  };

  console.log(personal_details);

  const handleSubmitEdit = async () => {
    await axios
      .put(
        `http://localhost:8888/portfolio/${name}/edit-headline-expert/${id_expert}`,
        personal_details
      )
      .then((res) => {
        setPortfolio(res.data);
        console.log(res.data);
        setName(inputFirstName);
      });
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
     <div className="editButton"> <IconButton aria-label="edit" size="small">
        <EditSharpIcon
          onClick={handleClickOpen}
          fontSize="inherit"
          color="inherit"
        />
      </IconButton> </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit education</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            type="text"
            label={first_name}
            placeholder="First name"
            fullWidth
            variant="standard"
            onChange={handleOnChangeFirstName}
          />
          <TextField
            autoFocus
            margin="dense"
            type="text"
            label={last_name}
            placeholder="Last name"
            fullWidth
            variant="standard"
            onChange={handleOnChangeLastName}
          />
          <TextField
            autoFocus
            margin="dense"
            type="text"
            label={street}
            placeholder="street"
            fullWidth
            variant="standard"
            onChange={handleOnChangeStreet}
          />
          <TextField
            autoFocus
            margin="dense"
            type="text"
            label={city}
            placeholder="City"
            fullWidth
            variant="standard"
            onChange={handleOnChangeCity}
          />
          <TextField
            autoFocus
            margin="dense"
            type="text"
            label={nationality}
            placeholder="Nationality"
            fullWidth
            variant="standard"
            onChange={handleOnChangeNationality}
          />
          <TextField
            autoFocus
            margin="dense"
            type="text"
            label={skills}
            placeholder="Skills"
            fullWidth
            variant="standard"
            onChange={handleOnChangeSkills}
          />
          <TextField
            autoFocus
            margin="dense"
            type="text"
            label={hourly_rate}
            placeholder="Hourly rate"
            fullWidth
            variant="standard"
            onChange={handleOnChangeHourlyRate}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmitEdit}>Save</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}