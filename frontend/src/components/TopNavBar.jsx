import React from 'react'
import IconButton from '@mui/material/IconButton';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { useNavigate } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
const TopNavBar = () => {

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
        navigate('/updateDetails')
    }
    return (
        <div className='flex relative justify-between bg-slate-100 w-full h-14 px-5 shadow-sm sticky z-50'>
            <div className="items-center justify-center flex">
                <img src="icons/logo.svg" alt="" className='h-16 w-16' />
            </div>
            <div className="text-gray-600 text-xl font-[Gudea] flex justify-center items-center mr-3 space-x-4">

                <div className='flex items-center justify-center h-10'>
                    <div className='flex bg-white px-3 rounded-lg h-10 items-center justify-center'>
                        <IconButton size='small'>
                            <SearchIcon className='mx-1' />
                        </IconButton>
                        <input type="text" placeholder='Type here...' className='ml-1 items-center justify-center flex font-sans font-medium text-gray-900 w-60' style={{ outline: 'none', padding: '2px', fontSize: '14px' }} />
                    </div>
                </div>

                <div>
                    <IconButton className="mr-3 " color="inherit" onClick={handleUpdateDetailsClick}>
                        <ManageAccountsIcon className='text-blue-700' />
                    </IconButton>

                    <IconButton className="mr-1" color="inherit" onClick={handleNotificationClick}>
                        <Badge color="error" variant="dot" invisible={!hasNewNotification} >
                            <NotificationsIcon className='text-rose-400' />
                        </Badge>
                    </IconButton>
                </div>

                <span className='mx-2'>|</span>
                <div>
                    {formattedDate} {' '}
                    <span className="text-xs">{formattedTime}</span>
                </div>
            </div>
        </div>
    )
}

export default TopNavBar