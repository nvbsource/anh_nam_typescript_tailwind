import React from "react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import FormItem from "components/Form/FormItem";
import InputField from "components/Form/InputField";
import InputPasswordField from "components/Form/InputPasswordField";

const validationSchema = Yup.object().shape({
  username: Yup.string().required("Please enter your user name"),
  email: Yup.string()
    .email("Invalid email")
    .required("Please enter your email"),
  password: Yup.string().required("Please enter your password"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), ""],
    "Your passwords do not match"
  ),
});

interface InformationRegister {
  username: string;
  password: string;
  email: string;
}

const SignUpForm = (props: any) => {
  const { disableSubmit = false, className, signInUrl = "/sign-in" } = props;

  const onSignUp = async (
    values: InformationRegister,
    setSubmitting: (isSubmitting: boolean) => void
  ) => {
    const { username, password, email } = values;
    setSubmitting(true);
    //... TODO Call API
    setSubmitting(false);
  };

  return (
    <div className={className}>
      <Formik
        initialValues={{
          username: "",
          password: "",
          confirmPassword: "",
          email: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          if (!disableSubmit) {
            onSignUp(values, setSubmitting);
          } else {
            setSubmitting(false);
          }
        }}
      >
        {({ touched, errors, isSubmitting }) => (
          <Form>
            <FormItem
              label="User Name"
              invalid={(errors.username && touched.username) as boolean}
              errorMessage={errors.username}
            >
              <Field
                type="text"
                autoComplete="off"
                name="username"
                placeholder="User Name"
                component={InputField}
              />
            </FormItem>
            <FormItem
              label="Email"
              invalid={(errors.email && touched.email) as boolean}
              errorMessage={errors.email}
            >
              <Field
                type="text"
                autoComplete="off"
                name="email"
                placeholder="Email"
                component={InputField}
              />
            </FormItem>
            <FormItem
              label="Password"
              invalid={(errors.password && touched.password) as boolean}
              errorMessage={errors.password}
            >
              <Field
                type="password"
                autoComplete="off"
                name="password"
                placeholder="Password"
                component={InputPasswordField}
              />
            </FormItem>
            <FormItem
              label="Confirm Password"
              invalid={
                (errors.confirmPassword && touched.confirmPassword) as boolean
              }
              errorMessage={errors.confirmPassword}
            >
              <Field
                type="password"
                autoComplete="off"
                name="confirmPassword"
                placeholder="Confirm Password"
                component={InputPasswordField}
              />
            </FormItem>
            <button
              className="block w-full px-[32px] py-[11.5px] bg-[#4F46E5] text-white rounded-md font-[600]"
              type="submit"
            >
              {isSubmitting ? "Creating Account..." : "Sign Up"}
            </button>
            <div className="mt-4 text-center">
              <span>Already have an account? </span>
              <Link className="text-indigo-600 hover:underline" to={signInUrl}>
                Sign in
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUpForm;
