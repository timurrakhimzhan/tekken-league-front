import React, {useEffect, useRef} from "react";
import {ModalProps} from "./Modal.props";
import { ModalWrapperStyled, ModalContainerStyled, CloseIconWrapperStyled } from "./styled";
import {AiOutlineClose} from "react-icons/ai";

const Modal: React.FC<ModalProps> = ({open, onClose, className, children}) => {
    const ref = useRef<HTMLDivElement>(null);

    const handleClickBackground = (event: React.MouseEvent<HTMLDivElement>) => {
        if(event.target === ref.current) {
            onClose();
        }
    }
    return <ModalWrapperStyled ref={ref} open={Boolean(open)} onMouseDown={handleClickBackground}>
        <ModalContainerStyled className={className}>
            <CloseIconWrapperStyled onClick={onClose}>
                <AiOutlineClose  />
            </CloseIconWrapperStyled>
            {open && children}
        </ModalContainerStyled>
    </ModalWrapperStyled>
}

export default Modal;