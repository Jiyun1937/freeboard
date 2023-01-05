import React, { forwardRef } from 'react'
import styled from '@emotion/styled'
import { TextField } from '@material-ui/core'

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
    padding: 0;
    &::placeholder {
      font-size: 16px;
      font-weight: 400;
      color: #c4c4c4;
    }
  }
`

export const Input = ({ label, type, placeholder, error, register }) => {
  return (
    <InputBox>
      <label>{label}</label>
      <TextField
        type={type}
        {...register}
        placeholder={placeholder}
        error={error ? true : false}
        helperText={error ? error : ''}
        autoComplete='false'
      />
    </InputBox>
  )
}
