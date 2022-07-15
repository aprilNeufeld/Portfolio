import * as React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import FancyChild from '../components/FancyChild';

const BlockSerializers = (props: any) => {
  const { style = 'normal' } = props.node;

  if (style === 'blockquote') {
    return <FancyChild variant={'blockquote'}>{props.children}</FancyChild>;
  }

  return (BlockContent as any).defaultSerializers.types.block(props);
};

interface Props {
  content: any;
}

const BlockRenderer: React.FC<Props> = (props) => {
  const { content } = props;

  return (
    <React.Fragment>
      <BlockContent blocks={content} serializers={{ types: { block: BlockSerializers } }} />
    </React.Fragment>
  );
};

export default BlockRenderer;
