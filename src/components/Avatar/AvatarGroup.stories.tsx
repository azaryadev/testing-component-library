import React from "react";
import { Avatar } from "./index";
import AvatarGroup from "./AvatarGroup";
import { HiUser } from "react-icons/hi";
import type { Meta, StoryObj } from "@storybook/react";
import {
  Title,
  Description,
  Stories,
  Canvas,
  Controls,
} from "@storybook/blocks";

const meta: Meta<typeof AvatarGroup> = {
  title: "Components/AvatarGroup",
  component: AvatarGroup,
  argTypes: {
    maxCount: { control: { type: "number" }, defaultValue: 3 },
    chained: { control: "boolean" },
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description>
            The Avatar Group component arranges multiple Avatars in a horizontal
            stack, making it easy to show a group of users or items.
          </Description>
          <Canvas />
          <Controls />
          {/* <ArgTypes />
          <ArgsTable /> */}
          <Stories />
        </>
      ),
    },
  },
};

export default meta;
type Story = StoryObj<typeof AvatarGroup>;

export const DefaultGroup: Story = {
  render: (args) => (
    <AvatarGroup {...args}>
      <Avatar src="/img/avatars/thumb-1.jpg" />
      <Avatar icon={<HiUser />} />
      <Avatar>AB</Avatar>
      <Avatar src="/img/avatars/thumb-1.jpg" />
    </AvatarGroup>
  ),
};

export const LimitedAvatars: Story = {
  args: {
    maxCount: 2,
    omittedAvatarContent: "+2",
  },
  render: (args) => (
    <AvatarGroup {...args}>
      <Avatar src="https://via.placeholder.com/100" />
      <Avatar icon={<HiUser />} />
      <Avatar>AB</Avatar>
      <Avatar src="https://via.placeholder.com/100" />
    </AvatarGroup>
  ),
};

export const WithTooltipOnOverflow: Story = {
  args: {
    maxCount: 2,
    omittedAvatarTooltip: true,
  },
  render: (args) => (
    <AvatarGroup {...args}>
      <Avatar src="https://via.placeholder.com/100" />
      <Avatar icon={<HiUser />} />
      <Avatar>AB</Avatar>
      <Avatar src="https://via.placeholder.com/100" />
    </AvatarGroup>
  ),
};
