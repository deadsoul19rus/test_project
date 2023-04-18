import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { setCurrentPage } from '../store/pagination/pagination-action';
import { loadUserSearchResult, setSearchString } from '../store/searchResult/search-action';
import { useDispatch, useSelector } from 'react-redux';

export const Search = () => {

  const dispatch = useDispatch();
  const search = useSelector(state => state.userSearch.searchString);
  const currentLoad = useSelector(state => state.userSearch.status);

  const setCurrentSearch = (e) => {
   //e.target.value.replace(/[^0-9\:]/g, '');
    dispatch(setSearchString(e.target.value))
  }

  const handleSearch = () => {
    if (search.length > 4) {
      console.log(search);
      dispatch(loadUserSearchResult());
      dispatch(setCurrentPage(1));
    } else{
      
    }
  }

  return (
    <>
    <h1>Введите кадастровый номер:</h1>
        <Form className="mb-3">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Кадастровый номер</Form.Label>
            <Form.Control  
              type="text" 
              placeholder="Введите номер" 
              onChange={setCurrentSearch} 
              value={search} 
              disabled={currentLoad === 'loading' ? true : false}
              onKeyPress={(e) => !/[0-9\:]/.test(e.key) && e.preventDefault()}
            />
            <Form.Text className="text-muted">
              Введите минимум 5 символов.
            </Form.Text>
            
          </Form.Group>
          <Button 
            variant="primary" 
            onClick={handleSearch}
            disabled={search.length > 4 ? false : true}
          >
              Найти
          </Button>
        </Form>  
        </>
  );
}

