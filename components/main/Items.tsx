import axios from 'axios';
import Link from 'next/link';
import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

const Items: FC = () => {
  const [itemsInfo, setItemsInfo] = useState();

  useEffect(() => {
    const getApi = () => {
      axios.get('https://api2.ncnc.app/con-items/soon').then((res) => {
        console.log(res.data);
        setItemsInfo(res.data);
      });
    };
    getApi();
  }, []);
  return (
    <>
      <Header>
        <Alert>놓치지 마세요</Alert>
        <Title>오늘의 땡처리콘!</Title>
      </Header>
      <ItemsList>
        {itemsInfo?.conItems.map((data) => (
          <Link key={data.id} href={{ pathname: '/items/[id]' }} as={`/items/${data.id}`}>
            <ItemBox>
              <img src={data.imageUrl} alt="상품이미지" />
              <div>
                <p>{data.conCategory2.name}</p>
                <p>{data.name}</p>
                <div>
                  <p>{`${data.discountRate}%`}</p>
                  <p>{data.ncSellingPrice}</p>
                  <p>{data.originalPrice}</p>
                </div>
              </div>
            </ItemBox>
          </Link>
        ))}
      </ItemsList>
    </>
  );
};

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 29px;
  margin-bottom: 14px;
  margin-left: 17px;
`;

const Alert = styled.p`
  margin: 0;
  color: #ff5757;
  font-family: Apple SD Gothic Neo;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
`;

const Title = styled.p`
  margin: 0;
  color: #000000;
  font-family: Apple SD Gothic Neo;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
`;

const ItemsList = styled.section`
  width: 100%;
  background-color: aqua;
`;

const ItemBox = styled.div`
  display: flex;
  height: 107.62px;
  background: #ffffff;
  & > img {
    width: 70px;
    height: 70px;
  }
`;

export default Items;