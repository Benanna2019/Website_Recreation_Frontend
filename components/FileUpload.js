import React, { useState, useContext } from "react";
import axios from "axios";
import styles from "../styles/FileUpload.module.css";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import PairingSwitch from "../components/PairingSwitch";
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
import WifiIcon from "@material-ui/icons/Wifi";
import BatteryFullRoundedIcon from "@material-ui/icons/BatteryFullRounded";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import MenuIcon from "@material-ui/icons/Menu";
import AuthContext from "../context/AuthContext";
import { API_URL } from "../utils/urls";
import { Tooltip } from "@material-ui/core";

export default function FileUpload() {
  const [file, setFile] = useState(null);
  const [photo, setPhoto] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accessPin, setAccessPin] = useState(1234);
  const [pairingValue, setPairingValue] = useState(false);

  const { user, logoutUser, getToken } = useContext(AuthContext);

  let date = new Date();
  let hours = (date.getHours() < 10 ? "0" : "") + date.getHours();
  let minutes = (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();

  let div = hours + ":" + minutes;

  const handleChange = (event) => {
    console.log("fileupload handlechange funtion", event.target.files);

    setFile(event.target.files[0]);
    setPhoto(event.target.files[0]);
  };

  async function handleSubmit(e) {
    try {
      event.preventDefault();

      const user_name = e.target.elements.user_name.value;
      const user_phone = e.target.elements.user_phone.value;
      const user_email = document
        .getElementById("user_email")
        .getAttribute("data-value");
      const pairing = pairingValue;

      console.log("This is the username", user_name);
      console.log("This is the phone number", user_phone);
      console.log("This is the email", user_email);
      console.log("Pairing value is", pairingValue);

      // const data = new FormData();
      // data.append("user_name", user_name);
      // data.append("user_phone", user_phone);
      // data.append("user_email", user_email);
      // data.append("pairing", pairing);

      // console.log("This is the data", data);

      const upload_file = await axios.post(`${API_URL}/profiles`, {
        user_name,
        user_email,
        user_phone,
        pairing,
      });

      console.log("fileupload handsubmit upload_file", upload_file);
    } catch (err) {
      console.log("Error uploading data", err);
    }
  }

  return (
    <div className={styles.FileUpload__Container}>
      <div className={styles.Top__Row__Icons__Container}>
        <div className={styles.Left__Icons}>
          <SignalCellularAltIcon />
          <div className={styles.Left__Text}>Company</div>
          <WifiIcon />
        </div>
        <div className={styles.Top__Row__Time}>{div}</div>
        <div className={styles.Top__Row__Battery}>
          <BatteryFullRoundedIcon />
        </div>
      </div>
      <div className={styles.SecondRow__Icons}>
        <Tooltip title="Disabled">
          <MenuIcon className={styles.Menu__Icon} />
        </Tooltip>
        <MoreVertIcon className={styles.VerticalDots__Icon} />
      </div>
      <div className={styles.User__Photo__Name}>
        <div className={styles.Photo__Container}>
          <div className={styles.Photo__Img}>
            <img
              className={styles.Profile__Pic}
              src={photo ? photo : "/images/me.png"}
              alt="Profile Pic"
            />
          </div>

          <div className={styles.Photo__Icon}>
            {!file ? (
              <AddPhotoAlternateIcon>
                <input
                  id="user_photo"
                  onChange={(e) => handleChange}
                  type="file"
                />
              </AddPhotoAlternateIcon>
            ) : (
              <button>Submit</button>
            )}
          </div>
        </div>

        <div>
          <h2>Ben Patton</h2>
        </div>
      </div>
      <div className={styles.Form__Container}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className={styles.Form__Input__Container}>
            <div className={styles.Form__Input1}>
              <input
                className={styles.input}
                id="user_name"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                type="text"
                placeholder="Username..."
              />
            </div>
            <div className={styles.Form__Input2}>
              <input
                className={styles.input}
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                id="user_phone"
                type="text"
                placeholder="Phone Number ..."
              />
            </div>
            <div className={styles.Form__Input3}>
              <div
                className={styles.input}
                id="user_email"
                data-value={user.email}
              >
                {user.email}
              </div>
            </div>
            <div className={styles.Form__Input4}>
              <div className={styles.input__password}>
                <input
                  className={styles.password}
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  id="password"
                  type="password"
                  placeholder="......"
                />
                <div className={styles.password__button}>Change Password</div>
              </div>
            </div>
            <div className={styles.Form__Input5}>
              <div className={styles.accesspin__container}>
                <input
                  className={styles.input__accesspin}
                  value={accessPin}
                  onChange={(event) => setAccessPin(event.target.value)}
                  id="accesspin"
                  type="text"
                  placeholder="0123"
                />
                <div className={styles.accesspin__text}>Access Pin</div>
              </div>
            </div>
            <div className={styles.Form__Input6}>
              <div className={styles.input__pairing}>
                <PairingSwitch
                  className={styles.pairing__button}
                  onChange={() => setPairing(true)}
                />
                <div className={styles.pairing__text} id="pairing">
                  {pairingValue ? "Disable Pairing" : "Enable Pairing"}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.Form__Buttons__Container}>
            <button className={styles.Form__Cancel__Button}>Cancel</button>
            <button className={styles.Form__Save__Button}>Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}
