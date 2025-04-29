import React from 'react';
import { SectionContainer, SectionTitle } from './Section.styled';

export default function Section({ title, children }) {
  return (
    <SectionContainer className="section">
      {title && <SectionTitle>{title}</SectionTitle>}
      {children}
    </SectionContainer>
  );
}
