/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import SlickSlider from 'react-slick';
import styled from 'styled-components';

const typeUl = { primary: Boolean };

const Container = styled('ul', typeUl)`
  padding: 0;
  margin: 0;
  .slick-prev,
  .slick-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 30px;
    height: 30px;
    transform: initial;
    &:before {
      font-size: 30px;
      color: ${props => props.primary ? 'red' : 'yellow'}
    }
  }
  
  .slick-prev {
    left: 0;
  }
  .slick-next {
    right: 16px;
  }
`;

export const SliderItem = styled.li`
  margin-right: 16px;
  img {
    margin: 16px;
    width: 298px;
    height: 197px;
    object-fit: cover;
  }
`;

const Slider = ({ children }) => {

    return (
        <Container primary={true}>
            <SlickSlider {...{
                dots: true,
                infinite: true,
                speed: 300,
                centerMode: false,
                variableWidth: true,
                adaptiveHeight: true,
            }}
            onClick={() => console.log("ok")}
            >
                {children}
            </SlickSlider>
        </Container>
    )
};

export default Slider;