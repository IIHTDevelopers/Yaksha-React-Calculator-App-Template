import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from '../components/Calculator';

describe('boundary', () => {
    test('CalculatorComponent boundary it is rendered', () => {
        render(<Calculator />);
        expect(screen.getByText('Clear')).toBeTruthy();
    });

    test('CalculatorComponent boundary it has input text field', () => {
        render(<Calculator />);
        const inputField = screen.getByRole('textbox');
        expect(inputField).toBeTruthy();
    });

    test('CalculatorComponent boundary it has "Clear" button', () => {
        render(<Calculator />);
        expect(screen.getByText('Clear')).toBeTruthy();
    });

    test('CalculatorComponent boundary it has "0" button', () => {
        render(<Calculator />);
        expect(screen.getByText('0')).toBeTruthy();
    });

    test('CalculatorComponent boundary it has "." button', () => {
        render(<Calculator />);
        expect(screen.getByText('.')).toBeTruthy();
    });

    test('CalculatorComponent boundary it has "+" button', () => {
        render(<Calculator />);
        expect(screen.getByText('+')).toBeTruthy();
    });

    test('CalculatorComponent boundary it has "-" button', () => {
        render(<Calculator />);
        expect(screen.getByText('-')).toBeTruthy();
    });

    test('CalculatorComponent boundary it has "1" button', () => {
        render(<Calculator />);
        expect(screen.getByText('1')).toBeTruthy();
    });

    test('CalculatorComponent boundary it has "2" button', () => {
        render(<Calculator />);
        expect(screen.getByText('2')).toBeTruthy();
    });

    test('CalculatorComponent boundary it has "3" button', () => {
        render(<Calculator />);
        expect(screen.getByText('3')).toBeTruthy();
    });

    test('CalculatorComponent boundary it has "4" button', () => {
        render(<Calculator />);
        expect(screen.getByText('4')).toBeTruthy();
    });

    test('CalculatorComponent boundary it has "5" button', () => {
        render(<Calculator />);
        expect(screen.getByText('5')).toBeTruthy();
    });

    test('CalculatorComponent boundary it has "6" button', () => {
        render(<Calculator />);
        expect(screen.getByText('6')).toBeTruthy();
    });

    test('CalculatorComponent boundary it has "7" button', () => {
        render(<Calculator />);
        expect(screen.getByText('7')).toBeTruthy();
    });

    test('CalculatorComponent boundary it has "8" button', () => {
        render(<Calculator />);
        expect(screen.getByText('8')).toBeTruthy();
    });

    test('CalculatorComponent boundary it has "9" button', () => {
        render(<Calculator />);
        expect(screen.getByText('9')).toBeTruthy();
    });

    test('CalculatorComponent boundary it clears the input field on "Clear" button click', () => {
        render(<Calculator />);
        const inputField = screen.getByRole('textbox');
        const clearButton = screen.getByText('Clear');

        fireEvent.click(clearButton);
        expect(inputField.value).toBe('');
    });
});
