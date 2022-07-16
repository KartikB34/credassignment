import React, {useState} from 'react';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/styles';
import './Form.css';

const UseStyles = makeStyles({
  field:{
    marginTop: 10,
    marginBottom: 10,
    width: 300,
  },

  cityselector:{
    width: 300,
    marginTop: 5,
    marginBottom: 5,
  },

  btn:{
    backgroundColor:'#da2128',
    color:'white',
    width: 300,
    marginTop: 40,
    marginBottom: 20,

    '&:hover':{
      backgroundColor:'red',
    }
  }
})



const Form = () => {

  const classes = UseStyles()

  const [values, SetValues] = useState ({
    name:"",
    contact:"",
    city:""
  });

  const [submitted,setSubmitted] = useState (false);

  const handleNameChange = (event) => {
    SetValues({...values,name: event.target.value});
    setSubmitted(false);
  }

  const handleContactChange = (event) => {
    SetValues({...values,contact: event.target.value});
    setSubmitted(false);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  }

  const [city, setCity] = useState ();

  const handleChange = (event) => {
    SetValues({...values,city: event.target.value});
    setSubmitted(false);
  }


  return (

    <div className='form-container'>

      <form noValidate autoComplete='off' className='form' onSubmit={handleSubmit}>

        <TextField
         className={classes.field}
         onChange={handleNameChange}
         value={values.name}
         label="Name"
         variant='outlined'
         required
         />
         
         {submitted && !values.name ? <span className='only-span'>Please enter your name</span> : null}

        <TextField
         className={classes.field}
         onChange={handleContactChange}
         value={values.contact}
         label="Contact no."
         type="number"
         variant='outlined'
         required   
         />
         
         {submitted && !values.contact ? <span className='only-span'>Please enter your contact details</span> : null}

         <FormControl fullWidth className={classes.cityselector} >
           <InputLabel >City</InputLabel>
            <Select
             labelId='select-demo'
             id='florida-select'
             label="City"
             value={city}
             onChange={handleChange}
             fullWidth
            >
             <MenuItem value={'Nagpur'} >Nagpur</MenuItem>
             <MenuItem value={'Mumbai'} >Mumbai</MenuItem>
             <MenuItem value={'Hyderabad'} >Hyderabad</MenuItem>
             <MenuItem value={'Banglore'} >Banglore</MenuItem>
            </Select>
         </FormControl>
         {submitted && !values.city ? <span className='only-span'>Please enter your City</span> : null}

         <Button varient="contained" type='submit' className={classes.btn}>continue</Button>
      </form>
    </div>
  )
}

export default Form