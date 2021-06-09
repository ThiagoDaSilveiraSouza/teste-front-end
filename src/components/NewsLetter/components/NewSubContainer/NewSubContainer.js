import styled from "styled-components"

const NewSubContainerComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;

  h3,
  h4 {
    margin: 0;
    font-size: 14px;
  }
  h4 {
    font-weight: 500;
  }
  input {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 48px;
    width: 328px;
    margin-top: 15px;
    border-radius: 5px;

    background: black;
    color: white;
    outline: none;
    cursor: pointer;
    transition: transform 0.3s;
    :hover {
      transform: scale(1.1);
    }
  }
`
export const NewSubContainer = ({ newsLetterStatus }) => {
  const backToFormContainer = (event) => {
    event.preventDefault()
    newsLetterStatus(true)
  }
  return (
    <NewSubContainerComponent className='centralizer'>
      <form>
        <h3>Seu e-mail foi cadastrado com sucesso!</h3>
        <h4>
          A partir de agora você receberá as novidade e ofertas exclusivas.
        </h4>
        <input
          type='submit'
          value='Cadastrar novo e-mail'
          onClick={backToFormContainer}
        />
      </form>
    </NewSubContainerComponent>
  )
}
