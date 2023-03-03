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


export default function HeadlineEdit({name, id_expert, first_name, last_name, skills, city, nationality,email,phone_number, setPortfolio,setName}) {
  const [open, setOpen] = React.useState(false);
  const [inputFirstName, setInputFirstName] = useState();
  const [inputLastName, setInputLastName] = useState();
  const [inputSkills, setInputSkills] = useState([]);
  const [inputCity, setInputCity] = useState();
  const [inputNationality, setInputNationality] = useState();
  const [inputPhoneNo, setInputPhoneNo]=useState();
  const [inputEmail, setInputEmail]=useState();


  console.log(id_expert, first_name, last_name, skills, city, nationality)

  const handleOnChangeFirstName = (e) => {
    setInputFirstName(e.target.value);

  };

  const handleOnChangeLastName = (e) => {
    setInputLastName(e.target.value);
  };

  const handleOnChangeSkills = (e) => {
    setInputSkills(e.target.value);
  };

  const handleOnChangeAddress = (e) => {
    setInputCity(e.target.value);
  };
  
  const handleOnChangeNationality = (e) => {
    setInputNationality(e.target.value);
  };

  const handleOnChangeEmail =(e) =>
  {
    setInputEmail(e.target.value);
  };
  const handleOnChangePhoneNo =(e) =>
  {
    setInputPhoneNo(e.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const personal_details = {
    personal_details: {
      first_name: inputFirstName,
      last_name: inputLastName,
      skills: inputSkills,
      city: inputCity,
      nationality: inputNationality,
      email:inputEmail,
      phone_number:inputPhoneNo,
    },
  };

  const handleSubmitEdit = async () => {
    await axios
    .put(`http://localhost:8888/portfolio/${name}/edit-headline/${id_expert}`, personal_details)
    .then((res) => {
      setPortfolio(res.data)
      setName(inputFirstName)
    });
    setOpen(false);
  };
  
  const handleClose = () => {
    setOpen(false);
  };

  console.log(name, id_expert, personal_details)

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
            label={city}
            placeholder="City"
            fullWidth
            variant="standard"
            onChange={handleOnChangeAddress}
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
            label={email}
            placeholder="email"
            fullWidth
            variant="standard"
            onChange={handleOnChangeEmail}
          />
          <TextField
            autoFocus
            margin="dense"
            type="text"
            label={phone_number}
            placeholder="Phone Number"
            fullWidth
            variant="standard"
            onChange={handleOnChangePhoneNo}
          />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmitEdit}>Save</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
