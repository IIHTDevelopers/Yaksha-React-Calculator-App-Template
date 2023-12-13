import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useEffect: jest.fn(),
}));

describe('boundary', () => {
    test('AppComponent boundary renders without crashing', () => {
        render(<App />);
    });

    test('AppComponent boundary has "My Calculator App" h2', () => {
        render(<App />);
        expect(screen.queryByText('My Calculator App')).toBeInTheDocument();
    });

    test('AppComponent boundary has Calculator component', () => {
        render(<App />);
        expect(screen.getByRole('heading', { name: 'My Calculator App' })).toBeInTheDocument();
        expect(screen.getByRole('main')).toBeInTheDocument();
    });
});
