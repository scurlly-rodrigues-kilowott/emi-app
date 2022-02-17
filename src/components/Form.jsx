import React, { useState } from 'react';
import Axios from "axios";
import {  useMutation } from 'react-query';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Row, Col } from "react-bootstrap";




function UserForm(){
  const url = "https://emicalc-api.herokuapp.com/home/dailyemi"
  const [principalAmount, setPrincipal] = useState('')
  const [interestRate, setRate] = useState('')
  const [loanDuration, setDuration] = useState('')
const [result, setResponse] = useState('')




  const mutationDaily = useMutation(daily => {
    return Axios.post('https://emicalc-api.herokuapp.com/home/dailyemi', daily)
    .then(res =>{
      
          console.log(res.data.DailyEmi)
          setResponse(res.data.DailyEmi)
          
        })
  })

  const mutationMonthly = useMutation(monthly => {
    return Axios.post('https://emicalc-api.herokuapp.com/home/monthlyemi', monthly)
    .then(res =>{
      
          console.log(res.data.MonthlyEmi)
          setResponse(res.data.MonthlyEmi)
          
        })
  })

  const mutationContinuous = useMutation(cont => {
    return Axios.post('https://emicalc-api.herokuapp.com/home/continousemi', cont)
    .then(res =>{
      
          console.log(res.data.ContinousEmi)
          setResponse(res.data.ContinousEmi)
          
        })
  })

  
  const handleDailyEmi = (e) => {
    e.preventDefault();
    const dailyEmi = { principalAmount, interestRate, loanDuration }
    mutationDaily.mutate(dailyEmi)
    console.log(dailyEmi);
  }

  const handleMonthlyEmi = (e) => {
    e.preventDefault();
    const monthlyEmi = { principalAmount, interestRate, loanDuration }
    mutationMonthly.mutate(monthlyEmi)
    console.log(monthlyEmi);
  }

  const handleContinuousEmi = (e) => {
    e.preventDefault();
    const continuousEmi = { principalAmount, interestRate, loanDuration }
    mutationContinuous.mutate(continuousEmi)
    console.log(continuousEmi);
  }
  

    return <div>
     <Form>
     <img src="image4.png" alt="coin" className="coin" />
    <div className='form-section'>
   <Form.Group as={Row} className="mb-3 spacing">
    <Form.Label column sm={2}>
      Principal Amount:
    </Form.Label>
    <Col sm={3}>
      <Form.Control type="text" value={principalAmount} onChange={e => setPrincipal(e.target.value)}/>
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3 spacing" >
    <Form.Label column sm={2}>
      Interest Rate:
    </Form.Label>
    <Col sm={3}>
      <Form.Control type="text" value={interestRate} onChange={e => setRate(e.target.value)}/>
    </Col>
  </Form.Group>
  <Form.Group as={Row} className="mb-3 spacing">
    <Form.Label column sm={2}>
      Loan Duration:
    </Form.Label>
    <Col sm={3}>
      <Form.Control type="text" value={loanDuration} onChange={e => setDuration(e.target.value)}/>
    </Col>
  </Form.Group>


  </div>
  

  <Form.Group as={Row} className="mb-3 buttons">
    
      <Button type="submit" onClick={handleDailyEmi}>Daily EMI</Button>
      <Button type="submit" className='button-spacing' onClick={handleMonthlyEmi}>Monthly EMI</Button>
      <Button type="submit" onClick={handleContinuousEmi}>Continuous EMI</Button>
</Form.Group>
<Form.Label className='labels'>
      EMI: {result}
    </Form.Label>
</Form>
    </div>

}

export default UserForm;