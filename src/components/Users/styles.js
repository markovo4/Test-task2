export const styles = {
    header: {
        margin: '80px auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '1240px',
        height: '808px',
        padding: '60px 80px 80px 80px',
        border: '1px solid black'
    },

    title: {
        fontFamily: 'Karla',
        fontSize: '24px',
        fontWeight: '500',
        lineHeight: '32px',
        letterSpacing: '6px',
        textAlign: 'left',
        marginBottom: '40px'
    },

    tableHeaders: {
        fontFamily: 'Karla',
        fontSize: '14px',
        fontWeight: '700',
        lineHeight: '20px',
        letterSpacing: '0.4000000059604645px',
        textAlign: 'left',
    },
    tableHeadersRight: {
        fontFamily: 'Karla',
        fontSize: '14px',
        fontWeight: '700',
        lineHeight: '20px',
        letterSpacing: '0.4000000059604645px',
        textAlign: 'right',
    },
    list: {
        overflow: 'auto',
        width: '100%'
    },

    buttonUsers: {
        '&.MuiButton-root': {
            padding: '14px 50px 14px 50px',
            borderRadius: '0',
            border: '1px solid #C4C4C4',
            textTransform: 'none',
            boxShadow: 'none',
            transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s',
            height: '48px',
            width: '200px',
            fontSize: '14px',
            fontWeight: '300',
            lineHeight: '20px',
            letterSpacing: '0.20002500712871552px',
            textAlign: 'left',
        },
        '&.MuiButton-outlined': {
            backgroundColor: '#ffffff',
            color: '#000000',
            '&:hover': {
                backgroundColor: '#ffffff',
            },
            '&:active': {
                boxShadow: 'none',
                backgroundColor: '#c2c2c3',
            },
            '&.Mui-disabled': {
                backgroundColor: '#bdbdbd',
                color: '#fff',
                boxShadow: 'none',
            }
        }
    },
    filters: {
        marginBottom: '40px'
    }
}