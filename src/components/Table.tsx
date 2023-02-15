import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
export const Table = () =>
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
                <Row name="Haggy" email="hagy@gmail.com" address="patimura" phoneNumber="08142213112" />
                <Row name="Haggy" email="hagy@gmail.com" address="patimura" phoneNumber="08142213112" />

            </tbody>
        </table>
    </div>

interface RowData {
    name: string,
    email: string,
    address: string,
    phoneNumber: string
}
const Row = ({ name, email, address, phoneNumber }: RowData) =>
    <tr>
        <td className="px-6 py-3 text-base">{name}</td>
        <td className="px-6 py-3 text-base">{email}</td>
        <td className="px-6 py-3 text-base">{address}</td>
        <td className="px-6 py-3 text-base">{phoneNumber}</td>
        <td className="px-6 py-3">
            <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-3 py-1 mr-2 mb-2"><EditIcon fontSize='small' /></button>
            <br className="block lg:hidden" />
            <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-red-800 focus:ring-4 focus:ring-red-200 font-medium rounded-lg text-xs px-3 py-1 mr-2 mb-2"><DeleteIcon fontSize='small' /></button>

        </td>
    </tr>