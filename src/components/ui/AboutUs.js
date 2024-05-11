import { Box, Typography } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import treatmentImg from "@/assets/image/treatment.png";
import Image from "next/image";

const AboutUs = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
        className=""
      >
        <Box className='w-1/2 mt-5'>
          <Typography gutterBottom>About Us</Typography>
          <Typography variant="h3" gutterBottom>
            Clinic with <span className="text-[#00BCD1]">innovative</span>{" "}
            <br /> approach to treatment
          </Typography>
          <Typography my={4}>
            We provide the a wide range of medical services, so every person
            could <br /> have the opportunity to receive qualitative medical
            help.
          </Typography>
          <Box>
            <Typography>
              <DoneIcon />
              Adult and Children's Trauma Center
            </Typography>
            <Typography>
              <DoneIcon />
              Adult and Children's Trauma Center
            </Typography>
            <Typography>
              <DoneIcon />
              Adult and Children's Trauma Center
            </Typography>
            <Typography>
              <DoneIcon />
              Adult and Children's Trauma Center
            </Typography>
            <Typography>
              <DoneIcon />
              Adult and Children's Trauma Center
            </Typography>
          </Box>
        </Box>
        <Box className='w-1/2'>
          <Image
            width={500}
            height={500}
            className="w-full"
            src={treatmentImg}
            alt="treatment Images"
          />
        </Box>
      </Box>
    </>
  );
};
export default AboutUs;
