import TwoWayTab from "../../mui/TwoWayTab";
import FeedbackIcon from '@mui/icons-material/Feedback';
import AssistantIcon from '@mui/icons-material/Assistant';
import Feedback from "../../sections/Feedback";
import Complaints from "../../sections/Complaints";
import { useSearchParams } from "react-router-dom";
import TableCollapsible from "../../mui/TableCollapsible";
import useFetchData from "../../hooks/useFetchData";

const ComplaintsTable = () => {
  const headers = {
    'issue': {
      minWidth: 100,
      align: 'center'
    }, 'status': {
      minWidth: 100,
      align: 'center'
    }, 'priority': {
      minWidth: 100,
      align: 'center'
    }, 'start_date': {
      minWidth: 100,
      align: 'center',
      type: 'date'
    }, 'end_date': {
      minWidth: 100,
      align: 'center',
      type: 'date'
    }, 'description': {
      minWidth: 100,
      align: 'center',
      hidden: true
    }, 'response': {
      minWidth: 100,
      align: 'center',
      hidden: true
    },
  };

  const { data: complaintsData, isLoading: isLoadingComplaints } = useFetchData(
    '/api/feeds/complaint');
    console.log(complaintsData);
  return (
    <TableCollapsible rowData={complaintsData} headers={headers} isLoading={isLoadingComplaints} />
  );
};

const Feeds = () => {
  const [searchParams] = useSearchParams();
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
        {tab === 'Complaint' && <>
          <Complaints />
          <div className="mt-10">
            <h2 className="mb-5 text-xl font-medium leading-4 px-1 text-zinc-400">Previous Complaints Raised</h2>
            <ComplaintsTable />
          </div>
        </>
        }

      </main >
    </>
  );
};

export default Feeds;
