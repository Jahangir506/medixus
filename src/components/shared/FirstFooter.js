import { Box, Button, IconButton, Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const FirstFooter = () => {
  return (
    <>
      <div className=" py-9 mt-20 max-w-[1470px] mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center w-1/2">
          <input className="h-[54px] rounded-md rounded-r-none w-full p-2 text-black" />
          <Button className="bg-[#00BCD1] rounded-l-none  w-28 lg:w-32 md:max-w-xl lg:mx-0  mx-auto hover:bg-[#346BAE] h-[56px]  text-white">
            Subscribe
          </Button>
        </div>
        <Box className="w-1/2">
                  <Stack direction="row" className="justify-end">
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
      </div>
    </>
  );
};
export default FirstFooter;
