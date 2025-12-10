import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import LoadingSpinner from '../components/LoadingSpinner';

describe('LoadingSpinner', () => {
    it('renders loading text', () => {
        render(<LoadingSpinner />);
        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    it('has proper structure', () => {
        const { container } = render(<LoadingSpinner />);
        expect(container.querySelector('.min-h-screen')).toBeInTheDocument();
    });
});
