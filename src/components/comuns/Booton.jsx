import { colors } from '../../constants/colors';

export default function Booton({ url = 'https://example.com', text = 'button', styles = {}, click }) {
  const buttonStyles = {
    width: '100%', height: '100%', backgroundColor: colors.ButtonColor, borderRadius: '0.8rem', borderWidth: 0,
    ...styles 
  };

  return (
    <a href={url} onClick={click} target='_blank'>
      <button style={{outline: 'none', ...buttonStyles}}>
        {text}
      </button>
    </a>
  );
}
