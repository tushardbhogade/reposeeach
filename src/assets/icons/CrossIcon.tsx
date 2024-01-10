import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const CrossIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    style={{
      enableBackground: 'new 0 0 84.2 84.2',
      width: props.width ?? 25,
      height: props.height ?? 25,
    }}
    viewBox="0 0 84.2 84.2"
    {...props}>
    <Path
      d="M66.9 17.4C53.2 3.7 31 3.7 17.4 17.4 3.7 31 3.7 53.2 17.4 66.9c6.8 6.8 15.8 10.2 24.8 10.2S60 73.7 66.9 66.9c13.6-13.7 13.6-35.9 0-49.5zm-10.3 35c1.1 1.1 1.1 3 0 4.1-.6.6-1.3.9-2.1.9-.7 0-1.5-.3-2.1-.9L42.1 46.2 31.8 56.6c-.6.6-1.3.9-2.1.9-.7 0-1.5-.3-2.1-.9-1.1-1.1-1.1-3 0-4.1L38 42.1 27.7 31.8c-1.1-1.1-1.1-3 0-4.1 1.1-1.1 3-1.1 4.1 0L42.1 38l10.3-10.3c1.1-1.1 3-1.1 4.1 0 1.1 1.1 1.1 3 0 4.1L46.2 42.1l10.4 10.3z"
      style={{
        fill: props.color ?? '#fc1c15',
      }}
    />
  </Svg>
);
export default CrossIcon;
