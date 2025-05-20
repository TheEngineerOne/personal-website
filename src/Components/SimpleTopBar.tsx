import React from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useLocation, Link } from 'react-router-dom'

interface NavItem {
  name: string;
  href: string;
  current: boolean;
}

interface TopBarProps {
  navigation: NavItem[];
  setNavigation: React.Dispatch<React.SetStateAction<NavItem[]>>;
}

function classNames(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}

export function TopBar({ navigation, setNavigation }: TopBarProps) {
  const location = useLocation()

  // Update the nav state based on current URL
  const setNavState = (navs: typeof navigation, state: string) => {
    return navs.map(nav => ({
      ...nav,
      current: nav.name === state,
    }))
  }

  // Update navigation state when location changes
  React.useEffect(() => {
    const currentPage = location.pathname.split('/')[1] || 'about'
    setNavigation(prev => setNavState(prev, currentPage.charAt(0).toUpperCase() + currentPage.slice(1)))
  }, [location.pathname, setNavigation])

  const handleNavClick = (clickedName: string) => {
    setNavigation(
      navigation.map((item) => ({
        ...item,
        current: item.name === clickedName,
      }))
    );
  };

  return (
    <Disclosure as="nav" className="bg-gray-800 rounded-sm">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-gray-50 focus:ring-2 focus:ring-gray-50 focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="block size-6 group-data-open:hidden" />
              <XMarkIcon className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img alt="Your Company" src="/e-logo.svg" className="h-8 w-auto" />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => handleNavClick(item.name)}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current
                        ? 'bg-gray-900 text-gray-50'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-gray-50 duration-300',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              onClick={() => handleNavClick(item.name)}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-gray-50' : 'text-gray-300 hover:bg-gray-700 hover:text-gray-50',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}

export default TopBar;

