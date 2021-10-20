import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateTaskPopup = ({modal, toggle, save}) => {
    /*const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    const [Deadline, setDeadline] = useState('');*/
    const [formValue, setFormValue] = useState({
        
        Name: "",
        Description: "",
        Deadline: "",
        
      });

   /*const handleChange = (e) => {
        
        const {name, value} = e.target

        if(name === "taskName"){
            setTaskName(value)
        }else{
            setDescription(value)
        }
      
    }*/

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValue((prevState) => {
          return {
            ...prevState,
            [name]: value,
          };
        });
      };
      const { Name,Description, Deadline} = formValue;

    const handleSave = (e) => {
       // e.preventDefault()
        let taskObj = {}
        taskObj["Name"] = Name
        taskObj["Description"] = Description
        taskObj["Deadline"]=Deadline
        save(taskObj)

    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Create Task</ModalHeader>
            <ModalBody>
            
                    <div className = "form-group">
                        <label>Task Name</label>
                        <input type="text" className = "form-control" value = {Name} onChange = {handleChange} name = "Name"/>
                    </div>
                    <div className = "form-group">
                        <label>Description</label>
                        <textarea rows = "5" className = "form-control" value = {Description} onChange = {handleChange} name = "Description"></textarea>
                    </div>
                    <div className="form-group">
                        <label>Deadline</label>
                        <input type="date" className="form-control"  value={Deadline} onChange= {handleChange} name="Deadline"/>
                    </div>
                
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={handleSave}>Create</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
      </Modal>
    );
};

export default CreateTaskPopup;