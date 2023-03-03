import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button, CircularProgress, Grid, TextField } from "@mui/material";
import { useStyles } from "./styles";
import { matchIsValidTel, MuiTelInput } from "mui-tel-input";
import { useState } from "react";

interface FormValues {
  customerName: string;
  dob: string;
  email: string;
  address: string;
  phone: string;
  altPhone: string;
}

const initialValues: FormValues = {
  customerName: "",
  dob: "",
  email: "",
  address: "",
  phone: "+91",
  altPhone: "+91",
};

const validationSchema = Yup.object().shape({
  customerName: Yup.string().required("Required"),
  dob: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  address: Yup.string().required("Required"),
  phone: Yup.string().required("Required").min(10),
  altPhone: Yup.string().required("Required").min(10),
});

export default function UserDetailsForm() {
  const classes = useStyles();

  const handleSubmit = async (values: FormValues, actions: any) => {
    actions.setSubmitting(true);

    // try {
    //   const response = await postUserDetails(values);
    //   console.log(response);
    //   actions.resetForm();
    //   actions.setStatus({ success: true });
    // } catch (error) {
    //   console.error(error);
    //   actions.setStatus({ success: false });
    // }

    actions.setSubmitting(false);
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      {({ errors, touched, handleChange, handleBlur, values, isSubmitting, status, setFieldValue }) => (
        <Form className={classes.form}>
          <TextField
            name="customerName"
            label="Customer Name"
            variant="outlined"
            className={classes.input}
            value={values.customerName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.customerName && Boolean(errors.customerName)}
            helperText={touched.customerName && errors.customerName}
          />

          <TextField
            name="dob"
            label="Date of Birth"
            variant="outlined"
            type="date"
            className={classes.input}
            InputLabelProps={{ shrink: true }}
            value={values.dob}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.dob && Boolean(errors.dob)}
            helperText={touched.dob && errors.dob}
          />

          <TextField
            name="email"
            label="Email Address"
            variant="outlined"
            className={classes.input}
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
          />

          <TextField
            name="address"
            label="Address"
            variant="outlined"
            multiline
            minRows={4}
            className={classes.input}
            value={values.address}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.address && Boolean(errors.address)}
            helperText={touched.address && errors.address}
          />

          <Grid container className={classes.gridContainer} spacing={2}>
            <Grid item xs={12} sm={6}>
              <div className={classes.gridItem}>
                <MuiTelInput preferredCountries={["IN"]} label="Phone" name="phone" forceCallingCode fullWidth value={values.phone} onChange={(value) => setFieldValue("phone", value)} />
                {touched.phone && errors.phone && <div className={classes.errorMsg}>{errors.phone}</div>}
              </div>
            </Grid>

            <Grid item xs={12} sm={6}>
              <div className={classes.gridItem}>
                <MuiTelInput
                  preferredCountries={["IN"]}
                  label="Alternate Phone"
                  name="altPhone"
                  forceCallingCode
                  fullWidth
                  value={values.altPhone}
                  onChange={(value) => setFieldValue("altPhone", value)}
                />
                {touched.altPhone && errors.altPhone && <div className={classes.errorMsg}>{errors.altPhone}</div>}
              </div>
            </Grid>
          </Grid>

          <Button type="submit" variant="contained" color="primary" className={classes.button} disabled={isSubmitting}>
            Submit
          </Button>

          {isSubmitting && <CircularProgress size={24} className={classes.loader} />}

          {status?.success && <div className={classes.successMsg}>Form submitted successfully!</div>}

          {status?.success === false && <div className={classes.errorMsg}>Form submission failed.</div>}
        </Form>
      )}
    </Formik>
  );
}