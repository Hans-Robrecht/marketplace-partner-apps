import { EntryCard, Text, EntryCardProps } from '@contentful/f36-components';
import CloseButton from './CloseButton';
import { css } from 'emotion';

type Props = Omit<EntryCardProps, 'thumbnailElement'> & {
  thumbnailSrc: string;
} & (
    | {
        onClose?: () => void;
        ariaCloseButton?: string;
      }
    | { onClose?: never; ariaCloseButton?: never }
  );

const CategoryCard = ({ ariaCloseButton = 'Close category', thumbnailSrc, description, onClose, ...props }: Props) => (
  <EntryCard
    thumbnailElement={thumbnailSrc !== '' ? <img alt="" src={thumbnailSrc} /> : undefined}
    style={{ position: 'relative' }}
    className={css({
      '> div > div': {
        padding: '0 !important',
        '> div': {
          flexDirection: 'row-reverse',
          gap: '0.5rem',
          marginTop: 0,
          margin: '1rem',
          '> div': {
            gap: 0,
          },
        },
      },
    })}
    {...props}>
    {onClose && <CloseButton aria={ariaCloseButton} onClick={onClose} style={{ position: 'absolute', right: '10px', height: '24px' }} />}

    <Text fontColor="gray500">{description}</Text>
  </EntryCard>
);

export default CategoryCard;
