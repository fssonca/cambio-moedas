import React from "react";

type Props = {
    switchOrigin: () => void;
};

const SwitchCurrencyButton = React.memo(({ switchOrigin }: Props) => {
  return (
    <div
      className="h-20 flex items-center justify-center cursor-pointer col-span-2"
      onClick={() => switchOrigin()}
    >
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="25pt"
        height="18.875pt"
        className="fill-current text-primaryTXT"
        viewBox="0 0 400.000000 302.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g transform="translate(0.000000,302.000000) scale(0.100000,-0.100000)" stroke="none">
          <path
            d="M2740 2780 l0 -240 -1370 0 -1370 0 0 -275 0 -275 1370 0 1370 0 2
              -243 3 -244 627 376 c345 207 627 381 627 386 0 9 -1236 755 -1252 755 -4 0
              -7 -108 -7 -240z"
          />
          <path
            d="M628 1140 c-345 -206 -626 -379 -624 -385 2 -10 1234 -755 1248 -755
            4 0 8 108 8 240 l0 240 1370 0 1370 0 0 275 0 275 -1370 0 -1370 0 -2 243 -3
            243 -627 -376z"
          />
        </g>
      </svg>
    </div>
  );
});

export default SwitchCurrencyButton;
