import { useState } from "react"
import styled from "styled-components"

// NewsLetter component
import { FormContainer, NewSubContainer } from "./components"

const NewsLetterComponent = styled.section`
  display: flex;
  align-items: center;
  min-height: 146px;
  padding: 24px 0;

  background: #f2f2f2;
  font-family: var(--lato);
`

export const NewsLetter = () => {
  const [newsLetterStatus, setNewsletterStatus] = useState(true)

  const setStatus = () => setNewsletterStatus(!newsLetterStatus)
  return (
    <NewsLetterComponent>
      {newsLetterStatus ? (
        <FormContainer newsLetterStatus={setStatus} />
      ) : (
        <NewSubContainer newsLetterStatus={setStatus} />
      )}
    </NewsLetterComponent>
  )
}
