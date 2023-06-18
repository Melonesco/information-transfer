import React, { useEffect, useRef, useState } from "react";
import Photo from "../../assets/images/andrew-averkin-cam-07-1.jpg";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../redux/posts/asyncAction";
import { RootState } from "../../redux/store";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { selectPosts } from "../../redux/posts/selectors";
import { IPost } from "../../utils/types";
import PostCard from "../../components/PostCard";
import * as S from "./styles";

const Home = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const dispatch: ThunkDispatch<RootState, null, AnyAction> = useDispatch();
  const posts = useSelector(selectPosts);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState<any>([]);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  useEffect(() => {
    setFilteredPosts(posts);
  }, [posts]);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    const section = ref.current;
    if (section) {
      const offsetTop = section.offsetTop;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleClick = () => {
    const filteredPosts = posts.filter((post: IPost) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPosts(filteredPosts);
  };

  return (
    <>
      <S.Info>
        <S.Img src={Photo} alt="img" />
        <S.Button onClick={() => scrollToSection(sectionRef)}>
          Інформаційний обмін
        </S.Button>
      </S.Info>
      <S.SearchBlock>
        <S.Input
          type="search"
          placeholder="Пошук"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <S.SearchButton onClick={handleClick}>Пошук</S.SearchButton>
      </S.SearchBlock>
      <S.Containers ref={sectionRef}>
        {filteredPosts.length > 0 ? (
          filteredPosts.map((obj: IPost) => (
            <PostCard key={obj._id} obj={obj} />
          ))
        ) : (
          <S.Empty>Нічого не знайдено</S.Empty>
        )}
        <div></div>
        <div></div>
        <div></div>
      </S.Containers>
    </>
  );
};

export default Home;
