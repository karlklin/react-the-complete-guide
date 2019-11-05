import React from 'react';

// Creating context
const authContext = React.createContext({
  authenticated: false,
  login: () => {}
});

export default authContext;
