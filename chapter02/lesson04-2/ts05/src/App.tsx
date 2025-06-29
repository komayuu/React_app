import { Button, Container, CssBaseline, Grid, Stack } from "@mui/material"

function App() {

  return (
    <>
      <CssBaseline />

      <Container maxWidth="lg">
        <h1>メインコンテンツ</h1>
        <p>ここにコンテンツが入ります。</p>
      </Container>

      <Container maxWidth="md">
        <h1>メインコンテンツ</h1>
        <p>ここにコンテンツが入ります。</p>
      </Container>

      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item md={4} sx={{ backgroundColor: 'lightblue' }}>
            <h1>4列分</h1>
          </Grid>
          <Grid item md={2} sx={{ backgroundColor: 'lightcoral' }}>
            <h1>2列分</h1>
          </Grid>
          <Grid item md={1} sx={{ backgroundColor: 'lightcyan' }}>
            <h2>1列分</h2>
          </Grid>
          <Grid item md={5} sx={{ backgroundColor: 'lightgreen' }}>
            <h1>5列分</h1>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item md={8} sx={{ backgroundColor: 'yellowgreen' }}>
            <Stack spacing={2} direction="column">
              <Button variant="contained">ボタン1</Button>
              <Button variant="contained">ボタン2</Button>
              <Button variant="contained">ボタン3</Button>
            </Stack>
          </Grid>
          <Grid item md={4} sx={{ backgroundColor: 'violet' }}>
            <Stack spacing={2} direction="row">
              <Button variant="contained">ボタン1</Button>
              <Button variant="contained">ボタン2</Button>
              <Button variant="contained">ボタン3</Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default App
