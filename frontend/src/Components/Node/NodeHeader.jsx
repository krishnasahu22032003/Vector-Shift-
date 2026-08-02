import "./NodeHeader.css";

const NodeHeader = ({ title, subtitle, icon: Icon }) => {
    return (
        <div className="node-header">

            <div className="node-header-icon">
                {Icon && <Icon size={18}/>}
            </div>

            <div>

                <div className="node-title">
                    {title}
                </div>

                {subtitle && (
                    <div className="node-subtitle">
                        {subtitle}
                    </div>
                )}

            </div>

        </div>
    );
};

export default NodeHeader;