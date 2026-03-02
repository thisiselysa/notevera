import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

/* ======================
   STYLES
====================== */

const Wrapper = styled.div`
  width: 100%;
  padding: 20px 60px;
  background: white;
  box-sizing: border-box;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const LogoImage = styled.img`
  width: 40px;
`;

const Logo = styled.h1`
  font-size: 32px;
  margin: 0;
`;

const RightSection = styled.div`
  display: flex;
  gap: 12px;
`;

/* BUTTON OTHER */

const OtherButton = styled.button`
  background: ${({ active }) => (active ? "#ff4d8d" : "#ffd6e7")};
  color: ${({ active }) => (active ? "white" : "#ff4d8d")};
  border: none;
  padding: 12px 22px;
  border-radius: 30px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    transform: translateY(-1px);
  }
`;

/* BUTTON CREATE */

const CreateButton = styled.button`
  background: #ff4d8d;
  color: white;
  border: none;
  padding: 12px 26px;
  border-radius: 30px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(255, 77, 141, 0.4);

  &:hover {
    transform: translateY(-1px);
  }
`;

/* SEARCH */

const Search = styled.input`
  width: 100%;
  margin-top: 20px;
  padding: 16px 20px;
  border-radius: 30px;
  border: none;
  background: #ffe6ef;
  font-size: 16px;
  outline: none;
`;

/* ======================
   COMPONENT
====================== */

function Header({ onCreate }) {
  const navigate = useNavigate();
  const location = useLocation();

  const isOtherPage = location.pathname === "/other";

  return (
    <Wrapper>
      <TopBar>
        {/* LOGO */}
        <LogoWrapper>
          <LogoImage src={logo} alt="logo" />
          <Logo>𝑵𝒐𝒕𝒆𝒗𝒆𝒓𝒂 𓇼✧°</Logo>
        </LogoWrapper>

        {/* BUTTONS */}
        <RightSection>
          <OtherButton
            active={isOtherPage}
            onClick={() => navigate("/other")}
          >
            Other
          </OtherButton>

          <CreateButton onClick={onCreate}>
            + New Insight
          </CreateButton>
        </RightSection>
      </TopBar>

      {/* SEARCH */}
      <Search placeholder="Search your insights..." />
    </Wrapper>
  );
}

export default Header;