import styled from "styled-components";

const Wrapper = styled.div`
  padding: 40px 80px;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 42px;
  font-weight: 700;
`;

const Button = styled.button`
  background: linear-gradient(90deg, #ff4d8d, #ff6ec7);
  border: none;
  padding: 14px 28px;
  border-radius: 30px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 10px 20px rgba(255, 0, 150, 0.3);
`;

const Search = styled.input`
  margin-top: 25px;
  width: 100%;
  padding: 18px;
  border-radius: 20px;
  border: none;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  font-size: 16px;
`;

// 🔥 TERIMA PROP onCreate
function Header({ onCreate }) {
  return (
    <Wrapper>
      <TopBar>
        <Logo> 🌸Notevera𓇼 ˖°</Logo>
        {/* 🔥 Hubungkan ke App */}
        <Button onClick={onCreate}>+ New Insight</Button>
      </TopBar>
      <Search placeholder="Search your insights..." />
    </Wrapper>
  );
}

export default Header;