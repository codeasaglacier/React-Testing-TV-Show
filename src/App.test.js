// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import * as rtl from '@testing-library/react'
import App from './App'


//tested function wait
//export default function( seconds ) {
  //return new Promise(() => {
    //setTimeout(() => {
      //resolve( 'hurray' )
    //}, seconds * 1000 )
  //})
//}

// returned unresolved Promise
// test( 'wait for promise to resolve', () => {
//   return wait(3).then( res => expect( res ).toBe( 'hurray' ) )
// } )

// async/await unresolved Promise
// test( 'wait for promise to resolve', async () => {
//   const res = await wait(2)
//   expect (res).toBe('hurray')
// })


test( 'Render the heading test by Id', async () => {
  //render the App into jest-dom so we can test
  const wrapper = rtl.render( <App /> )

  //element is now our dom element to test against
  const element = await rtl.waitForElement( () => wrapper.getByTestId( 'showName' ))

  //test will fail if element is not visible to our robot eyes
  expect( element ).toBeVisible()
})

//test( 'Render count input', async () => {
  //const wrapper = rtl.render( <App /> )

  //using a regular expression instead of a string allows our query to be much more flexible. For example, if the test becomes all uppercase, we don't want our test to break
  //const element = wrapper.getByPlaceholderText( /count/i )
  //expect( element ).toHaveValue( 1 )
//})

test( 'Render the heading test by text', async () => {
  //render the App into jest-dom so we can test
  const wrapper = rtl.render( <App /> )

  //element is now our dom element to test against
  const element = await rtl.waitForElement( () => wrapper.getByText( 'Stranger Things' ))

  //test will fail if element is not visible to our robot eyes
  expect( element ).toBeVisible()
})