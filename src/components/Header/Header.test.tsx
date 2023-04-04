import React from 'react';
import { describe, it, expect, } from 'vitest';
import { render, screen, } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
    beforeEach(() => {
        render(<Header />);
    });

    it('renders the header title correctly', () => {
        const headerTitle = screen.getByText(/x-change/i);
        expect(headerTitle).toBeInTheDocument();
    });

    it('renders with the desired bg-color', () => {
        const header = screen.getByRole('header');
        expect(header).toHaveClass('bg-teal-500');
    });
});

