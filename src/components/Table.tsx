import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Employee } from '../models/Employee';
import { UseMutationResult } from 'react-query';
import fetcher from "../utils/fetcher"

interface Props {
    data: Employee[],
    deleteEmployee: (a:number)=> void;
    editEmployeeById: (a:number)=>void;
}
interface RowData {
    id:number,
    name: string,
    email: string,
    address: string,
    phoneNumber: string
}
export const Table = ({ data, deleteEmployee, editEmployeeById }: Props) =>{
    
    const Row = ({ name, email, address, phoneNumber, id }: RowData) =>
    <tr>
        <td className="px-6 py-3 text-base">{name}</td>
        <td className="px-6 py-3 text-base">{email}</td>
        <td className="px-6 py-3 text-base">{address}</td>
        <td className="px-6 py-3 text-base">{phoneNumber}</td>
        <td className="px-6 py-3">
            <button onClick={()=>editEmployeeById(id)} type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-3 py-1 mr-2 mb-2"><EditIcon fontSize='small' /></button>
            <br className="block lg:hidden" />
            <button onClick={()=>deleteEmployee(id)} type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-red-800 focus:ring-4 focus:ring-red-200 font-medium rounded-lg text-xs px-3 py-1 mr-2 mb-2"><DeleteIcon fontSize='small' /></button>

        </td>
    </tr>
    return (
    <div className="relative overflow-x-auto">
        <table className="table-auto w-full text-sm text-left">
            <thead className="text-s font-bold text-gray-700 uppercase bg-gray-50 ">
                <tr>
                    <th className="px-6 py-3">Full name</th>
                    <th className="px-6 py-3">Email</th>
                    <th className="px-6 py-3">Address</th>
                    <th className="px-6 py-3">Phone</th>
                    <th className="px-6 py-3">Actions</th>
                </tr>
            </thead>
            <tbody>
                {data.map(employee => <Row id={employee.id} key={employee.id} name={employee.fullName} email={employee.email} address={employee.address} phoneNumber={employee.phoneNumber} />)}

            </tbody>
        </table>
    </div>
    )



}