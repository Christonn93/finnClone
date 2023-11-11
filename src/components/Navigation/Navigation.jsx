// Importing React
import React from "react";

// Importing MUI
import { Box } from "@mui/material";

// Importing icons
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

// Importing components
import NavLink from "./NavLink";

const Navigation = () => {


 return (
  <>
   <Box
    sx={{
     display: "flex",
     gap: 2,
     p: 1,
    }}
   >
    <Box>
     <NavLink text="Varslinger" icon={<NotificationsNoneOutlinedIcon />} />
    </Box>
    <Box>
     <NavLink text="Ny annonse" icon={<AddCircleOutlineRoundedIcon />} />
    </Box>
    <Box>
     <NavLink text="Meldinger" icon={<MessageOutlinedIcon />} />
    </Box>
    <Box>
     <NavLink text="Min FINN" icon={<AccountCircleOutlinedIcon />} />
    </Box>
   </Box>
  </>
 );
};

export default Navigation;
