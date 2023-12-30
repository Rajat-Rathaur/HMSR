
import TwoWayTab from "../../mui/TwoWayTab";
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import UpdateDetails from "../../sections/UpdateDetails";
import { useSearchParams } from "react-router-dom";
import UpdatePassword from "../../sections/UpdatePassword";
const EditDetailsExterior = () => {

  const [searchParams] = useSearchParams();
  const tab = searchParams.get('tab');


  return (
    <>
      <main className="bg-white w-full flex flex-col relative p-8">

        <div className=" w-full flex justify-center xs:justify-start" >
          <div>
            <header className="hd-p">Update Profile</header>
            <span className="text-xs font-medium leading-4 px-1 text-zinc-400">Experience first, pay later.</span>
          </div>
        </div>
        <div className="mt-5">
          <TwoWayTab icon1={<ManageAccountsIcon />} icon2={<ChangeCircleIcon />} label1='Update Details' label2='Change Password' />
          {tab === 'Update Details' && <UpdateDetails />}
          {tab === 'Change Password' && <UpdatePassword />}
        </div>
      </main>



    </>
  );
};

export default EditDetailsExterior;
