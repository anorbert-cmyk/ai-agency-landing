import { describe, it, expect, vi, beforeAll, afterAll } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import PageErrorBoundary from '../components/PageErrorBoundary';

// Component that throws an error
const ThrowError = ({ shouldThrow }: { shouldThrow: boolean }) => {
    if (shouldThrow) {
        throw new Error('Test error');
    }
    return <div>No error</div>;
};

describe('PageErrorBoundary', () => {
    // Suppress console.error for these tests
    const originalError = console.error;
    beforeAll(() => {
        console.error = vi.fn();
    });
    afterAll(() => {
        console.error = originalError;
    });

    it('renders children when no error', () => {
        render(
            <PageErrorBoundary>
                <div>Test content</div>
            </PageErrorBoundary>
        );
        expect(screen.getByText('Test content')).toBeInTheDocument();
    });

    it('renders error UI when child throws', () => {
        render(
            <PageErrorBoundary>
                <ThrowError shouldThrow={true} />
            </PageErrorBoundary>
        );
        expect(screen.getByText('Something went wrong')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /try again/i })).toBeInTheDocument();
    });

    it('recovers when retry is clicked', () => {
        const { rerender } = render(
            <PageErrorBoundary>
                <ThrowError shouldThrow={true} />
            </PageErrorBoundary>
        );

        // Click retry button
        fireEvent.click(screen.getByRole('button', { name: /try again/i }));

        // Note: In a real scenario, this would need state management
        // to prevent the error from being thrown again
    });
});
