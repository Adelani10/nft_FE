"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5241],{55241:function(o,r,c){c.r(r),c.d(r,{default:function(){return ButtonColored}});var e=c(64580);c(2265),c(33700);let l=e.C`
    :after {
        background-color: ${(0,e.g)("light",90)};
    }

    :hover {
        :after {
            background-color: ${(0,e.g)("light",70)};
        }
    }

    :active {
        :after {
            background-color: ${(0,e.g)("light",50)};
        }
    }
`,t=e.C`
    background-color: ${e.c.red40};
    border-color: ${e.c.red40};
    color: ${e.c.red40};

    :focus {
        box-shadow: 0px 0px 0px 2px ${e.c.navy30};
    }

    svg {
        fill: ${e.c.red40};
    }

    ${l}
`,n=e.C`
    background-color: ${e.c.mint40};
    border-color: ${e.c.mint40};
    color: ${e.c.mint40};

    :focus {
        box-shadow: 0px 0px 0px 2px ${e.c.navy30};
    }

    svg {
        fill: ${e.c.mint40};
    }

    ${l}
`,a=e.C`
    background-color: ${e.c.navy40};
    border-color: ${e.c.navy40};
    color: ${e.c.navy40};

    :focus {
        box-shadow: 0px 0px 0px 2px ${e.c.navy30};
    }

    svg {
        fill: ${e.c.navy40};
    }

    ${l}
`,d=e.C`
    background-color: ${e.c.yellow50};
    border-color: ${e.c.yellow50};
    color: ${e.c.yellow50};

    :focus {
        box-shadow: 0px 0px 0px 2px ${e.c.navy30};
    }

    svg {
        fill: ${e.c.yellow50};
    }

    ${l}
`,getColored=o=>{switch(o){case"red":return t;case"green":return n;case"blue":return a;case"yellow":return d;default:return}},u=(0,e.s)(e.B)`
    :after {
        background-color: ${(0,e.g)("dark",0)};
        content: '';
        display: block;
        height: 100%;
        left: 0;
        pointer-events: none;
        position: absolute;
        top: 0;
        transition: all 0.3s ease;
        width: 100%;
        z-index: 0;
        border-radius: 10px;
    }

    ${({color:o})=>o&&getColored(o)}
`,{ButtonColoredStyled:s}={ButtonColoredStyled:u},ButtonColored=({color:o,...r})=>(0,e.a)(s,{color:o,...r})}}]);