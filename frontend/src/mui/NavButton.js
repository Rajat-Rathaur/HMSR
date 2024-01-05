import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

const NavButton = ({ location, name, icon, active }) => {
  const isLargeScreen = useMediaQuery('(min-width: 1024px)');
  const isBiggerScreen = useMediaQuery('(min-width: 768px)');

  const buttonStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    width: '100%',
    textDecoration: 'none',
    justifyContent: 'flex-start',
  };

  return (
    <Link to={location} className='px-5'>
      {isBiggerScreen &&
        <Button
          variant=""
          size="large"
          fullWidth
          color="primary"
          sx={{
            ...buttonStyle,
            backgroundColor: active ? '#faf5ff' : 'inherit',
            color: active ? '#1d4ed8' : 'inherit',
            '& .MuiSvgIcon-root': {
              marginRight: isLargeScreen ? '20px' : '10px',
            },
          }}
          startIcon={icon}
          disableRipple
        >
          {name}
        </Button>
      }

    </Link>
  );
};

export default NavButton;
