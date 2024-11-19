import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

interface BasicButtonProps {
  title: string;
  onClick?: () => void;
}

export default function BasicButton({ title, onClick }: BasicButtonProps) {
  return (
    <Stack spacing={2} direction="row">
      <Button
        variant="text"
        sx={{
          color: "currentColor",
          fontWeight: "bold",
          textDecoration: "underline",
          "&:hover": {
            color: "#fff",
            backgroundColor: "#EE8130",
          },
        }}
        onClick={onClick}
      >
        {title}
      </Button>
      {/* <Button
        variant="contained"
        sx={{
          color: 'white',
          backgroundColor: 'black',
        }}
      >
        {title}
      </Button> */}
      {/* <Button variant="outlined">{title}</Button> */}
    </Stack>
  );
}
