import PersonAddIcon from '@mui/icons-material/PersonAdd';

export const Header = () => 
    <header className=" justify-between items-center relative flex py-4 px-4">
        <h1 className='text-2xl'>
            Manage Employees
        </h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <PersonAddIcon className='mr-2'/>Add new
        </button>
    </header>