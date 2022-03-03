import * as S from './styles'

const Background = () => (
  <S.Wrapper>
    <svg
      width="100%"
      height="100%"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="1355" cy="972" r="50" fill="#FF4A6E" />
      <circle cx="86" cy="635" r="50" fill="#FF8151" />
      <circle cx="1431" cy="950" r="50" fill="#B100BC" />
      <circle
        cx="20.5"
        cy="915.5"
        r="163.5"
        fill="url(#a)"
        // style="mix-blend-mode:color-dodge"
      />
      <path
        d="M1692.5 190c0 103.824-104.23 188.5-233.5 188.5-129.27 0-233.5-84.676-233.5-188.5S1329.73 1.5 1459 1.5c129.27 0 233.5 84.676 233.5 188.5Z"
        stroke="#B100BC"
        strokeWidth="3"
      />
      <path
        d="M1727.5 210.5c0 43.09-27 82.303-71.07 110.817-44.06 28.504-105.02 46.183-172.43 46.183-67.41 0-128.37-17.679-172.43-46.183-44.07-28.514-71.07-67.727-71.07-110.817 0-43.09 27-82.303 71.07-110.817C1355.63 71.179 1416.59 53.5 1484 53.5c67.41 0 128.37 17.68 172.43 46.183 44.07 28.514 71.07 67.727 71.07 110.817Z"
        stroke="#FF4A6E"
        strokeWidth="3"
      />
      <path
        d="M1677.5 214c0 35.23-21.75 67.319-57.32 90.67-35.55 23.343-84.75 37.83-139.18 37.83-54.43 0-103.63-14.487-139.18-37.83-35.57-23.351-57.32-55.44-57.32-90.67 0-35.23 21.75-67.319 57.32-90.67 35.55-23.343 84.75-37.83 139.18-37.83 54.43 0 103.63 14.487 139.18 37.83 35.57 23.351 57.32 55.44 57.32 90.67Z"
        stroke="#FF8151"
        strokeWidth="3"
      />
      <defs>
        <linearGradient
          id="a"
          x1="20"
          y1="773.5"
          x2="20.5"
          y2="1079"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B100BC" />
          <stop offset=".909" stopColor="#FF4A6E" />
          <stop offset="1" stopColor="#FF4A6E" />
        </linearGradient>
      </defs>
    </svg>
  </S.Wrapper>
)

export default Background
