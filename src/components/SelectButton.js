import { makeStyles } from "@material-ui/core/styles";
// import { ThemeProvider, createTheme ,makeStyles} from "@material-ui/core/styles";
// import { makeStyles } from "@material-ui/styles";
// import { makeStyles } from "@mui/styles";


const useStyles = makeStyles({
    selectbutton: {
      border: "1px solid gold",
      borderRadius: 5,
      padding: 10,
      paddingLeft: 20,
      paddingRight: 20,
      fontFamily: "Montserrat",
      cursor: "pointer",
      backgroundColor:({selected})=>selected ? "gold" : "",
      color: ({selected})=>selected ? "black" : "",
      fontWeight: ({selected})=>selected ? 700 : 500,
      "&:hover": {
        backgroundColor: "gold",
        color: "black",
      },
      width: "22%",
      //   margin: 5,
    },
  });
const SelectButton = ({ children, selected, onClick }) => {
  

  const classes = useStyles({children, selected, onClick});

  return (
    <span onClick={onClick} className={classes.selectbutton}>
      {children}
    </span>
  );
};

export default SelectButton;