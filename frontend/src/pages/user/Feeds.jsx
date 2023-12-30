import TwoWayTab from "../../mui/TwoWayTab";
import FeedbackIcon from '@mui/icons-material/Feedback';
import AssistantIcon from '@mui/icons-material/Assistant';
import Feedback from "../../sections/Feedback";
import Complaints from "../../sections/Complaints";
import { useSearchParams } from "react-router-dom";

const Feeds = () => {
  const [searchParams] = useSearchParams();
  const tab = searchParams.get('tab');

  return (
    <>
      <main className="bg-white w-full flex flex-col relative p-8">
        <div className=" w-full flex justify-center xs:justify-start" >
          <div>
            {tab === 'Complaint' && <>
              <header className="hd-p">Complaints</header>
              <span className="text-xs font-medium  leading-4 px-1 text-zinc-400">Always ready to resolve your concerns.</span>
            </>}
            {tab === 'Feedback' && <>
              <header className="hd-p">Feedback</header>
              <span className="text-xs font-medium  leading-4 px-1 text-zinc-400">Your satisfaction is our priority.</span>
            </>}
          </div>
        </div>

        <div className="my-5">
          <TwoWayTab label1='Complaint' label2='Feedback' icon1={<AssistantIcon />} icon2={<FeedbackIcon />} />
        </div>

        {tab === 'Complaint' && <Complaints />}
        {tab === 'Feedback' && <Feedback />}

      </main >
    </>
  );
};

export default Feeds;
