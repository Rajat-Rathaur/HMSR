import TwoWayTab from "../../mui/TwoWayTab";
import FeedbackIcon from '@mui/icons-material/Feedback';
import AssistantIcon from '@mui/icons-material/Assistant';
import Feedback from "../../sections/Feedback";
import Complaints from "../../sections/Complaints";
import { useSearchParams } from "react-router-dom";
const FeedbackPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const tab = searchParams.get('tab');
  return (
    <>
      <main className="bg-white w-full flex flex-col relative p-8">
        <div className=" w-full flex justify-center xs:justify-start" >
          <div>
            <div className="hd-p">Complaints</div>
            <span className="text-xs font-medium  leading-4 px-1 text-zinc-400">Your satisfaction is our priority.</span>
          </div>
        </div>

        <div className="my-5">
          <TwoWayTab label1='Feedback' label2='Complaint' icon1={<FeedbackIcon />} icon2={<AssistantIcon />} />
        </div>

        {tab === 'Feedback' && <Feedback />}
        {tab === 'Complaint' && <Complaints />}
      </main >

    </>
  );
};

export default FeedbackPage;
