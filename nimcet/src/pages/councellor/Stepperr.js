import React from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';

import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';

const steps = ['Personel Details', 'Academic Details', 'Marks Information', 'Decision'];


// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
        Action To Be Taken
      </Typography>
      <Typography sx={{ fontSize: 10 }} component="div">
        Check the document carefully. Accept only if document is clear enough and authentic otherwise reject it.
      </Typography>
      <div style={{ padding: '1rem' }}>
        <div style={{ padding: '0.5rem' }}><label style={{paddingRight:'1rem'}}>Aadhar Card</label>
          <select name="acard" id="acard">
            <option value="approve">approve</option>
            <option value="reject">reject</option>
          </select>
        </div>
        <div style={{ padding: '0.5rem' }}><label>Enter Remarks</label><input type="text" placeholder='Remarks' /> </div>
      </div>
    </CardContent>
    <CardActions>
      <div style={{marginLeft:'auto',marginRight:'auto'}}>
      <Button variant="contained">Submit</Button>
      </div>
    </CardActions>
  </React.Fragment>
);




function Stepperr() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
        // find the first step that has been completed
        steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Stepper nonLinear activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={label} completed={completed[index]}>
              <StepButton color="inherit" onClick={handleStep(index)}>
                {label}
              </StepButton>
            </Step>
          ))}
        </Stepper>
        <div>
          {allStepsCompleted() ? (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you&apos;re finished
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button onClick={handleReset}>Reset</Button>
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {activeStep + 1 === 1 ? <Box sx={{ mt: 2, mb: 1 }}>
                <h2>General Details</h2>
                <br /><TextField id="standard-basic" label="Name" variant="standard" />
                <br />  <TextField id="standard-basic" label="Reg Number" variant="standard" />
                <br /> <TextField id="standard-basic" label="Dummy" variant="standard" />
                <br />  <TextField id="standard-basic" label="Standard" variant="standard" />


              </Box> : null}

              {activeStep + 1 === 2 ? <Box sx={{ mt: 2, mb: 1 }}>
                <h2>Academic Details</h2>
                <br /><TextField id="standard-basic" label="Name" variant="standard" />
                <br />  <TextField id="standard-basic" label="Reg Number" variant="standard" />
                <br /> <TextField id="standard-basic" label="Dummy" variant="standard" />
                <br />  <TextField id="standard-basic" label="Standard" variant="standard" />



              </Box> : null}

              {activeStep + 1 === 3 ? <Box sx={{ mt: 2, mb: 1 }}>
                <h2>Marks Information</h2>
                <br /><TextField id="standard-basic" label="Name" variant="standard" />
                <br />  <TextField id="standard-basic" label="Reg Number" variant="standard" />
                <br /> <TextField id="standard-basic" label="Dummy" variant="standard" />
                <br />  <TextField id="standard-basic" label="Standard" variant="standard" />



              </Box> : null}

              {activeStep + 1 === 4 ? <Box sx={{ mt: 2, mb: 1 }}>
                <h2>Decision</h2>
                <br /><TextField id="standard-basic" label="Name" variant="standard" />
                <br />  <TextField id="standard-basic" label="Reg Number" variant="standard" />
                <br /> <TextField id="standard-basic" label="Dummy" variant="standard" />
                <br />  <TextField id="standard-basic" label="Standard" variant="standard" />



              </Box> : null}


              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </Button>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button onClick={handleNext} sx={{ mr: 1 }}>
                  Next
                </Button>
                {activeStep !== steps.length &&
                  (completed[activeStep] ? (
                    <Typography variant="caption" sx={{ display: 'inline-block' }}>
                      Step {activeStep + 1} already completed
                    </Typography>
                  ) : (
                    <Button onClick={handleComplete}>
                      {completedSteps() === totalSteps() - 1
                        ? 'Finish'
                        : 'Complete Step'}
                    </Button>
                  ))}
              </Box>
            </React.Fragment>
          )}
        </div>

      </Box>
      <div >
      

          <Card variant="outlined">{card}</Card>
       

      </div>
    </>
  )
}

export default Stepperr