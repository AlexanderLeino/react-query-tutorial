// Why Use React Query
// A Library for fetching data in a React Application
//
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import {Home, RQSuperHeroes, SuperHeroes } from './pages'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import logo from './logo.svg';
import './App.css';

const queryClient = new QueryClient()


function App() {
  return (
  <QueryClientProvider client={queryClient}>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/super-heros'>Super Heroes</Link>
            </li>
            <li>
              <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          
          <Route path='/super-heroes' element={<SuperHeroes />}>
          </Route>

          <Route path='/rq-super-heroes' element={<RQSuperHeroes />}>
          </Route>

          <Route path='/' element={<Home />}>
          </Route>

        </Routes>

      </div>
    </Router>
    <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/>
  </QueryClientProvider>
  );
}

export default App;
