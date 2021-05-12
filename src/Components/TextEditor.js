
import React,{useState,useEffect} from 'react';
import { fade,Input,withStyles } from '@material-ui/core';


const TextEditor = ({classes,textHandler}) => {

    let [value, setValue] = useState(null);
    useEffect(() => {
        const timehandler = setTimeout(() => {
        textHandler(value);
        }, 1500);
        return () => {
        clearTimeout(timehandler);
        };
    }, [value]);

    return (
            <Input 
            className={classes.input}
            placeholder="Enter Message..."
            autoFocus
            required
            multiline
            rows="4"
            onChange={(event)=> {setValue(event.target.value)}}
            />
    );
}

const BootstrapInput = withStyles((theme) => ({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.common.white,
      border: '1px solid #ced4da',
      fontSize: 16,
      width: '75vw',
      maxWidth: '600px',
      padding: '10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  }))(TextEditor);
  
export default BootstrapInput;