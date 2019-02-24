// Modulos
import React from 'react';

export default ({totalItems, itemsByPage, currentItem, changeItem} ) => {

    const totalPages = parseInt(totalItems/itemsByPage)+1;
    const actualPage = parseInt(currentItem/itemsByPage)+1;

    const prevPage = () => {
        if (actualPage > 1)
            changeItem(currentItem-itemsByPage)
    };

    const nextPage = () => {
        if (actualPage < totalPages)
            changeItem(currentItem+itemsByPage)
    };

    const firstPage = () => {
        changeItem(0);
    };

    const lastPage = () => {
        changeItem((totalPages-1)*6);
    };

    return (
        <nav className="pagination is-right is-rounded is-large" role="navigation" aria-label="pagination">
            <button className="pagination-previous button is-light is-outlined" onClick={prevPage}>
                Anterior
            </button>
            <button className="pagination-next button is-light is-outlined" onClick={nextPage}>
                Proxima
            </button>
            <ul className="pagination-list">
                <li><button className="pagination-link button is-link" aria-label="Actual Page" onClick={firstPage}>{actualPage}</button></li>
                <li><span className="pagination-ellipsis">&hellip;</span></li>
                <li><button className="pagination-link button is-light is-outlined" aria-label="Last Page" onClick={lastPage}>{totalPages}</button></li>
            </ul>
        </nav>
    )
};