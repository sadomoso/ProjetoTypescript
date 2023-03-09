import { Button, Stack, AppBar } from "@mui/material";

export default function Navbar() {
  return (
    <header>
      <AppBar position="static">
        <Stack
          direction="row"
          justifyContent={"center"}
          spacing={"30%"}
          bgcolor={"grey"}
          color="white"
          height="80px"
        >
          <Button href="/" color="inherit" variant="outlined">
            Home
          </Button>

          <Button href="/" color="inherit" variant="outlined">
            Titulo
          </Button>

          <Button variant="outlined" color="inherit" href="/inscricao">
            inscreva-se
          </Button>
        </Stack>
      </AppBar>
    </header>
  );
}
