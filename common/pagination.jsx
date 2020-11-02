import React from "react";

const Pagination = props => {
    const { itemsCount, pageSize} = props;
    const pageCount = itemsCount / pageSize;
    let pagesArr = [];
    for(let i = 1; i < pageCount+1; i++){
        pagesArr.push(i);
    }

    return (
        <div>
            {
            pagesArr.length > 1 &&
            <ul style={{display:"flex", listStyleType: "none"}}>
                {pagesArr.map(page => (
                    <li key={page} style={{marginLeft:"10px"}}>{page}</li>
                ))}
            </ul>
            }
            <button>prev</button>
            <button>next</button>
        </div>

    );
};


export default Pagination;