import {withStyles} from "@material-ui/styles";

const styles = {
    backDrop: {
        width: "100%",
        height: "100%",
        backgroundColor: "#00000080",
        zIndex: "100",
        position: "fixed",
        top: "0",
        left: "0",
    }
};

const BackDrop = ({show, click, classes}) => {
    return (
        <div className={classes.backDrop} style={{display: show?"block":"none"}} onClick={click}></div>
    )
}

export default withStyles(styles)(BackDrop);
