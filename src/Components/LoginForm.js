export function LoginForm (props){    
    return(
        <div>
            <h1>
                User login
            </h1>
            <div>
                <p>Nombre</p>
                <input type="text"/>
                <p>Contraseña</p>
                <input type="password"/>
                <button onClick={props.onChange}> Log in </button>
                <button > Sign in </button>
            </div>
        </div>
        );
    }