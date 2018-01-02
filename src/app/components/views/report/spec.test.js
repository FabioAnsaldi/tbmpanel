import 'raf-polyfill';
import React from 'react'
import { Provider } from 'react-redux';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ShallowRenderer from 'react-test-renderer/shallow';
import configureStore from 'redux-mock-store';
import ConnectedComponent, { Report } from './index';
import { initialState } from './reducer';

const renderer = new ShallowRenderer();
let mockStore = configureStore();
configure({ adapter: new Adapter() });

describe( '>>>Report component (Shallow + passing the  directly)', () => {
    let wrapper, container;
    let props = { reportReducer: initialState };

    beforeEach( () => {
        renderer.render( <Report { ...props }/> );
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

describe( '>>>Report REACT-REDUX component (Mount + wrapping in Provider component)', () => {
    let props = { reportReducer: initialState };
    let store, container;

    beforeEach( () => {
        store = mockStore( props );
        container = mount( <Provider store={ store }><ConnectedComponent/></Provider> )
    } );

    it( '+++ render the connected(SMART) component', () => {
        expect( container.contains( <h4>{ props.reportReducer.output }</h4> ) ).toBe( true );
    } );
} );
