import styled from "styled-components";

export const StyledSearch = styled.div`
  display: grid;
  justify-content: center;
  margin: 5rem;

  h1 {
    display: block;
    color: #ed8a63;
    font-size: 2rem;
    margin: 1rem;
  }

  form {
    display: grid;
    justify-content: center;

    input {
        padding: 5px;
        width: 300px;
        margin: 10px 0;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 2rem;
        justify-content: center;
        &::placeholder {
            margin: 0 auto;
        }
    }

    button {
      width: 190px;
      border: none;
      border-radius: 7px;
      height: 40px;
      font-size: 1.9rem;
      margin: 30px auto;
      font-style: bold;
      display: block;
      background: #3a4660;
      color: white;
      &:focus {
        outline: none;
        border: none;
      }
      &:hover {
        transition: var(--transition);
        transform: translateY(-1px);
        box-shadow:  3px 5px 9px -1px #3a4660;
      }
      &:active {
        transition: all 0.1s;
        outline: none;
        border: none;
        box-shadow: 1px 3px 4px -1px #3a4660;
      }
    }
  }
`;
