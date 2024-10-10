import {Box, Button, List, Table, TableBody, TableCell, TableHead, TableRow, Typography} from '@mui/material';
import {styles} from './styles.js';
import Delete from "../../assets/svg/Delete.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {deleteUser, getUsers} from "../../redux/slices/localStorageSlice.js";
import AddUserModal from "../AddUserModal/index.js";
import MultipleSelectCheckmarks from "../UI/Multiselect/index.js";

const Users = () => {
    const {usersList} = useSelector(state => state.localStorage);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    const handleDeleteUser = (name) => {
        dispatch(deleteUser(name));
    };

    return (
        <Box sx={styles.header}>
            <Typography variant="h2" component="h2" sx={styles.title}>
                USERS
            </Typography>

            <Box sx={styles.filters}>
                <MultipleSelectCheckmarks/>
                <MultipleSelectCheckmarks/>
                <MultipleSelectCheckmarks/>
                <AddUserModal button={<Button variant="outlined" sx={styles.buttonUsers}>Add User</Button>}/>
            </Box>

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
                        {usersList && usersList.map((user, index) => (
                            <TableRow key={index} sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                                <TableCell component="th" scope="row">{user.name}</TableCell>
                                <TableCell>{user.department.name}</TableCell>
                                <TableCell align="right">{user.country.name}</TableCell>
                                <TableCell align="right">{user.status.name}</TableCell>
                                <TableCell align="right">
                                    <Button onClick={() => handleDeleteUser(user.name)}>
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
};

export default Users;
