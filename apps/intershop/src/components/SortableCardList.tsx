import { Card } from '@contentful/f36-components';
import { cloneElement, ComponentProps, ComponentPropsWithRef, ReactElement, RefAttributes, RefCallback } from 'react';
import { SortableList, type SortableItemData } from './SortableList';

type SortableCardProps = Pick<ComponentPropsWithRef<typeof Card>, 'isDragging' | 'dragHandleRender' | 'ref'> & {
  withDragHandle: true;
};

type Props<TItem extends SortableItemData> = Omit<ComponentProps<typeof SortableList<TItem>>, 'renderItem'> & {
  renderCard: (item: TItem, sortableCardProps: SortableCardProps) => ReactElement<ComponentProps<typeof Card>>;
};

const SortableCardList = <TItem extends SortableItemData>({ renderCard, ...props }: Props<TItem>) => (
  <SortableList
    renderItem={(item, { itemRef: ref, handleRef, isDragging }) =>
      renderCard(item, {
        withDragHandle: true,
        isDragging,
        ref,
        dragHandleRender: ({ drag }) => cloneElement<RefAttributes<Element>>(drag, { ref: handleRef }),
      })
    }
    {...props}
  />
);

export { SortableCardList };
