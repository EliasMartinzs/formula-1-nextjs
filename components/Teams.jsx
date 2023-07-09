'use client';

import { Menu, Transition } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Teams({ results }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <Menu.Button className="hover:text-white hover:underline">
            Teams
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
                  <div className="flex gap-x-10 ml-10 mr-10 my-5 py-2 rounded-br-xl hover:border-white">
                    <Link
                      href="/all-teams"
                      className="bg-[#880808] p-2  rounded-full hover:shadow-2xl hovers"
                    >
                      All Teams
                    </Link>
                  </div>
                  <div className="flex items-center justify-start">
                    {Array.isArray(results) ? (
                      <div className="grid grid-cols-2 lg:grid-cols-5 gap-5 pb-5 mx-auto">
                        {results.map(team => (
                          <Link
                            href={`/teams/${team.team_name
                              .toLowerCase()
                              .replace('racing', '')
                              .split(' ')
                              .join('')}`}
                            key={team.team_name}
                            className="ml-5 border-r border-t rounded-xl hovers"
                          >
                            <div className="p-5">
                              <p>{team.team_name}</p>
                              <Image
                                src={`/f1-${team.team_name}.png`}
                                alt={team.team_name}
                                width={150}
                                height={150}
                              />
                            </div>
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
}
