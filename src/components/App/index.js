import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Navigation from '../Navigation';
import AppRoutes from '../../AppRoutes';
import { withAuthentication } from '../Session';
const App = () => (
            <Router>
              <div>
                <Navigation/>
                <hr/>
                <AppRoutes/>
              </div>
            </Router>
        );
export default withAuthentication(App); 