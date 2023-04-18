import {Preloader} from './Preloader'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';

import React, {useEffect, useState} from 'react';
import axios from 'axios'

export const MyVerticallyCenteredModal = (props) => {
    const [objectDetail, setobjectDetail] = useState({});
    
    useEffect(() => {
        axios.get(`/fir_lite_rest/api/gkn/fir_lite_object/${props.objectId}`)
        .then((data) => {
            setobjectDetail(data.data);
        })
        .catch((err) => console.log(err))
    }, [props.objectId]);


    const choiseEncumbrances = (type) => {
        switch (type) {
            case 'parcel': 
                    if (objectDetail.objectData.parcelData.encumbrancesExists){
                        return 'Зарегистрированы';

                    }else{
                        return 'Не зарегистрированы';
                    }
            case 'building': 
                if (objectDetail.objectData.building.encumbrancesExists){
                        return 'Зарегистрированы';

                    }else{
                        return 'Не зарегистрированы';
                    }
            case 'construction': 
                if (objectDetail.objectData.construction.encumbrancesExists){
                        return 'Зарегистрированы';

                    }else{
                        return 'Не зарегистрированы';
                    }
            case 'flat': 
               if (objectDetail.objectData.flat.encumbrancesExists){
                        return 'Зарегистрированы';
                    }else{
                        return 'Не зарегистрированы';
                    }
            default: 
                return '';
        }
    } 

    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.objectId}
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Информация</h4>
                    {
                        !objectDetail.objectData ? <Preloader/> : <> 
                         <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Дата записи</th>
                                    <th>Наименование</th>
                                    <th>Обременения</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{objectDetail.objectData.dateCreated}</td>
                                    <td>{objectDetail.objectData.name ? objectDetail.objectData.name : objectDetail.objectData.objectDesc}</td>
                                    <td>{choiseEncumbrances(objectDetail.type)}</td>
                                </tr> 
                                
                            
                            </tbody>
                        </Table>
                        
                        </>
                    }    
                </Modal.Body>
                <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        
      </>
    );
  }