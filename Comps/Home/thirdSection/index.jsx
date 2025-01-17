import Image from 'next/image';
import { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import styled from 'styled-components';

import ElementHasBeenInView from '@/utils/Hooks/ElementHAsBeenInView';
import { Card, Container, SubContainer } from '@/utils/atoms';
import Buttons from '@/utils/atoms/buttons';
import { LanguageSelector } from '@/utils/context';

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 50%;

  transform: ${({ rtl, InView }) =>
    InView ? 'translateX(0)' : rtl ? 'translateX(200%)' : 'translateX(-200%)'};
  transition: transform 0.9s;

  & > h6 {
    padding: 10px 0px;
    color: ${({ theme }) => theme.colors.tertiary.second_shade};
    font-size: 17.5px;
  }

  & > h2 {
    padding: 10px 0px;
    color: ${({ theme }) => theme.colors.tertiary.main};
    font-size: 50px;
  }

  & > p {
    padding: ${({ rtl }) =>
      rtl ? '10px 0px 50px 15px' : '10px 15px 50px 0px'};

    color: ${({ theme }) => theme.colors.tertiary.second_shade};
    font-size: 16.5px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    width: 100%;
  }
`;
const RatingContainer = styled.div`
  position: relative;
  width: 50%;

  transform: ${({ rtl, InView }) =>
    InView ? 'translateX(0)' : rtl ? 'translateX(-200%)' : 'translateX(200%)'};
  transition: transform 0.9s;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    width: 100%;
    margin: 40px 0px;
  }
`;
const ImageContainer = styled.div`
  position: relative;

  height: 435px;
  border-radius: 20px;

  overflow: hidden;
`;
const RatingTag = styled(Card)`
  position: absolute;
  top: -10px;
  ${({ rtl }) => (rtl ? 'left: -10px' : 'right: -10px')};

  margin: 0px;

  & > span:first-child {
    color: ${({ theme }) => theme.colors.primary.main};
    font-size: 60px;
    font-weight: 900;
  }
`;

function ThirdSection() {
  const [ref, InView] = ElementHasBeenInView(0.3);
  const rtl = LanguageSelector(true);
  const [counterEnd, setCounterEnd] = useState(0);

  useEffect(() => {
    if (InView) setCounterEnd(4.7);
  }, [InView]);

  return (
    <Container>
      <SubContainer ref={ref}>
        <TextContainer InView={InView} rtl={rtl}>
          <h6>{LanguageSelector('من نحن', 'Who we are')}</h6>
          <h2>
            {LanguageSelector(
              'نقوم بإصلاح أجهزة الكمبيوتر وخوادم الأعمال.',
              'We fix computers & business servers.'
            )}
          </h2>
          <p>
            {LanguageSelector(
              'توصيف عرض عصب بنيوي خلف الطريق المختلط، ولكن على حد سواء كان سعيداً أو عائلة.توصل الى تعدد الألوان والشكل الجديد للمشروع الجديد، ولكن على الرغم من ذلك كل شيء كان مؤثراً وأهم من ذلك الرغبة في التغيير. تخطط أولاً للبحث عن الحلول الأخرى وتطويرها بشكل مستمر.',
              'Dictumst fringilla urna curabitur nam ornare risus hac feugiat libero ut. Metus justo quis velit eu elementum gravida natoque ac. Aliquam si sagittis morbi sapien urna tristique curae fusce himenaeos ultrices dui.'
            )}
          </p>
          <Buttons type="button">
            {LanguageSelector('إكتشف أكثر', 'Discover more')}
          </Buttons>
        </TextContainer>
        <RatingContainer rtl={rtl} InView={InView}>
          <ImageContainer>
            <Image
              fill
              style={{ objectFit: 'cover' }}
              src="/out-to-lunch-african-american-businessman-is-working-using-his-laptop-while-resting-in-the-cafe-768x513-1.webp"
              alt="out-to-lunch-african-american-businessman-is-working-using-his-laptop-while-resting-in-the-cafe"
              sizes="(max-width: 767px) 100vw,50vw"
            />
          </ImageContainer>
          <RatingTag rtl={rtl}>
            <span>
              <CountUp
                start={0}
                end={counterEnd}
                duration={3}
                decimals={1}
                decimal=","
                separator=" "
              >
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                  </div>
                )}
              </CountUp>
            </span>
            <span> {LanguageSelector('تقييم العملاء', 'Rating Customer')}</span>
          </RatingTag>
        </RatingContainer>
      </SubContainer>
    </Container>
  );
}

export default ThirdSection;
