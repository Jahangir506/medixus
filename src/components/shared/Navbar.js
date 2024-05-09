"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import webLogo from "@/assets/webLogo.png";
import Image from "next/image";
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

function Navbar() {
  return (
    <AppBar className="top-0 sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{display: "flex", justifyContent: 'space-between'}}>
          <Image src={webLogo} width={125} height={125} alt="Website Logo" />
          <Box>
            {navItems.map((item) => (
              <Link key={item} href={item.pathname}>
                <Button className='text-white'>
                    {item.route}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
