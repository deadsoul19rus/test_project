import Pagination from 'react-bootstrap/Pagination';

import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage } from '../store/pagination/pagination-action';




export const PaginationObjectList = () => {
    
    const objectsPerPage = useSelector(state => state.pagination.objectsPerPage);
    const currentPage = useSelector(state => state.pagination.currentPage);
    const quantityPages = Math.ceil(useSelector(state => state.userSearch.list).length / objectsPerPage); //Считаем количество страниц
    const dispatch = useDispatch();

    const choisePage = (numberPage) => {
        dispatch(setCurrentPage(numberPage));
    }

    let items = [];

    for (let number = 1; number <= quantityPages; number++){
        items.push(number);
    }

    return (
        <Pagination>
            {   
                items.map(number => (
                    <Pagination.Item 
                        key={number} 
                        active={number === currentPage} 
                        onClick={() => choisePage(number)}
                    >
                    {number}
                 </Pagination.Item>
                ))
                 
            }
           
        </Pagination>
      ); 
}
