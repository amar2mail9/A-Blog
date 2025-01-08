import React from 'react'
import Layout from '../../Page/Home/Layout'
import { AiFillDashboard } from 'react-icons/ai'
import { BsFillPostcardFill } from 'react-icons/bs'
import { RiPagesFill } from 'react-icons/ri'
import { FiSettings } from 'react-icons/fi'
import { menu, menuitem } from 'framer-motion/client'
import { Link, useLocation } from 'react-router-dom'
import { BiSolidCategory } from 'react-icons/bi'
import { ToastContainer } from 'react-bootstrap'

function SideBar({children}) {
const location = useLocation()
    const MenuItems = [
        {
            name: 'Dashboard',
            icon: <AiFillDashboard />,
            href: '/admin/dashboard'
        },
        {
            name: 'Posts',
            icon: <BsFillPostcardFill />,
            href: '/admin/posts'
        },
        {
            name: 'Pages',
            icon: <RiPagesFill />,
            href: '/admin/pages'
        },
        {
            name: 'Categories',
            icon: <BiSolidCategory />,
            href: '/admin/categories'
        }
        , {
            name: 'Settings',
            icon: <FiSettings />,
            href: '/admin/settings'
        }

    ]
    return (
        <Layout>

            <section className='flex '>
                <div>
                    <div className='flex flex-col  pt-3 w-[250px] h-[100vh] bg-gray-700 text-white  '>
                        {
                            MenuItems.map((item, index) => {
                                const isActive = location.pathname === item.href

                                return (
                                    <Link className={`flex items-center ${isActive?"bg-gray-200 text-gray-800":null} px-3 hover:bg-gray-800 mt-1 hover:text-gray-50 duration-300 py-2 text-lg gap-2 w-full`} to={item.href} key={index}>
                                        {item.icon}
                                        {item.name}
                                    </Link>
                                )
                            })
                        }

                    </div>
                </div>
                <div className='p-6 w-full'>
                    {children}
                </div>
                <ToastContainer />
            </section>
        </Layout>
    )
}

export default SideBar