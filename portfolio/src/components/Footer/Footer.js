import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel:91-931-520-7964'>91-931-520-7964</LinkItem>
        </LinkColumn>

        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:shiprashakya2001@gmail.com'>shiprashakya2001@gmail</LinkItem>
        </LinkColumn>

        <LinkColumn>
          <LinkTitle>Linkedin</LinkTitle>
          <LinkItem href='https://www.linkedin.com/in/shipra-shakya-090590207/'>Linkedin</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <SocialContainer>
          <SocialIcons href='https://github.com'><AiFillGithub size="3rem" /></SocialIcons>
          <SocialIcons href='https://linkedin.com'><AiFillLinkedin size="3rem" /></SocialIcons>
          <SocialIcons href='https://instagram.com'><AiFillInstagram size="3rem" /></SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
