import React, { useState } from 'react'
import styled from '@emotion/styled'
import { Button, FormControlLabel, Radio, RadioGroup } from '@material-ui/core'
import { Input } from 'components'
import { PlusOutlined } from '@ant-design/icons'
import { yellow } from '@material-ui/core/colors'

const RegisterBoard = styled.section`
  margin-top: 100px;
  padding: 100px 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);

  h1 {
    margin-bottom: 80px;
    font-size: 36px;
    font-weight: 700;
    text-align: center;
  }

  form {
    width: 996px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 40px;

    h3 {
      font-size: 16px;
      font-weight: 500;
    }

    .board__writer {
      gap: 24px;
      display: flex;
      justify-content: space-between;

      div {
        width: 468px;
      }
    }

    .board__content {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 16px;
      label {
        font-size: 16px;
        font-weight: 500;
      }
      textarea {
        height: 480px;
        padding: 16px;
        border: 1px solid ${(props) => props.theme.gray.gradebd};

        &::placeholder {
          font-size: 16px;
          font-weight: 400;
          color: #c4c4c4;
        }
      }
    }

    .board__address {
      display: flex;
      flex-direction: column;
      gap: 16px;
      .address-post-num {
        display: flex;
        gap: 16px;
        div {
          width: 77px;
          input {
            width: 100%;
          }
        }

        button {
          width: 124px;
          height: 52px;
          border-radius: 0;
          padding: 0;
          background: #000;
          color: #fff;
          align-self: flex-end;
        }
      }
    }

    .board__attatch {
      display: flex;
      flex-direction: column;
      gap: 16px;

      .board__attach-box {
        display: flex;
        gap: 16px;

        label {
          width: 78px;
          height: 78px;
          background: ${(props) => props.theme.gray.gradebd};
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          gap: 5px;
          cursor: pointer;
        }

        input[type='file'] {
          width: 0;
          height: 0;
          padding: 0;
          border: 0;
          overflow: hidden;
        }
      }
    }

    .board__mainSetting {
      display: flex;
      flex-direction: column;
      gap: 16px;

      .MuiRadio-colorSecondary.Mui-checked {
        color: ${(props) => props.theme.point};
      }
    }

    .board__new-submit {
      width: 179px;
      height: 52px;
      align-self: center;
      background: ${(props) => props.theme.point};
      font-weight: 500;
    }
  }
`

const BoardNew = () => {
  const [radioValue, setRadioValue] = useState('')
  const handleChangeRadio = (e) => {
    setRadioValue(e.target.value)
  }

  return (
    <RegisterBoard>
      <h1>게시물 등록</h1>
      <form>
        <div className='board__writer'>
          <Input label='작성자' type='text' placeholder='이름을 적어주세요' />
          <Input
            label='비밀번호'
            type='password'
            placeholder='비밀번호를 입력해주세요'
          />
        </div>
        <div className='board__title'>
          <Input
            label='제목'
            type='password'
            placeholder='비밀번호를 입력해주세요'
          />
        </div>
        <div className='board__content'>
          <label>내용</label>
          <textarea type='text' placeholder='내용을 작성해주세요' />
        </div>
        <div className='board__address'>
          <div className='address-post-num'>
            <Input label='주소' type='text' placeholder='07250' />
            <Button type='button'>우편번호 검색</Button>
          </div>
          <Input type='text' />
          <Input type='text' />
        </div>
        <div className='board__youtube'>
          <Input label='유튜브' type='text' placeholder='링크를 복사해주세요' />
        </div>
        <div className='board__attatch'>
          <h3>사진첨부</h3>
          <div className='board__attach-box'>
            {[1, 2, 3].map((fileNum, idx) => (
              <div key={idx}>
                <label htmlFor={`file${fileNum}`}>
                  <span>
                    <PlusOutlined />
                  </span>
                  <span>Upload</span>
                </label>
                <input type='file' id={`file${fileNum}`} />
              </div>
            ))}
          </div>
        </div>
        <div className='board__mainSetting'>
          <h3>메인 설정</h3>
          <RadioGroup row defaultValue='Youtube' onChange={handleChangeRadio}>
            <FormControlLabel
              value='Youtube'
              control={<Radio />}
              label='유튜브'
            />
            <FormControlLabel value='Photo' control={<Radio />} label='사진' />
          </RadioGroup>
        </div>
        <Button className='board__new-submit' type='submit'>
          등록하기
        </Button>
      </form>
    </RegisterBoard>
  )
}

export default BoardNew
