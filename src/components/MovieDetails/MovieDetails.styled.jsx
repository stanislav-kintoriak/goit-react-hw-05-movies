import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  box-shadow: 0px 10px 10px 4px rgba(0, 0, 0, 0.60);
  margin-bottom: 25px;
  height: 700px;
  background: linear-gradient(to left, #F0AB9C 10%, transparent 100%),
    url(${props => props.w500imgUrl});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 2px;
  @media (min-width: 768px) {
    height: 550px;
  }

  @media (min-width: 1280px) {
    height: 600px;
    background: linear-gradient(to left, #F0AB9C 10%, transparent 100%),
      url(${props => props.w500imgUrl});
    background-repeat: no-repeat;
    background-position: left;
    background-size: contain;
  }

  & img {
    display: block;
    float: right;
    overflow: hidden;
  }
`;

export const Details = styled.div`
  width: 100%;
  margin-left: auto;
  padding: 10px;
  @media (min-width: 1280px) {
    padding: 25px;

    width: 70%;
  }

  & h1 {
    text-transform: uppercase;
    color: red;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    text-align: left;
    font-size: 24px;
    letter-spacing: 2px;
    @media (min-width: 1280px) {
      padding: 0 0 0 25px;

      margin: 25px 0 0 0;

      font-size: 24px;
    }
    @media (min-width: 1280px) {
      font-size: 38px;
    }
  }
  & h2 {
    color: #000000;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    text-align: left;
    font-size: 20px;

    letter-spacing: 2px;
    @media (min-width: 768px) {
      margin: 30px 0 0 0;
      padding: 0 0 0 40px;
      font-size: 26px;
    }
    @media (min-width: 1280px) {
      font-size: 30px;
      margin-bottom: 30px;
    }
  }
  & h3 {
    font-weight: 700;
  }
  & ul {
    list-style-type: none;
    margin: 10px 0 0 0;
    padding-left: 0;
    @media (min-width: 768px) {
      padding: 0 0 0 30px;

      font-size: 28px;
      display: flex;
      gap: 10px;
      margin-bottom: 30px;
    }

    & li {
      display: inline;
      color: black;
      font-family: 'Montserrat', sans-serif;
      font-weight: 400;
      font-size: 18px;
      margin: 0;
      padding: 0;
      /* display: flex;
      gap: 10px; */
      @media (min-width: 1280px) {
        padding: 0 30px 0 0;
      }
    }
  }
  & p,
  & h3 {
    color: black;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    letter-spacing: 1px;
    margin: 10px 0 10px 0;
    line-height: 20px;
    /* margin: 0; */
    padding: 0;
    @media (min-width: 1280px) {
      padding: 0 30px 0 40px;
    }
  }
`;