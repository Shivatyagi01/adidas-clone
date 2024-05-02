import React from "react";

const Popular = () => {
  return (
    <div className="popular py-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-custom font-bold text-black uppercase">
          Popular right now
        </h2>
        <ul className="grid grid-cols-3 py-8 flex-wrap gap-y-12 gap-x-12">
          <li>
            <a
              href="#"
              className="w-100 block text-4xl font-bold font-custom border-b border-black p-4 hover:border-b-8"
            >
              samba
            </a>
          </li>
          <li>
            <a
              href="#"
              className="w-100 block text-4xl font-bold font-custom border-b border-black p-4 hover:border-b-8"
            >
              running shoes men
            </a>
          </li>
          <li>
            <a
              href="#"
              className="w-100 block text-4xl font-bold font-custom border-b border-black p-4 hover:border-b-8"
            >
              nmd
            </a>
          </li>
          <li>
            <a
              href="#"
              className="w-100 block text-4xl font-bold font-custom border-b border-black p-4 hover:border-b-8"
            >
              backpack
            </a>
          </li>
          <li>
            <a
              href="#"
              className="w-100 block text-4xl font-bold font-custom border-b border-black p-4 hover:border-b-8"
            >
              men sandals
            </a>
          </li>
          <li>
            <a
              href="#"
              className="w-100 block text-4xl font-bold font-custom border-b border-black p-4 hover:border-b-8"
            >
              bag
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Popular;
