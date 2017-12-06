import 'raf-polyfill';
import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow';
import { Login } from './index';
import { initialState } from './reducer';

const renderer = new ShallowRenderer();

describe( '>>>Login --- Shallow Render REACT COMPONENTS', () => {
    let wrapper = 0;
    const props = { loginReducer: initialState };

    beforeEach( () => {
        renderer.render( <Login {...props}/> );
        wrapper = renderer.getRenderOutput();
    } );

    it( '+++ render the DUMB component', () => {
        expect( wrapper.type ).toBe( 'div' );
    } );

} );