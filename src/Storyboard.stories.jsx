import React from 'react';
import { Storyboard } from './Storyboard';
import TextBlockManager from '../../stories/TextBlockManager';

export default {
  title: 'Storyboard',
  component: Storyboard,
};

const Template = (args) => <Storyboard {...args} />;

export const Default = Template.bind({});
Default.args = {
// sample props here
    title: "My Storyboard", 
    description: "Sample storyboard", 
};

export const WithTextBlocks = {} = <TextBlockManager />;