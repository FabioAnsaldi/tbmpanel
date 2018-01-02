import 'raf-polyfill';
import React from 'react'
import { Provider } from 'react-redux';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ShallowRenderer from 'react-test-renderer/shallow';
import configureStore from 'redux-mock-store';
import ConnectedComponent, { Main } from './index';
import { BrowserRouter } from 'react-router-dom';
import { initialState } from './reducer';

const renderer = new ShallowRenderer();
let mockStore = configureStore();
configure( { adapter: new Adapter() } );

describe( '>>>Main component (Shallow + passing the  directly)', () => {
    let wrapper, container;
    let props = { mainReducer: initialState };

    beforeEach( () => {
        renderer.render( <Main {...props}/> );
        wrapper = renderer.getRenderOutput();
        renderer.render( <ConnectedComponent {...props}/> );
        container = renderer.getRenderOutput();
    } );

    it( '+++ render the DUMB component', () => {
        expect( wrapper.type ).toBe( 'div' );
    } );
    it( '+++ render the connected(SMART) component', () => {
        expect( container.type ).toBe( 'div' );
    } );
} );

describe( '>>>Main REACT-REDUX component (Mount + wrapping in Provider component)', () => {
    let props = { mainReducer: initialState, menuReducer: { title: 'Title' } };
    let store, container;

    beforeEach( () => {
        store = mockStore( props );
        container = mount( <Provider store={store}><BrowserRouter><ConnectedComponent/></BrowserRouter></Provider> )
    } );

    it( '+++ render the connected(SMART) component', () => {
        expect( container.contains( <b>Powered by React & Redux</b> ) ).toBe( true );
    } );
} );
