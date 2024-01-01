import React from 'react'
import Carousel from '../mui/Carousel';
import { IconButton, Button } from '@mui/material';
import WifiIcon from '@mui/icons-material/Wifi';
import ChairAltOutlined from '@mui/icons-material/ChairAltOutlined';
import LocalHospitalOutlined from '@mui/icons-material/LocalHospitalOutlined';
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import LocalDiningOutlinedIcon from '@mui/icons-material/LocalDiningRounded';
import LocalLaundryServiceOutlinedIcon from '@mui/icons-material/LocalLaundryServiceOutlined';
import Facebook from '@mui/icons-material/Facebook';
import Instagram from '@mui/icons-material/Instagram';
import Twitter from '@mui/icons-material/Twitter';
import WhatsApp from '@mui/icons-material/WhatsApp';
import SearchIcon from '@mui/icons-material/EmailOutlined';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link, useNavigate } from 'react-router-dom';



const data = [
    {
        imgPath: '/icons/carousel/img1.png'
    },
    {
        imgPath: '/icons/carousel/img2.png'
    },
    {
        imgPath: '/icons/carousel/img3.png'
    },
    {
        imgPath: '/icons/carousel/img4.png'
    },
    {
        imgPath: '/icons/carousel/img5.png'
    },
    {
        imgPath: '/icons/carousel/img6.png'
    },
];


