import { useSelector } from 'react-redux';

import { Preloader } from './Preloader';
import { SearchTable } from './SearchTable';
import { PaginationObjectList } from './Pagination';

export const ObjectList = () => { 

    const loadStatus = useSelector(state => state.userSearch.status);
    const searchList = useSelector(state => state.userSearch.list);
    const objectsPerPage = useSelector(state => state.pagination.objectsPerPage);

    return (
        <>
            {loadStatus === 'loading' ?  <Preloader /> : null }
            {searchList.length ? <SearchTable /> : null}
            {searchList.length > objectsPerPage ? <PaginationObjectList />: null}
            {loadStatus==='received' && !searchList.length && <div>Не найдено</div>}
        </>
      );
}
