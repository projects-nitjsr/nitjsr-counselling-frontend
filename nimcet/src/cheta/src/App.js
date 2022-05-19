
import './App.css';
import { Grid } from '@mui/material';


function App() {
  return (
    <div className="App">
      <Grid container
        direction="column"
        justifyContent="center"
        alignItems="center"
        className="brdr"
        xs={10}
      >


        <Grid item xs={12} className="green" id="overRider" >
          Candidate Information
        </Grid>


        <Grid item xs={4} className="Pic">
          <img alt="Candidate" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgaVCpZOQhTqniidyUIA-Sxye9rxPD_zA28A&usqp=CAU" id="passPic"></img>
        </Grid>

        <Grid item xs={4} className="Pic" >
          <img alt="Signature" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMa43IBOhXoFuRN6wJnVu-APt9o-uw_0EUfg&usqp=CAU" id="signPic"></img>
        </Grid>


        <Grid container direction="row" justifyContent="center"
          alignItems="center" id="overRider">
          <Grid item xs={5} className="table bolder">
            Full Name
          </Grid>
          <Grid item xs={5} className="table">
            Chetan Agarwal
          </Grid>
          <Grid item xs={5} className="table bolder">
            Hall Ticket No.
          </Grid>
          <Grid item xs={5} className="table">
            2589632111
          </Grid>
          <Grid item xs={5} className="table bolder">
            All India Rank
          </Grid>
          <Grid item xs={5} className="table">
            10
          </Grid>
          <Grid item xs={5} className="table bolder">
            Category Rank
          </Grid>
          <Grid item xs={5} className="table">
            01
          </Grid>
          <Grid item xs={5} className="table bolder">
            Allotted Institute
          </Grid>
          <Grid item xs={5} className="table">
            NIT Jamshedpur
          </Grid>
          <Grid item xs={5} className="table bolder">
            Allotted Quota
          </Grid>
          <Grid item xs={5} className="table">
            OPEN
          </Grid>
          <Grid item xs={10} className="table">
            <span className="note"> NOTE:</span><br></br> Please check all documents carefully. Approve only if documents are
            authentic. Remark column must be filled necessarilly in case of disapproving document.
          </Grid>

        </Grid>


        <Grid container direction="row" justifyContent="center"
          alignItems="center" id="overRider" >
          <Grid item xs={3} className="table topRow">
            Documents
          </Grid>
          <Grid item xs={2} className="table topRow">
            ✅ Approve
          </Grid>
          <Grid item xs={5} className="table topRow">
            Remarks
          </Grid>

          <Grid item xs={3} className="table">
            <button type="button" class="docButn" onclick="alert('clicked')">Admit Card
            </button>
          </Grid>
          <Grid item xs={2} className="table">
            <input type="checkbox" id="checkBox1" className="checkbox">
            </input>
          </Grid>
          <Grid item xs={5} className="table content">
            <input type="text" id="remarks1" className="remarks" ></input>
          </Grid>
          <Grid item xs={3} className="table">
            <button type="button" class="docButn" onclick="alert('clicked')">Rank Card
            </button>
          </Grid>
          <Grid item xs={2} className="table">
            <input type="checkbox" id="checkBox2" className="checkbox">
            </input>
          </Grid>
          <Grid item xs={5} className="table content">
            <input type="text" id="remarks2" className="remarks" ></input>
          </Grid>
          <Grid item xs={3} className="table">
            <button type="button" class="docButn" onclick="alert('clicked')">Choice Fill
            </button>
          </Grid>
          <Grid item xs={2} className="table">
            <input type="checkbox" id="checkBox3" className="checkbox">
            </input>
          </Grid>
          <Grid item xs={5} className="table content">
            <input type="text" id="remarks3" className="remarks" ></input>
          </Grid>
          <Grid item xs={3} className="table">
            <button type="button" class="docButn" onclick="alert('clicked')">Fee Receipt
            </button>
          </Grid>
          <Grid item xs={2} className="table">
            <input type="checkbox" id="checkBox4" className="checkbox">
            </input>
          </Grid>
          <Grid item xs={5} className="table content">
            <input type="text" id="remarks4" className="remarks" ></input>
          </Grid>
          <Grid item xs={10} className="table" >
            <button type="button" class="docButn" id="viewAppl">View Application Form
            </button>
          </Grid>

        </Grid>

        <Grid item xs={12} id="vrfyGrid" className='bolder'>
          <button type="button" class="vrfyButn">VERIFIED BY</button>  : None - NIT JAMSHEDPUR
        </Grid>

        <Grid item xs={12} id="overRider">
          <button type="button" class="docButn" id="optn">CANDIDATE HAS CHOSEN :<span className="bolder"> OPTION - 1 : LOCKED</span>
          </button>
        </Grid>


        <Grid container direction="column" justifyContent="center"
          alignItems="center" id="overRider" >
          <Grid item xs={12} id="botTable">
            Candidate Final Decision
          </Grid>

          <Grid item xs={6} id="botContent">
            <form>
              <select name="decision" id="decision" >
                <option value="0">--select--</option>
                <option value="1">D1</option>
                <option value="2">D2</option>
                <option value="3">D3</option>
                <option value="4">D4</option>
              </select>
              <br></br>
              <input type="submit" value="Confirm" className="docButn"></input>
            </form>
          </Grid>







        </Grid>


      </Grid>
    </div>
  );
}

export default App;
