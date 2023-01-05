import React from 'react'
import styled from '@emotion/styled'

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  label {
    font-size: 16px;
    font-weight: 500;
  }

  input {
    font-size: 16px;
    height: 50px;
    text-indent: 16px;
    border: 1px solid ${(props) => props.theme.gray.gradebd};

    &::placeholder {
      font-size: 16px;
      font-weight: 400;
      color: #c4c4c4;
    }
  }
`

export const Input = ({ label, type, placeholder, register }) => {
  return (
    <InputBox>
      <label>{label}</label>
      <input type={type} {...register} placeholder={placeholder} />
    </InputBox>
  )
}
