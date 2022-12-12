import SimpleBanner from "../../shared/components/banner/simpleBanner";
import EmptyButton from "../../shared/components/buttons/emptyButton";
import SimpleButton from "../../shared/components/buttons/simpleButton";
import Checkbox from "../../shared/components/inputs/checkbox";
import Layout from "../../shared/layout/layout";

const Apps = () => {
    return ( 
        <Layout>
            <SimpleBanner class="mb-12">
                <div className="flex justify-between border-b border-gray-200 items-center">
                    <h1 className='font-medium text-2xl text-slate-900'>Mes applications</h1>

                    <SimpleButton text="Ajouter" class="max-w-fit my-3"></SimpleButton>
                </div>
            </SimpleBanner>

            <ul role="list" className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mb-10">
                
                <li className="bg-white divide-y divide-gray-100 w-full p-5 rounded-lg transition duration-300 hover:shadow-lg overflow-hidden">

                    <div className="flex gap-2 pb-4">
                        <div className="w-16 h-16 bg-gray-50 shadow-sm grid place-items-center rounded-md">
                            <img className="w-14 h-14 object-contain aspect-[3/2]" src="/images/cosna.png" alt="app logo" />
                        </div>

                        <div className="flex justify-between w-full">
                            <div className="flex flex-1 flex-col gap-1">
                                <h6 className="font-medium text-sm text-slate-900 capitalize">Cosna Afrique test</h6>
                                <p className="text-xs text-slate-400">Crée le: <span className="ml-2 text-slate-500">24, Sep 2022</span></p>
                                <div className="flex gap-2">
                                    <p className="text-xs text-slate-400">Status : </p>
                                    <span className="bg-green-100 font-medium text-xs text-green-800 rounded-2xl px-2.5 py-0.5">Activé</span>
                                </div>
                            </div>

                            <div className="">
                                <Checkbox class="space-y-0" name="action"></Checkbox>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between pt-4">
                        <div className="">
                            <h6 className="text-xs text-slate-400 mb-1.5">Revenu de l'app</h6>
                            <div className="flex items-center">
                                <span className="mr-2">
                                    <svg className="w-6 h-6 stroke-slate-400" aria-hidden="true" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.25 18.75C7.71719 18.75 13.0136 19.4812 18.0468 20.8512C18.7738 21.0491 19.5 20.5086 19.5 19.7551V18.75M3.75 4.5V5.25C3.75 5.66421 3.41421 6 3 6H2.25M2.25 6V5.625C2.25 5.00368 2.75368 4.5 3.375 4.5H20.25M2.25 6V15M20.25 4.5V5.25C20.25 5.66421 20.5858 6 21 6H21.75M20.25 4.5H20.625C21.2463 4.5 21.75 5.00368 21.75 5.625V15.375C21.75 15.9963 21.2463 16.5 20.625 16.5H20.25M21.75 15H21C20.5858 15 20.25 15.3358 20.25 15.75V16.5M20.25 16.5H3.75M3.75 16.5H3.375C2.75368 16.5 2.25 15.9963 2.25 15.375V15M3.75 16.5V15.75C3.75 15.3358 3.41421 15 3 15H2.25M15 10.5C15 12.1569 13.6569 13.5 12 13.5C10.3431 13.5 9 12.1569 9 10.5C9 8.84315 10.3431 7.5 12 7.5C13.6569 7.5 15 8.84315 15 10.5ZM18 10.5H18.0075V10.5075H18V10.5ZM6 10.5H6.0075V10.5075H6V10.5Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </span>
                                <p className="font-medium text-sm">2000000 FCFA</p>
                            </div>
                        </div>
                        <EmptyButton class="max-w-fit">
                            <svg className="w-6 h-6 stroke-slate-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 6.75C11.5858 6.75 11.25 6.41421 11.25 6C11.25 5.58579 11.5858 5.25 12 5.25C12.4142 5.25 12.75 5.58579 12.75 6C12.75 6.41421 12.4142 6.75 12 6.75Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M12 12.75C11.5858 12.75 11.25 12.4142 11.25 12C11.25 11.5858 11.5858 11.25 12 11.25C12.4142 11.25 12.75 11.5858 12.75 12C12.75 12.4142 12.4142 12.75 12 12.75Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M12 18.75C11.5858 18.75 11.25 18.4142 11.25 18C11.25 17.5858 11.5858 17.25 12 17.25C12.4142 17.25 12.75 17.5858 12.75 18C12.75 18.4142 12.4142 18.75 12 18.75Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </EmptyButton>
                    </div>

                </li>

                <li className="bg-white divide-y divide-gray-100 w-full p-5 rounded-lg transition duration-300 hover:shadow-lg overflow-hidden">

                    <div className="flex gap-2 pb-4">
                        <div className="w-16 h-16 bg-gray-50 shadow-sm grid place-items-center rounded-md">
                            <img className="w-14 h-14 object-contain aspect-[3/2]" src="/images/cosna.png" alt="app logo" />
                        </div>

                        <div className="flex justify-between w-full">
                            <div className="flex flex-1 flex-col gap-1">
                                <h6 className="font-medium text-sm text-slate-900 capitalize">Cosna Afrique test</h6>
                                <p className="text-xs text-slate-400">Crée le: <span className="ml-2 text-slate-500">24, Sep 2022</span></p>
                                <div className="flex gap-2">
                                    <p className="text-xs text-slate-400">Status : </p>
                                    <span className="bg-green-100 font-medium text-xs text-green-800 rounded-2xl px-2.5 py-0.5">Activé</span>
                                </div>
                            </div>

                            <div className="">
                                <Checkbox class="space-y-0" name="action"></Checkbox>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between pt-4">
                        <div className="">
                            <h6 className="text-xs text-slate-400 mb-1.5">Revenu de l'app</h6>
                            <div className="flex items-center">
                                <span className="mr-2">
                                    <svg className="w-6 h-6 stroke-slate-400" aria-hidden="true" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.25 18.75C7.71719 18.75 13.0136 19.4812 18.0468 20.8512C18.7738 21.0491 19.5 20.5086 19.5 19.7551V18.75M3.75 4.5V5.25C3.75 5.66421 3.41421 6 3 6H2.25M2.25 6V5.625C2.25 5.00368 2.75368 4.5 3.375 4.5H20.25M2.25 6V15M20.25 4.5V5.25C20.25 5.66421 20.5858 6 21 6H21.75M20.25 4.5H20.625C21.2463 4.5 21.75 5.00368 21.75 5.625V15.375C21.75 15.9963 21.2463 16.5 20.625 16.5H20.25M21.75 15H21C20.5858 15 20.25 15.3358 20.25 15.75V16.5M20.25 16.5H3.75M3.75 16.5H3.375C2.75368 16.5 2.25 15.9963 2.25 15.375V15M3.75 16.5V15.75C3.75 15.3358 3.41421 15 3 15H2.25M15 10.5C15 12.1569 13.6569 13.5 12 13.5C10.3431 13.5 9 12.1569 9 10.5C9 8.84315 10.3431 7.5 12 7.5C13.6569 7.5 15 8.84315 15 10.5ZM18 10.5H18.0075V10.5075H18V10.5ZM6 10.5H6.0075V10.5075H6V10.5Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </span>
                                <p className="font-medium text-sm">2000000 FCFA</p>
                            </div>
                        </div>
                        <EmptyButton class="max-w-fit">
                            <svg className="w-6 h-6 stroke-slate-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 6.75C11.5858 6.75 11.25 6.41421 11.25 6C11.25 5.58579 11.5858 5.25 12 5.25C12.4142 5.25 12.75 5.58579 12.75 6C12.75 6.41421 12.4142 6.75 12 6.75Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M12 12.75C11.5858 12.75 11.25 12.4142 11.25 12C11.25 11.5858 11.5858 11.25 12 11.25C12.4142 11.25 12.75 11.5858 12.75 12C12.75 12.4142 12.4142 12.75 12 12.75Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M12 18.75C11.5858 18.75 11.25 18.4142 11.25 18C11.25 17.5858 11.5858 17.25 12 17.25C12.4142 17.25 12.75 17.5858 12.75 18C12.75 18.4142 12.4142 18.75 12 18.75Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </EmptyButton>
                    </div>

                </li>

                <li className="bg-white divide-y divide-gray-100 w-full p-5 rounded-lg transition duration-300 hover:shadow-lg overflow-hidden">

                    <div className="flex gap-2 pb-4">
                        <div className="w-16 h-16 bg-gray-50 shadow-sm grid place-items-center rounded-md">
                            <img className="w-14 h-14 object-contain aspect-[3/2]" src="/images/cosna.png" alt="app logo" />
                        </div>

                        <div className="flex justify-between w-full">
                            <div className="flex flex-1 flex-col gap-1">
                                <h6 className="font-medium text-sm text-slate-900 capitalize">Cosna Afrique test</h6>
                                <p className="text-xs text-slate-400">Crée le: <span className="ml-2 text-slate-500">24, Sep 2022</span></p>
                                <div className="flex gap-2">
                                    <p className="text-xs text-slate-400">Status : </p>
                                    <span className="bg-green-100 font-medium text-xs text-green-800 rounded-2xl px-2.5 py-0.5">Activé</span>
                                </div>
                            </div>

                            <div className="">
                                <Checkbox class="space-y-0" name="action"></Checkbox>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between pt-4">
                        <div className="">
                            <h6 className="text-xs text-slate-400 mb-1.5">Revenu de l'app</h6>
                            <div className="flex items-center">
                                <span className="mr-2">
                                    <svg className="w-6 h-6 stroke-slate-400" aria-hidden="true" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.25 18.75C7.71719 18.75 13.0136 19.4812 18.0468 20.8512C18.7738 21.0491 19.5 20.5086 19.5 19.7551V18.75M3.75 4.5V5.25C3.75 5.66421 3.41421 6 3 6H2.25M2.25 6V5.625C2.25 5.00368 2.75368 4.5 3.375 4.5H20.25M2.25 6V15M20.25 4.5V5.25C20.25 5.66421 20.5858 6 21 6H21.75M20.25 4.5H20.625C21.2463 4.5 21.75 5.00368 21.75 5.625V15.375C21.75 15.9963 21.2463 16.5 20.625 16.5H20.25M21.75 15H21C20.5858 15 20.25 15.3358 20.25 15.75V16.5M20.25 16.5H3.75M3.75 16.5H3.375C2.75368 16.5 2.25 15.9963 2.25 15.375V15M3.75 16.5V15.75C3.75 15.3358 3.41421 15 3 15H2.25M15 10.5C15 12.1569 13.6569 13.5 12 13.5C10.3431 13.5 9 12.1569 9 10.5C9 8.84315 10.3431 7.5 12 7.5C13.6569 7.5 15 8.84315 15 10.5ZM18 10.5H18.0075V10.5075H18V10.5ZM6 10.5H6.0075V10.5075H6V10.5Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </span>
                                <p className="font-medium text-sm">2000000 FCFA</p>
                            </div>
                        </div>
                        <EmptyButton class="max-w-fit">
                            <svg className="w-6 h-6 stroke-slate-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 6.75C11.5858 6.75 11.25 6.41421 11.25 6C11.25 5.58579 11.5858 5.25 12 5.25C12.4142 5.25 12.75 5.58579 12.75 6C12.75 6.41421 12.4142 6.75 12 6.75Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M12 12.75C11.5858 12.75 11.25 12.4142 11.25 12C11.25 11.5858 11.5858 11.25 12 11.25C12.4142 11.25 12.75 11.5858 12.75 12C12.75 12.4142 12.4142 12.75 12 12.75Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M12 18.75C11.5858 18.75 11.25 18.4142 11.25 18C11.25 17.5858 11.5858 17.25 12 17.25C12.4142 17.25 12.75 17.5858 12.75 18C12.75 18.4142 12.4142 18.75 12 18.75Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </EmptyButton>
                    </div>

                </li>

<li className="bg-white divide-y divide-gray-100 w-full p-5 rounded-lg transition duration-300 hover:shadow-lg overflow-hidden">

    <div className="flex gap-2 pb-4">
        <div className="w-16 h-16 bg-gray-50 shadow-sm grid place-items-center rounded-md">
            <img className="w-14 h-14 object-contain aspect-[3/2]" src="/images/cosna.png" alt="app logo" />
        </div>

        <div className="flex justify-between w-full">
            <div className="flex flex-1 flex-col gap-1">
                <h6 className="font-medium text-sm text-slate-900 capitalize">Cosna Afrique test</h6>
                <p className="text-xs text-slate-400">Crée le: <span className="ml-2 text-slate-500">24, Sep 2022</span></p>
                <div className="flex gap-2">
                    <p className="text-xs text-slate-400">Status : </p>
                    <span className="bg-green-100 font-medium text-xs text-green-800 rounded-2xl px-2.5 py-0.5">Activé</span>
                </div>
            </div>

            <div className="">
                <Checkbox class="space-y-0" name="action"></Checkbox>
            </div>
        </div>
    </div>

    <div className="flex items-center justify-between pt-4">
        <div className="">
            <h6 className="text-xs text-slate-400 mb-1.5">Revenu de l'app</h6>
            <div className="flex items-center">
                <span className="mr-2">
                    <svg className="w-6 h-6 stroke-slate-400" aria-hidden="true" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.25 18.75C7.71719 18.75 13.0136 19.4812 18.0468 20.8512C18.7738 21.0491 19.5 20.5086 19.5 19.7551V18.75M3.75 4.5V5.25C3.75 5.66421 3.41421 6 3 6H2.25M2.25 6V5.625C2.25 5.00368 2.75368 4.5 3.375 4.5H20.25M2.25 6V15M20.25 4.5V5.25C20.25 5.66421 20.5858 6 21 6H21.75M20.25 4.5H20.625C21.2463 4.5 21.75 5.00368 21.75 5.625V15.375C21.75 15.9963 21.2463 16.5 20.625 16.5H20.25M21.75 15H21C20.5858 15 20.25 15.3358 20.25 15.75V16.5M20.25 16.5H3.75M3.75 16.5H3.375C2.75368 16.5 2.25 15.9963 2.25 15.375V15M3.75 16.5V15.75C3.75 15.3358 3.41421 15 3 15H2.25M15 10.5C15 12.1569 13.6569 13.5 12 13.5C10.3431 13.5 9 12.1569 9 10.5C9 8.84315 10.3431 7.5 12 7.5C13.6569 7.5 15 8.84315 15 10.5ZM18 10.5H18.0075V10.5075H18V10.5ZM6 10.5H6.0075V10.5075H6V10.5Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </span>
                <p className="font-medium text-sm">2000000 FCFA</p>
            </div>
        </div>
        <EmptyButton class="max-w-fit">
            <svg className="w-6 h-6 stroke-slate-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 6.75C11.5858 6.75 11.25 6.41421 11.25 6C11.25 5.58579 11.5858 5.25 12 5.25C12.4142 5.25 12.75 5.58579 12.75 6C12.75 6.41421 12.4142 6.75 12 6.75Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 12.75C11.5858 12.75 11.25 12.4142 11.25 12C11.25 11.5858 11.5858 11.25 12 11.25C12.4142 11.25 12.75 11.5858 12.75 12C12.75 12.4142 12.4142 12.75 12 12.75Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 18.75C11.5858 18.75 11.25 18.4142 11.25 18C11.25 17.5858 11.5858 17.25 12 17.25C12.4142 17.25 12.75 17.5858 12.75 18C12.75 18.4142 12.4142 18.75 12 18.75Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </EmptyButton>
    </div>

</li>

<li className="bg-white divide-y divide-gray-100 w-full p-5 rounded-lg transition duration-300 hover:shadow-lg overflow-hidden">

    <div className="flex gap-2 pb-4">
        <div className="w-16 h-16 bg-gray-50 shadow-sm grid place-items-center rounded-md">
            <img className="w-14 h-14 object-contain aspect-[3/2]" src="/images/cosna.png" alt="app logo" />
        </div>

        <div className="flex justify-between w-full">
            <div className="flex flex-1 flex-col gap-1">
                <h6 className="font-medium text-sm text-slate-900 capitalize">Cosna Afrique test</h6>
                <p className="text-xs text-slate-400">Crée le: <span className="ml-2 text-slate-500">24, Sep 2022</span></p>
                <div className="flex gap-2">
                    <p className="text-xs text-slate-400">Status : </p>
                    <span className="bg-green-100 font-medium text-xs text-green-800 rounded-2xl px-2.5 py-0.5">Activé</span>
                </div>
            </div>

            <div className="">
                <Checkbox class="space-y-0" name="action"></Checkbox>
            </div>
        </div>
    </div>

    <div className="flex items-center justify-between pt-4">
        <div className="">
            <h6 className="text-xs text-slate-400 mb-1.5">Revenu de l'app</h6>
            <div className="flex items-center">
                <span className="mr-2">
                    <svg className="w-6 h-6 stroke-slate-400" aria-hidden="true" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.25 18.75C7.71719 18.75 13.0136 19.4812 18.0468 20.8512C18.7738 21.0491 19.5 20.5086 19.5 19.7551V18.75M3.75 4.5V5.25C3.75 5.66421 3.41421 6 3 6H2.25M2.25 6V5.625C2.25 5.00368 2.75368 4.5 3.375 4.5H20.25M2.25 6V15M20.25 4.5V5.25C20.25 5.66421 20.5858 6 21 6H21.75M20.25 4.5H20.625C21.2463 4.5 21.75 5.00368 21.75 5.625V15.375C21.75 15.9963 21.2463 16.5 20.625 16.5H20.25M21.75 15H21C20.5858 15 20.25 15.3358 20.25 15.75V16.5M20.25 16.5H3.75M3.75 16.5H3.375C2.75368 16.5 2.25 15.9963 2.25 15.375V15M3.75 16.5V15.75C3.75 15.3358 3.41421 15 3 15H2.25M15 10.5C15 12.1569 13.6569 13.5 12 13.5C10.3431 13.5 9 12.1569 9 10.5C9 8.84315 10.3431 7.5 12 7.5C13.6569 7.5 15 8.84315 15 10.5ZM18 10.5H18.0075V10.5075H18V10.5ZM6 10.5H6.0075V10.5075H6V10.5Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </span>
                <p className="font-medium text-sm">2000000 FCFA</p>
            </div>
        </div>
        <EmptyButton class="max-w-fit">
            <svg className="w-6 h-6 stroke-slate-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 6.75C11.5858 6.75 11.25 6.41421 11.25 6C11.25 5.58579 11.5858 5.25 12 5.25C12.4142 5.25 12.75 5.58579 12.75 6C12.75 6.41421 12.4142 6.75 12 6.75Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 12.75C11.5858 12.75 11.25 12.4142 11.25 12C11.25 11.5858 11.5858 11.25 12 11.25C12.4142 11.25 12.75 11.5858 12.75 12C12.75 12.4142 12.4142 12.75 12 12.75Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 18.75C11.5858 18.75 11.25 18.4142 11.25 18C11.25 17.5858 11.5858 17.25 12 17.25C12.4142 17.25 12.75 17.5858 12.75 18C12.75 18.4142 12.4142 18.75 12 18.75Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </EmptyButton>
    </div>

</li>

<li className="bg-white divide-y divide-gray-100 w-full p-5 rounded-lg transition duration-300 hover:shadow-lg overflow-hidden">

    <div className="flex gap-2 pb-4">
        <div className="w-16 h-16 bg-gray-50 shadow-sm grid place-items-center rounded-md">
            <img className="w-14 h-14 object-contain aspect-[3/2]" src="/images/cosna.png" alt="app logo" />
        </div>

        <div className="flex justify-between w-full">
            <div className="flex flex-1 flex-col gap-1">
                <h6 className="font-medium text-sm text-slate-900 capitalize">Cosna Afrique test</h6>
                <p className="text-xs text-slate-400">Crée le: <span className="ml-2 text-slate-500">24, Sep 2022</span></p>
                <div className="flex gap-2">
                    <p className="text-xs text-slate-400">Status : </p>
                    <span className="bg-green-100 font-medium text-xs text-green-800 rounded-2xl px-2.5 py-0.5">Activé</span>
                </div>
            </div>

            <div className="">
                <Checkbox class="space-y-0" name="action"></Checkbox>
            </div>
        </div>
    </div>

    <div className="flex items-center justify-between pt-4">
        <div className="">
            <h6 className="text-xs text-slate-400 mb-1.5">Revenu de l'app</h6>
            <div className="flex items-center">
                <span className="mr-2">
                    <svg className="w-6 h-6 stroke-slate-400" aria-hidden="true" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.25 18.75C7.71719 18.75 13.0136 19.4812 18.0468 20.8512C18.7738 21.0491 19.5 20.5086 19.5 19.7551V18.75M3.75 4.5V5.25C3.75 5.66421 3.41421 6 3 6H2.25M2.25 6V5.625C2.25 5.00368 2.75368 4.5 3.375 4.5H20.25M2.25 6V15M20.25 4.5V5.25C20.25 5.66421 20.5858 6 21 6H21.75M20.25 4.5H20.625C21.2463 4.5 21.75 5.00368 21.75 5.625V15.375C21.75 15.9963 21.2463 16.5 20.625 16.5H20.25M21.75 15H21C20.5858 15 20.25 15.3358 20.25 15.75V16.5M20.25 16.5H3.75M3.75 16.5H3.375C2.75368 16.5 2.25 15.9963 2.25 15.375V15M3.75 16.5V15.75C3.75 15.3358 3.41421 15 3 15H2.25M15 10.5C15 12.1569 13.6569 13.5 12 13.5C10.3431 13.5 9 12.1569 9 10.5C9 8.84315 10.3431 7.5 12 7.5C13.6569 7.5 15 8.84315 15 10.5ZM18 10.5H18.0075V10.5075H18V10.5ZM6 10.5H6.0075V10.5075H6V10.5Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </span>
                <p className="font-medium text-sm">2000000 FCFA</p>
            </div>
        </div>
        <EmptyButton class="max-w-fit">
            <svg className="w-6 h-6 stroke-slate-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 6.75C11.5858 6.75 11.25 6.41421 11.25 6C11.25 5.58579 11.5858 5.25 12 5.25C12.4142 5.25 12.75 5.58579 12.75 6C12.75 6.41421 12.4142 6.75 12 6.75Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 12.75C11.5858 12.75 11.25 12.4142 11.25 12C11.25 11.5858 11.5858 11.25 12 11.25C12.4142 11.25 12.75 11.5858 12.75 12C12.75 12.4142 12.4142 12.75 12 12.75Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 18.75C11.5858 18.75 11.25 18.4142 11.25 18C11.25 17.5858 11.5858 17.25 12 17.25C12.4142 17.25 12.75 17.5858 12.75 18C12.75 18.4142 12.4142 18.75 12 18.75Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </EmptyButton>
    </div>

</li>

<li className="bg-white divide-y divide-gray-100 w-full p-5 rounded-lg transition duration-300 hover:shadow-lg overflow-hidden">

    <div className="flex gap-2 pb-4">
        <div className="w-16 h-16 bg-gray-50 shadow-sm grid place-items-center rounded-md">
            <img className="w-14 h-14 object-contain aspect-[3/2]" src="/images/cosna.png" alt="app logo" />
        </div>

        <div className="flex justify-between w-full">
            <div className="flex flex-1 flex-col gap-1">
                <h6 className="font-medium text-sm text-slate-900 capitalize">Cosna Afrique test</h6>
                <p className="text-xs text-slate-400">Crée le: <span className="ml-2 text-slate-500">24, Sep 2022</span></p>
                <div className="flex gap-2">
                    <p className="text-xs text-slate-400">Status : </p>
                    <span className="bg-green-100 font-medium text-xs text-green-800 rounded-2xl px-2.5 py-0.5">Activé</span>
                </div>
            </div>

            <div className="">
                <Checkbox class="space-y-0" name="action"></Checkbox>
            </div>
        </div>
    </div>

    <div className="flex items-center justify-between pt-4">
        <div className="">
            <h6 className="text-xs text-slate-400 mb-1.5">Revenu de l'app</h6>
            <div className="flex items-center">
                <span className="mr-2">
                    <svg className="w-6 h-6 stroke-slate-400" aria-hidden="true" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.25 18.75C7.71719 18.75 13.0136 19.4812 18.0468 20.8512C18.7738 21.0491 19.5 20.5086 19.5 19.7551V18.75M3.75 4.5V5.25C3.75 5.66421 3.41421 6 3 6H2.25M2.25 6V5.625C2.25 5.00368 2.75368 4.5 3.375 4.5H20.25M2.25 6V15M20.25 4.5V5.25C20.25 5.66421 20.5858 6 21 6H21.75M20.25 4.5H20.625C21.2463 4.5 21.75 5.00368 21.75 5.625V15.375C21.75 15.9963 21.2463 16.5 20.625 16.5H20.25M21.75 15H21C20.5858 15 20.25 15.3358 20.25 15.75V16.5M20.25 16.5H3.75M3.75 16.5H3.375C2.75368 16.5 2.25 15.9963 2.25 15.375V15M3.75 16.5V15.75C3.75 15.3358 3.41421 15 3 15H2.25M15 10.5C15 12.1569 13.6569 13.5 12 13.5C10.3431 13.5 9 12.1569 9 10.5C9 8.84315 10.3431 7.5 12 7.5C13.6569 7.5 15 8.84315 15 10.5ZM18 10.5H18.0075V10.5075H18V10.5ZM6 10.5H6.0075V10.5075H6V10.5Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </span>
                <p className="font-medium text-sm">2000000 FCFA</p>
            </div>
        </div>
        <EmptyButton class="max-w-fit">
            <svg className="w-6 h-6 stroke-slate-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 6.75C11.5858 6.75 11.25 6.41421 11.25 6C11.25 5.58579 11.5858 5.25 12 5.25C12.4142 5.25 12.75 5.58579 12.75 6C12.75 6.41421 12.4142 6.75 12 6.75Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 12.75C11.5858 12.75 11.25 12.4142 11.25 12C11.25 11.5858 11.5858 11.25 12 11.25C12.4142 11.25 12.75 11.5858 12.75 12C12.75 12.4142 12.4142 12.75 12 12.75Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 18.75C11.5858 18.75 11.25 18.4142 11.25 18C11.25 17.5858 11.5858 17.25 12 17.25C12.4142 17.25 12.75 17.5858 12.75 18C12.75 18.4142 12.4142 18.75 12 18.75Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </EmptyButton>
    </div>

</li>

                

            </ul>

            <div className="sr-only">scv</div>

        </Layout>
     );
}
 
export default Apps;