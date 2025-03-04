import { useState, Dispatch, SetStateAction } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import UserType from '../userType'

function FormCommon(props:{users:UserType[], setUsers: Dispatch<SetStateAction<UserType[]>>, students:UserType[], setStudents:(arg0: UserType[]) => void, mentors:UserType[], setMentors:(arg0: UserType[]) => void}){
  const [selectOpt, setSelectOpt] = useState<string>()
  const [validated, setValidated] = useState(false);
  const [inputStudent, setInputStudent] = useState<UserType>({})

  const onChange = (e:any ) => {
    const {name, value} = e.target
    setInputStudent({...inputStudent,[name]: value})
  }

  const onChangeArr = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    setInputStudent({...inputStudent,[name]: [value]})
  }

  const registration = () => {
    

    if(Object.keys(inputStudent).length == 12){
      props.users.push(inputStudent)
      props.setUsers([...props.users])
      if(inputStudent.role == "student"){
        props.students.push(inputStudent)
        props.setStudents([...props.students])
      } else if(inputStudent.role == "student"){
        props.mentors.push(inputStudent)
        props.setMentors([...props.mentors])
      }
      setInputStudent({name: "", role: "", email: "", age: "", postCode: "", phone: "", hobbies: [], url: "", studyMinutes: "", taskCode: "", studyLangs: [], score: "", experienceDays: "", useLangs: [], availableStartCode: "", availableEndCode: ""})
      setValidated(false);
    } else {
      setValidated(true);
    }
    console.log(props.students)
  }

  return (
    <Form noValidate validated={validated}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>名前</Form.Label>
        <Form.Control type="text" name="name" onChange={onChange} required/>
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">項目を入力してください</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>ロール</Form.Label>
        <Form.Select required aria-label="select" name="role" onChange={(event) => {
                                                                setSelectOpt(event.target.value);
                                                                onChange(event);}}>
          <option>Open this select menu</option>
          <option value="student">student</option>
          <option value="mentor">mentor</option>
        </Form.Select>
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">項目を入力してください</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>メールアドレス</Form.Label>
        <Form.Control type="text" placeholder="name@example.com" name="email" onChange={onChange} required/>
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">項目を入力してください</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>年齢</Form.Label>
        <Form.Control type="text" name="age" onChange={onChange} required/>
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">項目を入力してください</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>郵便番号</Form.Label>
        <Form.Control type="text" name="postCode" onChange={onChange} required/>
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">項目を入力してください</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>電話番号</Form.Label>
        <Form.Control type="text" name="phone" onChange={onChange} required/>
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">項目を入力してください</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>趣味</Form.Label>
        <Form.Control type="text" name="hobbies" onChange={onChangeArr} required/>
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">項目を入力してください</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>URL</Form.Label>
        <Form.Control type="text" name="url" onChange={onChange} required/>
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">項目を入力してください</Form.Control.Feedback>
      </Form.Group>
      {selectOpt == "student" && (
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>勉強時間</Form.Label>
            <Form.Control type="text" name="studyMinutes" onChange={onChange} required/>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">項目を入力してください</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>課題番号</Form.Label>
            <Form.Control type="text" name="taskCode" onChange={onChange} required/>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">項目を入力してください</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>勉強中の言語</Form.Label>
            <Form.Control type="text" name="studyLangs" onChange={onChangeArr} required/>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">項目を入力してください</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>ハピネススコア</Form.Label>
            <Form.Control type="text" name="score" onChange={onChange} required/>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">項目を入力してください</Form.Control.Feedback>
          </Form.Group>
          <Button onClick={registration}>登録</Button>
        </Form>
      )}
      {selectOpt == "mentor" && (
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>実務経験年数</Form.Label>
            <Form.Control type="text" name="experienceDays" onChange={onChange} required/>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">項目を入力してください</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>現場で使っている言語</Form.Label>
            <Form.Control type="text" name="useLangs" onChange={onChangeArr} required/>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">項目を入力してください</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>担当できる課題番号初め</Form.Label>
            <Form.Control type="text" name="availableStartCode" onChange={onChange} required/>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">項目を入力してください</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>担当できる課題番号終わり</Form.Label>
            <Form.Control type="text" name="availableEndCode" onChange={onChange} required/>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">項目を入力してください</Form.Control.Feedback>
          </Form.Group>
          <Button onClick={registration}>登録</Button>
        </Form>
      )}
    </Form>
  )
}

export default FormCommon