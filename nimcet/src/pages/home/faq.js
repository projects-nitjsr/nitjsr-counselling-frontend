import { Box, Grid, Typography } from "@mui/material";
import FAQs from "../../assets/data/faq";
function FAQ() {
  return (
    <Box>
      <ol type="1">
        {FAQs.map((faq) => (
          <li key={faq.key}>
            <Grid container direction={"column"}>
              <Grid item>
                <Typography sx={{fontWeight:600}} variant="body1" >{faq.que}</Typography>
              </Grid>
              <Grid item>
                <Typography>{faq.ans}</Typography>
              </Grid>
            </Grid>
          </li>
        ))}
      </ol>
    </Box>
  );
}

export default FAQ;
