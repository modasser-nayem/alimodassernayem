import { TService } from "@/Redux/features/service/serviceSlice";
import ServiceCart from "@/components/ServiceCart";
import React from "react";

type TServicesProps = {
   sortDescription: string;
   services: TService[];
};

const Services = ({ sortDescription, services }: TServicesProps) => {
   return (
      <section
         id="services"
         className="cs-container"
      >
         <div className="cs-title-box">
            <h1 className="text-2xl">What i do.</h1>
            <h1>_Services_</h1>
            {sortDescription && <p className="">{sortDescription}</p>}
         </div>
         <div className="mt-[5rem] grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((item) => (
               <ServiceCart
                  key={item._id}
                  name={item.name}
                  icon={item.icon}
                  description={item.description}
               />
            ))}
         </div>
      </section>
   );
};

export default Services;
