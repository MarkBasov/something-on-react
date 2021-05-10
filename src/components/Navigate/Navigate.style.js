import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
  Navigation: {
    '& > ul': {
      height: '100%',
      display: 'flex',
      listStyle: 'none',
      margin: 0,
      padding: 15,
      backgroundColor: '#0275d8',

      '& li': {
        alignItems: 'center',
        display: 'flex',
        margin: '0 10px',
        textAlign: 'center',
        position: 'relative',
        color: '#000',
        cursor: 'pointer',
      },
    },
  },
  Navigation__link: {
    borderBottom: '2px solid transparent',
    textDecoration: 'none',
    color: '#fff',

    '&:hover, &.active': {
      borderBottom: '2px solid red',
    }
  },
})

export default useStyles
