import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import TermsOfUse from './TermsOfUse.jsx';
import '../index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TermsOfUse />
  </StrictMode>
);
