import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    navbar: {
        backgroundColor: '#203040',
        '& a': {
            color: '#ffffff',
            marginLeft: 10,
        },
    },
    main: {
        minHeight: '80vh',
    },
    footer: {
        position: 'static',
        bottom: 0,
        left: 0,
        right: 0,
    }
})
export default useStyles;