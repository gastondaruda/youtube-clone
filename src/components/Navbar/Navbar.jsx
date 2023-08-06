import { Stack, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import {logo} from "../../utils/constans"
import ToggleButton from "../ToggleButton/ToggleButton";


const Navbar = () => (
    <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: '#000', top: 0, justifyContent: "space-between", zIndex: "10" }}>
        <Grid container>
            <Grid item md={4}>
                <Link to="/" style={{ display: "flex", alignItems: "center" }}>
                    <img src={ logo } alt="logo" height={45} />
                    <h3 style={{color:"#fff", fontSize: "1.5rem", margin: "0 1rem"}}>Youtube</h3>
                </Link>
            </Grid>
            <Grid item md={4}>
                <SearchBar />
            </Grid>
            <Grid item md={4} style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                <ToggleButton />
            </Grid>
        </Grid>
    </Stack>
);

export default Navbar;