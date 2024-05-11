import Image from "next/image";
import webLogo from "@/assets/webLogo.png";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

const navItems = [
  {
    route: "Home",
    pathname: "/",
  },
  {
    route: "Departments",
    pathname: "/departments",
  },
  {
    route: "Blogs",
    pathname: "/blogs",
  },
  {
    route: "Pages",
    pathname: "/pages",
  },
  {
    route: "Contact",
    pathname: "/contacts",
  },
];

const MiddleFooter = () => {
  return (
    <>
      <div className="max-w-[1470px] mx-auto  grid grid-cols-4 justify-items-center items-center py-8 px-6 gap-4">
        <div>
          <Image height={150} width={150} src={webLogo} alt="webLogo" />
          <Typography className="mt-8 mb-14">
            Our medical center offers the widest range of services in the area.
            We strive to provide our patients with the most high-quality help by
            top-notch experts in their fields.
          </Typography>
        </div>
        <div>
          <Typography variant="h6"> Departments</Typography>
          <div className="border-b-2 w-10 pt-3" />
          <ul className="mb-4 mt-6">
            <li>Laboratory Analysis</li>
            <li>Pediiatric</li>
            <li>Rehabilittation</li>
            <li>Gynaecological</li>
            <li>Ophthalmology</li>
            <li>Cardiac</li>
          </ul>
        </div>
        <div>
          <Typography variant="h6"> Latest news</Typography>
          <div className="border-b-2 w-10 pt-3" />
          <ul className="mb-4 mt-6">
            <li>Laboratory Analysis</li>
            <li>Pediiatric</li>
            <li>Rehabilittation</li>
            <li>Gynaecological</li>
            <li>Ophthalmology</li>
            <li>Cardiac</li>
          </ul>
        </div>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
          }}
          className="flex-col"
        >
          <Typography variant="h6"> Quick Links</Typography>
          <div className="border-b-2 w-10 pt-3 mb-6" />
          {navItems.map((item) => (
            <Link key={item} href={item.pathname}>
              <Button className="text-white">
                {item.route}
              </Button>
            </Link>
          ))}
        </Box>
      </div>
    </>
  );
};
export default MiddleFooter;
