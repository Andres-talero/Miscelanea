import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;

  ::-webkit-scrollbar {
    transition: 0.3s ease all;
    width: 8.5px;
    background: rgba(125, 206, 160, 0.363);
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(43, 161, 137, 0.6);
    border-radius: 8.5px;
  }
`;

const IndexContainer = ({ children }) => {
  const handleScroll = (e) => {
    const scroll = e.target.scrollTop;
    const header = document.querySelector(".navbar");
    header.style.backgroundColor =
      scroll > 0 ? "rgba(255, 255, 255, 0.5)" : "transparent";
    header.style.padding = scroll > 0 ? "1.5rem 2rem" : "1rem 2rem";
  };

  return <Container onScroll={(e) => handleScroll(e)}>{children}</Container>;
};

export default IndexContainer;
