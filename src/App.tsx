import { useRoutes } from 'react-router-dom';
import { ROUTES } from './routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();
function App() {
  const routes = useRoutes(ROUTES);

  return <QueryClientProvider client={queryClient}>{routes}</QueryClientProvider>;
}

export default App;
