import { useRoutes } from 'react-router-dom';
import { ROUTES } from './routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AppContextProvider from 'context/AppContextProvider.tsx';

const queryClient = new QueryClient();
function App() {
  const routes = useRoutes(ROUTES);

  return (
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>{routes}</AppContextProvider>
    </QueryClientProvider>
  );
}

export default App;
