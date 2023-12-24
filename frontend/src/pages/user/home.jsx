import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { useNavigate } from 'react-router-dom'
const Home = () => {
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

  return (
    <main className="bg-white w-full flex relative">
      <div className=" m-8 w-full" >
        <div className="flex justify-between">
          <div className="hd-p">DashBoard</div>
          <div className="text-gray-600 text-xl font-[Gudea]">
            <IconButton className="mr-3" color="inherit">
              <SearchIcon className='text-blue-700' />
            </IconButton>

            <IconButton className="mr-1" color="inherit" onClick={handleNotificationClick}>
              <Badge color="error" variant="dot" invisible={!hasNewNotification} >
                <NotificationsIcon className='text-rose-400' />
              </Badge>
            </IconButton>

            <span className='mx-2'>|</span>

            {formattedDate} {' '}
            <span className="text-xs">{formattedTime}</span>
          </div>
        </div>
        <span className="text-sm font-medium leading-4 px-1 text-zinc-400">Welcome back to Dask !!</span>

        <div className="grid grid-cols-3 gap-y-5 w-full">

          <section className="row-start-1 col-span-1">
            <img
              className="h-64"
              alt=""
              src="/rectangle-111.svg"
            />
          </section>

          <section className="row-start-1 col-start-2 flex flex-col justify-around items-baseline">
            <h2 className="hd-s">Personal Details</h2>

            <div>
              <h3 className="lb-p">Name</h3>
              <span className="text-p">
                Tomiwa Oyeledu Dolapo
              </span>
            </div>

            <div>
              <h3 className="lb-p">Hostelite Id</h3>
              <span className="text-p">
                H104
              </span>
            </div>

            <div>
              <h3 className="lb-p">Date of Birth</h3>
              <span className="text-p">
                August 27th, 1999
              </span>
            </div>

            <div>
              <h3 className="lb-p">Gender</h3>
              <span className="text-p">
                Male
              </span>
            </div>
          </section>

          <section className="row-start-1 col-start-3 flex flex-col justify-around items-baseline gap-3">
            <h4 className="hd-s">Dask Info</h4>
            <div >
              <h3 className="lb-p">Branch</h3>
              <span className="text-p">
                branchName
              </span>
            </div>

            <div>
              <h3 className="lb-p">Room no</h3>
              <span className="text-p">
                roomNo
              </span>
            </div>

            <div>
              <h3 className="lb-p">Bed No</h3>
              <span className="text-p">
                bedNo
              </span>
            </div>

            <div>
              <h3 className="lb-p">Manager</h3>
              <span className="text-p">
                managerName
              </span>
            </div>
          </section>

          <section className="row-start-2 col-start-1 flex flex-col justify-around items-baseline gap-3">
            <h4 className="hd-s">Address Details</h4>
            <div >
              <h3 className="lb-p">Address Line</h3>
              <span className="text-p">
                branchName
              </span>
            </div>

            <div>
              <h3 className="lb-p">City</h3>
              <span className="text-p">
                roomNo
              </span>
            </div>

            <div>
              <h3 className="lb-p">State</h3>
              <span className="text-p">
                bedNo
              </span>
            </div>

            <div>
              <h3 className="lb-p">Pincode</h3>
              <span className="text-p">
                managerName
              </span>
            </div>
            <h4 className="hd-s mt-5">Work Details</h4>
            <div >
              <h3 className="lb-p">Profession</h3>
              <span className="text-p">
                branchName
              </span>
            </div>

          </section>

          <section className="row-start-2 col-start-2 flex flex-col justify-around items-baseline gap-3">
            <h4 className="hd-s">Contact Details</h4>
            <div >
              <h3 className="lb-p">Contact No</h3>
              <span className="text-p">
                branchName
              </span>
            </div>

            <div>
              <h3 className="lb-p">Email Id</h3>
              <span className="text-p">
                roomNo
              </span>
            </div>

            <h4 className="hd-s mt-5">Guardian Details</h4>

            <div>
              <h3 className="lb-p">Guardian Name</h3>
              <span className="text-p">
                bedNo
              </span>
            </div>

            <div>
              <h3 className="lb-p">Relationship</h3>
              <span className="text-p">
                managerName
              </span>
            </div>

            <div>
              <h3 className="lb-p">Contact No</h3>
              <span className="text-p">
                managerName
              </span>
            </div>
          </section>

          <section className="row-start-2 col-start-3 flex flex-col justify-around items-baseline gap-3">
            <h4 className="hd-s">Additional Details</h4>
            <div >
              <h3 className="lb-p">Date Of Join</h3>
              <span className="text-p">
                branchName
              </span>
            </div>

            <div>
              <h3 className="lb-p">Valid Till</h3>
              <span className="text-p">
                roomNo
              </span>
            </div>

            <h4 className="hd-s mt-5">Guardian Details</h4>

            <div>
              <h3 className="lb-p">Total rent</h3>
              <span className="text-p">
                10000
              </span>
            </div>

            <div>
              <h3 className="lb-p">Current Status</h3>
              <span className="text-p">
                paid
              </span>
            </div>
          </section>

        </div>


      </div >
    </main >

  );
};

export default Home;
