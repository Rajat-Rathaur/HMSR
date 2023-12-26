import useMediaQuery from '@mui/material/useMediaQuery';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useSearchParams } from "react-router-dom";

export default function TwoWayTab({ label1, label2, label3, icon1, icon2, icon3 }) {
    const isSmallScreen = useMediaQuery('(max-width:450px)');
    const [searchParams, setSearchParams] = useSearchParams();
    const tab = searchParams.get('tab')
    const changeTab = (value) => {
        setSearchParams({ 'tab': value })
    }

    return (
        <Tabs variant="fullWidth" value={tab} onChange={(event, value) => changeTab(value)}
            TabIndicatorProps={{
                style: {
                    backgroundColor: '#0f172a',
                },
            }}
        >
            <Tab value={label1} label={label1} icon={icon1} iconPosition={isSmallScreen ? 'top' : 'start'} disableRipple
                sx={{
                    '&.Mui-selected': { color: '#0f172a' },
                }} />
            <Tab value={label2} label={label2} icon={icon2} iconPosition={isSmallScreen ? 'top' : 'start'} disableRipple
                sx={{
                    '&.Mui-selected': { color: '#0f172a' },
                }} />
        </Tabs >
    );
}
