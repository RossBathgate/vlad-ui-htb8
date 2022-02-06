import React, { useState } from "react";
import styled from "styled-components";
import constants from "../../../constants";
import SettingsModal from "./SettingsModal";

function Head(props) {
  const [modalShown, setModalShown] = useState(false);

  const changeHandler = (event) => {
    props.onSearch(event.target.value.trim());
  };

  const onSettingsClickHandler = () => {
    setModalShown(true);
  };

  return (
    <Style.Head>
      <Style.HeadImg src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/MarksAndSpencer1884_logo.svg/1200px-MarksAndSpencer1884_logo.svg.png"></Style.HeadImg>
      <Style.Row>
        <Style.SearchBar
          isDisabled={props.currentPage === constants.pages.recipies}
        >
          <input
            type="text"
            placeholder="Search ingredients..."
            onChange={changeHandler}
            value={props.searchVal}
            disabled={props.currentPage === constants.pages.recipies}
          />
          <img src="/res/search-var-solid.svg" />
        </Style.SearchBar>
        <Style.SettingsButton onClick={onSettingsClickHandler}>
          <img src="/res/settings-solid.svg" />
        </Style.SettingsButton>
        {modalShown && (
          <SettingsModal
            onSetDiet={props.onSetDiet}
            onClose={() => setModalShown(false)}
            diet={props.diet}
          />
        )}
      </Style.Row>
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

  Row: styled.div`
    display: flex;
    flex-direction: row;
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
    opacity: ${(props) => (props.isDisabled ? "0" : "1")};
   
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

  SettingsButton: styled.button`
    background: white;
    border: none;
    padding: 0.5rem 0.7rem;
    transition: background-color 0.2s;

    &:hover {
      cursor: pointer;
      background-color: gray;
    }

    &:focus {
      outline: none;
    }

    & img {
      width: 1rem;
      height: 1rem;
    }
  `,
};
