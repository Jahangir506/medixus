import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Typography,
} from "@mui/material";
import Image from "next/image";
import DoneIcon from "@mui/icons-material/Done";
import studiesImg from "@/assets/image/studies.jpg";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Studies = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        className=" bg-[#F0F9FA]"
      >
        <Box className="w-1/2 h-full">
          <Image
            className="w-full rounded-tr-[5px] rounded-br-[350px]"
            src={studiesImg}
            alt="treatment Images"
          />
        </Box>
        <Box className="w-1/2 ml-12">
          <Typography variant="h3" gutterBottom>
            We carry out various <span className="text-[#00BCD1]">studies</span>{" "}
            <br /> and analysis
          </Typography>
          <Box className="w-1/2">
            <Accordion className="bg-[#F0F9FA]">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                Oncological diseases
              </AccordionSummary>
              <AccordionDetails>
                We are on the leading edge of cancer care, providing the full
                continuum of cancer treatments and supportive care services in a
                single convenient location. Our cancer specialists are experts
                at diagnosing and treating cancer tumors.
              </AccordionDetails>
            </Accordion>
            <Accordion className="bg-[#F0F9FA]">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                Viral infections
              </AccordionSummary>
              <AccordionDetails>
                Viral infections generally must run their course, with treatment
                aimed at easing symptoms and providing some relief while you’re
                sick. Sometimes, antiviral medications are prescribed for
                specific infections.
              </AccordionDetails>
            </Accordion>
            <Accordion className="bg-[#F0F9FA]">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                Nature and technology
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </AccordionDetails>
            </Accordion>
            <Accordion className="bg-[#F0F9FA]">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                Physical Rehabilitation
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </AccordionDetails>
            </Accordion>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default Studies;
