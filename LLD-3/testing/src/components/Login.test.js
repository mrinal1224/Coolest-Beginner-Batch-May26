// if the userName input is getting rendered
// if the password input is getting renderd
// if the the button is getting rendered
import { render, screen } from "@testing-library/react";

import Login from "./Login"

test('userName input is getting rendered' , ()=>{
   render(<Login/>)
  const userNameElement =  screen.getByPlaceholderText(/UserName/i)
   expect(userNameElement).toBeInTheDocument()
})

test('password input is getting rendered' , ()=>{
   render(<Login/>)
  const passowrdElement = screen.getByPlaceholderText(/password/i)
   expect(passowrdElement).toBeInTheDocument()
})


test('login button is getting rendered' , ()=>{
   render(<Login/>)
  const btnElement = screen.getByRole('button')
   expect(btnElement).toBeInTheDocument()
})

test('Button is disabled when there is no userName or password data' , ()=>{
   render(<Login/>)
   const btnElement = screen.getByRole('button')
   expect(btnElement).toBeDisabled()
    
})


// write tests for values













// by default the userName and passowrd are empty

//the button should be disbaled when there is no data in the input fields
