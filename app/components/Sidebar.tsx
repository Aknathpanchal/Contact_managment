"use client"

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import classNames from 'classnames'
import { HiOutlineLogout } from 'react-icons/hi'
import { FaClockRotateLeft } from "react-icons/fa6";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { RiContactsBook2Fill } from "react-icons/ri";
import {
  HiOutlineChatAlt2,
  HiOutlineUsers,
  HiOutlineAnnotation,
  HiOutlineQuestionMarkCircle,
  HiOutlineCog
} from 'react-icons/hi'
import { PiUsersThreeBold } from "react-icons/pi";

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: 'dashboard',
    label: 'Teams',
    path: '/dashboard',
    icon: <HiOutlineUsers />
  },
  {
    key: 'chat',
    label: 'Chat',
    path: '#',
    icon: <HiOutlineChatAlt2 />
  },
  {
    key: 'meet',
    label: 'Meet',
    path: '#',
    icon: <PiUsersThreeBold />
  },
  {
    key: 'call',
    label: 'Call',
    path: '#',
    icon: <FaClockRotateLeft />
  },
  {
    key: 'panal',
    label: 'Panal',
    path: '#',
    icon: <TbDeviceDesktopAnalytics />
  },
  {
    key: 'contacts',
    label: 'Contacts',
    path: '#',
    icon: <RiContactsBook2Fill />
  },
  {
    key: 'messages',
    label: 'Voicemail',
    path: '#',
    icon: <HiOutlineAnnotation />
  },
  {
    key: 'settings',
    label: 'Settings',
    path: '#',
    icon: <HiOutlineCog />
  },
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [

  {
    key: 'support',
    label: 'Help & Support',
    path: '#',
    icon: <HiOutlineQuestionMarkCircle />
  }
]

const linkClass =
  'flex items-center gap-2 font-light px-3 py-2 rounded-lg hover:bg-[#4b437d] hover:no-underline active:bg-blue-800 rounded-sm text-base'

interface SidebarLinkProps {
  link: {
    key: string
    path: string
    label: string
    icon: React.ReactNode
  }
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ link }) => {
  const pathname = usePathname()

  return (
    <Link href={link.path} className={classNames(pathname === link.path ? 'bg-[#4b437d] text-white' : 'text-neutral-400', linkClass)}>
      <span className="text-xl">{link.icon}</span>
      {link.label}
    </Link>
  )
}

const Sidebar: React.FC = () => {
  return (
    <div className="bg-[#312b69] p-3 flex flex-col">
      <div className="flex items-center justify-center px-1 py-3">
  <img src="https://astppbilling.org/wp-content/uploads/2023/03/ASTPP-logo-01-1.png" alt="OpenShop" className="h-6" />
</div>

      <div className="py-8 flex flex-1 flex-col gap-0.5">
        {DASHBOARD_SIDEBAR_LINKS.map((link) => (
          <SidebarLink key={link.key} link={link} />
        ))}
      </div>
      <div className="flex flex-col gap-0.5 pt-2 border-t border-blue-700">
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((link) => (
          <SidebarLink key={link.key} link={link} />
        ))}
        <div className={classNames(linkClass, 'cursor-pointer text-red-500')}>
          <span className="text-xl">
            <HiOutlineLogout />
          </span>
          Logout
        </div>
      </div>
    </div>
  )
}

export default Sidebar
