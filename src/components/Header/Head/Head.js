import React from "react";
import styled from "styled-components";

function Head(props) {
  const changeHandler = (event) => {
    props.onSearch(event.target.value.trim());
  };

  return (
    <Style.Head>
      <Style.HeadImg src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/MarksAndSpencer1884_logo.svg/1200px-MarksAndSpencer1884_logo.svg.png"></Style.HeadImg>
      <Style.SearchBar>
        <input
          type="text"
          placeholder="Search ingredients..."
          onChange={changeHandler}
          value={props.searchVal}
        />
        <img src="/res/search-var-solid.svg" />
      </Style.SearchBar>
    </Style.Head>
  );
}

export default Head;

const Style = {
  Head: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
  `,

  HeadImg: styled.img`
    width: 6rem;
    position: relative;
    top: 0.5rem;
  `,

  SearchBar: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #eee;
    padding: 0 1rem;
    height: 2.4rem;

    & input {
      border: none;
      background-color: transparent;

      &:focus {
        outline: none;
      }
    }

    & img {
      width: 1rem;
      height: 1rem;
    }
  `,
};
