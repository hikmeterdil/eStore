import { createContext } from 'react';

const StatusContext = createContext({
  isLoggedIn: false,
  userId: null,
  token: null,
  login: () => {},
  logout: () => {}
});

export default StatusContext;