import './basicDetailsFig.css';
import { Grid } from '@mui/material';


function App() {
    return (
        <div>
            <Grid container justifyContent="center" className="outerTable"
                alignItems="center"
                xs={10}>
                <Grid item xs={12} className="topRow"  >
                    Basic Details
                </Grid>
                <Grid container className="innerTable">

                    <Grid container direction="row" className="rowElement" >
                    <Grid item xs={6}>
                        Candidate Name
                    </Grid>
                    <Grid item xs={6}>
                        Chetan Agarwal
                    </Grid>
                </Grid>

                
                <Grid container direction="row" className="rowElement" >
                    <Grid item xs={6}>
                        Category
                    </Grid>
                    <Grid item xs={6}>
                        GEN
                    </Grid>
                </Grid>


                <Grid container direction="row" className="rowElement" >
                    <Grid item xs={6}>
                        Fees to be paid (in ₹)
                    </Grid>
                    <Grid item xs={6}>
                        1250.00
                    </Grid>
                </Grid>
                </Grid>
              


                <Grid item>
                    <form>
                        <input type="submit" value="Proceed to Pay" className="payBtn"></input>
                    </form>

                </Grid>


            </Grid>
        </div >
    );
}

export default App;
