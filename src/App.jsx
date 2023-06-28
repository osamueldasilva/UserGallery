import { RoutesProvier } from './Router/routes';
 
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { AuthProvider } from "./Contexts/AuthContext";

function App() {
  return (
    <Router>
      <AuthProvider>
       <RoutesProvier />
      </AuthProvider>
    </Router>
  );
}

export default App;
