import Image from './Image';
import Tag from './Tag';
import Text from './Text';
import List from './List';

export const DetailComponents: {
  [key: string]: React.FunctionComponent | React.ClassicComponent;
} = {
  'image': Image,
  'tag': Tag,
  'text': Text,
  'list': List,
}

export const setDetailComponent = (
  type: string, 
  DetailComponent: React.FunctionComponent | React.ClassicComponent
) => {
  DetailComponents[type] = DetailComponent;
}