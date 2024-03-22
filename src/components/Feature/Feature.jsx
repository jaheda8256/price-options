import PropTypes from 'prop-types';
import { IoIosCheckmarkCircle } from "react-icons/io";
const Feature = ({feature}) => {
    return (
        <div>
            <p className='flex items-center al'> <IoIosCheckmarkCircle className='text-green-500 mr-2'></IoIosCheckmarkCircle>{feature}</p>
        </div>
    );
};
Feature.prototype ={
   feature: PropTypes.string
    }
export default Feature;