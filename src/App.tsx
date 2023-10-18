import { Button } from "@mui/material";
import styled from "@emotion/styled";
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const App = () => {
  return (
    <Container>
      <Button variant="contained" color="primary">
        Hello Material UI
      </Button>
    </Container>
  );
};

export default App;
