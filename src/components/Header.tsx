import PersonAddIcon from '@mui/icons-material/PersonAdd';
interface Props {
    createEmployee: () => void;
}
export const Header: React.FunctionComponent<Props> = (props) => 
    <header className="mt-4 justify-between items-center relative flex py-4 px-4">
        <h1 className='text-2xl'>
            Manage Employees
        </h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=> props.createEmployee()}>
            <PersonAddIcon className='mr-2'/>Add new
        </button>
    </header>