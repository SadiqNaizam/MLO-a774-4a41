import React from 'react';
import MainAppLayout from '@/components/layout/MainAppLayout';
import LoginFormCard from '@/components/Login/LoginFormCard';

/**
 * IndexPage serves as the main entry point for the login functionality.
 * It utilizes the MainAppLayout for overall page structure and centering,
 * and embeds the LoginFormCard which contains all the UI and logic for user authentication.
 */
const IndexPage: React.FC = () => {
  return (
    <MainAppLayout>
      {/* 
        The LoginFormCard is the central piece of this authentication page.
        It's designed to be self-contained with its form elements, validation, and submission logic.
        The MainAppLayout ensures it's displayed correctly within the application's visual theme and layout rules (e.g., centered).
      */}
      <LoginFormCard />
    </MainAppLayout>
  );
};

export default IndexPage;
