import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';


const PriceOption = ({option}) => {
    const {name, price, features} = option;
    return (
        <div className='bg-slate-300 p-6 flex flex-col rounded-xl'>
          <h2 className='text-center'>
            <span className='text-5xl font-extrabold'>{price}</span>
            <span className='text-2xl'>/mon</span>
          </h2>
          <h4 className='text-3xl'>{name}</h4>
         <div className='pl-6 flex-grow'>
         {
            features.map((feature, index) =><Feature key={index} feature={feature}></Feature>)
          }
         </div>
         <button className='mt-12 bg-green-500 text-white p-2 font-bold rounded-xl w-full py-2 hover:bg-green-900'>Buy Now</button>
        </div>
    );
};

PriceOption.prototype ={
option: PropTypes.object
}
export default PriceOption;