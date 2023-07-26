import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLazyGetAnimeListQuery } from "../../../store/anime/animeService";
import classNames from "classnames/bind";
import styles from "./SearchBar.module.scss";
const cx = classNames.bind(styles);

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  // const [searchedAnime, setSearchedAnime] = useState<anime>();
  const [trigger, result] = useLazyGetAnimeListQuery();

  // const handleSearch = (e: {
  //   target: { value: React.SetStateAction<string> };
  // }) => {
  //   setSearchValue(e.target.value);
  // };

  // const handleSubmit = (e: { preventDefault: () => void }) => {
  //   e.preventDefault();
  //   trigger("anime?q=" + searchValue);
  // };

  // useEffect(() => {
  //   const array = result?.data?.data;
  //   setSearchedAnime(array?.slice(0, 5));
  // }, [result]);

  // interface searchResultInterface {
  //   mal_id: number;
  //   title: string;
  // }

  // const searchedAnimeList: JSX.Element = searchedAnime?.map(
  //   (anime: searchResultInterface) => (
  //     <li key={anime?.mal_id}>
  //       <Link to={`/anime/${anime?.mal_id}`}>{anime?.title}</Link>
  //     </li>
  //   )
  // );

  return (
    <div className={cx("search-bar")}>
      {/* <form className={cx("search__form")} onSubmit={handleSubmit}>
        <input
          className={cx("search__input")}
          type="search"
          placeholder="Search..."
          required
          value={searchValue}
          onChange={handleSearch}
        />
        <ul className={cx("search__list")}>{searchedAnimeList}</ul>
      </form> */}
    </div>
  );
};

export default SearchBar;
