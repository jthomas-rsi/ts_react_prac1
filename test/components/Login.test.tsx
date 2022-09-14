import { Login } from '../../src/components/Login';


describe('Login in component test suit', ()=>{

    //hooks allow you to know at what point in the test sequence you are.
    beforeAll(()=>{
        console.log('Login test suit has Begun')
    })
    beforeEach(()=>{
        console.log('Login test #1 starting')
    })
    afterEach(()=>{
        console.log('Login test #1 ending')
    })
    afterAll(()=>{
        console.log('Login test suit has ended')
    })

    test('initial test', ()=>{
        expect(true).toBeTruthy();
    })
})