import * as React from 'react';
import * as _ from 'lodash-es';
import { ExpandableSection } from '../../../utils/expandable-section';

export const FieldGroup: React.FC<FieldGroupProps> = ({ groupName, defaultExpand, children }) => {
    const [expand, setExpand] = React.useState<boolean>(defaultExpand);

    const onExpandableSectionToggle = (event) => {
        event.preventDefault();
        setExpand(!expand);
    };
    
    return <ExpandableSection id={groupName} key={groupName} isExpanded={expand} listTitle={groupName} onToggle={onExpandableSectionToggle}>
        {children}
    </ExpandableSection>;
};
FieldGroup.displayName = 'FieldGroup';

export type FieldGroupProps = {
    defaultExpand: boolean;
    groupName: string;
};