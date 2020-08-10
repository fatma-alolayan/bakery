import React, { useState } from "react";
//component
import SigninModal from "../../components/modals/SigninModal";
//style
import { AuthButtonStyled } from "../../styles";

const SigninButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <>
      <AuthButtonStyled onClick={openModal}>Sign in</AuthButtonStyled>
      <SigninModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default SigninButton;
