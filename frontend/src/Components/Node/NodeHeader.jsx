const NodeHeader = ({ title, icon:Icon, subtitle }) => {
    console.log("NodeHeader Rendered");
    console.log(title, Icon);
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
       {Icon && <Icon size={18} />}
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