import PropTypes from 'prop-types';


const PriceOption = ({option}) => {
    const {name, price, features} = option;
    return (
        <div className='bg-slate-300 p-6 rounded-xl'>
          <h2 className='text-center'>
            <span className='text-5xl font-extrabold'>{price}</span>
            <span className='text-2xl'>/mon</span>
          </h2>
          <h4 className='text-3xl'>{name}</h4>
        </div>
    );
};

PriceOption.prototype ={
option: PropTypes.object
}
export default PriceOption;