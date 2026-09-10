import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import Button from './Button';

interface IProps {
    closeDeleteModal: () => void,
    isDeleteOpen: boolean,
    deleteProductHanedler: (event) => void,
}

export const DeleteModel = ({ closeDeleteModal, isDeleteOpen, deleteProductHanedler }: IProps) => {
    return (
        <>


            <Transition appear show={isDeleteOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeDeleteModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/10 backdrop-blur-none md:backdrop-blur-sm" />

                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Delete Product
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                            If you delete this product, you will not be able to recover it.
                                        </p>
                                    </div>


                                    <div className=" flex space-x-3 items-center justify-center mt-4">
                                        <Button className="bg-red-900" onClick={deleteProductHanedler} > Yes , Delete it </Button>
                                        <Button className="bg-gray-900" onClick={closeDeleteModal} >  Cancel </Button>



                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default DeleteModel;