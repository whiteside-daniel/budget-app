import Container from "react-bootstrap/Container"
import {Stack, Button} from "react-bootstrap"
import BudgetCard from './components/BudgetCard.js'
import './App.css';

function App() {
  return (
    <div>
      <Container className="my-4">
        <Stack direction="horizontal" gap="2" className="mb-4" >
          <h1 className="me-auto" >Budgets</h1>
          <Button variant="primary">Add Budget</Button>
          <Button variant="primary">Add Budget</Button>

        </Stack>
        <div
          style={{ 
            display:"grid", 
            gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))", 
            gap: "1rem", 
            alignItems: "flex-start"
          }} 
        >

        </div>
      
        <BudgetCard name="Daniel" amount="100" max="3000"></BudgetCard>
      </Container>
      
    </div>
  );
}

export default App;
