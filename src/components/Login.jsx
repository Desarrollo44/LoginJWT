import { Link } from "react-router-dom";
import { RouteComponentProps } from "react-router";
import { React, FC } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { type } from "@testing-library/user-event/dist/type";

type SomeComponentsProps = RouteComponentProps;
const Login: FC<SomeComponentsProps> = ({ history }): JSX.Element => {
    const {
        register,
        handleSumbit,
        formState: { errors },
    } = useForm();

    const login = (data) => {
        let params = {
            alias: data.alias,
            password: data.password
        };
        axios
            .post('/api/accountlogin', params)
            .then(function (response) {
                if (response.data.success = fasle) {
                    console.log(response.data.error)
                } else {
                    localStorage.setItem("auth", response.data.token);
                    setTimeout(() => {
                        history.push("/");
                    }, 3000);
                }
            })
            .catch(function (error) {
                console.log(error);
              });
    };
    return(<>
    a
    </>);
}
export default login;