import {Box, Typography} from '@mui/material';
import {styles} from "./styles.js";

const EditUsers = () => {
    return (
        <Box sx={styles.header}>
            <Typography variant={'h2'} component={'h2'} sx={styles.title}>
                EDIT USER
            </Typography>

        </Box>
    );
};

export default EditUsers;
