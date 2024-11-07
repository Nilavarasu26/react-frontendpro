import logo from "./logo.svg";
import "./App.css";
import { store } from "./actions/store";
import { Provider } from "react-redux";
import DCandidate from "./components/DCandidate";
import { Container } from "@mui/material";
import DCandidateForm from "./components/DCandidateForm";
function App() {
  return (
    <Provider store={store}>
      <Container maxwidth="lg">
        <DCandidate></DCandidate>
        <DCandidateForm></DCandidateForm>
      </Container>
    </Provider>
  );
}

export default App;
