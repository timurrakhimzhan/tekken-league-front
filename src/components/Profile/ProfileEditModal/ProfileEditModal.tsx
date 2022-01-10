import React, {useMemo} from "react";
import {ProfileEditModalProps} from "./ProfileEditModal.props";
import Modal from "../../../shared/Modal";
import Tabs from "../../../shared/TabsWithContent/Tabs";
import TabsContent from "../../../shared/TabsWithContent/TabsContent";
import {TabsWithContent} from "../../../shared/TabsWithContent/TabsWithContent";
import EditInfoForm from "./EditInfoForm";
import ChangePasswordForm from "./ChangePasswordForm";
import {ModalContentWrapperStyled, TabsContentWrapperStyled} from "./styled";
import Typography from "../../../shared/Typography";


const ProfileEditModal: React.FC<ProfileEditModalProps> = ({open, onClose}) => {
    const tabItems = [
        { label: 'Info', Component: () => <EditInfoForm onSuccess={onClose} />},
        { label: 'Password', Component: () => <ChangePasswordForm onSuccess={onClose}  />}
    ]

    return <Modal className={'paddingLeft0 paddingRight0 paddingTopXLg paddingBottomXLg'} open={open} onClose={onClose}>
        <ModalContentWrapperStyled>
            <Typography className={'marginBottomMd'} color={'primary'} size={'xLg'} weight={'bold'}>
                Edit profile
            </Typography>
            <TabsWithContent items={tabItems}>
                <Tabs />
                <TabsContentWrapperStyled>
                    <TabsContent />
                </TabsContentWrapperStyled>
            </TabsWithContent>
        </ModalContentWrapperStyled>
    </Modal>
}

export default ProfileEditModal;