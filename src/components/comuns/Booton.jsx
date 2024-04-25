import { colors } from '../../constants/colors';

export default function Booton({ url = 'https://example.com', text = 'button', styles = {} }) {
  const buttonStyles = {
    width: '100%', height: '100%', backgroundColor: colors.ButtonColor, borderRadius: '0.8rem', borderWidth: 0,
    ...styles 
  };

  return (
    <a href={url}>
      <button style={buttonStyles}>
        {text}
      </button>
    </a>
  );
}
