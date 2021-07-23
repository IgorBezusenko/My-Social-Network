import {Field, Form, Formik} from "formik";
import React from "react";
import {FilterType} from "../../redux/usersReducer";
import {useSelector} from "react-redux";
import {getUsersFilter} from "../../redux/userSelectors";

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
type FriendFormType = "null" | "true" | "false";
type FormType = {
    term: string,
    friend: FriendFormType
}
type PropsType = {
    onFilterChanged: (filter: FilterType) => void;
}
export const UsersSearchForm: React.FC<PropsType> = React.memo(
    (props) => {

        const filter = useSelector(getUsersFilter)

        const submit = (values: FormType, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {

            const filter: FilterType = {
                term: values.term,
                friend: values.friend === "null" ? null : values.friend === "true" ? true : false
            }
            setSubmitting(false);
            props.onFilterChanged(filter)
        }

        return (
            <>
                <Formik
                    enableReinitialize
                    initialValues={{term: filter.term, friend: String(filter.friend) as FriendFormType}}
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
