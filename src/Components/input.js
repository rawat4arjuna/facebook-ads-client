import React from "react";
import { Col, Row, Form, InputGroup, Card } from "react-bootstrap";
import {
  getCategories,
  setAdsCategory,
  monthlyBudget,
} from "../Functions/categories";
import { ContextOne } from "../Context/AppContext";

export default function Input() {
  const [category, setCategory] = React.useState([]);
  getCategories(setCategory, React.useEffect);
  return (
    <React.Fragment>
      <Card className="w-100">
        <Card.Body>
          <Card.Title>Facebook Ad Calculator Tool</Card.Title>
          <Card.Subtitle className="mb-2 text-muted"> </Card.Subtitle>
          <Card.Text>
            <Row>
              <Col sm={12}>
                <RenderCategory category={category} />
              </Col>
              <RenderMonthlyBudget />
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
    <Col>
      <Form.Label htmlFor="inlineFormInput" visuallyHidden>
        Monthly Ad Budget
      </Form.Label>
      <InputGroup>
        <InputGroup.Text>$</InputGroup.Text>
        <Form.Control
          className="form-control w-90"
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
