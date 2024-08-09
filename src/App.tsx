import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ChatListPage from "./pages/ChatListPage";
import ChatPage from "./pages/ChatPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Box>
        <Grid container>
          <Routes>
            <Route path="/" element={<Navigate to="/chatlist/1" />} />
            <Route
              path="/chatlist/:id_chatlist/chat/:id_chat"
              element={
                <Grid container>
                  <Grid item md={4} sm={6} xs={12}>
                    <ChatListPage />
                  </Grid>
                  <Grid item md={8} sm={6} xs={12}>
                    <ChatPage />
                  </Grid>
                </Grid>
              }
            />
          </Routes>
        </Grid>
      </Box>
    </Router>
  );
}

export default App;