import {AuthContainerStyled, TabsContentWrapperStyled} from "./styled"
import {TabsWithContent} from "../../shared/TabsWithContent/TabsWithContent";
import Tabs from "../../shared/TabsWithContent/Tabs";
import TabsContent from "../../shared/TabsWithContent/TabsContent";
import React, {useCallback, useState} from "react";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";
import Typography from "../../shared/Typography";
import {AuthFormsProps} from "./AuthForms.props";

const AuthForms: React.FC<AuthFormsProps> = (props) => {
    const [currentTabIndex, setCurrentTabIndex] = useState<number>(0);
    const items = [
        { label: 'Login', Component: () => <LoginForm  />},
        { label: 'Register', Component: () => <RegistrationForm onSuccess={() => setCurrentTabIndex(0)} />}
    ]
    return (
      <AuthContainerStyled direction={'column'} {...props}>
        <Typography className={'marginBottomLg marginLeftAuto marginRightAuto'} color={'primary'} size={'xLg'} weight={'bold'}>
            Join Tekken League
        </Typography>
        <TabsWithContent tabIndex={currentTabIndex} setTabIndex={(i) => setCurrentTabIndex(i)} items={items}>
            <Tabs />
            <TabsContentWrapperStyled>
                <TabsContent />
            </TabsContentWrapperStyled>
        </TabsWithContent>
      </AuthContainerStyled>
    )
}

export default AuthForms;