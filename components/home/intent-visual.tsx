/**
 * Lightweight SVG-only visual: scattered signal points converging into a
 * single directional path toward a north marker. No animation library —
 * a couple of CSS keyframe fades that respect prefers-reduced-motion via
 * the global rule in app/globals.css.
 */
export function IntentVisual() {
  const scattered = [
    { x: 40, y: 60 },
    { x: 70, y: 140 },
    { x: 30, y: 220 },
    { x: 90, y: 280 },
    { x: 50, y: 340 },
  ];

  return (
    <div className="relative mx-auto w-full max-w-md">
      <svg
        viewBox="0 0 420 400"
        role="img"
        aria-label="Scattered signals converging into a single clear direction"
        className="h-auto w-full"
      >
        <title>Scattered signals converging into a single clear direction</title>

        {scattered.map((point, index) => (
          <line
            key={`line-${point.x}-${point.y}`}
            x1={point.x}
            y1={point.y}
            x2={340}
            y2={200}
            stroke="#635BFF"
            strokeOpacity="0.25"
            strokeWidth="1.5"
            className="animate-fade-up"
            style={{ animationDelay: `${index * 80}ms` }}
          />
        ))}

        {scattered.map((point, index) => (
          <circle
            key={`dot-${point.x}-${point.y}`}
            cx={point.x}
            cy={point.y}
            r="6"
            fill="#A5A0FF"
            className="animate-fade-up"
            style={{ animationDelay: `${index * 80}ms` }}
          />
        ))}

        <path
          d="M 40 60 C 150 120, 250 160, 340 200"
          fill="none"
          stroke="#B9F227"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="6 6"
        />

        <circle cx="340" cy="200" r="12" fill="#B9F227" />
        <circle cx="340" cy="200" r="22" fill="none" stroke="#B9F227" strokeOpacity="0.4" strokeWidth="1.5" />

        <path d="M 340 176 L 350 200 L 340 194 L 330 200 Z" fill="#0B1220" transform="translate(0 0)" />
      </svg>
    </div>
  );
}
