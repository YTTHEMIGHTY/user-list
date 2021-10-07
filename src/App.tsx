import { useMemo, useState } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';


import LoginPage from './pages/Login';
import User from './pages/Users';
import UsersDetail from './pages/UsersDetail';
import { PageNotFound } from './pages/PageNotFound';
import { AppContext, ThemeModeContext } from './contexts';
import { getAppTheme } from './styles/theme';
import { DARK_MODE_THEME, LIGHT_MODE_THEME } from './config/constants';

function App() {

  const [ appData, setAppData ] = useState({
		isLogedIn: (localStorage.getItem('LOGEDIN') === "true") ? true : false,
	});

  const [mode, setMode] = useState<typeof LIGHT_MODE_THEME | typeof DARK_MODE_THEME>(LIGHT_MODE_THEME);
  const themeMode = useMemo(
    () => ({
      toggleThemeMode: () => {
        setMode((prevMode) => (prevMode === LIGHT_MODE_THEME ? DARK_MODE_THEME : LIGHT_MODE_THEME));
      },
    }),
    []
  );

  const theme = useMemo(() => getAppTheme(mode), [mode]);

  return (
    <AppContext.Provider value={{appData, setAppData}}>
      <ThemeModeContext.Provider value={themeMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router>
            <Switch>
              <Route path="/login" component={LoginPage} />
              {!appData.isLogedIn && <Redirect exact from="/" to="/login" />}
              {appData.isLogedIn && <Redirect exact from="/" to="/users" />}
              { appData.isLogedIn &&
                <>
                <Route path="/users" component={User} />
                <Route path="/userdetails/:id" component={UsersDetail} />
                </>
              }     

              <Route path="*" component={PageNotFound} />
            </Switch>
          </Router>
        </ThemeProvider>
      </ThemeModeContext.Provider>
    </AppContext.Provider>
  );
}

export default App;
