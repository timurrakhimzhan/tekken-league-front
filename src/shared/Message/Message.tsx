import React from "react";
import {CloseWrapperStyled, MessagesWrapperStyled, TypographyWrapperStyled, UlStyled} from "./styled";
import {MessageProps} from "./Message.props";
import Typography from "../Typography";
import {AiOutlineClose} from "react-icons/ai";

const Message: React.FC<MessageProps> = ({className, messages, onClose, variant}) => {
    return <MessagesWrapperStyled className={className} variant={variant}>
        {
            typeof messages === 'string' ?
                <TypographyWrapperStyled>
                    <Typography>
                        {messages}
                    </Typography>
                </TypographyWrapperStyled>
                :
                <UlStyled>
                    {
                        messages.map((message, i) => (
                            <li key={i}>{message}</li>
                        ))
                    }
                </UlStyled>
        }
        <CloseWrapperStyled onClick={onClose}>
            <AiOutlineClose  />
        </CloseWrapperStyled>
    </MessagesWrapperStyled>
}

export default Message;