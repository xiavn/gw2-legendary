import { ArrowRightIcon, CheckIcon, Icon, LockIcon } from "@chakra-ui/icons";
import { ComponentType } from "react";
import { StageStatus } from "./Stage";

interface StageStatusIconProps {
    stageStatus: StageStatus;
}

const stageIconType = (stageStatus: StageStatus) => {
    switch (stageStatus) {
        case StageStatus.COMPLETED:
            return CheckIcon;
        case StageStatus.IN_PROGRESS:
            return ArrowRightIcon;
        case StageStatus.LOCKED:
            return LockIcon;
    }
};

const StageStatusIcon: ComponentType<StageStatusIconProps> = ({
    stageStatus,
}) => {
    return <Icon as={stageIconType(stageStatus)} mr={1} boxSize={4} />;
};

export default StageStatusIcon;
