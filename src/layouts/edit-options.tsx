import { Box } from "@mui/material";
import { Button, ButtonGroup } from "@mui/material";
import styled from "@emotion/styled";
import { theme } from "@theme/index";

const EditOptions = () => {
  return (
    <Box sx={{ position: "absolute", marginLeft: "440px", marginTop: "80px" }}>
      <OptionsGroup
        size="medium"
        variant="text"
        color="inherit"
        orientation="vertical"
      >
        <EditButton>수정</EditButton>
        <DeleteButton>삭제</DeleteButton>
      </OptionsGroup>
    </Box>
  );
};

export default EditOptions;

const DeleteButton = styled(Button)({
  height: "30px",
  width: "100%",
  fontSize: theme.typography.body4.fontSize,
  fontWeight: 500,
  color: "#FF3B3B",
});
const EditButton = styled(Button)({
  height: "30px",
  width: "100%",
  fontSize: theme.typography.body4.fontSize,
  fontWeight: 500,
  color: "#191919",
});
const OptionsGroup = styled(ButtonGroup)({
  border: "1px solid #C9CCD7",
  borderRadius: "10px",
  width: "61px",
  height: "60px",
  background: "white",
});
