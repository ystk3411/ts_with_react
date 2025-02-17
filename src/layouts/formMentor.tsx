import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function FormMentor(){
    return (
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>実務経験年数</Form.Label>
          <Form.Control type="text" placeholder="name@example.com" name="experienceDays"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>現場で使っている言語</Form.Label>
          <Form.Control type="text" placeholder="name@example.com" name="useLangs"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>担当できる課題番号初め</Form.Label>
          <Form.Control type="text" placeholder="name@example.com" name="availableStartCode"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>担当できる課題番号終わり</Form.Label>
          <Form.Control type="text" placeholder="name@example.com" name="availableEndCode"/>
        </Form.Group>
        <Button>登録</Button>
      </Form>
    )
}

export default FormMentor