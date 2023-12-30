import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import VerifiedIcon from '@mui/icons-material/Verified';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useRecoilState } from 'recoil';
import { sideDrawerState } from '../recoil/state';
import { Link } from 'react-router-dom';

export default function SideDrawer({ tabs }) {
    const [open, setOpen] = useRecoilState(sideDrawerState);

    const toggleDrawer = () => {
        setOpen(!open);
    }

    const list = () => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer}
            onKeyDown={toggleDrawer}
        >
            <div className="bg-slate-100 h-12 flex flex-row w-full justify-center items-center p-3 py-9">
                <img
                    className=" w-10 h-10"
                    alt=""
                    src="/ellipse-1.svg"
                // data-animate-on-scroll
                />

                <div className=" tab:flex flex-col px-3 w-full">
                    <h3 className="flex w-full text-gray-850 font-medium text-lg">Anna George</h3>
                    <p className="flex text-slate-400 font-medium text-sm ">
                        HN-512
                    </p>
                </div>

                <span className="flex items-center">
                    <VerifiedIcon className="text-green-700" />
                </span>
            </div>

            <Divider />

            <List>
                {tabs.map((tab) => (
                    <Link to={tab.location}>
                        <ListItem key={tab.name} disablePadding>
                            <ListItemButton disableRipple sx={{
                                backgroundColor: tab?.active ? '#faf5ff' : 'inherit',
                                color: tab?.active ? '#1d4ed8' : 'inherit',
                            }} >
                                <ListItemIcon sx={{
                                    backgroundColor: tab?.active ? '#faf5ff' : 'inherit',
                                    color: tab?.active ? '#1d4ed8' : 'inherit',
                                }} >{tab.icon}</ListItemIcon>
                                <ListItemText primary={tab.name} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                ))}
            </List>

            <Divider />

            <List>
                <ListItem >
                    <Button color="error" fullWidth size="large" sx={{ paddingY: '12px', backgroundColor: '#fee2e2' }} endIcon={<ExitToAppIcon sx={{ marginLeft: '8px' }} />}>Logout</Button>
                </ListItem>

            </List>
        </Box>
    );

    return (
        <div>
            <>
                <Drawer
                    anchor='left'
                    open={open}
                    onClose={toggleDrawer}
                >
                    {list()}
                </Drawer>
            </>
        </div>
    );
}
