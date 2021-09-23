import React from "react";
import { Col, Row, Form, InputGroup, Card } from "react-bootstrap";
import {
  getCategories,
  setAdsCategory,
  monthlyBudget,
  monthlySaleLead,
} from "../Functions/categories";
import { ContextOne } from "../Context/AppContext";

export default function Input() {
  const [category, setCategory] = React.useState([]);
  getCategories(setCategory, React.useEffect);
  return (
    <React.Fragment>
      <Card className="w-100 card-box-shadow s-card">
        <Card.Body>
          <Card.Title>Facebook Ad Calculator Tool</Card.Title>
          <Card.Subtitle className="mb-2 text-muted"> </Card.Subtitle>
          <Card.Text>
            <Row>
              <Col sm={12}>
                <RenderCategory category={category} />
              </Col>
              <RenderMonthlyBudget />
              <RenderSaleLead />
            </Row>
          </Card.Text>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
}

const RenderMonthlyBudget = () => {
  const [budget, setBudget] = React.useState(100);
  const [error, setError] = React.useState("");
  let { state, dispatch } = React.useContext(ContextOne);
  return (
    <Col sm={12}>
      <Form.Label htmlFor="inlineFormInput" visuallyHidden>
        Monthly Ad Budget
      </Form.Label>
      <InputGroup>
        <InputGroup.Text className="input-bg">$</InputGroup.Text>
        <Form.Control
          className="form-control w-90 input-bg"
          id="inlineFormInput"
          placeholder="Budget"
          type="text"
          value={budget}
          onChange={(e) => {
            monthlyBudget(e.target.value, dispatch, state, setError, setBudget);
          }}
        />
      </InputGroup>

      <span className="mt-2 text-danger">{error}</span>
    </Col>
  );
};

const RenderSaleLead = () => {
  const [budget, setBudget] = React.useState(100);
  const [error, setError] = React.useState("");
  let { state, dispatch } = React.useContext(ContextOne);
  return (
    <Col sm={12}>
      <Form.Label htmlFor="inlineFormInput" visuallyHidden>
        Monthly Ad sale
      </Form.Label>
      <InputGroup>
        <InputGroup.Text className="input-bg">$</InputGroup.Text>
        <Form.Control
          className="form-control w-90 input-bg"
          id="inlineFormInput"
          placeholder="Budget"
          type="text"
          value={budget}
          onChange={(e) => {
            monthlySaleLead(
              e.target.value,
              dispatch,
              state,
              setError,
              setBudget
            );
          }}
        />
      </InputGroup>

      <span className="mt-2 text-danger">{error}</span>
    </Col>
  );
};
const RenderCategory = ({ category }) => {
  let { state, dispatch } = React.useContext(ContextOne);
  console.log("state", state.data);
  return (
    <>
      <span>Choose Ad Category</span>
      <select
        className="form-control"
        onChange={(e) => setAdsCategory(e.target.value, dispatch, state)}
        value={JSON.stringify(state.category)}
      >
        {category?.length > 0 && <option value="-1">Select category</option>}
        {category?.length > 0 ? (
          category.map((item) => (
            <option key={item.id} value={JSON.stringify(item)}>
              {item.label}
            </option>
          ))
        ) : (
          <option>No category</option>
        )}
      </select>
    </>
  );
};
