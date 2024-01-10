import * as React from 'react';
import Svg, {SvgProps, Defs, ClipPath, Path, G} from 'react-native-svg';
const SearchIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18.814}
    height={18.814}
    data-name="Group 4"
    {...props}>
    <Defs>
      <ClipPath id="a">
        <Path
          fill="#fc1c15"
          d="M0 0h18.814v18.814H0z"
          data-name="Rectangle 5"
        />
      </ClipPath>
    </Defs>
    <G clipPath="url(#a)" data-name="Group 3">
      <Path
        fill="#fc1c15"
        d="m18.636 17.791-4.858-4.78a7.683 7.683 0 0 0 2.054-5.221A7.855 7.855 0 0 0 7.915 0 7.853 7.853 0 0 0 0 7.79a7.853 7.853 0 0 0 7.915 7.79 7.96 7.96 0 0 0 4.985-1.74l4.877 4.8a.616.616 0 0 0 .861 0 .594.594 0 0 0 0-.848m-10.72-3.41a6.645 6.645 0 0 1-6.7-6.591A6.645 6.645 0 0 1 7.915 1.2a6.645 6.645 0 0 1 6.7 6.591 6.645 6.645 0 0 1-6.7 6.591"
        data-name="Path 9"
      />
    </G>
  </Svg>
);
export default SearchIcon;
