import React from "react";
import styled from "styled-components";

type InputProps = {
    width: number;
    fontSize: number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const customMediaQuery = (maxWidth: number):string => {
    return `@media (max-width: ${maxWidth}px)`;
}

const media = {
    custom: customMediaQuery,
    desktop: customMediaQuery(922),
    tablet: customMediaQuery(768),
    phone: customMediaQuery(576),
};

const InputBox = styled.input<InputProps>`
  width: ${(props) => props.width + "px"};
  font-size: ${(props) => props.fontSize + "px"};
  padding: 15px;
  border-radius: 10px;
  border: 1px solid #e007ce;
`;

const Input = (props: InputProps) => {
    return (
        <InputBox
            onChange={props.onChange}
            fontSize={props.fontSize}
            width={props.width}
        />
    );
};

const Content = styled.div`
  height: 10em;
  width: 10em;
  background: papayawhip;

  ${media.desktop} {
    background: dodgerblue;
  }
  ${media.tablet} {
    background: mediumseagreen;
  }
  ${media.phone} {
    background: palevioletred;
  }
`;

export { Input, Content };
