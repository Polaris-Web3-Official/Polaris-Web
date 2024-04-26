import { useEffect, useState } from "react";
import { colors } from "../../../constants/colors";
import { Link, useLocation } from "react-router-dom";

export default function ItemNavBar({ url, target = '_self', icon, line = 'example' }) {
  const location = useLocation().pathname;
  const [focus, setFocus] = useState(location === url);

  useEffect(() => {
    setFocus(location === url);
  }, [location, url]);

  return (
    <Link to={url} target={target} style={{ textDecoration: 'none' }}>
      <li
        style={{
          padding: '0.675rem 0.8rem 0.675rem 1rem',
          display: 'flex',
          flexDirection: 'row',
          alignItems: "center",
          gap: 10,
          borderRadius: '0.9375rem',
          cursor: 'pointer',
          userSelect: 'none',
          margin: 10,
          backgroundColor: focus ? colors.mainBackgroundColor3 : 'transparent'
        }}
        onClick={() => setFocus(true)}
      >
        <div
          style={{
            minWidth: '2rem',
            minHeight: '2rem',
            borderRadius: '0.75rem',
            display: 'grid',
            placeItems: 'center'
          }}
        >
          {icon}
        </div>

        <div style={{ marginTop: 3 }}>
          <span style={{ fontSize: '1rem', fontWeight: 500, color: colors.paragraphColor }}>{line}</span>
        </div>
      </li>
    </Link>
  );
}
