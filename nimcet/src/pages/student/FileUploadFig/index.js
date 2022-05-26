import './FileUploadFig.css';
import { Grid } from '@mui/material';


function App() {
    return (
        <div>
            <Grid container className="compo" justifyContent="center"
          alignItems="center"
                 xs={10}>
                <Grid item xs={12} >
                    <Grid container direction="row"  className="topRow">
                        <Grid item xs={2}>
                            Sl.No.
                        </Grid>
                        <Grid item xs={4}>
                            Document Details
                        </Grid>
                        <Grid item xs={6}>
                            Upload Documents
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={12} >
                    <Grid container direction="row" className="rowElement" >
                        <Grid item xs={2}>
                           1
                        </Grid>
                        <Grid item xs={4}>
                            Passport Size Photo
                        </Grid>
                        <Grid item xs={6}>
                        <input type="file"/>
                        </Grid>
                    </Grid>
                </Grid>
                

                <Grid item xs={12} >
                    <Grid container direction="row" className="rowElement">
                        <Grid item xs={2}>
                           2
                        </Grid>
                        <Grid item xs={4}>
                            Signature
                        </Grid>
                        <Grid item xs={6}>
                        <input type="file"/>
                        </Grid>
                  </Grid>
               </Grid>

                <Grid item xs={12} >
                    <Grid container direction="row" className="rowElement">
                        <Grid item xs={2}>
                           3
                        </Grid>
                        <Grid item xs={4}>
                            Aadhar Card
                        </Grid>
                        <Grid item xs={6}>
                        <input type="file"/>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={12} >
                    <Grid container direction="row" className="rowElement">
                        <Grid item xs={2}>
                           4
                        </Grid>
                        <Grid item xs={4}>
                            Class X Marksheet
                        </Grid>
                        <Grid item xs={6}>
                        <input type="file"/>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={12} >
                    <Grid container direction="row" className="rowElement">
                        <Grid item xs={2}>
                           5
                        </Grid>
                        <Grid item xs={4}>
                            Class XII Marksheet
                        </Grid>
                        <Grid item xs={6}>
                        <input type="file"/>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={12} >
                    <Grid container direction="row" className="rowElement">
                        <Grid item xs={2}>
                           6
                        </Grid>
                        <Grid item xs={4}>
                        First year marksheet
                        </Grid>
                        <Grid item xs={6}>
                        <input type="file"/>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={12} >
                    <Grid container direction="row" className="rowElement">
                        <Grid item xs={2}>
                           7
                        </Grid>
                        <Grid item xs={4}>
                        Second year marksheet
                        </Grid>
                        <Grid item xs={6}>
                        <input type="file"/>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={12} >
                    <Grid container direction="row" className="rowElement">
                        <Grid item xs={2}>
                           8
                        </Grid>
                        <Grid item xs={4}>
                           Third year marksheet
                        </Grid>
                        <Grid item xs={6}>
                        <input type="file"/>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={12} >
                    <Grid container direction="row" className="rowElement">
                        <Grid item xs={2}>
                           9
                        </Grid>
                        <Grid item xs={4}>
                            Caste Certificate for (OBC/SC/ST)
                        </Grid>
                        <Grid item xs={6}>
                        <input type="file"/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item >

                <form>
              <input type="submit" value="Confirm" className="submitBtn"></input>
            </form>

                    </Grid>


            </Grid>
        </div>
    );
}

export default App;
