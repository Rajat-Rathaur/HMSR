import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { hosteliteState } from '../../recoil/state';
import { useRecoilState } from 'recoil';
import { formatDate } from '../../utilities/functions';
import Skeleton from '@mui/material/Skeleton';

const url = process.env.SERVER_URL || 'http://localhost:4000';
const token = sessionStorage.getItem('token');

const LoadingSkeleton = () => (
  <section className="flex flex-col justify-around items-baseline gap-y-3">
    <h2 className="hd-s">Personal Details</h2>

    <div>
      <h3 className="lb-p">Name</h3>
      <Skeleton variant="text" />
    </div>

    <div>
      <h3 className="lb-p">Hostelite Id</h3>
      <Skeleton variant="text" />
    </div>

    <div>
      <h3 className="lb-p">Date of Birth</h3>
      <Skeleton variant="text" />
    </div>

    <div>
      <h3 className="lb-p">Gender</h3>
      <Skeleton variant="text" />
    </div>
  </section>
);

const Home = () => {
  const [hostelite, setHostelite] = useRecoilState(hosteliteState);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true)
        const response = await fetch(`${url}/api/hostelite/getHostelite`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        setHostelite(data.hostelite)
        setTimeout(() => {
          setIsLoading(false);
        }, 3000);
        
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    }
    fetchData();

  }, [])


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
    <main className="bg-white w-full flex relative p-8">
      <div className=" w-full" >
        <div className="flex justify-between">
          <div className="hd-p">DashBoard</div>
        </div>

        <span className="text-xs font-medium leading-4 px-1 text-zinc-400">Welcome back to Dask !!</span>

        <div className="grid  grid-cols-1 xs:grid-cols-2 lg:grid-cols-3  gap-y-5 w-full">
          <section className="bg-gray-400 my-5 mr-5">
            <img
              className="h-40"
              alt=""
            // src="/rectangle-111.svg"
            />
          </section>

          {isLoading ?
            <LoadingSkeleton /> :
            <section className="flex flex-col justify-around items-baseline gap-y-3">
              <h2 className="hd-s">Personal Details</h2>

              <div>
                <h3 className="lb-p">Name</h3>
                <span className="text-p">
                  {hostelite?.F_name + (hostelite?.M_name && ' ') + hostelite?.M_name + ' ' + hostelite?.L_name}
                </span>
              </div>

              <div>
                <h3 className="lb-p">Hostelite Id</h3>
                <span className="text-p">
                  {'H' + hostelite?.H_id}
                </span>
              </div>

              <div>
                <h3 className="lb-p">Date of Birth</h3>
                <span className="text-p">
                  {formatDate(hostelite?.DOB)}
                </span>
              </div>

              <div>
                <h3 className="lb-p">Gender</h3>
                <span className="text-p">
                  {hostelite?.gender}
                </span>
              </div>
            </section>
          }
          <section className="lg:row-start-1 lg:col-start-3 xs:row-start-3 xs:col-start-1 flex flex-col justify-around items-baseline gap-3">
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

          <section className="lg:row-start-2 lg:col-start-1 flex flex-col justify-around items-baseline gap-3">
            <h4 className="hd-s">Address Details</h4>
            <div >
              <h3 className="lb-p">Address Line</h3>
              <span className="text-p">
                {hostelite?.street}
              </span>
            </div>

            <div>
              <h3 className="lb-p">City</h3>
              <span className="text-p">
                {hostelite?.city}
              </span>
            </div>

            <div>
              <h3 className="lb-p">State</h3>
              <span className="text-p">
                {hostelite?.State}
              </span>
            </div>

            <div>
              <h3 className="lb-p">Pincode</h3>
              <span className="text-p">
                {hostelite?.Pincode}
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

          <section className="lg:row-start-2 lg:col-start-2 xs:row-start-2 xs:col-start-1 flex flex-col justify-around items-baseline gap-3">
            <h4 className="hd-s">Contact Details</h4>
            <div >
              <h3 className="lb-p">Contact No</h3>
              <span className="text-p">
                {hostelite?.phone_no}
              </span>
            </div>

            <div>
              <h3 className="lb-p">Email Id</h3>
              <span className="text-p">
                {hostelite?.Email_id}
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

          <section className="lg:row-start-2 lg:col-start-3 flex flex-col justify-around items-baseline gap-3">
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
