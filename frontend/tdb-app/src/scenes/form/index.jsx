import { Box, Button, TextField, Typography } from '@mui/material'
import { Formik } from 'formik';
import * as yup from 'yup';
import useMediaQuery from '@mui/material/useMediaQuery';
import Header from '../../components/Header';

const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    contact: '',
    address: '',
    alexisName: '',
    chapter: '',
    dateOfSurvival: '',
    gt: '',
    mi: '',
}

const phoneRegEx = /^(\+63)?(9\d{9}|(2|3[02]|4[32]|5[45]|6[34]|7[2478]|8[23]|9[45])?\d{7})$/


// see yup docs
const userSchema = yup.object().shape({
    firstName: yup.string().required('required'),
    lastName: yup.string().required('required'),
    email: yup.string().email('invalid email').required('required'),
    contact: yup.string().matches(phoneRegEx, 'invalid phone number').required('required'),
    address: yup.string().required('required'),
})

const Form = () => {
    const isNonMobile = useMediaQuery('(min-width:600px)');
    const handleFormSubmit = (values) => {
        console.log(values);
    }

    return (
        <Box m="20px">
            <Header title="CREATE USER" subtitle="Create a New User Profile" />
            {/* Form Section, see Formik docs for syntax */}
            <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={userSchema}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleBlur,
                    handleChange,
                    handleSubmit
                }) => (
                    <form onSubmit={handleSubmit}>
                        <Box
                            display="grid"
                            gap="30px"
                            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                            sx={{
                                '& > div': {
                                    gridColumn: isNonMobile ? undefined : 'span 4'
                                }
                            }}
                        >
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="First Name"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.firstName}
                                name="firstName"
                                error={!!touched.firstName && !!errors.firstName}
                                helperText={touched.firstName && errors.firstName}
                                sx={{ gridColumn: 'span 2' }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Last Name"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.lastName}
                                name="lastName"
                                error={!!touched.lastName && !!errors.lastName}
                                helperText={touched.lastName && errors.lastName}
                                sx={{ gridColumn: 'span 2' }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Alexis Name"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.alexisName}
                                name="alexisName"
                                error={!!touched.alexisName && !!errors.alexisName}
                                helperText={touched.alexisName && errors.alexisName}
                                sx={{ gridColumn: 'span 4' }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Community Chapter"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.chapter}
                                name="chapter"
                                error={!!touched.chapter && !!errors.chapter}
                                helperText={touched.chapter && errors.chapter}
                                sx={{ gridColumn: 'span 2' }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Date Of Survival"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.dateOfSurvival}
                                name="dateOfSurvival"
                                error={!!touched.dateOfSurvival && !!errors.dateOfSurvival}
                                helperText={touched.dateOfSurvival && errors.dateOfSurvival}
                                sx={{ gridColumn: 'span 2' }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Grand Triskelion"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.gt}
                                name="gt"
                                error={!!touched.gt && !!errors.gt}
                                helperText={touched.gt && errors.gt}
                                sx={{ gridColumn: 'span 2' }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Master Initiator"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.mi}
                                name="mi"
                                error={!!touched.mi && !!errors.mi}
                                helperText={touched.mi && errors.mi}
                                sx={{ gridColumn: 'span 2' }}
                            />
                        </Box>
                        <Typography variant='h6' color='secondary' mt="30px">
                            Additional Information
                        </Typography>
                        <Box
                            display="grid"
                            gap="30px"
                            gridTemplateColumns="repeat(3, minmax(0, 1fr))"
                            sx={{
                                '& > div': {
                                    gridColumn: isNonMobile ? undefined : 'span 4'
                                }
                            }}
                        >
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Email Address"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.email}
                                name="email"
                                error={!!touched.email && !!errors.email}
                                helperText={touched.email && errors.email}
                                sx={{ gridColumn: 'span 1' }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Contact Number Starting +639"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.contact}
                                name="contact"
                                error={!!touched.contact && !!errors.contact}
                                helperText={touched.contact && errors.contact}
                                sx={{ gridColumn: 'span 1' }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Address"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.address}
                                name="address"
                                error={!!touched.address && !!errors.address}
                                helperText={touched.address && errors.address}
                                sx={{ gridColumn: 'span 1' }}
                            />
                        </Box>
                        <Box display="flex" justifyContent="end" mt="10px">
                            <Button type="submit" color="secondary" variant="contained">CREATE</Button>
                        </Box>
                    </form>
                )}
            </Formik>
        </Box>
    )
}

export default Form