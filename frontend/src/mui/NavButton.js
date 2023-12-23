import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const NavButton = ({ location, name, icon, active }) => {

  const buttonStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    width: '100%',
    textDecoration: 'none',
    justifyContent: 'flex-start',
  };

  return (
    <Link to={location} >
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
            marginRight: '30px',
          },
        }}
        startIcon={icon}
      >
        {name}
      </Button>
    </Link>
  );
};

export default NavButton;
