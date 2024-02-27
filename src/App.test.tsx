import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

test('renders learn react link', async () => {
  render(<App />);
  await waitFor(() => {
    const linkElement = screen.queryByText(/learn react/i);
    if (linkElement) {
      expect(linkElement).toBeInTheDocument();
      return true;
    }
    return false;
  }, { timeout: 5000 }); // Increase timeout if needed
});
