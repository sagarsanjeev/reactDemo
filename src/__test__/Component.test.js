import React from 'react';
import ProductPage from '../component/home/ProductPage';
import {create} from 'react-test-renderer';

describe('Products Component Snapshot', () => {
    test("Products",() => {
        let tree = create(<ProductPage/>);
        expect(tree.toJSON()).toMatchSnapshot();
    })
})
