import styled from '@emotion/styled'

export const RegisterBoard = styled.section`
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
      font-weight: 600;
    }
  }
`
