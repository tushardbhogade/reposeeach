import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const SortIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    viewBox="0 0 24 24"
    {...props}>
    <Path d="M21.3 5h-10c-.6 0-1-.4-1-1s.4-1 1-1h10c.6 0 1 .4 1 1s-.5 1-1 1zM6.8 21.5c-.3 0-.5-.1-.7-.3l-4-4c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l4 4c.4.4.4 1 0 1.4-.2.2-.5.3-.7.3z" />
    <Path d="M6.8 21.5c-.6 0-1-.4-1-1v-17c0-.6.4-1 1-1s1 .4 1 1v17c0 .6-.5 1-1 1zM19.3 10h-8c-.6 0-1-.4-1-1s.4-1 1-1h8c.6 0 1 .4 1 1s-.5 1-1 1zM17.3 15h-6c-.6 0-1-.4-1-1s.4-1 1-1h6c.6 0 1 .4 1 1s-.5 1-1 1zM15.3 20h-4c-.6 0-1-.4-1-1s.4-1 1-1h4c.6 0 1 .4 1 1s-.5 1-1 1z" />
  </Svg>
);
export default SortIcon;
