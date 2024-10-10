import {Box, Button} from '@mui/material';
import {useLocation, useNavigate} from 'react-router-dom';
import routerNames from '../../router/routes/routerNames.js';
import {styles} from './styles.js';

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = (e) => {
        const {name} = e.target;
        navigate(name);
    };

    return (
        <Box sx={styles.header}>
            <Button
                variant='outlined'
                sx={location.pathname === routerNames.pageEditUsers ? styles.buttonActive : styles.buttonUsers}
                name={routerNames.pageEditUsers}
                onClick={handleClick}
            >
                Edit Users
            </Button>
            <Button
                variant='outlined'
                sx={location.pathname === routerNames.pageUsers ? styles.buttonActive : styles.buttonUsers}
                name={routerNames.pageUsers}
                onClick={handleClick}
            >
                Users
            </Button>
        </Box>
    );
};

export default Header;
