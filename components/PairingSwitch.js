import React from "react";
import Switch from "@material-ui/core/Switch";

export default function PairingSwitch() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div>
      <Switch
        checked={state.checkedB}
        onChange={handleChange}
        style={{ color: "#4fc3f7" }}
        name="checkedB"
        inputProps={{ "aria-label": "primary checkbox" }}
      />
    </div>
  );
}
