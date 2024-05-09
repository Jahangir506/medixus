"use client";
import {  Box, IconButton, Stack,} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const FristNavBar = () => {
  return (
    <>
          <Box sx={{ display: "flex", justifyContent: "space-between" }} className="max-w-[1550px] py-1.5 mx-auto">
              <Box sx={{display: 'flex', alignItems: 'center'}}>
                <p>md.jahangir.alam9649@gmail.com</p>
                <p className="ml-2">+8801615703506</p>
              </Box>

                <Box className="">
                  <Stack direction="row">
                    <IconButton>
                      <FacebookIcon />
                    </IconButton>
                    <IconButton>
                      <XIcon />
                    </IconButton>
                    <IconButton>
                      <LinkedInIcon />
                    </IconButton>
                  </Stack>
                </Box>
            </Box>
    </>
  );
};
export default FristNavBar;
