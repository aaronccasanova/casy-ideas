import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Libre+Baskerville');
  /* min-height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 20px calc(40px + (150 - 40) * (100vw - 320px) / (2500 - 320));
  @media (max-width: 900px) {
    padding: 20px calc(40px + (250 - 40) * (100vw - 320px) / (2500 - 320));
  } */
  min-height: 100vh;
  display: grid;
  grid-template-columns:
    calc(120px + (800 - 120) * (100vw - 900px) / (2500 - 900))
    auto auto calc(120px + (800 - 120) * (100vw - 900px) / (2500 - 900));
  grid-template-rows: 1fr auto 1fr;

  @media (max-width: 900px) {
    grid-template-columns:
      calc(40px + (120 - 40) * (100vw - 320px) / (900 - 320))
      auto calc(40px + (120 - 40) * (100vw - 320px) / (900 - 320));
    grid-template-rows: 1fr auto auto 1fr;
  }
`;

const TopText = styled.h3`
  margin-bottom: 50px;
  font-weight: bold;
  letter-spacing: 5px;
  color: #565656;
`;

const SideText = TopText.extend`
  margin: 0;
  position: absolute;
  top: 31%;
  left: 0;
  transform: rotate(90deg);
`;

const CircleLogo = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #000;
  color: white;
  font-size: 16px;
  line-height: 50px;
  letter-spacing: 8px;
  padding-left: 8px;
  text-align: center;
  position: absolute;
  right: 12%;
  top: 15%;
`;

const OutlineBox = styled.div`
  /* border: 2px solid #d4d4d4;
  width: 100%;
  height: 100%;
  display: flex;
  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
  } */
  grid-column: 2/4;
  grid-row: 2/3;
  border: 2px solid #d4d4d4;
  display: grid;
  grid-template-columns: auto auto;

  @media (max-width: 900px) {
    grid-template-columns: auto;
    grid-template-rows: auto auto;
    grid-column: 2/3;
    grid-row: 2/4;
  }
`;

const ImagesSection = styled.section`
  /* flex: 1 1 50%;
  display: flex;
  justify-content: center;
  align-items: center; */
  display: grid;
  grid-template-rows: auto auto;
  /* grid-template-rows: 5fr 1fr; */
`;

const ImagesWrapper = styled.div`
  /* position: relative;
  z-index: 1;
  transform: rotate(-45deg)
    translate(
      calc(0px + (-100 - 0) * (100vw - 900px) / (2500 - 900)),
      calc(0px + (-100 - 0) * (100vw - 900px) / (2500 - 900))
    );
  width: calc(
    190px + (1000 - 190) * (${props => props.scale} - 320px) / (2500 - 320)
  );
  height: calc(
    190px + (1000 - 190) * (${props => props.scale} - 320px) / (2500 - 320)
  );

  @media (max-width: 900px) {
    transform: rotate(-45deg) translate(0, 0);
  } */
`;

const LargeImgWrapper = styled.div`
  /* border: calc(
      10px + (100 - 10) * (${props => props.scale} - 320px) / (2500 - 320)
    )
    solid white;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  img {
    transform: rotate(45deg) translate(-25%, -10%);
    width: 150%;
    height: 150%;
    object-fit: cover;
  } */
  border: calc(
      10px + (100 - 10) * (${props => props.scale} - 320px) / (2500 - 320)
    )
    solid white;
  overflow: hidden;
  transform: rotate(-45deg);
  grid-column: 1/2;
  grid-row: 1/2;
  width: calc(200px + (600 - 200) * (${props =>
    props.scale} - 320px) / (2500 - 320));
  height: calc(200px + (600 - 200) * (${props =>
    props.scale} - 320px) / (2500 - 320));
  justify-self: center;
  align-self: center;

  img {
    width: 150%;
    height: 150%;
    object-fit: cover;
    transform: rotate(45deg) translate(-25%, -10%);
  }
`;

