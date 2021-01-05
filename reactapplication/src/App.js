import React, { useEffect } from 'react'
import './App.css';
import { Row, Col } from "react-bootstrap"
import FormComponent from './Components/FormsComponent';
import TableComponent from './Components/TableComponent'
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useDispatch } from 'react-redux';
import axios from 'axios'
import { UpdateData, OperationMode } from './Actions'
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(OperationMode("AddNew"))
    axios.get('/getPersonData').then(res => {
      dispatch(UpdateData(res.data));
    })
  }, [])
  return (
    <div className="App">
      <div>
        <Row style={{ width: "100%" }}>
          <Col sm={6}>
            <FormComponent />
          </Col>
          <Col sm={6}>
            <TableComponent />
          </Col>
        </Row>
      </div>

    </div>
  );
}

export default App;
