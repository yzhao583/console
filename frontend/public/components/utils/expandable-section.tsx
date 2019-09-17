import * as React from 'react';
import { AccordionItem, AccordionContent, AccordionToggle } from '@patternfly/react-core';

interface ExpandCollapseProps {
  listTitle: string;
  className?: string;
  id?: string;
  isExpanded?: boolean,
  onToggle?: Function
}

export const ExpandableSection: React.FC<ExpandCollapseProps> = ({
  listTitle,
  children,
  className,
  id,
  isExpanded,
  onToggle
}) => {
  return (
    <AccordionItem>
      <AccordionToggle
        onClick={(event) => { onToggle(event, id) }}
        isExpanded={isExpanded}
        id={id}
        className={className}
      >
        {listTitle}
      </AccordionToggle>
      <AccordionContent
        isHidden={!isExpanded}
      >
        {children}
      </AccordionContent>
    </AccordionItem>
  );
};
