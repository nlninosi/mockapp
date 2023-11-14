
import {useForm} from 'react-hook-form'
import { createUser } from '../api/users.api';

export function RegisterForm (props){
    const {register, handleSubmit} = useForm();
    const onSubmit = handleSubmit(data => {
        console.log(data)
        createUser(data)
    });
    return(
    <div>
        <h1>
            Sign in
        </h1>
        <div>
            <form onSubmit={onSubmit}>
                <input {...register("name", {required: "true"})} />
                <input {...register("email", {required: "true"})} />
                <input {...register("password", {required: "true"})} />
                
                <button> Sign in </button>
            </form>
            <button onClick={props.onChange}> Log in </button>
        </div>
    </div>
    );
}

