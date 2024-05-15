import React from "react";
import { Link } from "react-router-dom";
import { FiCornerUpLeft } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';

const Breadcrumbs = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="breadcrumbs ml-8 mt-8 absolute z-10">
        <div className="breadcrumb-wrapper flex gap-1">
          <Link
            className="font-custom text-md underline mr-2"
            onClick={() => navigate(-1)}
          >
            <FiCornerUpLeft className="inline-flex items-baseline mr-2" /> Back
          </Link>
          <Link to="/" className="font-custom text-md underline">
            Home
          </Link>
          &nbsp;/&nbsp;
          <Link to="/about" className="font-custom text-md underline">
            Originals
          </Link>
        </div>
      </div>
    </>
  );
};

export default Breadcrumbs;
