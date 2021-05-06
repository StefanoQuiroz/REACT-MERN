import React from 'react';

const Groceries = (props) => {
    const groceryList = ['pearl onions', 'thyme', 'cremini mushrooms', 'butter']
    return (
        <div>
            <ul>{
                //key={i} se refiere al id
                groceryList.map((item, i) => <li key={i}>{item}</li>)
                }</ul>            
        </div>
    );
}

export default Groceries;
