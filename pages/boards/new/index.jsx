import React, { useState } from 'react'
import { RegisterBoard } from 'styles'
import {
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextareaAutosize,
} from '@material-ui/core'
import { Input } from 'components'
import { PlusOutlined } from '@ant-design/icons'
import { useForm } from 'react-hook-form'

const BoardNew = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [radioValue, setRadioValue] = useState('Youtube')
  const handleChangeRadio = (e) => {
    setRadioValue(() => e.target.value)
  }
  const submitPost = (valid) => {
    console.log(valid)

    if (valid.radioYoutube === radioValue) {
      valid.radioPhoto = null
    } else {
      valid.radioYoutube = null
    }
  }
  return (
    <RegisterBoard>
      <h1>게시물 등록</h1>
      <form onSubmit={handleSubmit(submitPost)}>
        {/* 작성자 */}
        <div className='board__writer'>
          <Input
            label='작성자'
            register={register('writer', { required: '이름을 입력해주세요' })}
            type='text'
            error={errors.writer?.message}
            placeholder='이름을 입력해주세요'
          />
          <Input
            label='비밀번호'
            register={register('password', {
              required: '비밀번호를 입력해주세요',
            })}
            type='password'
            error={errors.password?.message}
            placeholder='비밀번호를 입력해주세요'
          />
        </div>

        {/* 제목 */}
        <Input
          label='제목'
          register={register('title', { required: '제목을 입력해주세요' })}
          type='text'
          error={errors.title?.message}
          placeholder='제목을 입력해주세요'
        />

        {/* 컨텐트 */}
        <div className='board__content'>
          <label>내용</label>
          <TextareaAutosize
            {...register('content', { required: '내용을 작성해주세요' })}
            error={errors.content?.message}
            type='text'
            style={{ height: '480px' }}
            placeholder='내용을 작성해주세요'
          />
        </div>

        {/* 주소 */}
        <div className='board__address'>
          <div className='address-post-num'>
            <Input
              register={register('postnum', { required: true })}
              error={errors.postnum?.message}
              label='주소'
              type='text'
              placeholder='07250'
            />
            <Button type='button'>우편번호 검색</Button>
          </div>
          <Input
            register={register('address1', { required: '주소를 입력해주세요' })}
            error={errors.address1?.message}
            type='text'
          />
          <Input
            register={register('address2', { required: '주소를 입력해주세요' })}
            error={errors.address2?.message}
            type='text'
          />
        </div>

        {/* 유튜브링크 */}
        <Input
          register={register('link')}
          error={errors.link?.message}
          label='유튜브'
          type='text'
          placeholder='링크를 복사해주세요'
        />

        {/* 사진 첨부 */}
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
                <input
                  {...register(`attach${fileNum}`)}
                  type='file'
                  id={`file${fileNum}`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* 메인설정 할 컨텐츠 */}
        <div className='board__mainSetting'>
          <h3>메인 설정</h3>
          <RadioGroup row value={radioValue} onChange={handleChangeRadio}>
            <FormControlLabel
              value='Youtube'
              control={<Radio {...register('radioYoutube')} />}
              label='유튜브'
            />
            <FormControlLabel
              value='Photo'
              control={<Radio {...register('radioPhoto')} />}
              label='사진'
            />
          </RadioGroup>
        </div>

        {/* 등록버튼 */}
        <Button className='board__new-submit' type='submit'>
          등록하기
        </Button>
      </form>
    </RegisterBoard>
  )
}

export default BoardNew
