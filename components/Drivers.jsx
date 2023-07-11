'use client';

import { Menu, Transition } from '@headlessui/react';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Drivers({ drivers }) {
  const [isOpen, setIsOpen] = useState(false);

  const navigateToDriversPage = () => {};

  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <Menu.Button className="hover:text-white hover:underline">
            Drivers
          </Menu.Button>
          <Transition
            show={isOpen}
            enter="transition duration-100 ease-out"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Menu.Items
              as="div"
              className="absolute top-[120px] z-50 left-0 text-white bg-gradients w-full shadow-2xl"
            >
              <Menu.Item>
                <div>
                  <div className="flex gap-x-10 mt-5 ml-10">
                    <Link href="/drivers" className="hovers p-3 rounded-full">
                      All Drivers
                    </Link>
                    <Link
                      href="hall-of-fame"
                      className="hovers p-3 rounded-full"
                    >
                      Hall of Fame
                    </Link>
                  </div>
                  {Array.isArray(drivers) ? (
                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-5 pb-5 mt-5">
                      {drivers.map(drive => (
                        <Link
                          href={`/drivers/${drive.firstname.toLowerCase()}${drive.lastname.toLowerCase()}`}
                          key={drive.firstname}
                          className="mx-auto"
                        >
                          <h3 className="text-base lg:text-lg font-normal hover:text-black hover:bg-white border-t border-r p-3 rounded-full">
                            {drive.firstname} {drive.lastname}
                          </h3>
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
}
