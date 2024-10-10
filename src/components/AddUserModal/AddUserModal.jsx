import {cloneElement, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Button, FormGroup} from '@mui/material';
import {useFormik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import {getUsers} from "../../redux/slices/localStorageSlice.js";
import {setModalAddUserOpen} from "../../redux/slices/ModalsSlice.js";
import ModalTemplate from "../UI/ModalTemplate/index.js";

import {styles} from './styles.js';

const formInitValues = {
    fullName: '',
    department: '',
    country: '',
    status: '',
};

const AddUserModal = ({button}) => {
    const {modalAddUserOpen} = useSelector(state => state.modals);
    const {usersList = []} = useSelector(state => state.localStorage);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    const handleOpen = () => dispatch(setModalAddUserOpen(true));
    const handleClose = () => dispatch(setModalAddUserOpen(false));

    const buttonWithOnClick = cloneElement(button, {onClick: handleOpen});

    const formik = useFormik({
        initialValues: formInitValues,
        onSubmit: (values, {resetForm}) => {
        },
    });

    return (
        <ModalTemplate
            title="Log in"
            button={buttonWithOnClick}
            open={modalAddUserOpen}
            handleClose={handleClose}
        >
            <form onSubmit={formik.handleSubmit} style={styles.formLogin}>
                <FormGroup className="flex">
                    <Button type="submit" variant="contained" sx={styles.loginButton}>
                        Cancel
                    </Button>
                    <Button type="submit" variant="contained" sx={styles.loginButton}>
                        Add
                    </Button>
                </FormGroup>
            </form>
        </ModalTemplate>
    );
};

AddUserModal.propTypes = {
    button: PropTypes.element.isRequired,
};

export default AddUserModal;
