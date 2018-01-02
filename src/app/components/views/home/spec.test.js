import 'raf-polyfill';
import React from 'react'
import { Provider } from 'react-redux';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ShallowRenderer from 'react-test-renderer/shallow';
import configureStore from 'redux-mock-store';
import ConnectedComponent, { Home } from './index';
import { initialState } from './reducer';

const renderer = new ShallowRenderer();
let mockStore = configureStore();
configure({ adapter: new Adapter() });

describe( '>>>Home component (Shallow + passing the  directly)', () => {
    let wrapper, container;
    let props = { homeReducer: initialState };

    beforeEach( () => {
        renderer.render( <Home { ...props }/> );
        wrapper = renderer.getRenderOutput();
        renderer.render( <ConnectedComponent { ...props }/> );
        container = renderer.getRenderOutput();
    } );

    it( '+++ render the DUMB component', () => {
        expect( wrapper.type ).toBe( 'div' );
    } );
    it( '+++ render the connected(SMART) component', () => {
        expect( container.type ).toBe( 'div' );
    } );
} );

describe( '>>>Home REACT-REDUX component (Mount + wrapping in Provider component)', () => {
    let props = { homeReducer: initialState };
    let store, container;

    beforeEach( () => {
        store = mockStore( props );
        container = mount( <Provider store={ store }><ConnectedComponent/></Provider> )
    } );

    it( '+++ render the connected(SMART) component', () => {
        expect( container.contains( <h4>{ props.homeReducer.output }</h4> ) ).toBe( true );
    } );
} );
