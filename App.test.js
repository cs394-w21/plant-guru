import React from 'react';
import renderer from 'react-test-renderer';

import App from './App';

describe('<App />', () => {
    beforeEach(() => {
        jest.mock('react-native-safe-area-context', () => ({
            SafeAreaProvider: ({ children }) => <>{children}</>,
        }));
    });

    afterAll(() => {
        jest.restoreAllMocks();
    });
    it('has 2 child', () => {
        const tree = renderer.create(<App />).toJSON();
        console.log(tree);
        expect(tree.children.length).toBe(2);
    });
});