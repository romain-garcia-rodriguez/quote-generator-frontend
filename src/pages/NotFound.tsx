import Button from '../components/Button';
import NotFoundSvg from '../components/Icons/NotFoundSvg';
import { useNavigate } from 'react-router-dom';

function NotFound() {
    const navigate = useNavigate();

    const backHome = () => {
        navigate('/')
    }

    return <main className='h-screen flex flex-col items-center justify-center'>
        <NotFoundSvg />
        <h1 className='text-lg font-bold mb-10'>Oups... This page could not be found.</h1>
        <Button content='Back home' onBtnClicked={backHome} />
    </main>
}

export default NotFound;