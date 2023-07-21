import { makeStyles } from "@material-ui/core";
import Homepage from "./pages/HomePage";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CoinsPage from "./pages/CoinsPage";
import Header from "./components/Header";

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Routes>

        <Route path="/" component={<Homepage/>} exact />
        <Route path="/coins/:id" component={<CoinsPage/>} exact />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;