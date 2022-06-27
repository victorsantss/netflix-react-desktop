import { Container } from '@mui/material';
import HeaderShows from 'components/headerShows/headerShows';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { showInfoSelector } from 'store/show/show.selector';
import { showActions } from 'store/show/show.slice';
import { DataShowInfo } from 'store/show/show.type';
import { Banner, Text, Title } from './show.styled';

export default function Show() {
  const param: any = useParams();
  const dispatch = useDispatch();

  const showInfo: DataShowInfo = useSelector(showInfoSelector);

  useEffect(
    () => {
      dispatch(showActions.getShowInfo({ showId: param.id }));
    },
    [],
  );

  return (
    <>
      <Container>
        <HeaderShows />
      </Container>
      <Banner imgCover={showInfo.cover} />
      <Container>
        <Title>{showInfo.title}</Title>
        <Text>{showInfo.description}</Text>
        <Text>{`Director: ${showInfo.director}`}</Text>
      </Container>
    </>
  );
}
