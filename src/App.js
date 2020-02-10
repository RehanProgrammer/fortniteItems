import React from "react";
import { TextField, Button } from "@material-ui/core";
import "./app.css";
//import "./login.css";
function App() {
  return (
    <div className="login">
      <form>
        <TextField placeholder="Enter User Name" />
        <br />
        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
        />
        <br />
        <Button variant="contained" color="secondary" type="submit">
          submit
        </Button>
      </form>
    </div>
  );
}

export default App;
