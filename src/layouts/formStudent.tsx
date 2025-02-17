import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function FormStudent(){
    return (
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>勉強時間</Form.Label>
          <Form.Control type="text" placeholder="name@example.com" name="studyMinutes"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>課題番号</Form.Label>
          <Form.Control type="text" placeholder="name@example.com" name="taskCode"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>勉強中の言語</Form.Label>
          <Form.Control type="text" placeholder="name@example.com" name="studyLangs"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>ハピネススコア</Form.Label>
          <Form.Control type="text" placeholder="name@example.com" name="score"/>
        </Form.Group>
        <Button>登録</Button>
      </Form>
    )
}

export default FormStudent