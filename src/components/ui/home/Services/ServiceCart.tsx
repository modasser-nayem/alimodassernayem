type TServiceCartProps = {
   name: string;
   description: string;
   icon: string;
};

const ServiceCart = ({ icon, name, description }: TServiceCartProps) => {
   return (
      <div className="shadow-2xl rounded-xl text-center p-8 flex flex-col items-center gap-5 w-full h-full bg-cs-blue-deep">
         <img
            className="w-[100px] h-[100px] rounded-md"
            src={icon}
            alt={name}
         />
         <h3 className="text-2xl font-semibold text-cs-orange">{name}</h3>
         <p className="text-cs-white">{description}</p>
      </div>
   );
};

// animate-spin  -top-40 -bottom-40 left-10 right-10
export default ServiceCart;
