import { Box, Button, TextField } from '@mui/material'
import { Formik } from 'formik';
import * as yup from 'yup';
import useMediaQuery from '@mui/material/useMediaQuery';
import Header from '../../components/Header';

const initialValues = {
    name: '',
    alexisName: '',
    chapter: '',
    dateOfSurvival: '',
    gt: '',
    mi: '',
    batchName: '',
}


// Optional: For future use
//const phoneRegEx = /^(\+63)?(9\d{9}|(2|3[02]|4[32]|5[45]|6[34]|7[2478]|8[23]|9[45])?\d{7})$/
const dateRegEx = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/



// see yup docs
const userSchema = yup.object().shape({
    name: yup.string().required('required'),
    alexisName: yup.string().required('required'),
    chapter: yup.string().required('required'),
    dateOfSurvival: yup.string().matches(dateRegEx, 'Invalid date!').required('required'),
    gt: yup.string().required('required'),
    mi: yup.string().required('required'),
    batchName: yup.string().required('required'),
    //lastName: yup.string().required('required'),
    //email: yup.string().email('invalid email').required('required'),
    //contact: yup.string().matches(phoneRegEx, 'invalid phone number').required('required'),
    //address: yup.string().required('required'),
})

const Form = () => {
    const isNonMobile = useMediaQuery('(min-width:600px)');


    const handleFormSubmit = async (values) => {
        try {
            const response = await fetch(`http://localhost:3000/chapter/${values.chapter}/add-member`, {
                method: 'PUT',
                headers: {
                    "Content-Type": 'application/json'
                },

                body: JSON.stringify(values) // Sending form data as JSON
            });


            // Making sure there is a response data 
            const data = await response.json();
            if (response.ok) {
                alert('Member added successfully!');
                console.log(data);
            } else {
                alert(`Failed to add member: ${data.message}`);
            }

        } catch (err) {
            console.error('Error in submitting form!', err)
        }
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
                                label="Complete Name"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.name}
                                name="name"
                                error={!!touched.name && !!errors.name}
                                helperText={touched.name && errors.name}
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
                                sx={{ gridColumn: 'span 2' }}
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
                                label="Date Of Survival Format: YYYY-MM-DD"
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
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Batch Name"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.batchName}
                                name="batchName"
                                error={!!touched.batchName && !!errors.batchName}
                                helperText={touched.batchName && errors.batchName}
                                sx={{ gridColumn: 'span 2' }}
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