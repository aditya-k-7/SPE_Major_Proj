import { Button } from '@mui/material'
import { useContext } from 'react';
import { UserContext } from '../contexts/user.context';
// import ReactModal from 'react-modal'; 
import React, {useState} from 'react';

import { Container } from './container';

export default function Home() {
 const { logOutUser } = useContext(UserContext);
 
 // This function is called when the user clicks the "Logout" button.
 const logOut = async () => {
   try {
     // Calling the logOutUser function from the user context.
     const loggedOut = await logOutUser();
     // Now we will refresh the page, and the user will be logged out and
     // redirected to the login page because of the <PrivateRoute /> component.
     if (loggedOut) {
       window.location.reload(true);
     }
   } catch (error) {
     alert(error)
   }
}

const [userInput,setUserInput] = useState('')

const handleChange =(event)=>{
    setUserInput(event.target.value)
}

const [isOpen, setIsOpen] = useState(false);

// const form = async () => {
//     // alert("Great");}

const triggerText = 'Open form';
const onSubmit = (event) => {
  event.preventDefault(event);
  console.log(event.target.name.value);
  console.log(event.target.email.value);
  console.log(event.target.description.value);
  console.log(event.target.amount.value);
  console.log(event.target.upidetails.value);
};

 return (
   <>
     <h1>Welcome to Expengo</h1>
     
     <div className="Home">
      <Container triggerText={triggerText} onSubmit={onSubmit} />
    </div>
    
     {/* <div>
      <button variant="contained" onClick={() => setIsOpen(true)}>Create project</button>
      <ReactModal
        isOpen={isOpen}
        contentLabel="Example Modal"
        onRequestClose={() => setIsOpen(false)}
      >Fill the details about your project:
    <form>
        <div className="form-input">
            <input 
                type="text"
                name="title"
                placeholder="Enter your title"
                value={userInput}
                // value=""
                onChange={handleChange}
            />
        </div>
        <div className="form-input">
             <textarea 
                placeholder="Enter body" 
                name="body" 
                cols="30" 
                rows="10" 
                // value="" 
                value={userInput}
                onChange={handleChange}
            ></textarea>
        </div>
         <button>Submit</button>

    </form>
        
      </ReactModal>
    </div> */}
     <h2> Hello world</h2>
     <Button variant="contained" onClick={logOut}>Logout</Button>
   </>
 );


//    return(
//     <>
//     <Button onClick={form}>Create Project</Button>
//     </>
//    );
}

