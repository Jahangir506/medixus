import { Box, Typography } from "@mui/material";
import Image from "next/image";
import DoneIcon from "@mui/icons-material/Done";
import treatmentImg from "@/assets/image/treatment.png";

const Studies = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        className=""
      >
        <Box className="w-1/2">
          <Image
            width={500}
            height={500}
            className="w-full"
            src={treatmentImg}
            alt="treatment Images"
          />
        </Box>
        <Box className="">
          <Typography variant="h3" gutterBottom>
            We carry out various <span className="text-[#00BCD1]">studies</span>{" "}
            <br /> and analysis
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
      </Box>
    </>
  );
};
export default Studies;