const Index = () => {

    const isTabScreen = useMediaQuery('(max-width:890px)');
    const isSmallScreen = useMediaQuery('(max-width:500px)');

    const outlinedTextStyle = {
        color: 'white',
        WebkitTextStroke: '1.2px black',
    };
    const navigate = useNavigate();
    const onClickLogin = () => {
        navigate('/login')
    }

    const smoothScrollTo = (elementId) => {
        const element = document.getElementById(elementId);
        if (element) {
            window.scrollTo({
                behavior: 'smooth',
                top: element.offsetTop,
            });
        }
    };
    return (
        <>
            <nav className='flex flex-row justify-between bg-slate-100 w-full h-14 lg:px-10 md:px-6 px-3 py-2 shadow-sm sticky top-0 z-50'>
                <div className='flex space-x-5 justify-center items-center'>
                    <Button onClick={() => smoothScrollTo('home')}
                        sx={{ bgcolor: '#f8fafc', px: '15px', color: 'black' }}
                    >Home</Button>

                    <Button onClick={() => smoothScrollTo('services')}
                        sx={{ bgcolor: '#f8fafc', px: '15px', color: 'black' }}
                    >Services</Button>
                    <Button onClick={() => smoothScrollTo('aboutUs')}
                        sx={{ bgcolor: '#f8fafc', px: '15px', color: 'black' }}
                    >About Us</Button>
                </div>
                <div className='flex space-x-5 justify-center items-center' >
                    <Button onClick={() => smoothScrollTo('connect')}
                        sx={{ bgcolor: '#f8fafc', px: '15px', color: 'black' }}
                    > Connect</Button>
                    <span>|</span>
                    <Button sx={{ bgcolor: '#f8fafc', px: '15px', color: 'black' }} onClick={onClickLogin}>Login</Button>
                </div>
            </nav>

            <div id='home' className='grid grid-cols-1 lg:grid-cols-2'>
                <div className='px-5 xs:px-10 xl:px-24 py-5 lg:py-8 flex flex-col items-center '>
                    <div className='items-center lg:block flex justify-center flex-col'>
                        <div className='my-5'>
                            <img className='h-auto' src="/icons/logo.svg" alt="" />
                        </div>

                        <h2 className='xss:px-0 px-2 text-3xl xs:text-4xl xs:leading-[52px] text-slate-800 font-bold'>Find The Place To <br />
                            Live {' '}
                            <span style={outlinedTextStyle}>AFFORDABLE</span>
                            {' '} <br className='hidden lg:flex' />
                            Easily Here</h2>

                        <p className='p-2 xs:p-0 text-zinc-400 mt-10 leading-7 sm:text-left text-center'>Everything you need about finding your place to live will be here, where it will be easier for you
                            The DASK provides an extensive number of facilities to make your stay as comfortable as possible. Our hostels spread all around, are equipped with modern facilities</p>

                        <div className='bg-slate-100  h-40  w-96 p-3 rounded-lg mt-10'>
                            {/* <Carousel /> */}
                        </div>
                    </div>
                </div>


                <div className='w-full hidden lg:flex justify-end'>
                    <div>
                        <img className=' h-auto' src="/icons/hostelPhoto.png" alt="" />
                    </div>
                </div>


                <div id='services' className='mt-10 py-12 px-3 xs:px-10 xl:px-24 col-span-full grid grid-cols-1 lg:grid-cols-2'>
                    <div className='flex flex-col w-full xl:pr-24'>
                        <h5 className='text-orange-400 flex items-center h-10 font-medium'>
                            <div className='bg-orange-400 h-[0.2px] w-8' />
                            Let’s Tour and see our Hostel!
                        </h5>
                        <h2 className='text-slate-800 text-4xl font-bold xs:pl-8 pl-14'>AMENITIES</h2>

                        <p className='text-zinc-400 mt-10 leading-7 '>Bring a box full of hopes, dreams, ambitions… and of course, your personal belongings. Everything else - furniture, appliances, food - has already been taken care of.</p>
                        <div className='grid grid-cols-2 mt-10'>
                            <div className='flex flex-col space-y-5'>
                                <p> <WifiIcon fontSize={isSmallScreen ? 'small' : 'medium'} /> <span className='ml-2 sm:ml-10 sm:text-base text-sm text-slate-800 font-semibold'>Unlimited Wifi</span></p>
                                <p> <ChairAltOutlined fontSize={isSmallScreen ? 'small' : 'medium'} /> <span className='ml-2 sm:ml-10 sm:text-base text-slate-800 font-semibold'>Furnished Room</span></p>
                                <p> <SportsEsportsOutlinedIcon fontSize={isSmallScreen ? 'small' : 'medium'} /> <span className='ml-2 sm:ml-10 sm:text-base text-sm text-slate-800 font-semibold'>Gaming Arena</span></p>
                                <p> <PersonOutlinedIcon fontSize={isSmallScreen ? 'small' : 'medium'} /> <span className='ml-2 sm:ml-10 sm:text-base text-sm text-slate-800 font-semibold'>24/7 Staff Help</span></p>
                            </div>
                            <div className='flex flex-col space-y-5'>
                                <p> <LocalLibraryOutlinedIcon fontSize={isSmallScreen ? 'small' : 'medium'} /> <span className='ml-2 sm:ml-10 sm:text-base text-sm text-slate-800 font-semibold'>24/7 Study room</span></p>
                                <p> <LocalHospitalOutlined fontSize={isSmallScreen ? 'small' : 'medium'} /> <span className='ml-2 sm:ml-10 sm:text-base text-sm text-slate-800 font-semibold'>24/7 Medical help</span></p>
                                <p> <LocalDiningOutlinedIcon fontSize={isSmallScreen ? 'small' : 'medium'} /> <span className='ml-2 sm:ml-10 sm:text-base text-sm text-slate-800 font-semibold'>Mess*</span></p>
                                <p> <LocalLaundryServiceOutlinedIcon fontSize={isSmallScreen ? 'small' : 'medium'} /> <span className='ml-2 sm:ml-10 sm:text-base text-sm text-slate-800 font-semibold'>Laundry*</span></p>
                            </div>
                        </div>
                    </div>

                    <div className='flex py-12 px-3 w-full justify-center items-center '>
                        <div className='lg:max-w-[500px] max-w-[650px] '>
                            <Carousel data={data} />
                        </div>
                    </div>
                </div>

                <div id='connect' className='col-span-full lg:px-16 xl:px-40 sm:py-12  '>
                    <div className='relative bg-[#D2F2E8] h-60 md:h-80 rounded-3xl w-full flex flex-col gap-y-8 items-center justify-center'>
                        <img src='/icons/index/img1.png' alt='YourImage' className='hidden xl:flex absolute top-8 left-60' />
                        <img src='/icons/index/img2.png' alt='YourImage' className='hidden md:flex absolute top-40 left-16' />
                        <img src='/icons/index/img3.png' alt='YourImage' className='hidden md:flex absolute top-20 right-16' />
                        <img src='/icons/index/img4.png' alt='YourImage' className='hidden lg:flex absolute right-44' />
                        <img src='/icons/index/img5.png' alt='YourImage' className='hidden md:flex absolute top-8 left-5' />
                        <img src='/icons/index/img6.png' alt='YourImage' className='hidden md:flex absolute bottom-4 left-48' />
                        <img src='/icons/index/img7.png' alt='YourImage' className='hidden md:flex absolute top-3 right-10 lg:right-48' />
                        <img src='/icons/index/img8.png' alt='YourImage' className='hidden md:flex absolute bottom-16 right-20' />

                        <h2 className='text-slate-800 text-2xl sm:text-3xl font-bold text-center leading-10'>
                            Subscribe For More Info <br />
                            and update from Us
                        </h2>
                        <div className='flex bg-white rounded-lg  h-12 items-center justify-center  w-auto'>
                            <IconButton size={isTabScreen ? 'small' : 'medium'}>
                                <SearchIcon color='warning' className='mx-1' fontSize={isTabScreen ? 'small' : 'medium'} />
                            </IconButton>
                            <input type="text" placeholder='Get in Touch with us...' className='lg:w-96 ml-1 items-center justify-center font-sans font-medium text-gray-900 ' style={{ outline: 'none', padding: '2px', fontSize: '15px' }} />
                            <div className='mr-5'>
                                <Button sx={{ bgcolor: '#f0fdf4' }} size={isSmallScreen ? 'small' : 'medium'} color='success'>Subscribe Now</Button>
                            </div>
                        </div>


                    </div>
                </div>
                <div id='aboutUs' className='mt-10 py-12 px-3 xs:px-10 xl:px-40  col-span-full'>
                    <div className='grid grid-cols-2'>
                        <div className=''>
                            <img className='w-20 h-12' src="/icons/logo.svg" alt="" />
                            <p className='text-zinc-400 text-sm leading-7'>That's essentially our story in one sentence.
                                Crammed up hostels or cooped up PGs - not much of a choice, is it?
                                That’s why we created Pedophiles - a place designed by people who've been in your shoes.
                                Understand you. And are inspired by you.
                            </p>
                            <p className='flex space-x-3 mt-3'>
                                <Link><Facebook sx={{ color: '#2981DE' }} /></Link>
                                <Link><Twitter sx={{ color: '#4AD3F7' }} /></Link>
                                <Link><Instagram sx={{ color: '#E435AD' }} /></Link>
                                <Link><WhatsApp sx={{ color: '#51BA5E' }} /></Link>
                            </p>
                        </div>
                        <div className='grid grid-cols-2 ml-32'>
                            <div className='flex flex-col space-y-3'>
                                <h5 className='font-bold text-slate-800'>At DASK</h5>
                                <a href='/' className='text-zinc-600 font-normal hover:text-blue-700'>Noticeboard</a>
                                <a href='/' className='text-zinc-600 font-normal hover:text-blue-700'>FAQs</a>
                                <a href='/' className='text-zinc-600 font-normal hover:text-blue-700'>Hostel Rules</a>
                                <a href='/' className='text-zinc-600 font-normal hover:text-blue-700'>Privacy Policy</a>
                            </div>

                            <div className='flex flex-col space-y-3'>
                                <h5 className='font-bold text-slate-800'>Contact</h5>
                                <p className='text-zinc-600 font-normal'>21 Narayan peth</p>
                                <p className='text-zinc-600 font-normal'>
                                    <a href="tel:+91987654321">+91 987654321</a>
                                </p>
                                <p className='text-zinc-600 font-normal'>
                                    <a href="mailto:info@dask.com">info@dask.com</a>
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Index;