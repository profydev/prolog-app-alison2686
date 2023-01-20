import styled from "styled-components";
import { Routes } from "@config/routes";
import { color, textFont, displayFont } from "@styles/theme";

const navItems = [
  { text: "Home", href: Routes.home },
  { text: "Products", href: Routes.products },
  { text: "Documentaion", href: Routes.documentation },
  { text: "Pricing", href: Routes.pricing },
];

const Header = styled.header`
  width: 100%;
  height: 80px;
  padding: 0 2rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
`;

const NavigationContainer = styled.ul`
  list-style: none;
  display: flex;
  margin-right: 4rem;
`;

const NavList = styled.li`
  padding-left: 2.5rem;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: ${color("gray", 500)};
  ${textFont("md", "medium")};
`;

const ContactButton = styled.button`
  position: absolute;
  bottom: 2.5rem;
  right: 2.5rem;
  padding: 1rem;
  background: #7f56d9;
  border-radius: 50%;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border: none;
  cursor: pointer;

  &:hover {
    background: #6941c6;
  }
`;

const IssuesPage = () => {
  return (
    <div>
      <Header>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/logo-large.svg" alt="Prolog logo" />
        <NavigationContainer>
          {navItems.map((navItem, index) => (
            <NavList key={index}>
              <NavLink href={navItem.href}>{navItem.text}</NavLink>
            </NavList>
          ))}
        </NavigationContainer>
        <a href={Routes.projects}>Dashboard</a>
      </Header>
      <ContactButton
        onClick={() =>
          alert(
            "Implement this in Challenge 2 - Modal:\n\nhttps://profy.dev/rjs-challenge-modal"
          )
        }
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/message.svg" alt="Contact" />
      </ContactButton>
    </div>
  );
};

export default IssuesPage;
