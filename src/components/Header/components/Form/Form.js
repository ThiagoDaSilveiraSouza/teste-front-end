import styled from "styled-components"
import { GoSearch } from "react-icons/go"

const FormComponent = styled.form`
  flex: 10 1 auto;
  max-width: 713px;
  display: flex;

  border-bottom: 1px solid black;

  > input[type="text"] {
    flex: 1 1 auto;
    border: none;
    outline: none;
  }
  > svg {
    flex: 0 0 auto;
  }
  @media (max-width: 650px) {
    order: 4;
  }
`
export const Form = () => {
  return (
    <FormComponent action=''>
      <input
        type='text'
        name='search'
        placeholder='O que está procurando?'
        id=''
      />
      <GoSearch />
    </FormComponent>
  )
}
