const NodeHeader = ({ title, icon, subtitle }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        borderBottom: "1px solid #e5e7eb",
        paddingBottom: "8px",
        marginBottom: "12px",
      }}
    >
      {icon && <span>{icon}</span>}

      <div>
        <div
          style={{
            fontWeight: 600,
            fontSize: "14px",
          }}
        >
          {title}
        </div>

        {subtitle && (
          <div
            style={{
              fontSize: "12px",
              color: "#6b7280",
            }}
          >
            {subtitle}
          </div>
        )}
      </div>
    </div>
  );
};

export default NodeHeader;