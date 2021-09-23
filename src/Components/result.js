import React from "react";
import { Card } from "react-bootstrap";
import {
  dailyAdSpend,
  costPerThousandsImpression,
  impression,
  roas,
} from "../Functions/calculation";
import { ContextOne } from "../Context/AppContext";
export default function Result() {
  let { state } = React.useContext(ContextOne);

  return (
    <React.Fragment>
      <Card className="w-100 card-box-shadow s-card">
        <Card.Body>
          <Card.Title>Monthly PPC Ad Estimates</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            These values are set on your selected industry benchmark
          </Card.Subtitle>
          <div>
            <p>One Month Budget : {state.data.monthlyBudget | 0}$</p>
            <p>
              Daily Estimates: {dailyAdSpend(state.data.monthlyBudget) | 0}$
            </p>
            <p>CTR (Click Through Rate): {state.data.category?.ctr | 0}%</p>
            <p>CPC (Cost Per Click) : {state.data.category?.cpc | 0}$</p>
            <p>
              Cost Per Thousand Impressions (CPM):
              {costPerThousandsImpression(
                state.data.monthlyBudget,
                state.data.category
              ) | 0}
              $
            </p>
            <p>
              Number of Impressions :{" "}
              {impression(state.data.monthlyBudget, state.data.category) | 0}
            </p>
            <p>One Month Ads Sale : {state.data.sale}$</p>
            <p>
              ROAS (Return On Ad Spend):
              {roas(state.data.monthlyBudget, state.data.sale)}%
            </p>
          </div>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
}
