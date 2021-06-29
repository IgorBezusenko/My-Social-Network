import {Field, Form, Formik} from "formik";
import React from "react";
import {FilterType} from "../../redux/usersReducer";

const usersSearchFormValidate = (values: any) => {
    const errors = {};
    // if (!values.email) {
    //   errors.email = 'Required';
    // } else if (
    //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    // ) {
    //   errors.email = 'Invalid email address';
    // }
    return errors;
}
type FormType = {
    term: string,
    friend: "null" | "true" | "false"
}
type PropsType = {
    onFilterChanged: (filter: FilterType) => void;
}
export const UsersSearchForm: React.FC<PropsType> = React.memo(
    (props) => {
        const submit = (values: FormType, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {

            const filter: FilterType = {
                term: values.term,
                friend: values.friend === "null" ? null : values.friend === "true" ? true : false
            }
            setSubmitting(false);
            props.onFilterChanged(filter)
            debugger
        }
        return (
            <>
                <Formik
                    initialValues={{term: '', friend: "null"}}
                    validate={usersSearchFormValidate}
                    onSubmit={submit}
                >
                    {({isSubmitting}) => (
                        <Form>
                            <Field type="text" name="term"/>
                            <Field name="friend" as="select">
                                <option value="null">All</option>
                                <option value="true">Only followed</option>
                                <option value="false">Only unfollowed</option>
                            </Field>

                            <button type="submit" disabled={isSubmitting}>
                                Find
                            </button>
                        </Form>
                    )}
                </Formik>
            </>
        )
    }
)
