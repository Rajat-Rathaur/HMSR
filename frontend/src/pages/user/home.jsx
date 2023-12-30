import React, { useEffect, useState } from 'react';
import { formatDate } from '../../utilities/functions';
import Skeleton from '@mui/material/Skeleton';
import useFetchData from '../../hooks/useFetchData';


const LoadingSkeletonSection1 = () => (
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

const LoadingSkeletonSection2 = () => (
  <section className="lg:row-start-1 lg:col-start-3 xs:row-start-3 xs:col-start-1 flex flex-col justify-around items-baseline gap-3">
    <h4 className="hd-s">Dask Info</h4>

    <div>
      <h3 className="lb-p">Branch</h3>
      <Skeleton variant="text" />
    </div>

    <div>
      <h3 className="lb-p">Room no</h3>
      <Skeleton variant="text" />
    </div>

    <div>
      <h3 className="lb-p">Bed No</h3>
      <Skeleton variant="text" />
    </div>

    <div>
      <h3 className="lb-p">Manager</h3>
      <Skeleton variant="text" />
    </div>
  </section>
);

const LoadingSkeletonSection3 = () => (
  <section className="lg:row-start-2 lg:col-start-1 flex flex-col justify-around items-baseline gap-3">
    <h4 className="hd-s">Address Details</h4>

    <div>
      <h3 className="lb-p">Address Line</h3>
      <Skeleton variant="text" />
    </div>

    <div>
      <h3 className="lb-p">City</h3>
      <Skeleton variant="text" />
    </div>

    <div>
      <h3 className="lb-p">State</h3>
      <Skeleton variant="text" />
    </div>

    <div>
      <h3 className="lb-p">Pincode</h3>
      <Skeleton variant="text" />
    </div>

    <h4 className="hd-s mt-5">Work Details</h4>

    <div>
      <h3 className="lb-p">Profession</h3>
      <Skeleton variant="text" />
    </div>
  </section>
);

const LoadingSkeletonSection4 = () => (
  <section className="lg:row-start-2 lg:col-start-2 xs:row-start-2 xs:col-start-1 flex flex-col justify-around items-baseline gap-3">
    <h4 className="hd-s">Contact Details</h4>

    <div>
      <h3 className="lb-p">Contact No</h3>
      <Skeleton variant="text" />
    </div>

    <div>
      <h3 className="lb-p">Email Id</h3>
      <Skeleton variant="text" />
    </div>

    <h4 className="hd-s mt-5">Guardian Details</h4>

    <div>
      <h3 className="lb-p">Guardian Name</h3>
      <Skeleton variant="text" />
    </div>

    <div>
      <h3 className="lb-p">Relationship</h3>
      <Skeleton variant="text" />
    </div>

    <div>
      <h3 className="lb-p">Contact No</h3>
      <Skeleton variant="text" />
    </div>
  </section>
);

const LoadingSkeletonSection5 = () => (
  <section className="lg:row-start-2 lg:col-start-3 flex flex-col items-baseline gap-3">
    <h4 className="hd-s top-0">Additional Details</h4>

    <div>
      <h3 className="lb-p">Date Of Join</h3>
      <Skeleton variant="text" />
    </div>

    <div>
      <h3 className="lb-p">Valid Till</h3>
      <Skeleton variant="text" />
    </div>

    <div>
      <h3 className="lb-p">Total rent</h3>
      <Skeleton variant="text" />
    </div>

    <div>
      <h3 className="lb-p">Current Status</h3>
      <Skeleton variant="text" />
    </div>
  </section>
);

const Home = () => {

  const { data: hostelite, isLoading } = useFetchData(
    '/api/hostelite/getHostelite');
  return (
    <main className="bg-white w-full flex relative px-3 py-5 sm:p-8">
      <div className=" w-full" >
        <div className="flex justify-between">
          <header className="hd-p">DashBoard</header>
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
            <LoadingSkeletonSection1 /> :
            <section className="flex flex-col justify-around items-baseline gap-y-3">
              <h2 className="hd-s">Personal Details</h2>

              <div>
                <h3 className="lb-p">Name</h3>
                <span className="text-p">
                  {hostelite?.hostelite_name}
                </span>
              </div>

              <div>
                <h3 className="lb-p">Hostelite Id</h3>
                <span className="text-p">
                  {'H' + hostelite?.h_id}
                </span>
              </div>

              <div>
                <h3 className="lb-p">Date of Birth</h3>
                <span className="text-p">
                  {formatDate(hostelite?.dob)}
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

          {isLoading ?
            <LoadingSkeletonSection2 /> :
            <section className="lg:row-start-1 lg:col-start-3 xs:row-start-3 xs:col-start-1 flex flex-col justify-around items-baseline gap-3">
              <h4 className="hd-s">Dask Info</h4>
              <div >
                <h3 className="lb-p">Branch</h3>
                <span className="text-p">
                  {hostelite.b_name}
                </span>
              </div>

              <div>
                <h3 className="lb-p">Room no</h3>
                <span className="text-p">
                  {hostelite.rNo}

                </span>
              </div>

              <div>
                <h3 className="lb-p">Bed No</h3>
                <span className="text-p">
                  {hostelite.bedNumber}
                </span>
              </div>

              <div>
                <h3 className="lb-p">Manager</h3>
                <span className="text-p">
                  {hostelite.mgr_name}
                </span>
              </div>
            </section>
          }
          {isLoading ?
            <LoadingSkeletonSection3 /> :
            <section className="lg:row-start-2 lg:col-start-1 flex flex-col justify-around items-baseline gap-3">
              <h4 className="hd-s">Address Details</h4>
              <div >
                <h3 className="lb-p">Address Line</h3>
                <span className="text-p">
                  {hostelite?.hostelite_street}
                </span>
              </div>

              <div>
                <h3 className="lb-p">City</h3>
                <span className="text-p">
                  {hostelite?.hostelite_city}
                </span>
              </div>

              <div>
                <h3 className="lb-p">State</h3>
                <span className="text-p">
                  {hostelite?.hostelite_state}
                </span>
              </div>

              <div>
                <h3 className="lb-p">Pincode</h3>
                <span className="text-p">
                  {hostelite?.hostelite_pincode}
                </span>
              </div>
              <h4 className="hd-s mt-5">Work Details</h4>
              <div >
                <h3 className="lb-p">Profession</h3>
                <span className="text-p">
                  {hostelite?.work}
                </span>
              </div>

            </section>
          }
          {isLoading ?
            <LoadingSkeletonSection4 /> :
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
                  {hostelite?.email_id}
                </span>
              </div>

              <h4 className="hd-s mt-5">Guardian Details</h4>

              <div>
                <h3 className="lb-p">Guardian Name</h3>
                <span className="text-p">
                  {hostelite?.h_dependents_name}
                </span>
              </div>

              <div>
                <h3 className="lb-p">Relationship</h3>
                <span className="text-p">
                  {hostelite?.h_dependents_relationship}
                </span>
              </div>

              <div>
                <h3 className="lb-p">Contact No</h3>
                <span className="text-p">
                  {hostelite?.h_dependents_phone_no}
                </span>
              </div>
            </section>
          }

          {isLoading ?
            <LoadingSkeletonSection5 /> :
            <section className="lg:row-start-2 lg:col-start-3 flex flex-col  items-baseline gap-3">
              <h4 className="hd-s top-0">Additional Details</h4>
              <div >
                <h3 className="lb-p">Date Of Join</h3>
                <span className="text-p">
                  {formatDate(hostelite.dateOfJoin)}
                </span>
              </div>

              <div>
                <h3 className="lb-p">Valid Till</h3>
                <span className="text-p">
                  {formatDate(hostelite.dateOfExit)}
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
          }

        </div>


      </div >
    </main >
  );
};

export default Home;
