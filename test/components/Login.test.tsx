/* eslint-disable testing-library/no-render-in-setup */
import React from 'react';
import ReactDOM from 'react-dom';
import { Login } from '../../src/components/Login';


describe('Login in component test suit', ()=>{

    // create variable to act as container to render and test Login component
    let container: HTMLElement;

    //create mock service methods for Login component test
    const authServiceMock ={
        login: jest.fn()
    }

    const setUserMock = jest.fn();

    //hooks allow you to know at what point in the test sequence you are.
    beforeEach(()=>{
        // create div element 
        container = document.createElement('div');

        //append element to DOM
        document.body.appendChild(container)

        //render element to DOM
        ReactDOM.render(
            <Login authService={authServiceMock as any} setUser={setUserMock} />,
            container
        )
    })
    
    afterEach(()=>{
        // remove component
        document.body.removeChild(container);

        //clear the container
        container.remove();

        //clear all mock services
        jest.clearAllMocks();
    })

    test('Component renders correctly', ()=>{
        //query component to test if certain parts are present
        // test title text of component
        const title = document.querySelector('h1')
        expect(title!.textContent).toBe('Please Login');

        // test initial text inputs 
        const inputs = document.querySelectorAll('input')
        //should have 2 input elements 
        expect(inputs).toHaveLength(2)
        expect(inputs[0].value).toBe('')
        expect(inputs[1].value).toBe('')
        
        //test text of button
        const button = document.querySelectorAll('button')
        expect(button).toHaveLength(1)
        expect(button[0].value).toBe('Login')
    })
})