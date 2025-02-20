import { useState, useEffect } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Table from 'react-bootstrap/Table';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import FormCommon from './layouts/formCommon'

function UserList() {
  interface User {
    [key: string]: string | string[] | number | object
  }
  const [users, setUsers] = useState<User[]>([])
  const [students, setStudents] = useState<User[]>([])
  const [mentors, setMentors] = useState<User[]>([])
  const USER_LIST:User[] = [
    { id: 1, name: "鈴木太郎", role: "student", email: "test1@happiness.com", age: 26, postCode: "100-0003", phone: "0120000001", hobbies: ["旅行", "食べ歩き", "サーフィン"], url: "https://aaa.com", studyMinutes: 3000, taskCode: 101, studyLangs: ["Rails", "Javascript"], score: 68 },
    { id: 2, name: "鈴木二郎", role: "mentor", email: "test2@happiness.com", age: 31, postCode: "100-0005", phone: "0120000002", hobbies: ["サッカー", "ランニング", "筋トレ"], url: "https://bbb.com", experienceDays: 1850, useLangs: ["Next.js", "GoLang"], availableStartCode: 201, availableEndCode: 302 },
    { id: 3, name: "鈴木三郎", role: "student", email: "test3@happiness.com", age: 23, postCode: "300-0332", phone: "0120000003", hobbies: ["アニメ", "ゲーム", "旅行"], url: "https://ccc.com", studyMinutes: 125000, taskCode: 204, studyLangs: ["Rails", "Next.js"], score: 90 },
    { id: 4, name: "鈴木四郎", role: "mentor", email: "test4@happiness.com", age: 31, postCode: "100-0005", phone: "0120000004", hobbies: ["食べ歩き", "ランニング", "旅行"], url: "https://ddd.com", experienceDays: 260, useLangs: ["PHP", "Javascript"], availableStartCode: 103, availableEndCode: 408 },
    { id: 5, name: "鈴木五郎", role: "student", email: "test5@happiness.com", age: 22, postCode: "300-0005", phone: "0120000005", hobbies: ["筋トレ", "ランニング"], url: "https://eee.com", studyMinutes: 47800, taskCode: 305, studyLangs: ["Next.js", "Rails"], score: 84 },
    { id: 6, name: "鈴木六郎", role: "mentor", email: "test6@happiness.com", age: 28, postCode: "100-0007", phone: "0120000006", hobbies: ["ゲーム", "サッカー"], url: "https://fff.com", experienceDays: 260, useLangs: ["PHP", "Javascript"], availableStartCode: 101, availableEndCode: 302 },
    { id: 7, name: "鈴木七郎", role: "student", email: "test7@happiness.com", age: 24, postCode: "300-0008", phone: "0120000007", hobbies: ["筋トレ", "ダーツ"], url: "https://ggg.com", studyMinutes: 26900, taskCode: 401, studyLangs: ["PHP", "Rails"], score: 73 },
    { id: 8, name: "鈴木八郎", role: "mentor", email: "test8@happiness.com", age: 33, postCode: "100-0009", phone: "0120000008", hobbies: ["ランニング", "旅行"], url: "https://hhh.com", experienceDays: 6000, useLangs: ["Golang", "Rails"], availableStartCode: 301, availableEndCode: 505 },
  ]

  const students_sort_by_studyMinutes_asc = () =>{
    students.sort((a:User,b:User) => Number(a.studyMinutes) - Number(b.studyMinutes))
    setStudents([...students])
  }

  const students_sort_by_studyMinutes_desc = () =>{
    students.sort((a:User,b:User) => Number(b.studyMinutes) - Number(a.studyMinutes))
    setStudents([...students])
  }

  const students_sort_by_score_asc = () =>{
    students.sort((a:User,b:User) => Number(a.score) - Number(b.score))
    setStudents([...students])
  }

  const students_sort_by_score_desc = () =>{
    students.sort((a:User,b:User) => Number(b.score) - Number(a.score))
    setStudents([...students])
  }

  const mentors_sort_by_experienceDays_asc = () =>{
    mentors.sort((a:User,b:User) => Number(a.experienceDays) - Number(b.experienceDays))
    setStudents([...students])
  }

  const mentors_sort_by_experienceDays_desc = () =>{
    mentors.sort((a:User,b:User) => Number(b.experienceDays) - Number(a.experienceDays))
    setStudents([...students])
  }

  const fetchData = () => {
    const student = USER_LIST.filter((user) => user.role == 'student')
    const mentor = USER_LIST.filter((user) => user.role == 'mentor')
    setUsers(USER_LIST)
    setStudents(student)
    setMentors(mentor)
  }

  useEffect(() => {
    fetchData()
  },[])

  const Th_common = () => {
    return(
      <>
        <th>名前</th>
        <th>ロール</th>
        <th>メールアドレス</th>
        <th>年齢</th>
        <th>郵便番号</th>
        <th>電話番号</th>
        <th>趣味</th>
        <th>URL</th>
      </>
    )
  }

  const Th_student = () => {
    return(
      <>
        <th>勉強時間</th>
        <th>課題番号</th>
        <th>勉強中の言語</th>
        <th>ハピネススコア</th>
        <th>対応可能なメンター</th>
      </>
    )
  }

  const Th_mentor = () => {
    return(
      <>
        <th>実務経験年数</th>
        <th>現場で使っている言語</th>
        <th>担当できる課題番号初め</th>
        <th>担当できる課題番号終わり</th>
        <th>対応可能な生徒</th>
      </>
      
    )
  }

  const CustomToggle = (eventKey:any ) => {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log('totally custom!'),
    );
  
    return (
      <Button onClick={decoratedOnClick}>新規作成</Button>
    );
  }

  const studentList = (user:User) => {
    if(user.role == "mentor"){
      const userList = students.filter((student:User) => {
          return user.availableStartCode <= student.taskCode && student.taskCode <= user.availableEndCode 
        })
      return userList
    }
  }

  const mentorList = (user:User) => {
    if(user.role == "student"){
      const userList = mentors.filter((mentor:User) => {
          return mentor.availableStartCode <= user.taskCode &&  user.taskCode <= mentor.availableEndCode 
        })
      return userList
    }
  }

  return(
    <>
      <Accordion defaultActiveKey="0">
          <CustomToggle eventKey="1">Click me!</CustomToggle>
          <Accordion.Collapse eventKey="1" role="">
            <Card.Body>
              <FormCommon users={users} setUsers={setUsers} students={students} setStudents={setStudents} mentors={mentors} setMentors={setMentors}/>
              
            </Card.Body>
          </Accordion.Collapse>
      </Accordion>
      <Tabs
        defaultActiveKey="all"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="all" title="全て">
          <Table striped bordered>
            <thead>
              <tr>
                <Th_common/>
                <Th_student/>
                <Th_mentor/>
              </tr>
            </thead>
            <tbody>
            {users.map((user:any) => (
              <tr>
                <td>{user.name}</td>
                <td>{user.role}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>{user.postCode}</td>
                <td>{user.phone}</td>
                <td>
                  {user.hobbies?.map((hobbie:string) => (
                    <div>{hobbie}</div>
                  ))}
                </td>
                <td>{user.url}</td>
                <td>{user.studyMinutes}</td>
                <td>{user.taskCode}</td>
                <td>
                  {user.studyLangs?.map((lang:string) => (
                    <div>{lang}</div>
                  ))}
                </td>
                <td>{user.score}</td>
                <td>
                  {mentorList({user})?.map(({data}:any) => (
                    <div>{data.name}</div>
                  ))}
                </td>
                <td>{user.experienceDays}</td>
                <td>
                  {user.useLangs?.map((lang:string) => (
                    <div>{lang}</div>
                  ))}
                </td>
                <td>{user.availableStartCode}</td>
                <td>{user.availableEndCode}</td>
                <td>
                  {studentList(user)?.map((data:any) => (
                    <div>{data.name}</div>
                  ))}
                </td>
              </tr>
              
            ))}
            </tbody>
          </Table>
        </Tab>
        <Tab eventKey="students" title="student">
          <ButtonGroup className="mb-3">
            <DropdownButton title="並び替え" id="bg-nested-dropdown">
              <Dropdown.Item onClick={() => students_sort_by_studyMinutes_desc()}>勉強時間の長い順</Dropdown.Item>
              <Dropdown.Item onClick={() => students_sort_by_studyMinutes_asc()}>勉強時間の短い順</Dropdown.Item>
              <Dropdown.Item onClick={() => students_sort_by_score_desc()}>ハピネススコアの高い順</Dropdown.Item>
              <Dropdown.Item onClick={() => students_sort_by_score_asc()}>ハピネススコアの低い順</Dropdown.Item>
              <Dropdown.Item onClick={() => mentors_sort_by_experienceDays_desc()}>実務経験月数の長い順</Dropdown.Item>
              <Dropdown.Item onClick={() => mentors_sort_by_experienceDays_asc()}>実務経験月数の短い順</Dropdown.Item>
            </DropdownButton>
          </ButtonGroup>
          <Table striped bordered>
            <thead>
              <tr>
                <Th_common/>
                <Th_student/>
              </tr>
            </thead>
            <tbody>
            {students.map((user1:any) => (
              <tr key={user1.id}>
                <td>{user1.name}</td>
                <td>{user1.role}</td>
                <td>{user1.email}</td>
                <td>{user1.age}</td>
                <td>{user1.postCode}</td>
                <td>{user1.phone}</td>
                <td>
                  {user1.hobbies?.map((hobbie:string) => (
                    <div>{hobbie}</div>
                  ))}
                </td>
                <td>{user1.url}</td>
                <td>{user1.studyMinutes}</td>
                <td>{user1.taskCode}</td>
                <td>
                  {user1.studyLangs?.map((lang:string) => (
                    <div>{lang}</div>
                  ))}
                </td>
                <td>{user1.score}</td>
                <td>
                  {mentors.filter((user2:User) => 
                    {return user2.availableStartCode <= user1.taskCode &&  user1.taskCode <= user2.availableEndCode}).map((data:any) => (
                      <div>{data.name}</div>
                    ))}
                </td>
              </tr>
              
            ))}
            </tbody>
          </Table>
        </Tab>
        <Tab eventKey="mentors" title="mentor">
          <ButtonGroup className="mb-3">
            <DropdownButton title="並び替え" id="bg-nested-dropdown">
              <Dropdown.Item onClick={() => mentors_sort_by_experienceDays_desc()}>実務経験月数の長い順</Dropdown.Item>
              <Dropdown.Item onClick={() => mentors_sort_by_experienceDays_asc()}>実務経験月数の短い順</Dropdown.Item>
            </DropdownButton>
          </ButtonGroup>
          <Table striped bordered>
            <thead>
              <tr>
                <Th_common/>
                <Th_mentor/>
              </tr>
            </thead>
            <tbody>
            {mentors.map((user1:any) => (
              <tr>
                <td>{user1.name}</td>
                <td>{user1.role}</td>
                <td>{user1.email}</td>
                <td>{user1.age}</td>
                <td>{user1.postCode}</td>
                <td>{user1.phone}</td>
                <td>
                  {user1.hobbies?.map((hobbie:string) => (
                    <div>{hobbie}</div>
                  ))}
                </td>
                <td>{user1.url}</td>
                <td>{user1.experienceDays}</td>
                <td>
                  {user1.useLangs?.map((lang:string) => (
                    <div>{lang}</div>
                  ))}
                </td>
                <td>{user1.availableStartCode}</td>
                <td>{user1.availableEndCode}</td>
                <td>
                  {students.filter((user2:User) => 
                    {return user1.availableStartCode <= user2.taskCode && user2.taskCode <= user1.availableEndCode }).map((data:any) => (
                      <div>{data.name}</div>
                    ))}
                </td>
              </tr>
              
            ))}
            </tbody>
          </Table>
        </Tab>
      </Tabs>
    </>
    
    
  )
}

export default UserList