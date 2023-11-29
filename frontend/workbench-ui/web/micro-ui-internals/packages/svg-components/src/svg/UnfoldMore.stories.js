import React from "react";
import { UnfoldMore } from "./UnfoldMore";

export default {
  tags: ['autodocs'],
  argTypes: {
    className: {
        options: ['custom-class'],
        control: { type: 'check' },
    }
  },
  title: "UnfoldMore",
  component: UnfoldMore,
};

export const Default = () => <UnfoldMore />;
export const Fill = () => <UnfoldMore fill="blue" />;
export const Size = () => <UnfoldMore height="50" width="50" />;
export const CustomStyle = () => <UnfoldMore style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <UnfoldMore className="custom-class" />;
export const Clickable = () => <UnfoldMore onClick={()=>console.log("clicked")} />;

const Template = (args) => <UnfoldMore {...args}/>;

export const Playground = Template.bind({});
Playground.args = {
  className: 'custom-class',
  style:{ border: "3px solid green" }
};
