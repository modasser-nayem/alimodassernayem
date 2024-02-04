"use client";

import { CSSProperties, useState } from "react";
import { RingLoader } from "react-spinners";

const override: CSSProperties = {
   display: "block",
   margin: "0 auto",
   borderColor: "red",
};

const Loading = () => {
   let [loading, setLoading] = useState(true);
   return (
      <div className="sweet-loading flex items-center justify-center h-screen">
         <RingLoader
            loading={loading}
            color="#FCA61F"
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
            className="text-cs-orange"
         />
      </div>
   );
};

export default Loading;
