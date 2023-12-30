import React from 'react'
import IconButton from '@mui/material/IconButton';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { useNavigate } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import useMediaQuery from '@mui/material/useMediaQuery';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import { useRecoilState } from 'recoil';
import { sideDrawerState } from '../recoil/state';


const TopNavBar = () => {
    const isTabScreen = useMediaQuery('(max-width:890px)');

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'short',
    });

    const formattedTime = currentDate.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    });

    const navigate = useNavigate();
    const hasNewNotification = true;

    const handleNotificationClick = () => {
        navigate('/notifications')
    }

    const handleUpdateDetailsClick = () => {
        navigate('/updateDetails/?tab=Update+Details')
    }

    const toggleSidebar = () => {
        setOpen(!open)
    }
    const [open, setOpen] = useRecoilState(sideDrawerState);


    return (
        <>

            <nav className='flex bg-slate-100 w-full h-14 lg:px-10 md:px-6 px-3 py-2 shadow-sm sticky z-50'>
                <div className="tab:hidden flex mr-1">
                    <IconButton size='small' onClick={toggleSidebar}>
                        <DragHandleIcon className='mx-1' fontSize='small' />
                    </IconButton>
                </div>

                <div className="flex items-center justify-center relative">
                    <img src="/icons/logo.svg" alt="" className='h-12 w-12' />
                </div>

                <div className="flex justify-end items-center text-gray-600 flex-grow text-xl font-[Gudea] tab:space-x-4 space-x-1">
                    <div className='flex items-center justify-end h-10 flex-grow'>
                        <div className='flex bg-white sm:px-3 sm:rounded-lg rounded-full h-10 items-center justify-center sm:max-w-60 sm:min-w-48 w-auto'>
                            <IconButton size={isTabScreen ? 'small' : 'medium'}>
                                <SearchIcon className='mx-1' fontSize={isTabScreen ? 'small' : 'medium'} />
                            </IconButton>
                            <input type="text" placeholder='Type here...' className='hidden ml-1 items-center justify-center sm:flex font-sans font-medium text-gray-900 ' style={{ outline: 'none', padding: '2px', fontSize: '14px' }} />
                        </div>
                    </div>

                    <div>
                        <IconButton className="mr-3 " color="inherit" onClick={handleUpdateDetailsClick} size={isTabScreen ? 'small' : 'medium'} >
                            <ManageAccountsIcon className='text-blue-700' fontSize={isTabScreen ? 'small' : 'medium'} />
                        </IconButton>

                        <IconButton className="mr-1" color="inherit" onClick={handleNotificationClick} size={isTabScreen ? 'small' : 'medium'}>
                            <Badge color="error" variant="dot" invisible={!hasNewNotification} >
                                <NotificationsIcon className='text-rose-400' fontSize={isTabScreen ? 'small' : 'medium'} />
                            </Badge>
                        </IconButton>

                    </div>

                    <span >|</span>
                    <div>
                        <span className='sm:text-xl text-sm'>{formattedDate} {' '}</span>
                        <span className="text-xs">{formattedTime}</span>
                    </div>

                </div>
            </nav>
        </>
    )
}

export default TopNavBar