const SmallImgWrapper = styled.div`
  background: #dada00;
  border-top: calc(
      10px + (100 - 10) * (${props => props.scale} - 320px) / (2500 - 320)
    )
    solid white;
  border-left: calc(
      10px + (100 - 10) * (${props => props.scale} - 320px) / (2500 - 320)
    )
    solid white;
  width: 50%;
  height: 50%;
  overflow: hidden;
  position: absolute;
  top: 50%;
  left: 50%;

  img {
    transform: rotate(45deg) translate(-24%, -7%);
    width: 150%;
    height: 150%;
    object-fit: cover;
  }
`;

const ContentBox = styled.div`
  /* position: absolute;
  top: 80%;
  left: -31%;
  transform: rotate(45deg)
    translateX(calc(-40px + (-20 - -40) * (100vw - 900px) / (2500 - 900)));
  white-space: nowrap;
  background: white;
  padding: calc(
      10px + (55 - 10) * (${props => props.scale} - 320px) / (2500 - 320)
    )
    calc(20px + (60 - 20) * (${props => props.scale} - 320px) / (2500 - 320));
  font-size: calc(
    16px + (60 - 16) * (${props => props.scale} - 320px) / (2500 - 320)
  );
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  
  @media (max-width: 900px) {
    top: 72%;
    left: -49%;
    transform: rotate(45deg)
    translateX(calc(0px + (30 - 0) * (100vw - 320px) / (900 - 320)));
  } */

  grid-column: 1/2;
  grid-row: 2/3;
  align-self: center;
  justify-self: center;
  z-index: 1;
  background: white;
  text-align: center;
  padding: 10px 20px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  
  @media(max-width: 900px) {
    transform: translateY(calc(0px + (-10 - 0) * (${props =>
      props.scale} - 320px) / (900 - 320)));
    font-size: calc(
      12px + (50 - 12) * (${props => props.scale} - 320px) / (2500 - 320)
    );

  }
  
`;

const ContentSection = styled.section`
  /* padding: 40px 0;
  flex: 1 1 50%;
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: center;

  div {
    transform: translate(
      calc(50px + (-20 - 50) * (100vw - 900px) / (2500 - 900)),
      0%
    );
    
    background: #ffffff;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
  }

  p {
    font-weight: bold;
    margin-bottom: 40px;
    font-size: calc(
      25px + (80 - 25) * (${props => props.scale} - 900px) / (2500 - 900)
    );
  }

  h2 {
    margin-bottom: 50px;
    font-family: 'Libre Baskerville', serif;
    font-size: calc(
      73px + (350 - 73) * (${props => props.scale} - 900px) / (2500 - 900)
    );
    line-height: 0.9;
    font-weight: 400;
  }

  h6 {
    font-size: calc(
      20px + (80 - 20) * (${props => props.scale} - 900px) / (2500 - 900)
    );
    font-weight: bold;
    width: calc(230px + (700 - 230) * (100vw - 900px) / (2500 - 900));
    color: #888888;
  }
  
  @media (max-width: 900px) {
    div {
      transform: translate(0, 0);
      text-align: left;
    }
    p {
      margin-bottom: 10px;
      text-align: right;
      font-size: calc(
        12px + (25 - 12) * (${props => props.scale} - 320px) / (900 - 320)
        );
      }
      
      h2 {
        margin-bottom: 25px;
        align-self: flex-start;
        font-size: calc(
          27px + (90 - 27) * (${props => props.scale} - 320px) / (900 - 320)
          );
        }
        
        h6 {
          align-self: flex-start;
          font-size: calc(
            10px + (22 - 10) * (${props => props.scale} - 320px) / (900 - 320)
            );
            width: calc(150px + (500 - 150) * (100vw - 320px) / (900 - 320));
          }
        } */
    
    display: grid;
    grid-template-rows: auto auto auto;
    text-align: right;
    
    p {
      color: slategrey;
    }
    h2 {
      font-weight: bold;
    }
    h6 {
      color: #888888;
    }
    
    @media (max-width: 900px) {
      /* grid-column: 1/2;
      grid-row: 2/3; */
      p {
        padding: calc(20px + (30 - 20) * (100vw - 320px) / (900 - 320)) 20px 20px 20px;
        font-size: calc(12px + (20 - 12) * (100vw - 320px) / (900 - 320));
        margin-right: calc(0px + (50 - 0) * (100vw - 320px) / (900 - 320));
      }
      h2 {
        font-family: 'Libre Baskerville', serif;
        margin-left: calc(0px + (50 - 0) * (100vw - 320px) / (900 - 320));
        font-size: calc(25px + (70 - 25) * (100vw - 320px) / (900 - 320));
        line-height: .9;
        padding: 20px 20px calc(20px + (60 - 20) * (100vw - 320px) / (900 - 320)) 20px;
        text-align: left;
      }
      h6 {
        font-size: calc(12px + (20 - 12) * (100vw - 320px) / (900 - 320));
        margin-left: calc(0px + (50 - 0) * (100vw - 320px) / (900 - 320));
        width: calc(170px + (400 - 170) * (100vw - 320px) / (900 - 320));
        text-align: left;
        padding: 20px 20px calc(20px + (60 - 20) * (100vw - 320px) / (900 - 320)) 20px;
      }
    }
    `;

