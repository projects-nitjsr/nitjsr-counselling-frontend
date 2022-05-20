import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Content from "./formTable";
import "./style.css";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: 390,
  width: 540,
  bgcolor: "background.paper",
  // border: '2px solid #000',
  // boxShadow: 24,
};

export default function NewCouncellorModal({ open, handleClose, ...props }) {
  // const [open, setOpen] = React.useState(false);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className="f3-outline">
          <div className="f3-title">
            Add New Employee
            <IconButton onClick={() => {}}>
              <CloseIcon />
            </IconButton>
          </div>
          <div className="f3-form-table">
            <Content />
          </div>
          <div className="f3-buttons create-employee-button">
            <button type="button" className="employee-btn">
              Create Employee
            </button>
          </div>
          <hr></hr>
          <div className="f3-buttons close-button">
            <button type="button" className="close-btn">
              Close
            </button>
          </div>
        </div>
      </Box>
    </Modal>
  );
}
