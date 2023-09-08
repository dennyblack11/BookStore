import React, { useState, useEffect, useRef } from "react";
import { text } from "stream/consumers";
import styled from "styled-components";

const CardText = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const Target = new Date("9/08/2023 11:59:59");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = Target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <Holder>
        <Wrap>
          <Daysdiv>
            <Holds> {days} :</Holds>
            <Div>Days</Div>
          </Daysdiv>
          <Daysdiv>
            <Holds> {hours} :</Holds>
            <Div>Hours</Div>
          </Daysdiv>
          <Daysdiv>
            <Holds> {minutes} :</Holds>
            <Div>Minutes</Div>
          </Daysdiv>
          <Daysdiv>
            <Holds> {seconds} :</Holds>
            <Div>Seconds</Div>
          </Daysdiv>
        </Wrap>
      </Holder>
    </Container>
  );
};

export default CardText;

// const Holder = styled.div``

const Div = styled.div`
  color: #fff;
  font-size: 20px;
`;

const Holds = styled.div`
  color: #fff;
  font-size: 25px;
`;

const Daysdiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-left: 25px;
`;

const Wrap = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

const Holder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
`;
