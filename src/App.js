import React from "react";
import { TextField, Button } from "@material-ui/core";
import "./App.css";

function App() {
  return (
    <div>
      <form>
        <TextField placeholder="Enter User Name" />
        <br />
        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
        />
        <br />
        <Button variant="contained" color="primary">
          submit
        </Button>
      </form>
    </div>
  );
}

export default App;
