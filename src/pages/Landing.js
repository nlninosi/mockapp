
import { useState } from 'react';
import { LoginForm } from '../Components/LoginForm';
import { RegisterForm } from '../Components/RegisterForm';

export function Landing (){
    
    const [userLogin, setUserLogin] =useState(false);
    const [savescreen, setSavescreen] = useState(true);
    function changeState() {
        setUserLogin(!userLogin);
    }
    function changeBackdrop() {
        setSavescreen(false);
    }
    function changePage() {
        alert('¡Me hiciste clic!');
    }
    return(
    <div>
        <h1>
            Fuck it we ball
        </h1>

        <div>
        {savescreen ? (
            <div>
                <h1>Bienvenido</h1>
                <button onClick={changeBackdrop}>Entrar a la app</button>
            </div>
        ) : (
            userLogin ? (<LoginForm onChange={changeState}/>) : (<RegisterForm onChange={changeState}/>)
        )}    
        </div>
    </div>
    );
}
