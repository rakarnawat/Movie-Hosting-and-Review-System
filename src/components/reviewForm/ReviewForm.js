import {Form,Button} from 'react-bootstrap';
//import './ReviewForm.css';
const ReviewForm = ({handleSubmit,revText,labelText,defaultValue}) => {
  return (

    <Form className='ReviewFormClass'>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>{labelText}</Form.Label>
            <Form.Control ref={revText} as="textarea" rows={3} defaultValue={defaultValue} className='formController' />
        </Form.Group>
        <Button variant="outline-info" onClick={handleSubmit}>Submit</Button>
    </Form>   

  )
}

export default ReviewForm
