import React from "react";
import { LightbulbOutlined } from "@mui/icons-material";
import { Box } from "@mui/system";
import { styled, Typography } from "@mui/material";

const LightBulb = styled(LightbulbOutlined)`
  font-size: 120px;
  color: #f5f5f5;
`;

const Text = styled(Typography)`
  font-size: 22px;
  color: #80868b;
`;
const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20vh;
`;

function EmptyNotes() {
  return (
    <Container>
      <LightBulb />
      <Text>Notes you add appear here</Text>
    </Container>
  );
}

export default EmptyNotes;
