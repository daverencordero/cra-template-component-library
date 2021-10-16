import React from 'react';

import {Checklist} from "./Checklist";

export default {
    title: 'Checklist',
    component: Checklist
}

export const Template = (args) => <Checklist {...args}/>
Template.args = {
    maxCount: 5,
    ownerName: 'Monica',
    defaultLabel: 'Edit Text',
    initialList: [{label: 'Hello', checked: false}]
}