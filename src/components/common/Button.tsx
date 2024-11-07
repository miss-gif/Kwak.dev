import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function BasicButtons({
  children,
}: {
  children: React.ReactNode;
}) {
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
      >
        {children}
      </Button>
      {/* <Button
        variant="contained"
        sx={{
          color: 'white',
          backgroundColor: 'black',
        }}
      >
        {children}
      </Button> */}
      {/* <Button variant="outlined">{children}</Button> */}
    </Stack>
  );
}
