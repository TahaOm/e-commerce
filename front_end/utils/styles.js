import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    navbar: {
        backgroundColor: '#203040',
        '& a': {
            color: '#ffffff',
            marginLeft: 10,
        },
        // boxShadow: 'none',
    },
    main: {
        minHeight: '25vh',
    },
    footer: {
        position: 'static',
        bottom: 0,
        left: 0,
        right: 0,
    },
    brand: {
        fontWeight: 'bold',
        fontSize: '1.5rem',
    },
    section: {
        marginTop: 10,
        marginBottom: 10,
    }
}));

export default useStyles;