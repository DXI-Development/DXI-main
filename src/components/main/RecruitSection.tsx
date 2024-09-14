import { Link } from "react-router-dom";

import Button from "@components/common/Button";

import { Wrapper, Text } from "@styles/main/recruit.style";

import type { FC } from "react";

const RecruitSection: FC = () => {
  return (
    <Wrapper>
      <Text>저희와 함께 하실 준비 되셨나요? :)</Text>
      <Link to="/recruit">
        <Button>Team DXI 모집요강</Button>
      </Link>
    </Wrapper>
  );
};

export default RecruitSection;
