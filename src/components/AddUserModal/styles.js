export const styles = {

    buttonCancel: {
        '&.MuiButton-root': {
            padding: '14px 50px 14px 50px',
            borderRadius: '0',
            border: '1px solid #C4C4C4',
            textTransform: 'none',
            boxShadow: 'none',
            transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s',
            height: '48px',
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
    buttonAdd: {
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
            textAlign: 'center',
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
    buttonGroup: {
        display: 'flex',
        justifyContent: 'flex-end',
        gap: '20px'
    }
}