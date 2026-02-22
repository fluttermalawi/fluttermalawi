import { useState } from 'react';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, useLocation } from 'react-router';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function NavBar() {
  const location = useLocation();
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Events', href: '/events' },
    { name: 'Code of Conduct', href: '/code-of-conduct' },
  ];

  return (
    <Disclosure
      as="nav"
      className="bg-navy fixed inset-x-0 top-0 z-50 mb-12 text-white drop-shadow-md flex-1 p-2"
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-between p-6 lg:px-8">
            <div className="flex lg:flex-1">
              <Link
                to="/"
                className="flex items-center justify-center gap-3"
              >
                <img
                  src={'/fluttermalawi.svg'}
                  alt={'Logo'}
                  width={24}
                  height={24}
                  className="object-contain"
                />
                <p className="font-bold tracking-tighter py-3 text-nowrap">
                  Flutter Malawi
                </p>
              </Link>
            </div>
            <div className="hidden sm:ml-2 sm:block">
              <div className="flex space-x-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    aria-current={
                      location.pathname === item.href
                        ? 'page'
                        : undefined
                    }
                    className={classNames(
                      location.pathname === item.href
                        ? 'bg-blue text-white text-nowrap' // Active color
                        : 'text-gray-300 hover:bg-sky hover:text-white text-nowrap',
                      'rounded-full px-3 py-2 text-sm font-medium'
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
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as={Link}
              to={item.href}
              aria-current={
                location.pathname === item.href ? 'page' : undefined
              }
              className={classNames(
                location.pathname === item.href
                  ? 'bg-blue text-white' // Active color
                  : 'text-gray-300 hover:bg-sky hover:text-white',
                'block rounded-full px-3 py-2 text-base font-medium'
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
