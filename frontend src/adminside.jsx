import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './toast-style.css'


const PopupDialog = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    trainingTitle: '',
    skillTitle: '',
    skillCategory: '',
    startTime: '',
    endTime: '',
    description: '',
  });
  

  const [validationErrors, setValidationErrors] = useState({}); 
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = () => {
    const errors = {};

    // Perform form validation here
    if (!formData.trainingTitle.trim()) {
      errors.trainingTitle = 'Training Title is required';
    }
    if(!formData.skillTitle.trim()){
        errors.skillTitle = 'Skill Title is required is required';
    }
    if(!formData.skillCategory.trim()){
        errors.skillCategory = 'Skill Category is required is required';
    }
    if(!formData.endTime.trim()){
        errors.endTime = 'End Time is required is required';
    }
    if(!formData.startTime.trim()){
        errors.startTime = 'Srart Time is required is required';
    }
    if(!formData.description.trim()){
        errors.description= 'Description is required is required';
    }

    if (Object.keys(errors).length > 0) {
      // There are validation errors, display toast notifications
      Object.values(errors).forEach((errorMsg) => {
        toast.error(errorMsg);
      });
    } else {
      // No validation errors, proceed with saving data
      console.log(formData);
      setShowModal(false);
    }
  };
  return (
    <div>
      <Button variant="primary" onClick={handleOpenModal}>
        Open Dialog
      </Button>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Training Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="trainingTitle">
              <Form.Label>Training Title</Form.Label>
              <Form.Control
                type="text"
                name={formData.trainingTitle}
                value={formData.trainingTitle}
                onChange={(e)=>{setFormData(formData.trainingTitle)}}
                placeholder="Training Title"
              />
            </Form.Group>
            <Form.Group controlId="skillTitle">
              <Form.Label>Skill Title</Form.Label>
              <Form.Control
                type="text"
                name="skillTitle"
                value={formData.skillTitle}
                onChange={handleChange}
                placeholder="Skill Title"
              />
            </Form.Group>
            <Form.Group controlId="skillCategory">
              <Form.Label>Skill Category</Form.Label>
              <Form.Control
                type="text"
                name="skillCategory"
                value={formData.skillCategory}
                onChange={handleChange}
                placeholder="Skill Category"
              />
            </Form.Group>
            <Form.Group controlId="startTime">
              <Form.Label>Start Date and Time</Form.Label>
              <Form.Control
                type="datetime-local"
                name="startTime"
                value={formData.startTime}
                onChange={handleChange}
                placeholder="Start Date and Time"
              />
            </Form.Group>
            <Form.Group controlId="endTime">
              <Form.Label>End Date and Time</Form.Label>
              <Form.Control
                type="datetime-local"
                name="endTime"
                value={formData.endTime}
                onChange={handleChange}
                placeholder="End Date and Time"
              />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Description"
              />
            </Form.Group>
            <Form.Group controlId="limit">
              <Form.Label>Participation Limit</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </div>
  );
};

export default PopupDialog;


// import PopupDialog from './adminside';
//           <Route path='/admin' element={<PopupDialog/>}></Route>

