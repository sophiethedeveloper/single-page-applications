import React, { useState} from "react";
import {Link} from 'react-router-dom';
import {
  Card,
  CardImg,
  Form,
  FormGroup,
  Input,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  Label,
  Button,
} from "reactstrap";
import axios from "axios";
import * as yup from "yup";

const OrderForm = () => {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    sauce: "",
    protein: "",
    cilantro: false,
    onion: false,
    radish: false,
    avocado: false,
    special: "",
  });

  //   Validation
  const schema = yup.object().shape({
    name: yup.string().required().min(2),
    number: yup.number().required().positive().integer().min(1),
    sauce: yup.string().required(),
    protein: yup.string().required(),
    special: yup.string(),
    cilantro: yup.boolean(),
    onion: yup.boolean(),
    avocado: yup.boolean(),
    radish: yup.boolean(),
  });

  const submit = () => {
    schema.validate(formData).then(() => {
        axios.post('https://reqres.in/api/users', formData).then((res) => {
            console.log(res.data, 'this is your posted data')
        });
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleToppings = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.checked });
  };

  const toggle = () => setDropDownOpen((prevState) => !prevState);
  return (
    <>
      <Card color="info">
        <h2 style={{ color: "white", margin: "0 auto" }}>
          Build Your Own Taco!
        </h2>
        <CardImg
          style={{ width: "80%", margin: "0 auto" }}
          src={require("./assets/taco-2.jpg")}
        />
      </Card>
      <Form
        data-cy="submit"
        onSubmit={(e) => {
          e.preventDefault();
          submit();
        }}
        style={{ margin: "5%" }}
      >
        <FormGroup>
          <legend>Name</legend>
          <Input
            type="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            data-cy="name"
          />
        </FormGroup>
        <FormGroup>
          <Dropdown isOpen={dropDownOpen} toggle={toggle}>
            <DropdownToggle caret>
              {formData.number === 0 ? "Number of Tacos" : formData.number}
            </DropdownToggle>
            <DropdownMenu>
              <div
                onClick={() => {
                  toggle();
                  setFormData({ ...formData, number: 0 });
                }}
              >
                0
              </div>
              <div
                onClick={() => {
                  toggle();
                  setFormData({ ...formData, number: 1 });
                }}
              >
                1
              </div>
              <div
                onClick={() => {
                  toggle();
                  setFormData({ ...formData, number: 2 });
                }}
              >
                2
              </div>
              <div
                onClick={() => {
                  toggle();
                  setFormData({ ...formData, number: 3 });
                }}
              >
                3
              </div>
              <div
                onClick={() => {
                  toggle();
                  setFormData({ ...formData, number: 4 });
                }}
              >
                4
              </div>
            </DropdownMenu>
          </Dropdown>
        </FormGroup>

        {/* form for the sauces */}

        <FormGroup tag="fieldset">
          <legend>Sauce</legend>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="sauce"
                value="red"
                onChange={handleChange}
              />
              Red
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="sauce"
                value="chipotle"
                onChange={handleChange}
              />
              Chipotle
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="sauce"
                value="green"
                onChange={handleChange}
              />
              Green
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="sauce"
                value="none"
                onChange={handleChange}
              />
              None
            </Label>
          </FormGroup>
        </FormGroup>

        {/* form for proteins */}

        <FormGroup tag="fieldset">
          <legend>Protein</legend>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="protein"
                value="beef"
                onChange={handleChange}
              />
              Beef
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="protein"
                value="chicken"
                onChange={handleChange}
              />
              Chicken
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="protein"
                value="pork"
                onChange={handleChange}
              />
              Pork
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="protein"
                value="fish"
                onChange={handleChange}
              />
              Fish
            </Label>
          </FormGroup>
        </FormGroup>

        {/* form for the toppings */}

        <FormGroup tag="fieldset">
          <legend>Toppings</legend>
          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                name="cilantro"
                checked={formData.cilantro}
                onChange={handleToppings}
                data-cy="cilantro"
              />
              Cilantro
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                name="onion"
                checked={formData.onion}
                onChange={handleToppings}
                data-cy="onion"
              />
              Onion
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                name="avocado"
                checked={formData.avocado}
                onChange={handleToppings}
                data-cy="avocado"
              />
              Avocado
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                name="radish"
                checked={formData.radish}
                onChange={handleToppings}
                data-cy="radish"
              />
              Radish
            </Label>
          </FormGroup>
        </FormGroup>

        <FormGroup>
          <legend>Special Instructions</legend>
          <Input
            type="textarea"
            name="special"
            value={formData.special}
            onChange={handleChange}
          />
        </FormGroup>
        <Link to="/final">
        <Button>Submit</Button>
        </Link>
      </Form>
    </>
  );
};

export default OrderForm;
