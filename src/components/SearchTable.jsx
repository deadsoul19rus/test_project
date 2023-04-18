import { useSelector } from 'react-redux';
import React from 'react';

import { MyVerticallyCenteredModal } from './ModalDetailObject';
import Table from 'react-bootstrap/Table';


const selectObjectType = (type) => {
    switch (type) {
        case "parcel":
            return "Земельный участок"
        case "flat":
            return 'Квартира'
        case "building": 
            return 'Здание'
        case "construction":
            return 'Сооружение' 
        default: return type
    }
};





export const SearchTable = () => {
    const searchData = useSelector(state=>state.userSearch.list);
    const currentPage = useSelector(state=>state.pagination.currentPage);
    const objectsPerPage = useSelector(state=>state.pagination.objectsPerPage);

    const lastObjectIndex = currentPage * objectsPerPage;
    const firstObjectIndex = lastObjectIndex - objectsPerPage;
    const currentPageObjects = searchData.slice(firstObjectIndex, lastObjectIndex);  
    
    const [modalShow, setModalShow] = React.useState(false);
    const [objectId, setObjectId] = React.useState(0);

    return (
        <>
           <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Кад. номер</th>
                        <th>Тип</th>
                        <th>Адрес</th>
                    </tr>
                </thead>
                <tbody>
                { 
                    currentPageObjects.length ? currentPageObjects.map((list,i) => (
                        <tr key={i}>
                            <td>{firstObjectIndex+i+1}</td>
                            <td variant="primary" onClick={() => {setModalShow(true); setObjectId(list.objectId);}}>{list.objectCn}</td>
                            <td>{selectObjectType(list.objectType)}</td>
                            <td>{list.addressNotes}</td>
                        </tr> 
                    )) : null
                }
                </tbody>
                <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    objectId={objectId}
                />
            </Table>
        </>
      );
}