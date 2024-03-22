import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {

    const priceOptions =[
        {
          "id": 1,
          "name": "Basic Membership",
          "price": "$30",
          "features": [
            "Access to cardio equipment",
            "Access to weightlifting area",
            "Locker room access"
          ]
        },
        {
          "id": 2,
          "name": "Standard Membership",
          "price": "$50",
          "features": [
            "Access to cardio equipment",
            "Access to weightlifting area",
            "Access to group fitness classes",
            "Access to swimming pool",
            "Sauna access",
            "Locker room access"
          ]
        },
        {
          "id": 3,
          "name": "Premium Membership",
          "price": "$80",
          "features": [
            "Access to cardio equipment",
            "Access to weightlifting area",
            "Access to group fitness classes",
            "Access to personal training sessions",
            "Towel service",
            "Access to swimming pool",
            "Sauna access",
            "Locker room access"
          ]
        }
      ]
      
    return (
        <div className="m-12">
            <h2 className="text-5xl">Best prices in the town</h2>
           <div className="grid grid-cols-3 gap-6">
           {
                priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
           </div>
        </div>
    );
};

export default PriceOptions;