import React from "react";
import { Card } from "react-bootstrap";
import { dailyAdSpend } from "../Functions/calculation";
import { ContextOne } from "../Context/AppContext";
export default function Result() {
  let { state } = React.useContext(ContextOne);

  return (
    <React.Fragment>
      <Card className="w-100">
        <Card.Body>
          <Card.Title>Monthly PPC Ad Estimates</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            These values are set on your selected industry benchmark
          </Card.Subtitle>
          <Card.Text>
            <p>One Month Budget : {state.data.monthlyBudget}$</p>
            <p>Daily Estimates: {dailyAdSpend(state.data.monthlyBudget)}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
}
