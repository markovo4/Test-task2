import {Box, Button, List, Table, TableBody, TableCell, TableHead, TableRow, Typography} from '@mui/material';
import {styles} from './styles.js';
import {users} from '../../assets/data.js';
import Delete from "../../assets/svg/Delete.jsx";

const Users = () => {
    return (
        <Box sx={styles.header}>
            <Typography variant={'h2'} component={'h2'} sx={styles.title}>
                USERS
            </Typography>

            <List sx={styles.list}>
                <Table sx={{minWidth: 650}} aria-label="user table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={styles.tableHeaders}>Full Name</TableCell>
                            <TableCell sx={styles.tableHeaders}>Department</TableCell>
                            <TableCell align="right" sx={styles.tableHeadersRight}>Country</TableCell>
                            <TableCell align="right" sx={styles.tableHeadersRight}>Status</TableCell>
                            <TableCell align="right" sx={styles.tableHeadersRight}></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user, index) => (
                            <TableRow key={index} sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                                <TableCell component="th" scope="row">{user.name}</TableCell>
                                <TableCell>{user.department.name}</TableCell>
                                <TableCell align="right">{user.country.name}</TableCell>
                                <TableCell align="right">{user.status.name}</TableCell>
                                <TableCell align="right">
                                    <Button>
                                        <Delete/>
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </List>


        </Box>
    );
}

export default Users;
