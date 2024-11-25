import CheckboxGroup from "@/features/Project/components/ProjectForm/CheckboxGroup";
import { techStackListData } from "@/features/Project/data/techStackListData";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface BasicModalProps {
  techStack: string[];
  handleCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function BasicModal({
  techStack,
  handleCheckboxChange,
}: BasicModalProps) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>모달창 열기</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CheckboxGroup
            label="기술 스택"
            options={techStackListData}
            values={techStack}
            onChange={(e) => handleCheckboxChange(e)}
          />
        </Box>
      </Modal>
    </div>
  );
}
