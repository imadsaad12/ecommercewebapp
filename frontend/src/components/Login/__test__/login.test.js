import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Login from '../index';

// jest.mock("axios",()=>({
//      default:  ()=>Promise.resolve({data:{name:"imad"}}),
//      get: ()=>Promise.resolve({data:[{name:"imad"},{name:"imads"}]})
//  }))

const MockComponent=()=>{
    return(
        <BrowserRouter>
        <Login />
        </BrowserRouter>
    )
}
describe('Login', () => {
    beforeEach(()=>{
        render(<MockComponent />);
    })
    test('render Login component', async () => {
      const textElement = await screen.findByText(/welcome back !!/i);
      expect(textElement).toBeInTheDocument();
    });
    it('form working',async () => {
        const emailElement=await screen.findByTestId(/email/i)
        const passwordElement=await screen.findByTestId(/password/i)
        // const nElement=await screen.findByText(/imad/i)
        const btnElement=await screen.findByRole('button')
        fireEvent.change(emailElement,{target:{value:"imad@gmail.com"}})
        fireEvent.change(passwordElement,{target:{value:"1212"}})
        expect(emailElement.value).toEqual("imad@gmail.com")
        expect(passwordElement.value).toEqual("1212")
        expect(btnElement).toBeInTheDocument()
        // expect(nElement).toBeInTheDocument()
    });
});

