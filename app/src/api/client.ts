import Axios from 'axios';
import { QueryClient } from 'react-query';
Axios.defaults.baseURL = 'http://localhost:3000'; // use your own URL here or environment variable

export const queryClient = new QueryClient();
