import Loading from '../../components/loading/loading'
import LoginForm from './LoginForm/loginForm'
import { useLoading } from '../../hooks/useLoading';

const Login = () => {

    const { loading } = useLoading()

    if ( loading ) return <Loading />
    else
        return (
            <div className='login-container'>
                <header className='login-header'>
                    <h1>Login</h1>
                    <h3> Bem vindo de volta!</h3>
                </header>
                <LoginForm />
            </div>
        )
}

export default Login