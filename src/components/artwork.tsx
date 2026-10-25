import { useId } from "react";
export function Artwork({
  kind = "corridor",
  className = "",
}: {
  kind?: "corridor" | "closet" | "table" | "face";
  className?: string;
}) {
  const id = useId().replace(/:/g, "");
  return (
    <svg
      className={`artwork ${className}`}
      viewBox="0 0 1000 680"
      role="img"
      aria-label={
        kind === "corridor"
          ? "Original illustration of a lone silhouette in a dim, receding corridor"
          : kind === "closet"
            ? "Original illustration of light escaping a closed closet"
            : kind === "table"
              ? "Original diagram of an empty table with a concealed danger"
              : "Original study of a face emerging from darkness"
      }
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id={`${id}wall`}>
          <stop stopColor="#222421" />
          <stop offset=".5" stopColor="#77776a" />
          <stop offset="1" stopColor="#171b19" />
        </linearGradient>
        <radialGradient id={`${id}light`} cx="52%" cy="42%" r="60%">
          <stop stopColor="#bdbba3" />
          <stop offset=".23" stopColor="#686b5d" />
          <stop offset=".7" stopColor="#242a25" />
          <stop offset="1" stopColor="#101411" />
        </radialGradient>
        <linearGradient id={`${id}floor`} x2="0" y2="1">
          <stop stopColor="#7b7b65" />
          <stop offset="1" stopColor="#121715" />
        </linearGradient>
        <radialGradient id={`${id}vignette`}>
          <stop offset=".2" stopColor="#030605" stopOpacity="0" />
          <stop offset="1" stopColor="#030605" stopOpacity=".87" />
        </radialGradient>
        <filter id={`${id}grain`}>
          <feTurbulence
            type="fractalNoise"
            baseFrequency=".74"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncA type="linear" slope=".18" />
          </feComponentTransfer>
          <feBlend in="SourceGraphic" mode="soft-light" />
        </filter>
        <filter id={`${id}blur`}>
          <feGaussianBlur stdDeviation="9" />
        </filter>
      </defs>
      <rect width="1000" height="680" fill={`url(#${id}light)`} />
      {kind === "corridor" && (
        <g>
          <path d="M0 0H1000L590 235H430Z" fill="#282e28" />
          <path d="M0 0L430 235V470L0 680Z" fill={`url(#${id}wall)`} />
          <path d="M1000 0L590 235V470L1000 680Z" fill="#363c33" />
          <path d="M0 680L430 470H590L1000 680Z" fill={`url(#${id}floor)`} />
          <rect x="430" y="235" width="160" height="235" fill="#777b65" />
          <rect x="451" y="258" width="119" height="212" fill="#111a15" />
          <rect
            x="460"
            y="265"
            width="102"
            height="202"
            fill="#92907a"
            opacity=".28"
          />
          {[0, 1, 2, 3].map((n) => (
            <g key={n}>
              <path
                d={`M${38 + n * 106} ${30 + n * 52}V${657 - n * 49}`}
                fill="none"
                stroke="#101712"
                strokeWidth={22 - n * 5}
              />
              <path
                d={`M${955 - n * 98} ${27 + n * 53}V${658 - n * 47}`}
                fill="none"
                stroke="#131b15"
                strokeWidth={25 - n * 5}
              />
              <path
                d={`M${38 + n * 106} ${94 + n * 38}L${114 + n * 82} ${128 + n * 31}V${598 - n * 35}L${38 + n * 106} ${637 - n * 47}`}
                fill="#0b110f"
                opacity=".65"
              />
            </g>
          ))}
          <path
            d="M183 0L455 235M831 0L571 235M0 638L446 465M1000 643L579 465M0 564L428 448M1000 560L591 449"
            fill="none"
            stroke="#b0af91"
            strokeOpacity=".14"
            strokeWidth="2"
          />
          {[275, 320, 390, 505, 650].map((y, i) => (
            <path
              key={y}
              d={`M${430 - i * 65} ${y + 200 - i * 40}H${590 + i * 65}`}
              stroke="#adb098"
              strokeOpacity=".14"
            />
          ))}
          <rect x="479" y="218" width="66" height="5" fill="#d7d8b8" />
          <ellipse
            cx="513"
            cy="226"
            rx="57"
            ry="12"
            fill="#dddcc0"
            opacity=".2"
            filter={`url(#${id}blur)`}
          />
          <ellipse
            cx="515"
            cy="485"
            rx="47"
            ry="13"
            fill="#020704"
            opacity=".8"
            filter={`url(#${id}blur)`}
          />
          <g fill="#101710">
            <ellipse cx="514" cy="345" rx="12" ry="16" />
            <path d="M501 363Q513 357 527 365L536 422L528 426L520 391L524 472H515L509 429L507 472H496L500 390L490 421L484 418Z" />
          </g>
          <path d="M513 475L568 679H461L502 475" fill="#040a07" opacity=".36" />
        </g>
      )}
      {kind === "closet" && (
        <g>
          <rect
            x="215"
            y="54"
            width="570"
            height="626"
            fill="#141916"
            stroke="#555a4d"
            strokeWidth="10"
          />
          <path
            d="M230 73H492V680H230ZM507 73H769V680H507Z"
            fill="#242923"
            stroke="#414639"
            strokeWidth="3"
          />
          {[280, 555].map((x) => (
            <g key={x}>
              <rect
                x={x}
                y="125"
                width="165"
                height="220"
                fill="#1a201b"
                stroke="#535746"
                strokeWidth="3"
              />
              <rect
                x={x}
                y="391"
                width="165"
                height="280"
                fill="#191e1a"
                stroke="#535746"
                strokeWidth="3"
              />
            </g>
          ))}
          <path d="M499 76L503 680" stroke="#c8bda2" strokeWidth="3" />
          <ellipse cx="501" cy="421" rx="4" ry="12" fill="#c0b090" />
          <path d="M499 680L300 680L499 560Z" fill="#bebda1" opacity=".22" />
        </g>
      )}
      {kind === "table" && (
        <g stroke="#8c8c73" strokeWidth="3">
          <path d="M220 376L335 310H692L790 376Z" fill="#646750" />
          <path d="M220 376H790V400H220Z" fill="#363e30" />
          <path d="M256 400L240 650M750 400L768 650" strokeWidth="18" />
          <path
            d="M310 280V215H405V280M620 280V215H715V280"
            fill="none"
            strokeWidth="12"
          />
          <ellipse cx="425" cy="340" rx="25" ry="8" fill="#ada98c" />
          <path d="M411 330V316H438V330" fill="#ada98c" />
          <ellipse cx="616" cy="340" rx="25" ry="8" fill="#ada98c" />
          <rect
            x="463"
            y="420"
            width="100"
            height="48"
            rx="5"
            fill="#342e28"
            stroke="#9c6255"
          />
          <circle cx="512" cy="445" r="15" fill="#171e16" />
          <path d="M513 434V446L522 450" stroke="#ac7966" />
        </g>
      )}
      {kind === "face" && (
        <g>
          <ellipse cx="507" cy="337" rx="160" ry="235" fill="#6c6b5c" />
          <path d="M507 104Q711 180 639 464L507 568Z" fill="#252c25" />
          <path
            d="M377 288Q424 254 470 292M542 288Q589 267 628 301"
            stroke="#141c16"
            strokeWidth="15"
            fill="none"
          />
          <ellipse cx="432" cy="295" rx="12" ry="17" fill="#131a13" />
          <ellipse cx="584" cy="303" rx="10" ry="17" fill="#111910" />
          <path
            d="M503 301L485 385L524 382M439 433Q510 452 573 422"
            fill="none"
            stroke="#252c21"
            strokeWidth="9"
          />
          <path
            d="M371 211Q490 153 623 220"
            stroke="#93907a"
            opacity=".5"
            strokeWidth="15"
            fill="none"
          />
        </g>
      )}
      <rect width="1000" height="680" fill={`url(#${id}vignette)`} />
      <rect
        width="1000"
        height="680"
        opacity=".48"
        filter={`url(#${id}grain)`}
      />
    </svg>
  );
}
