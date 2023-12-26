import useMediaQuery from '@mui/material/useMediaQuery';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function TwoWayTab({ value, label1, label2, changeTab, label3, icon1, icon2, icon3 }) {
    const isSmallScreen = useMediaQuery('(max-width:450px)');

    return (
        <Tabs variant="fullWidth" value={value} onChange={(event, value) => changeTab(value)}
            TabIndicatorProps={{
                style: {
                    backgroundColor: '#0f172a',
                },
            }}
        >
            <Tab label={label1} icon={icon1} iconPosition={isSmallScreen ? 'top' : 'start'} disableRipple
                sx={{
                    '&.Mui-selected': { color: '#0f172a' },
                }} />
            <Tab label={label2} icon={icon2} iconPosition={isSmallScreen ? 'top' : 'start'} disableRipple
                sx={{
                    '&.Mui-selected': { color: '#0f172a' },
                }} />
        </Tabs >
    );
}
