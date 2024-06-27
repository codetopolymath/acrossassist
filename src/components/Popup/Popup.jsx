import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { Box, Grid, Paper } from "@mui/material";
import { useMediaQuery } from "react-responsive";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const FullScreenDialog = ({ open, title, setOpen, children }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Dialog
        fullScreen={isMobile}
        fullWidth
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              {title}
            </Typography>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
              autoFocus
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Paper style={{ padding: "20px" }}>{children}</Paper>
        <Button
          style={{
            backgroundColor: "#f75959",
            color: "white",
            borderRadius: "10px",
            margin: "0  10px 5px 10px",
          }}
          onClick={() => setOpen(false)}
        >
          Close
        </Button>
      </Dialog>
    </React.Fragment>
  );
};
export default FullScreenDialog;
