export const styles = {
    buttonUsers: {
        '&.MuiButton-root': {
            padding: '14px 112px 14px 112px',
            borderRadius: '0',
            border: '1px solid #C4C4C4',
            textTransform: 'none',
            boxShadow: 'none',
            transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s',
            height: '48px',
            width: '300px',
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

    buttonActive: {
        '&.MuiButton-root': {
            padding: '14px 112px 14px 112px',
            borderRadius: '0',
            border: '1px solid #C4C4C4',
            textTransform: 'none',
            boxShadow: 'none',
            transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s',
            height: '48px',
            width: '300px',
            fontSize: '14px',
            fontWeight: '300',
            lineHeight: '20px',
            letterSpacing: '0.20002500712871552px',
            textAlign: 'left',
        },
        '&.MuiButton-outlined': {
            backgroundColor: '#c2c2c3',
            color: '#000000',
            boxShadow: 'none',
            '&:hover': {
                backgroundColor: '#c2c2c3',
                boxShadow: 'none',
            },
            '&:active': {
                boxShadow: 'none',
                backgroundColor: '#c2c2c3',
            },

        }
    },
    header: {
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '1440px',
        height: '88px',
        padding: '0 80px 0 80px',
        gap: '20px',
        borderBottom: '1px solid black',
    },

}