import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';

import App from './App';

describe('App', () => {
    it('should render a button', () => {
        render(<App />)
        expect(screen.getByRole('button')).toBeInTheDocument()
    })
    it('should increment count on button click', async () => {
        const user = userEvent.setup();
        render(<App />)
        const button = screen.getByRole('button');
        await user.click(button);
        expect(button).toHaveTextContent('count is 1');
    });
})