import DoneIcon from '@mui/icons-material/Done';
import { FormEventHandler, MouseEventHandler, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { APIBASEURL } from '../constants/url';
import { Employee } from '../models/Employee';
import { useForm, SubmitHandler } from 'react-hook-form';
interface Props {
    isDisplay: boolean,
    setDisplay: Function,
}
interface CreateEmployee {
    fullName: string;
    email: string;
    address: string;
    phoneNumber: string;
}

export const Modal: React.FunctionComponent<Props> = (props) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<CreateEmployee>();
    const queryClient = useQueryClient();
    

    const addEmployee = useMutation((data:CreateEmployee) => {
        return fetch(APIBASEURL + 'employees', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams(Object.entries(data))
        })
    }, {
        onSuccess: ()=> queryClient.invalidateQueries("employeesData")
    })
    

    const onSubmit: SubmitHandler<CreateEmployee> = data => addEmployee.mutate(data);
    
    if (!props.isDisplay) {
        return <></>
    }
    return (
        <div id="authentication-modal" tabIndex={-1} aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
            <div className="relative w-full h-full max-w-md md:h-auto">
                <div className="relative bg-white rounded-lg shadow ">
                    <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center :bg-gray-800 :text-white" data-modal-hide="authentication-modal" onClick={() => props.setDisplay(false)}>
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                    <div className="px-6 py-6 lg:px-8">
                        <h3 className="mb-4 text-xl font-medium text-gray-900 ">Add Employee</h3>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" action="#">
                            <div>
                                <label htmlFor="fullname" className="block mb-2 text-sm font-medium text-gray-900 ">Full name</label>
                                <input id="fullname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5    " placeholder="Ferdy Sambo" required {...register("fullName")}/>
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@company.com" required {...register("email")}/>
                            </div>
                            <div>
                                <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 ">Address</label>
                                <input id="address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder='Muria Living Depok' required {...register("address")}/>
                            </div>
                            <div>
                                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 ">Phone</label>
                                <input id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder='0878721212' required {...register("phoneNumber")}/>
                            </div>

                            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center  :bg-blue-700 :ring-blue-800">Submit</button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};