class BoxyLanding extends Component {
  state = {
    scale: null
  };

  getScale = () => {
    let scaleWidth = window.innerWidth;
    let scaleHeight = window.innerHeight;
    let scale = scaleWidth > scaleHeight ? scaleHeight : scaleWidth;
    return `${scale}px`;
  };

  componentWillMount() {
    let scale = this.getScale();
    this.setState({
      scale
    });

    window.addEventListener('resize', () => {
      let scale = this.getScale();
      this.setState({
        scale
      });
    });
  }

  render() {
    return (
      <Wrapper>
        <OutlineBox>
          <ImagesSection>
            <LargeImgWrapper scale={this.state.scale}>
              <img
                src="https://images.unsplash.com/photo-1517423568366-8b83523034fd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=92b82a18bf4bfbdfe1bd7eed8cd4ba49&auto=format&fit=crop&w=675&q=80"
                alt="dog"
              />
              <SmallImgWrapper scale={this.state.scale}>
                <img
                  src="https://images.unsplash.com/photo-1517213849290-bbbfffdc6da3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=943dfad4aa75252116f83032204a5608&auto=format&fit=crop&w=800&q=80"
                  alt="cat"
                />
              </SmallImgWrapper>
            </LargeImgWrapper>
            <ContentBox scale={this.state.scale}>
              CREATE A SHARED RITUAL
            </ContentBox>
          </ImagesSection>
          <ContentSection>
            <p>
              Friday 20 April<br />AM
            </p>
            <h2>
              To Build<br />Relationships
            </h2>
            <h6>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              voluptatibus ut eveniet soluta ipsum quam enim libero obcaecati
              cum architecto nisi
            </h6>
          </ContentSection>
        </OutlineBox>
        {/* <TopText>We're Lost</TopText> */}
        {/* <SideText>
          Thank God<br />I Found You
        </SideText> */}
        {/* <CircleLogo>LA</CircleLogo> */}
        {/* <OutlineBox>
          <ImagesSection>
            <ImagesWrapper scale={this.state.scale}>
              <LargeImgWrapper scale={this.state.scale}>
                <img
                  src="https://images.unsplash.com/photo-1517423568366-8b83523034fd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=92b82a18bf4bfbdfe1bd7eed8cd4ba49&auto=format&fit=crop&w=675&q=80"
                  alt="dog"
                />
                <SmallImgWrapper scale={this.state.scale}>
                  <img
                    src="https://images.unsplash.com/photo-1517213849290-bbbfffdc6da3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=943dfad4aa75252116f83032204a5608&auto=format&fit=crop&w=800&q=80"
                    alt="cat"
                  />
                </SmallImgWrapper>
              </LargeImgWrapper>
              <ContentBox scale={this.state.scale}>
                CREATE A SHARED RITUAL
              </ContentBox>
            </ImagesWrapper>
          </ImagesSection>
          <ContentSection scale={this.state.scale}>
            <div>
              <p>
                Friday 20 April<br />AM
              </p>
              <h2>
                To Build<br />Relationships
              </h2>
              <h6>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                voluptatibus ut eveniet soluta ipsum quam enim libero obcaecati
                cum architecto nisi
              </h6>
            </div>
          </ContentSection>
        </OutlineBox> */}
      </Wrapper>
    );
  }
}

export default BoxyLanding;
