export function OgShareCard() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "linear-gradient(135deg, #ffe8f4 0%, #fff5eb 42%, #d4f4ea 100%)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px 56px",
          borderRadius: 28,
          border: "4px solid #2d2640",
          background: "linear-gradient(180deg, #fffdf9 0%, #f0fffa 100%)",
          boxShadow: "10px 10px 0 #2d2640",
          maxWidth: 920,
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "baseline",
            justifyContent: "center",
            gap: 10,
            fontSize: 76,
            fontWeight: 700,
            letterSpacing: -2,
          }}
        >
          <span style={{ color: "#4f8ad8" }}>Picture</span>
          <span style={{ color: "#a855f7" }}>Perfect</span>
          <span style={{ color: "#2eb87a" }}>World</span>
        </div>
        <div
          style={{
            marginTop: 24,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 14,
            fontSize: 44,
            fontWeight: 800,
          }}
        >
          <span style={{ color: "#b91c8c" }}>Launching</span>
          <span style={{ color: "#0f766e" }}>Summer</span>
          <span style={{ color: "#c2410c" }}>2026</span>
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 26,
            fontWeight: 600,
            color: "#5c4d7a",
          }}
        >
          Playful worlds from real rooms
        </div>
      </div>
    </div>
  );
}
