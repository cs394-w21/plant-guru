import React from 'react';
import { render } from "@testing-library/react-native";

import HomeScreen from './HomeScreen';

describe('Basic home screen test', () => {
    it('has basic buttons', () => {
        const {queryByText} = render(<HomeScreen />);
        const LoginButton = queryByText("Login");
        const SearchButton = queryByText("Search plants");
        const FindButton = queryByText("What plants");
        
        expect(LoginButton).not.toBe(null);
        expect(SearchButton).not.toBe(null);
        expect(FindButton).not.toBe(null);
    });
});
