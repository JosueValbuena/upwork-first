import { Button } from "@/components/ui/button"
import { IconPlusOutlinedWhite } from "@/utils/icons"
import TableCustomTwo from "../table-custom-two/TableCustomTwo"
import { AddUserModal } from "../modals";
import { useState } from "react";

const tableHeadTitles = [
    'Name',
    'Email',
    'Role',
    'Last Login',
    'Status',
    ''
];

const ManageUsersSettings = () => {

    const [isOpenModalAddUser, setIsOpenModalAddUser] = useState(false);

    const onOpenModalAddUser = () => {
        setIsOpenModalAddUser(true);
    };

    const onCloseModalAddUser = () => {
        setIsOpenModalAddUser(false);
    };

    const tableContent = [
        {
            name:
                <div className="flex items-center gap-3">
                    <div className="bg-primary-dark w-[2rem] h-[2rem] rounded-2xl flex justify-center items-center text-white">P</div>
                    Patricia Doe
                </div>,
            email: 'johndoe@gmail.com',
            role: 'admin',
            lastLogin: '2 days ago',
            status: <div className="bg-primary-dark w-[5rem] text-center text-white rounded-2xl">Active</div>,
            remove: <Button className="bg-primary-light text-black border-gray-400 hover:text-white">Remove</Button>
        },
        {
            name:
                <div className="flex items-center gap-3">
                    <div className="bg-primary-dark w-[2rem] h-[2rem] rounded-2xl flex justify-center items-center text-white">S</div>
                    Susana Doe
                </div>,
            email: 'susanadoe@gmail.com',
            role: 'Super admin',
            lastLogin: '2 days ago',
            status: <div className="bg-primary-dark w-[5rem] text-center text-white rounded-2xl">Active</div>,
            remove: <Button className="bg-primary-light text-black border-gray-400 hover:text-white">Remove</Button>
        },
        {
            name:
                <div className="flex items-center gap-3">
                    <div className="bg-primary-dark w-[2rem] h-[2rem] rounded-2xl flex justify-center items-center text-white">N</div>
                    Nicolas Doe
                </div>,
            email: 'nicolasdoe@gmail.com',
            role: 'viewer',
            lastLogin: '2 days ago',
            status: <div className="bg-primary-dark w-[5rem] text-center text-white rounded-2xl">Active</div>,
            remove: <Button className="bg-primary-light text-black border-gray-400 hover:text-white">Remove</Button>
        },
        {
            name: <div className="flex items-center gap-3">
                <div className="bg-primary-dark w-[2rem] h-[2rem] rounded-2xl flex justify-center items-center text-white">N</div>
                Nathasha Doe
            </div>,
            email: 'natadoe@gmail.com',
            role: 'Limited',
            lastLogin: '2 days ago',
            status: <div className="bg-primary-dark w-[5rem] text-center text-white rounded-2xl">Active</div>,
            remove: <Button className="bg-primary-light text-black border-gray-400 hover:text-white">Remove</Button>
        }
    ];

    return (
        <>
            <AddUserModal isOpen={isOpenModalAddUser} onCloseModal={onCloseModalAddUser} />
            <div className='p-3 flex flex-col gap-3 bg-primary-light mt-6 h-full md:px-10'>
                <div className="w-full max-w-[1366px] mx-auto flex flex-col gap-5 md:p-5">

                    <div className="flex justify-between">
                        <h2 className="font-bold text-xl">Manage Users</h2>


                        <Button
                            className="bg-primary-dark font-semibold"
                            onClick={onOpenModalAddUser}
                        >
                            <IconPlusOutlinedWhite />
                            Add User
                        </Button>
                    </div>

                    <TableCustomTwo tableHeadTitles={tableHeadTitles} tableContent={tableContent} customizeHeader={'bg-white'} />
                </div>
            </div>
        </>
    )
}

export default ManageUsersSettings