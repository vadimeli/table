import React from "react";

const Pagination = props => {
    const { itemsCount, pageSize} = props;
    const pageCount = itemsCount / pageSize;
    let pagesArr = [];
    for(let i = 1; i < pageCount+1; i++){
        pagesArr.push(i);
    }

    console.log(pagesArr);
    return (
        <div>
            <ul style={{display:"flex", listStyleType: "none"}}>
                {pagesArr.map(page => (
                    <li style={{marginLeft:"10px"}}>{page}</li>
                ))}
            </ul>
        </div>

    );
};


export default Pagination;