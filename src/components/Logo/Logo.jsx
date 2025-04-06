import styled from "styled-components";
import { theme } from "../../theme";

const SVG_CODE = `<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="325.000000pt" height="177.000000pt" viewBox="0 0 325.000000 177.000000"
 preserveAspectRatio="xMidYMid meet">
<g transform="translate(0.000000,177.000000) scale(0.100000,-0.100000)"
fill="#ca1f28" stroke="none">
<path d="M1094 1742 c-116 -41 -209 -141 -289 -309 -29 -60 -50 -93 -58 -90
-216 95 -352 109 -480 49 -72 -33 -159 -114 -200 -184 -97 -167 -66 -421 78
-638 57 -86 166 -194 261 -260 90 -62 267 -148 389 -188 106 -35 387 -99 471
-108 l59 -6 63 101 c290 468 377 713 351 1002 -11 134 -31 207 -91 328 -67
137 -149 225 -255 278 -66 32 -85 37 -161 40 -65 3 -100 -1 -138 -15z"/>
<path d="M2112 1626 c-204 -97 -335 -434 -278 -716 23 -109 72 -236 148 -380
61 -117 169 -290 191 -309 14 -11 134 10 304 53 271 69 433 156 585 314 93 96
167 246 178 359 9 93 -3 189 -30 243 -28 54 -115 139 -169 164 -71 33 -222 29
-315 -7 -37 -15 -74 -27 -82 -27 -7 0 -34 41 -60 91 -52 101 -125 183 -189
214 -29 14 -66 21 -135 23 -84 2 -101 0 -148 -22z"/>
</g>
</svg>
`;

const LogoWrapper = styled.div`
  text-align: center;
  font-size: 1.5rem;

  p {
    font-family: "Great Vibes", cursive;
    color: ${theme.navbar_text};
    margin-top: -6.2rem;
  }
`;

const LogoIcon = styled.div`
  height: auto;
  display: flex;
  scale: 0.6;
  height: auto;
`;

export function Logo() {
  return (
    <LogoWrapper>
      <LogoIcon dangerouslySetInnerHTML={{ __html: SVG_CODE }} />
      <p>Serduszka Dwa</p>
    </LogoWrapper>
  );
}
