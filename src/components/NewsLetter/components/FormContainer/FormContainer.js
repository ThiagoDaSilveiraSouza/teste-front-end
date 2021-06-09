import { useCallback, useState, useEffect } from "react"
import styled from "styled-components"

const FormContainerComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Title = styled.div`
  margin: 0 0 16px 0;

  text-align: center;
  h2 {
    margin: 0;
    font-size: 22px;
    font-weight: bold;
  }
`
const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr 140px;
  gap: 8px;

  width: 100%;
  max-width: 730px;

  input {
    height: 48px;
    font-size: 17px;
  }
  input[type="submit"] {
    flex: 0 0 140px;

    border: none;
    border-radius: 5px;
    background: black;
    color: white;

    cursor: pointer;
    transition: transform 0.3s;

    :hover {
      transform: scale(1.03);
    }
  }
  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`
const InputContent = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;

  input[type="text"],
  input[type="email"] {
    position: relative;
    max-width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0;
    padding: 0 15px;

    border: ${({ errorVisibility }) =>
      errorVisibility ? "none" : "1px solid red"};
    border-radius: 5px;
    :focus {
      outline: 1px solid #BDBDBD;
    }
  }
`
const ErrorMessage = styled.span`
  font-size: 12px;
  color: red;
  visibility: ${({ errorVisibility }) => (errorVisibility ? "hidden" : "show")};
`

export const FormContainer = ({ newsLetterStatus }) => {
  const [validation, setValidation] = useState({
    name: true,
    email: true,
    currentPage: "FormContainer",
  })

  const formSubmit = (event) => {
    event.preventDefault()
    const { name, email } = event.target

    const verifyName = (name) => {
      const nameIsValid = name.value.split(" ").length > 1
      return nameIsValid
    }
    const verifyEmail = (email) => {
      const emailIsValid = email.value.includes("@")
      return emailIsValid
    }

    const inputsIsValid = verifyName(name) && verifyEmail(email)

    if (inputsIsValid) {
      newsLetterStatus(true)
    }
    setValidation({
      name: verifyName(name),
      email: verifyEmail(email),
    })
  }

  const backToNewSubContainer = useCallback(() => {
    const { currentPage } = validation
    const isValid = currentPage === "NewSubContainer"
    if (isValid) {
      newsLetterStatus(false)
    }
  }, [validation, newsLetterStatus])

  useEffect(() => {
    backToNewSubContainer()
  }, [backToNewSubContainer])

  return (
    <FormContainerComponent className='centralizer'>
      <Title>
        <h2>Participe de nossas news com promoções e novidades!</h2>
      </Title>
      <Form onSubmit={formSubmit}>
        <InputContent errorVisibility={validation.name}>
          <input type='text' name='name' placeholder='Digite seu nome' />
          <ErrorMessage errorVisibility={validation.name}>
            Preencha com seu nome completo
          </ErrorMessage>
        </InputContent>

        <InputContent errorVisibility={validation.email}>
          <input type='email' name='email' placeholder='Digite seu email' />
          <ErrorMessage errorVisibility={validation.email}>
            Preencha com um e-mail válido
          </ErrorMessage>
        </InputContent>

        <input type='submit' value='Eu quero!' />
      </Form>
    </FormContainerComponent>
  )
}
