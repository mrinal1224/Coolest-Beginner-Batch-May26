// if the userName input is getting rendered
// if the password input is getting renderd
// if the the button is getting rendered
import { render, screen , fireEvent} from "@testing-library/react";

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


// write tests for values -> input change

test('userName input updates on Change' , ()=>{
   render(<Login/>)
  const userNameElement =  screen.getByPlaceholderText(/UserName/i)
  fireEvent.change(userNameElement , {target:{value:"rishav"}})
  expect(userNameElement.value).toBe("rishav")
})


test('password input updates on Change' , ()=>{
   render(<Login/>)
  const passwordElement =  screen.getByPlaceholderText(/password/i)
  fireEvent.change(passwordElement , {target:{value:"12345"}})
  expect(passwordElement.value).toBe("12345")
})


// 


test("login button enables when both inputs have values", () => {
  render(<Login />);
  const usernameInput = screen.getByPlaceholderText(/username/i);
  const passwordInput = screen.getByPlaceholderText(/password/i);
  const button = screen.getByRole("button", { name: /login/i });

  fireEvent.change(usernameInput, { target: { value: "testuser" } });
  fireEvent.change(passwordInput, { target: { value: "password" } });

  expect(button).not.toBeDisabled();
});



// test("form submission prevents default", () => {
//   render(<Login />);
//   const form = screen.getByTestId("login-form");
//   const mockPrevent = jest.fn();

//   fireEvent.submit(form, { preventDefault: mockPrevent });

//   expect(mockPrevent).toHaveBeenCalled();
// });















// by default the userName and passowrd are empty

//the button should be disbaled when there is no data in the input fields
