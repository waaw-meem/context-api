import React, { createContext, useState } from "react";

const BookStore = createContext();

function Provider({children}) {
    // const [count, setCount] = useState(5);
    // const valueChange = {
    //     count,
    //     increamentCount: () => {
    //         setCount(count + 1); // Remove the extra comma here
    //     },
    // };

    
    return (
        <BookStore.Provider value={{}}>
            {/* Use Children properly */}
            {children}
        </BookStore.Provider>
    );
}

export { Provider };
export default BookStore;
