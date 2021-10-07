import { withRouter } from "react-router-dom";
import { Form, Row, Col, Button } from "react-bootstrap/";
import FormControl from "react-bootstrap/FormControl";
import {useEffect} from "react"
import { useFormik } from "formik";
import * as yup from "yup";

const Registration = ({ location, setRegistration }) => {
  const validationSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    surname: yup.string().required("Surname is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().min(8, "Too short").required("Password is required"),
    confirmPassword: yup
      .string()
      .min(8, "Too short")
      .required("Confirm Password is required"),
  });

  const { values, handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values));
      setRegistration(values);
    },
    validationSchema: validationSchema,
  });

  const formCkeck = () => {
    if (
      values.name.length > 2 &&
      values.surname.length > 2 &&
      values.email.length > 2 &&
      values.password.length > 7 &&
      values.confirmPassword.length > 7
    ) {
      return true;
    }
  };
  useEffect(() => {
    formCkeck();
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    values.name,
    values.surname,
    values.email,
    values.password,
    values.confirmPassword,
  ]);


  return (
    location.pathname !== "/home" && (
      <div>
        <h1 className="text-light mb-3">Registration Form </h1>
        <Row className="justify-content-center">
          <Col md={5}>
            <Form className="form-margin">
              <Form.Group controlId="formGroupEmail">
                <Form.Label className="text-light">Name</Form.Label>
                <Form.Control
                  name="name"
                  placeholder="Name"
                  value={values.name}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formGroupEmail">
                <Form.Label className="text-light">Surname</Form.Label>
                <Form.Control
                  name="surname"
                  placeholder="Surname"
                  value={values.surname}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formGroupPassword">
                <Form.Label className="text-light">Email</Form.Label>
                <Form.Control
                  isInvalid={errors.email}
                  name="email"
                  placeholder="Email"
                  value={values.email}
                  onChange={handleChange}
                />
                <FormControl.Feedback type={errors.email ? "invalid" : "valid"}>
                  {errors.email}
                </FormControl.Feedback>
              </Form.Group>
              <Form.Group controlId="formGroupPassword">
                <Form.Label className="text-light">Password</Form.Label>
                <Form.Control
                  type="password"
                  isInvalid={errors.password}
                  name="password"
                  placeholder="Password"
                  value={values.password}
                  onChange={handleChange}
                />
                <FormControl.Feedback
                  type={errors.password ? "invalid" : "valid"}
                >
                  {errors.password}
                </FormControl.Feedback>
              </Form.Group>
              <Form.Group controlId="formGroupPassword">
                <Form.Label className="text-light">Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  isInvalid={errors.confirmPassword}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={values.confirmPassword}
                  onChange={handleChange}
                />
                <FormControl.Feedback
                  type={errors.confirmPassword ? "invalid" : "valid"}
                >
                  {errors.confirmPassword}
                </FormControl.Feedback>
              </Form.Group>
              <Button
                variant="primary"
                name="submit"
                onClick={() => handleSubmit()}
                disabled={!formCkeck()}>
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
    )
  );
};

export default withRouter(Registration);
