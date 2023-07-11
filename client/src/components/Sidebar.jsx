//import { BorderRight } from "@mui/icons-material";
import { Drawer } from "@mui/material";
//import { Modal } from "bootstrap";
import SidebarContent from "./SidebarContent.jsx";
import {useState} from 'react';

const Sidebar=({openDrawer})=>{
    return (
       <Drawer
        anchor='left'
        open= {openDrawer}
        hideBackdrop={true}
        variant="persistent"
        ModalProps={{
            keepMounted:true
        }}
       
        sx={{
            '& > .MuiDrawer-paper':
            {
                marginTop:'64px',
                width: 250,
                background:"#F5F5F5",
                borderRight:'none',
                height:'calc(100vh-64px)'
            }
        }}
        >
            <SidebarContent></SidebarContent>
                    </ Drawer>
      
    )
}
export default Sidebar;